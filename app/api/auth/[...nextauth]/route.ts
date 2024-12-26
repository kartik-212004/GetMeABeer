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
      clientSecret: process.env.GITHUB_SECRET ?? "",
      clientId: process.env.GITHUB_ID ?? "",
    }),
    Google({
      clientSecret: process.env.GOOGLE_SECRET ?? "",
      clientId: process.env.GOOGLE_ID ?? "",
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
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Missing credentials")
        }

        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        })

        if (!user?.password) {
          throw new Error("No user found with this email")
        }

        const isPasswordCorrect = await bcrypt.compare(
          credentials.password,
          user.password
        )

        if (!isPasswordCorrect) {
          throw new Error("Invalid password")
        }

        return {
          id: user.id,
          email: user.email
        }
      },
    }),
  ],
  callbacks: {
    async session({ session }) {
      if (!session?.user) {
        throw new Error("Session user is undefined")
      }
      
      session.user.image ??= "https://th.bing.com/th/id/OIP.qw42y3S9KyR2Wn9JVAWArgHaHa?rs=1&pid=ImgDetMain"
      
      return session
    },
  },
  pages: {
    signIn: "/signin",
  },
  secret: process.env.SECRET,
})

export { handler as GET, handler as POST }