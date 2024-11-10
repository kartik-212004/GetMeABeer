import { PrismaClient } from "@prisma/client"
import { NextRequest, NextResponse } from "next/server"
import bcrypt from "bcrypt"
import { z } from "zod"

const prisma = new PrismaClient()

const validation = z.object({
  email: z.string().email("Invalid email format"),
  password: z.string().min(6, "Password is too short (minimum 6 characters)"),
})

export async function POST(req: NextRequest) {
  const { email, password } = await req.json()

  const result = validation.safeParse({ email, password })
  if (!result.success) {
    return NextResponse.json({
      message: result.error.errors[0].message,
      status: 400,
    })
  }

  const existingUser = await prisma.user.findUnique({ where: { email } })
  if (existingUser) {
    return NextResponse.json({ message: "Email is already taken", status: 400 })
  }

  const hashedPassword = await bcrypt.hash(password, 10)
  await prisma.user.create({ data: { email, password: hashedPassword } })

  return NextResponse.json({
    status: 201,
    message: "Account successfully created",
  })
}
