"use client"
import Image from "next/image"
import axios from "axios"
import { useSession } from "next-auth/react"
import Paybutton from "@/components/ui/paybutton"
import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import Script from "next/script"
import rain from "@/public/tokyo.gif"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

interface RazorpayOptions {
  key_id: string
  amount: number
  currency: string
  name: string
  order_id: string
  callback_url: string
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

export default function Dashboard() {
  const Router = useRouter()
  const searchParams = useSearchParams()
  const success = searchParams?.get("success")

  const [error, setError] = useState("")
  const [username, setName] = useState("")
  const [useremail, setEmail] = useState("")
  const [amount, setAmount] = useState("")

  const { data: session } = useSession()
  const name = session?.user?.name
  const email = session?.user?.email
  const slic = email?.slice(0, email.indexOf("@"))
  const Photo = session?.user?.image

  useEffect(() => {
    if (success === "true") {
      toast.success("Payment Successful")
      Router.replace("/dashboard")
    } else if (success === "false") {
      toast.error("Payment Failed")
      Router.replace("/dashboard")
    }
  }, [success, Router])

  const validateInputs = () => {
    if (!username || !useremail || !amount) {
      setError("Input is Empty")
      setTimeout(() => setError(""), 1500)
      return false
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(useremail)) {
      setError("Invalid Email Format")
      setTimeout(() => setError(""), 1500)
      return false
    }

    const numAmount = parseFloat(amount)
    if (isNaN(numAmount) || numAmount <= 0) {
      setError("Invalid Amount")
      setTimeout(() => setError(""), 1500)
      return false
    }

    return true
  }

  async function submit() {
    if (!validateInputs()) return

    if (!session) {
      Router.push("/")
      return
    }

    try {
      const response = await axios.post("/api/razorpay", {
        username,
        useremail,
        amount,
      })
      console.log(response)
      const { order } = response.data

      const options: RazorpayOptions = {
        key_id: process.env.NEXT_PUBLIC_RAZORPAY_ID!,
        amount: order.amount,
        currency: order.currency,
        name: order.notes.customerName,
        order_id: order.id,
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
        const razorpay = new (window as any).Razorpay(options)
        razorpay.on("payment.success", function (response: any) {
          alert(
            "Payment Successful! Payment ID: " + response.razorpay_payment_id
          )
        })
        razorpay.open()
      } else {
        console.error("Razorpay SDK is not loaded")
        setError("Payment system not available")
      }
    } catch (error) {
      console.error("Payment initiation failed", error)
      setError("Failed to process payment")
      setTimeout(() => setError(""), 1500)
    }
  }

  return (
    <>
      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        strategy="beforeInteractive"
      />
      <ToastContainer theme="dark" />
      <div className="relative h-screen w-full bg-slate-950">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]">
          <div>
            <div>
              <div className="relative w-full h-[30vh]">
                <Image
                  className="object-cover w-full h-[30vh] object-center"
                  src={rain}
                  alt="city"
                />
              </div>
              <div className=" flex justify-center items-center w-full h-0 absolute ">
                {Photo && (
                  <Image
                    className="object-cover rounded-full"
                    width={200}
                    height={200}
                    src={Photo}
                    alt="${name}"
                  />
                )}
              </div>
              <div className="flex flex-col justify-end font-semibold text-xl items-center bg-red mt-32 text-white ">
                {name ? <div> {`@${name}`}</div> : <div> {`@${slic}`}</div>}

                {name ? (
                  <div className="text-gray-400 text-lg my-4">
                    {`Hello ${name}, a little support from you could help fuel my next big idea! How about a virtual cheers? 🍻`}
                  </div>
                ) : (
                  <div className="text-gray-400 text-lg my-4">
                    {`Hello ${slic}, a little support from you could help fuel my next big idea! How about a virtual cheers? 🍻`}
                  </div>
                )}
              </div>
              <div className="text-white flex flex-row justify-around container mx-auto space-x-4">
                <div className="bg-gray-900 rounded-md p-10 min-h-96 w-[50rem]">
                  <div>Top Payers</div>
                </div>
                <div className="bg-gray-900 rounded-md p-10 min-h-96 w-[50rem]">
                  <div className="flex flex-row justify-between">
                    <p className="text-xl font-semibold">Make A Payment</p>
                    <p className="text-red-500 font-semibold text-lg">
                      {error}
                    </p>
                  </div>
                  <div className="flex flex-col my-4 space-y-3">
                    <input
                      onChange={(e) => {
                        setName(e.target.value)
                      }}
                      className=" h-10 outline-none px-4 rounded-md bg-gray-800 "
                      placeholder="Enter Name ( Ramesh )"
                      type="text"
                    />
                    <input
                      onChange={(e) => {
                        setEmail(e.target.value)
                      }}
                      className=" h-10 outline-none px-4 rounded-md bg-gray-800 "
                      placeholder="Email ( Samboxer@gmail.com )"
                      type="email"
                    />
                    <input
                      onChange={(e) => {
                        setAmount(e.target.value)
                      }}
                      className=" h-10 outline-none px-4 rounded-md bg-gray-800 "
                      placeholder="Enter Amount ( ₹ 20 ) "
                      type="number"
                    />

                    <button
                      onClick={submit}
                      className="relative inline-flex h-12 active:scale-95 transistion overflow-hidden rounded-lg p-[1px] focus:outline-none"
                    >
                      <Paybutton value="PAY" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
