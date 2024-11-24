import { NextRequest, NextResponse } from "next/server"
import Razorpay from "razorpay"
if (!process.env.NEXT_PUBLIC_RAZORPAY_ID || !process.env.RAZORPAY_SECRET) {
  throw new Error("Missing Razorpay environment variables")
}

const razorpay = new Razorpay({
  key_id: process.env.NEXT_PUBLIC_RAZORPAY_ID || "",
  key_secret: process.env.RAZORPAY_SECRET || "",
})

export async function POST(req: NextRequest) {
  try {
    const { amount, username, useremail } = await req.json()

    if (!amount || !username || !useremail) {
      return NextResponse.json({
        status: 400,
        message: "Amount, username, and useremail are required",
      })
    }

    const order = await razorpay.orders.create({
      amount: amount * 100,
      currency: "INR",
      receipt: `Receipt_${Date.now()}`,
      notes: {
        customerName: username,
        costumerEmail: useremail,
      },
    })
    return NextResponse.json({ status: 200, order: order })
  } catch (error) {
    return NextResponse.json({ status: 500, error: error })
  }
}
