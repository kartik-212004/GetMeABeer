"use client"
import beer1 from "@/public/beer1.svg"
import good from "@/public/good.webp"
import Image from "next/image"
import coin from "@/public/coin.webp"
import Button from "./ui/button2"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import coding from "@/public/coding.webp"
export default function Homepage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  return (
    <div className="absolute inset-0 -z-10 h-full w-full items-center  py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
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
          <div className="flex flex-col text-xl text-center w-[58rem] space-y-6 py-8">
            <h1>
              Get your projects funded by your fans—one beer at a time. On Get
              Me a Beer, your supporters can buy you a beer to help fund your
              creative journey.
            </h1>
            <h1 className="text-lg">
              Unleash the power of your community and bring your ideas to life.
              Cheers to your next big project!
            </h1>
          </div>
          <div className="space-x-3 flex py-9">
            <div
              onClick={() => {
                if (session) {
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
      <div className="bg-blue-950 h-[2px]"></div>
      <div className="pt-10">
        <div className="text-white flex flex-col justify-center items-center">
          <h1 className="text-2xl font-semibold text-gray-300 ">
            It’s never too late for a Beer
          </h1>
          <div className="container text-lg pt-10 gap-x-40 mx-auto flex justify-center text-center">
            <div className="flex gap-y-2 justify-center flex-col items-center">
              <Image src={coin} alt="coin" width={140} height={140} />
              <h1 className="font-semibold">Fans Want to Cheers</h1>
              <h1>
                Your fans are here to raise a glass and show their support.
              </h1>
            </div>
            <div className="flex gap-y-2  justify-center flex-col items-center">
              <Image
                className="rounded-full"
                src={coding}
                alt="coding"
                width={140}
                height={140}
              />
              <h1 className="font-semibold">Fans want to donate</h1>
              <h1>Your fans are eager to fund your next beer</h1>
            </div>
            <div className="flex gap-y-2  justify-center flex-col items-center">
              <Image
                className="rounded-full"
                src={good}
                alt="join"
                width={140}
                height={140}
              />
              <h1 className="font-semibold">Fans want to join</h1>
              <h1>Your fans are eager to be a part of your beer adventures.</h1>
            </div>
          </div>
          {/* <div className="flex flex-col justify-center items-center ">
            <div className="text-center py-16">Learn more about us</div>
            <div>
              <video width="320" height="240" controls preload="none">
                <source src="/path/to/video.mp4" type="video/mp4" />
                <track
                  src="https://youtu.be/KOnFBHqztbM"
                  kind="subtitles"
                  srcLang="en"
                  label="English"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}
