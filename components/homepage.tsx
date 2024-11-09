import beer1 from "@/public/beer1.svg"
import Image from "next/image"
export default function Homepage() {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
      <div className="pt-12">
        <div className="flex flex-col text-gray-200 items-center justify-center">
          <div className="justify-center  flex items-center">
            <h1 className="text-5xl font-bold font-mono">Get Me A Beer</h1>
            <Image
              className=" mx-2"
              src={beer1}
              alt="beer"
              width={50}
              height={50}
            />
          </div>
          <div className="flex flex-col text-xl text-gray-300 text-center w-[50rem] space-y-6 py-8">
            <h1>
              Get your projects funded by your fans—one beer at a time. On Get
              Me a Beer, your supporters can buy you a beer to help fund your
              creative journey.
            </h1>
            <h1>
              Unleash the power of your community and bring your ideas to life.
              Cheers to your next big project!
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}
