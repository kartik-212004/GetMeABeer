"use client"
import SigninButton from "./ui/signinButton"
import BeerButton from "./ui/beerbutton"
export default function Navbar() {
  return (
    <div className="bg-slate-950 h-14 text-white">
      <ul className="flex flex-row justify-between py-1 items-center space-x-4">
        <li>
          <div className="px-4 flex justify-center items-center flex-row">
            {/* <div>Get Me A</div>
            <Image src={beer} alt="beer" width={40} height={40} /> */}
            <BeerButton />
          </div>
        </li>
        <div className="flex flex-row px-4 space-x-2">
          <li>
            <SigninButton value={"Signin"} />
          </li>
          <li>
            <SigninButton value={"Login"} />
          </li>
        </div>
      </ul>
    </div>
  )
}
