"use client"
import beer1 from "@/public/beer1.svg"
import good from "@/public/good.webp"
import Image from "next/image"
import coin from "@/public/coin.webp"
import Button from "./ui/button2"
import coding from "@/public/coding.webp"
export default function Homepage() {
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
          <div className="flex flex-col text-xl text-blue-100 text-center w-[58rem] space-y-6 py-8">
            <h1>
              Get your projects funded by your fans—one beer at a time. On Get
              Me a Beer, your supporters can buy you a beer to help fund your
              creative journey.
            </h1>
            <h1 className="text-blue-300 text-lg">
              Unleash the power of your community and bring your ideas to life.
              Cheers to your next big project!
            </h1>
          </div>
          <div className="space-x-3 py-9">
            <Button value={"Get Started"} />
            <Button value={"Read More"} />
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
              <Image src={coin} alt="coin" width={110} height={110} />
              <h1>Fans Want to Cheers</h1>
              <h1>
                Your fans are here to raise a glass and show their support.
              </h1>
            </div>
            <div className="flex gap-y-2  justify-center flex-col items-center">
              <Image
                className="rounded-full"
                src={coding}
                alt="coding"
                width={110}
                height={110}
              />
              <h1>Fans want to donate:</h1>
              <h1>Your fans are eager to fund your next beer</h1>
            </div>
            <div className="flex gap-y-2  justify-center flex-col items-center">
              <Image
                className="rounded-full"
                src={good}
                alt="join"
                width={110}
                height={110}
              />
              <h1>Fans want to join:</h1>
              <h1>Your fans are eager to be a part of your beer adventures.</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
