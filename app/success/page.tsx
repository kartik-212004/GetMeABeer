"use client"
import React from "react"
import { CheckCircleIcon } from "lucide-react"
import Link from "next/link"

const SuccessPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-2xl rounded-xl p-8 md:p-12 max-w-md w-full text-center space-y-6">
        <div className="flex justify-center mb-4">
          <CheckCircleIcon
            className="text-green-500 w-24 h-24 animate-bounce"
            strokeWidth={1.5}
          />
        </div>

        <h1 className="text-3xl font-bold text-gray-800 mb-4">Success!</h1>

        <p className="text-gray-600 mb-6">
          Your action has been completed successfully. Thank you for your
          submission.
        </p>

        <div className="flex flex-col space-y-4">
          <button className="w-full rounded-full py-2 font-semibold bg-blue-600 hover:bg-blue-700 text-white transition-colors">
            <Link href="/">Return to Home</Link>
          </button>

          <button className="w-full rounded-full py-2 font-semibold border-blue-500 text-blue-600 hover:bg-blue-50 transition-colors">
            <Link href="/dashboard">Go to Dashboard</Link>
          </button>
        </div>

        <div className="text-sm text-gray-500 mt-6">
          Need help?{" "}
          <a href="/contact" className="text-blue-600 hover:underline">
            Contact Support
          </a>
        </div>
      </div>
    </div>
  )
}

export default SuccessPage
