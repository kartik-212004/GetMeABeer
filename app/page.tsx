import Script from "next/script"
import Homepage from "@/components/homepage"
export default function Home() {
  <Script
    src="https://checkout.razorpay.com/v1/checkout.js"
    strategy="beforeInteractive"
  />
  return <Homepage />
}
