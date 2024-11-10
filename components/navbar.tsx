"use client"
import SigninButton from "./ui/signinButton"
import BeerButton from "./ui/beerbutton"
import { useRouter } from "next/navigation"
import { useSession, signOut } from "next-auth/react"

export default function Navbar() {
  const router = useRouter()
  const { data: session, status } = useSession()

  const handleSignOut = async () => {
    await signOut({ callbackUrl: "/signin" })
  }

  return (
    <div className="bg-slate-950 h-14 text-white">
      <ul className="flex flex-row justify-between py-1 items-center space-x-4">
        <li
          onClick={() => {
            router.push("/")
          }}
        >
          <div className="px-4 flex justify-center items-center flex-row">
            <BeerButton />
          </div>
        </li>
        <div className="flex flex-row px-4 space-x-2">
          {status === "loading" ? (
            <p>Loading...</p>
          ) : session ? (
            <li onClick={handleSignOut}>
              <SigninButton value={"Sign Out"} />
            </li>
          ) : (
            <>
              <li
                onClick={() => {
                  router.push("/api/auth/signin")
                }}
              >
                <SigninButton value={"Sign In"} />
              </li>
              <li
                onClick={() => {
                  router.push("/signup")
                }}
              >
                <SigninButton value={"Sign Up"} />
              </li>
            </>
          )}
        </div>
      </ul>
    </div>
  )
}
