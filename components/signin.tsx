"use client"
import { signIn } from "next-auth/react"
import { useState } from "react"
import { FaGoogle } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { useRouter } from "next/navigation"
export default function SignIn() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 text-gray-100 flex justify-center items-center p-4">
      <div className="w-full max-w-md relative bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 shadow-xl">
        <div className="space-y-8">
          {/* Header */}
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold text-white">Welcome Back</h1>
            <p className="text-gray-400">Sign in to your account to continue</p>
          </div>

          {/* Social Logins */}
          <div className="space-y-4">
            <button
              onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
              className="w-full bg-white/10 hover:bg-white/20 text-white rounded-xl py-1 px-4 font-medium flex items-center justify-center space-x-3 transition-all duration-200 hover:shadow-lg hover:shadow-white/5 active:scale-[0.99]"
            >
              <div className="p-1.5 rounded-lg shadow-sm">
                <FaGoogle size={30} />
              </div>
              <span>Continue with Google</span>
            </button>

            <button
              onClick={() => signIn("github", { callbackUrl: "/dashboard" })}
              className="w-full bg-white/10 hover:bg-white/20 text-white rounded-xl py-1 px-4 font-medium flex items-center justify-center space-x-3 transition-all duration-200 hover:shadow-lg hover:shadow-white/5 active:scale-[0.99]"
            >
              <div className=" p-1.5 rounded-lg shadow-sm">
                <FaGithub size={30} />
              </div>
              <span>Continue with GitHub</span>
            </button>
          </div>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-700/50"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-gray-800/50 text-gray-400">
                or continue with email
              </span>
            </div>
          </div>

          {/* Email Form */}
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Email</label>
              <input
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
                className="w-full px-4 py-3 rounded-xl font-medium bg-white/5 border border-gray-700/50 text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-transparent transition-all"
                type="email"
                placeholder="name@example.com"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">
                Password
              </label>
              <input
                onChange={(e) => {
                  setPassword(e.target.value)
                }}
                className="w-full px-4 py-3 rounded-xl font-medium bg-white/5 border border-gray-700/50 text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-transparent transition-all"
                type="password"
                placeholder="Enter your password"
              />
            </div>

            <button
              onClick={async () => {
                const result = await signIn("credentials", {
                  redirect: false,
                  email: email,
                  password: password,
                })

                if (result?.ok) {
                  router.push("/dashboard")
                } else {
                  alert("Invalid credentials. Please try again.")
                }
              }}
              className="w-full bg-violet-600 hover:bg-violet-700 text-white rounded-xl py-3 font-medium transition-all duration-200 hover:shadow-lg hover:shadow-violet-500/25 active:scale-[0.99] group flex items-center justify-center"
            >
              <span>Sign In</span>
              <svg
                className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </div>

          {/* Footer */}
          <div className="text-center space-y-4">
            <p className="text-sm text-gray-400">
              Dont have an account?
              <a
                href="#"
                className="text-violet-400 hover:text-violet-300 font-medium transition-colors"
              >
                Sign up
              </a>
            </p>

            <p className="text-xs text-gray-500">
              By continuing, you agree to our{" "}
              <a
                href="#"
                className="text-gray-400 hover:text-gray-300 underline underline-offset-2"
              >
                Terms of Service
              </a>{" "}
              and{" "}
              <a
                href="#"
                className="text-gray-400 hover:text-gray-300 underline underline-offset-2"
              >
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
