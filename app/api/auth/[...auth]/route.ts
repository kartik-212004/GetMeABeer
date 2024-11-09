import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Email",
      credentials: {
        email: {
          label: "Email",
          placeholder: "Email",
          input: "email",
        },
        password: {
          label: "Password",
          placeholder: "Password",
          input: "password",
        },
      },
      async authorize(credentials: any) {},
    }),
  ],
})
export { handler as GET, handler as POST }
