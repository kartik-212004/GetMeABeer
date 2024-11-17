"use client"
import Image from "next/image"
import rain from "@/public/tokyo.gif"
import { useSession } from "next-auth/react"
import Paybutton from "@/components/ui/paybutton"
import { useState } from "react"
export default function Dashboard() {
  const [username, setName] = useState("")
  const [useremail, setEmail] = useState("")
  const [amount, setAmount] = useState("")
  const session = useSession()
  const name = session.data?.user?.name
  const email = session.data?.user?.email
  const slic = email?.slice(0, email.indexOf("@"))
  const Photo = session?.data?.user?.image
  return (
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
                <p className="text-xl font-semibold">Make A Payment</p>
                <div className="flex flex-col my-4 space-y-3">
                  <input
                    onChange={(e) => {
                      setName(e.target.value)
                    }}
                    className=" h-10 outline-none px-4 rounded-md bg-gray-800 "
                    placeholder=" Enter Name"
                    type="text"
                  />
                  <input
                    onChange={(e) => {
                      setEmail(e.target.value)
                    }}
                    className=" h-10 outline-none px-4 rounded-md bg-gray-800 "
                    placeholder=" Enter Email"
                    type="text"
                  />
                  <input
                    onChange={(e) => {
                      setAmount(e.target.value)
                    }}
                    className=" h-10 outline-none px-4 rounded-md bg-gray-800 "
                    placeholder=" Enter Amount"
                    type="text"
                  />
                  <Paybutton value="PAY" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
