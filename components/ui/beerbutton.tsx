"use client"
import beer from "@/public/beer.png"
import Image from "next/image"
export default function BeerButton() {
  return (
    <button className="overflow-hidden rounded-xl w-32 p-2 h-12 bg-slate-950 text-white border-none text-sm font-bold cursor-pointer relative z-10 group">
      Get Me A Beer
      <span className="absolute w-36 h-32 rounded-xl -top-8 -left-2 bg-indigo-500 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"></span>
      <span className="absolute w-36 h-32 rounded-xl -top-8 -left-2 bg-indigo-700 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"></span>
      <span className="absolute w-36 h-32 rounded-xl -top-8 -left-2 bg-indigo-900 rotate-12 transform scale-x-0 group-hover:scale-x-50 transition-transform group-hover:duration-1000 duration-500 origin-left"></span>
      <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 text-center absolute top-2.5 left-6 z-10">
        <Image src={beer} alt="beer" width={30} height={30} />
      </span>
    </button>
  )
}
