"use client"
import beer1 from "@/public/beer1.svg"
import good from "@/public/good.webp"
import Image from "next/image"
import coin from "@/public/coin.webp"
import Button from "./ui/button2"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { Loader } from "./ui/loading"
import coding from "@/public/coding.webp"
export default function Homepage() {
  const session = useSession()
  const router = useRouter()
  return (
    <div className="relative size-full h-[calc(100vh-3.5rem)] bg-slate-950">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      <div className="py-12 ">
        <div className="flex flex-col text-gray-200 items-center justify-center">
          <div className="justify-center  flex items-center">
            <h1 className="text-6xl font-bold font-mono">Get Me A Beer</h1>
            <Image
              className=" mx-2"
              src={beer1}
              alt="beer"
              width={50}
              height={50}
            />
          </div>
          <div className="flex flex-col font-medium text-[#e5e7eb] text-xl text-center w-[55rem] space-y-6 pt-8">
            <h1 className="text-lg">
              Get your projects funded by your fans—one beer at a time. On Get
              Me a Beer, your supporters can buy you a beer to help fund your
              creative journey. Unleash the power of your community and bring
              your ideas to life.
            </h1>
            <h1 className="text-lg"></h1>
          </div>
          <div className="space-x-3 flex py-7">
            <div
              onClick={() => {
                if (session.status === "loading") {
                  return <Loader />
                }
                if (session.status === "authenticated") {
                  return router.push("/dashboard")
                }
                return router.push("/signin")
              }}
            >
              <Button value={"Get Started"} />
            </div>
            <div
              onClick={() => {
                router.push("/docs")
              }}
            >
              <Button value={"Read More"} />
            </div>
          </div>
        </div>
      </div>
      <div className="pt-5">
        <div className="text-white flex flex-col justify-center items-center">
          <h1 className="text-xl font-semibold text-gray-300 ">
            It’s never too late for a Beer
          </h1>
          <div className="container text-base pt-10 gap-x-40 mx-auto flex justify-center text-center">
            <div className="flex gap-y-2 justify-center flex-col items-center">
              <Image src={coin} alt="coin" width={180} height={180} />
              <h1 className="font-bold text-lg">Fans Want to Cheers</h1>
              <h1 className="font-semibold ">
                &quot; Your fans are here to raise a glass and show their
                support.&quot;
              </h1>
            </div>
            <div className="flex gap-y-2  justify-center flex-col items-center">
              <Image
                className="rounded-full"
                src={coding}
                alt="coding"
                width={180}
                height={180}
              />
              <h1 className="font-bold text-lg">Fans want to donate</h1>
              <h1 className="font-semibold">
                &quot;Your fans are eager to fund your next beer&quot;
              </h1>
            </div>
            <div className="flex gap-y-2  justify-center flex-col items-center">
              <Image
                className="rounded-full"
                src={good}
                alt="join"
                width={180}
                height={180}
              />
              <h1 className="font-bold text-lg">Fans want to join</h1>
              <h1 className="font-semibold">
                &quot;Your fans are eager to be a part of your beer
                adventures.&quot;
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
