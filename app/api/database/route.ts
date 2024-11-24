import { NextRequest, NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()
export async function POST(req: NextRequest) {
  const { order, razorpay_payment_id, razorpay_order_id, message } =
    await req.json()
  await prisma.transaction.create({
    data: {
      amount: order.amount / 100,
      orderId: order.id,
      customerEmail: order?.notes?.costumerEmail,
      customerName: order?.notes?.customerName,
      receipt: order.receipt,
      status: "success",
      razorpay_payment_id: razorpay_payment_id,
      razorpay_order_id: razorpay_order_id,
      message: message,
    },
  })
}

export async function GET() {
  const transactions = await prisma.transaction.findMany({
    take: 6,
    orderBy: {
      createdAt: "desc",
    },
  })
  return NextResponse.json(transactions)
}
