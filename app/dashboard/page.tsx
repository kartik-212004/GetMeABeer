"use client"
import { useState, useEffect, Suspense } from "react"
import Image from "next/image"
import axios from "axios"
import Loader from "@/components/ui/loading"
import { useSession } from "next-auth/react"
import { useRouter, useSearchParams } from "next/navigation"
import Script from "next/script"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Paybutton from "@/components/ui/paybutton"
import rain from "@/public/tokyo.gif"

declare global {
  interface Window {
    Razorpay?: new (options: RazorpayOptions) => RazorpayInstance
  }
}

interface RazorpayInstance {
  open: () => void
}

interface Transaction {
  customerName: string
  amount: number
  message?: string
}

interface PaymentFormData {
  username: string
  useremail: string
  amount: string
  message: string
}

interface RazorpayResponse {
  razorpay_payment_id: string
  razorpay_order_id: string
}

interface RazorpayOptions {
  key_id: string
  amount: number
  currency: string
  name: string
  order_id: string
  callback_url: string
  handler: (response: RazorpayResponse) => void
  prefill: {
    name: string
    email: string
  }
  notes: {
    address: string
  }
  theme: {
    color: string
  }
}

const INITIAL_FORM_STATE: PaymentFormData = {
  username: "",
  useremail: "",
  amount: "",
  message: "",
}

function PaymentStatus() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const success = searchParams?.get("success")
  useEffect(() => {
    if (success === "true") {
      toast.success("Payment Successful")
      router.replace("/dashboard")
    } else if (success === "false") {
      toast.error("Payment Failed")
      router.replace("/dashboard")
    }
  }, [success, router])
  return null
}
export default function Dashboard() {
  const router = useRouter()
  const { data: session, status } = useSession()
  const [formData, setFormData] = useState<PaymentFormData>(INITIAL_FORM_STATE)
  const [error, setError] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [transactions, setTransactions] = useState<Transaction[]>([])

  const userEmail = session?.user?.email || ""
  const userName = session?.user?.name || userEmail.split("@")[0]
  const userPhoto = session?.user?.image

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.get("/api/database")
        setTransactions(response.data)
      } catch (error) {
        console.error("Error fetching transactions:", error)
        toast.error("Failed to fetch transaction data")
      }
    }

    fetchTransactions()
  }, [])

  const validateForm = (): boolean => {
    const { username, useremail, amount } = formData

    if (!username || !useremail || !amount) {
      setError("All fields are required")
      return false
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(useremail)) {
      setError("Invalid email format")
      return false
    }

    const numAmount = parseFloat(amount)
    if (isNaN(numAmount) || numAmount <= 0) {
      setError("Amount must be greater than 0")
      return false
    }

    return true
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setError("")
  }

  const handleSubmit = async () => {
    if (!session) {
      router.push("/")
      return
    }

    if (!validateForm()) {
      setTimeout(() => setError(""), 3000)
      return
    }

    setIsSubmitting(true)
    try {
      const response = await axios.post("/api/razorpay", formData)
      const { order } = response.data

      const options: RazorpayOptions = {
        key_id: process.env.NEXT_PUBLIC_RAZORPAY_ID!,
        amount: order.amount,
        currency: order.currency,
        name: order.notes.customerName,
        order_id: order.id,
        handler: async (response: RazorpayResponse) => {
          const newTransaction: Transaction = {
            customerName: formData.username,
            amount: parseFloat(formData.amount),
            message: formData.message,
          }

          setTransactions((prevTransactions) => [
            ...prevTransactions,
            newTransaction,
          ])
          await axios.post("/api/database", {
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_order_id: response.razorpay_order_id,
            order,
            message: formData.message,
          })
        },
        callback_url: "/dashboard/?success=true",
        prefill: {
          name: order.notes.customerName,
          email: order.notes.costumerEmail,
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#3399cc",
        },
      }

      if (typeof window !== "undefined" && window.Razorpay) {
        const razorpay = new window.Razorpay(options)
        razorpay.open()
      } else {
        throw new Error("Razorpay SDK not loaded")
      }
    } catch (error) {
      console.error("Payment initiation failed:", error)
      toast.error("Failed to process payment")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!transactions) return null
  if (status === "loading") {
    return <Loader />
  }

  if (status === "unauthenticated") {
    router.push("/")
    return null
  }
  return (
    <div className="relative h-[calc(100vh-3.5rem)] w-full bg-slate-950">
      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        strategy="beforeInteractive"
      />
      <ToastContainer theme="dark" position="top-right" />
      <Suspense fallback={null}>
        <PaymentStatus />
      </Suspense>
      <div className="inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]">
        <header className="relative">
          <div className="h-[30vh] w-full">
            <Image
              className="object-cover object-center w-full h-full"
              src={rain}
              alt="city background"
              priority
            />
          </div>
          {userPhoto && (
            <div className="absolute left-1/2 -bottom-24 -translate-x-1/2">
              <Image
                className="rounded-full"
                width={200}
                height={200}
                src={userPhoto}
                alt={userName}
                priority
              />
            </div>
          )}
        </header>
        <main className="container mx-auto px-4 mt-32">
          <div className="text-center text-white mb-12">
            <h1 className="text-xl font-semibold mb-4">@{userName}</h1>
            <p className="text-gray-400">
              Hello {userName}, a little support from you could help fuel my
              next big idea! How about a virtual cheers? 🍻
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <section className="bg-gray-900 rounded-lg p-4">
              <h2 className="text-2xl text-blue-400 text-center mb-6">
                Supporters
              </h2>
              <ol className="space-y-4">
                {transactions &&
                  transactions.map((transaction, index) => (
                    <li
                      key={index}
                      className="text-gray-200 flex items-center gap-2"
                    >
                      <span>{transaction.customerName} paid you</span>
                      <span className="text-white font-bold">
                        ₹{transaction.amount}
                      </span>
                      {transaction.message && (
                        <>
                          {" "}
                          <div>with a message - </div>
                          <span className="text-teal-400 font-semibold">
                            {transaction.message}
                          </span>
                        </>
                      )}
                    </li>
                  ))}
              </ol>
            </section>
            <section className="bg-gray-900 rounded-lg p-4">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl text-white font-semibold">
                  Make A Payment
                </h2>
                {error && <p className="text-red-500 font-medium">{error}</p>}
              </div>

              <form className="space-y-4">
                <input
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  className="w-full h-12 px-4 rounded-md bg-gray-800 text-white outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Name"
                  type="text"
                />
                <input
                  name="useremail"
                  value={formData.useremail}
                  onChange={handleInputChange}
                  className="w-full h-12 px-4 rounded-md bg-gray-800 text-white outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Email"
                  type="email"
                />
                <input
                  name="amount"
                  value={formData.amount}
                  onChange={handleInputChange}
                  className="w-full h-12 px-4 rounded-md bg-gray-800 text-white outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Amount (₹)"
                  type="number"
                  min="1"
                />
                <input
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full h-12 px-4 rounded-md bg-gray-800 text-white outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Message (optional)"
                  type="text"
                />
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  type="button"
                  className="w-full relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed active:scale-95 transition-transform"
                >
                  <Paybutton value={isSubmitting ? "Processing..." : "PAY"} />
                </button>
              </form>
            </section>
          </div>
        </main>
      </div>
    </div>
  )
}
