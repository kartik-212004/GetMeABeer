"use client"
export default function Button({ value }) {
  return (
    <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-2 px-3 rounded-xl shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
      {value}
    </button>
  )
}
