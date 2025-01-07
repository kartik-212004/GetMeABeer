import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import Provider from "./provider"
import Navbar from "@/components/navbar"
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
})
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
})

export const metadata: Metadata = {
  title: "GetMeABeer",
  description:
    "GetMeABeer is a simple platform where users can donate money and send personalized messages, similar to Patreon. Built with Turborepo, it features a Next.js frontend, a Node.js backend, and Stripe integration for secure payments.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <Provider>
          <Navbar />
          {children}
        </Provider>
      </body>
    </html>
  )
}
