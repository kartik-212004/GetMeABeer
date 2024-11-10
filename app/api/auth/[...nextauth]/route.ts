import NextAuth from "next-auth"
import Github from "next-auth/providers/github"
import Google from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcrypt"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

const handler = NextAuth({
  providers: [
    Github({
      clientSecret: process.env.GITHUB_SECRET || "",
      clientId: process.env.GITHUB_ID || "",
    }),
    Google({
      clientSecret: process.env.GOOGLE_SECRET || "",
      clientId: process.env.GOOGLE_ID || "",
    }),
    CredentialsProvider({
      name: "Email",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "Email" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Password",
        },
      },
      async authorize(credentials: any) {
        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        })
        console.log(user)
        if (!user) {
          console.log("No user found with this email.")
          return null
        }

        const isPasswordCorrect = await bcrypt.compare(
          credentials.password,
          user.password
        )

        if (!isPasswordCorrect) {
          console.log("Password is incorrect.")
          return null
        }
        return { id: user.id, email: user.email }
      },
    }),
  ],
  pages: {
    signIn: "/signin",
  },
  secret: process.env.SECRET,
})

export { handler as GET, handler as POST }
