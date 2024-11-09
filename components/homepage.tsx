"use client"
import beer1 from "@/public/beer1.svg"
import Image from "next/image"
import Button from "./ui/button2"
export default function Homepage() {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full items-center  py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
      <div className="pt-12 pb-24">
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
          <div className="flex flex-col text-2xl text-blue-100 text-center w-[58rem] space-y-6 py-8">
            <h1>
              Get your projects funded by your fans—one beer at a time. On Get
              Me a Beer, your supporters can buy you a beer to help fund your
              creative journey.
            </h1>
            <h1 className="text-green-400 text-xl">
              Unleash the power of your community and bring your ideas to life.
              Cheers to your next big project!
            </h1>
          </div>
          <div className="space-x-3">
            <Button value={"Get Started"} />
            <Button value={"Read More"} />
          </div>
        </div>
      </div>
      <div className="bg-blue-950 h-[2px]"></div>
      <div className="pt-10">
        <div className="text-white flex flex-col justify-center items-center">
          <h1 className="text-2xl font-semibold text-gray-300">
            "It’s never too late for a Beer"
          </h1>
          <div className="container pt-10 gap-x-5 mx-auto flex justify-center text-center">
            <div className="flex justify-center flex-col items-center">
              <img
                src={
                  "https://media0.giphy.com/media/Ihy0gO3MVhUqSY2jvS/source.gif"
                }
                alt="coin"
                width={110}
                height={110}
              />
              <h1>Fans Want to Cheers</h1>
              <h1>
                Your fans are here to raise a glass and show their support.
              </h1>
            </div>
            <div className="flex justify-center flex-col items-center">
              <img
                className="rounded-full"
                src={
                  "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExcTM0bGJjZXZvM3pna2VqbXFyZ2c3ODMwdm5hYmhvZ2hsdzZiaTA4NCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/bGgsc5mWoryfgKBx1u/giphy.webp"
                }
                alt="coin"
                width={110}
                height={110}
              />
              <h1>Fans Want to Cheers</h1>
              <h1>
                Your fans are here to raise a glass and show their support.
              </h1>
            </div>
            <div className="flex justify-center flex-col items-center">
              <img
                src={
                  "https://media0.giphy.com/media/Ihy0gO3MVhUqSY2jvS/source.gif"
                }
                alt="coin"
                width={110}
                height={110}
              />
              <h1>Fans Want to Cheers</h1>
              <h1>
                Your fans are here to raise a glass and show their support.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
