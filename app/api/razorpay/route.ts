import { NextRequest, NextResponse } from "next/server"
import Razorpay from "razorpay"
import { z } from "zod"

if (!process.env.NEXT_PUBLIC_RAZORPAY_ID || !process.env.RAZORPAY_SECRET) {
  throw new Error("Missing Razorpay environment variables")
}

const razorpay = new Razorpay({
  key_id: process.env.NEXT_PUBLIC_RAZORPAY_ID,
  key_secret: process.env.RAZORPAY_SECRET,
})

const orderSchema = z.object({
  amount: z.number().min(1, "Amount must be greater than 0"),
  username: z.string().min(1, "Username is required"),
  useremail: z.string().email("Invalid email format")
})

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    
    const validationResult = orderSchema.safeParse(body)
    if (!validationResult.success) {
      return NextResponse.json({
        status: 400,
        message: validationResult.error.errors[0].message
      })
    }

    const { amount, username, useremail } = validationResult.data

    const order = await razorpay.orders.create({
      amount: amount * 100,
      currency: "INR",
      receipt: `Receipt_${Date.now()}`,
      notes: {
        customerName: username,
        customerEmail: useremail,
      },
    })

    return NextResponse.json({ 
      status: 200, 
      order 
    })
  } catch (error) {
    console.error("Razorpay order creation failed:", error)
    return NextResponse.json({ 
      status: 500, 
      message: error instanceof Error ? error.message : "Failed to create payment order"
    })
  }
}
