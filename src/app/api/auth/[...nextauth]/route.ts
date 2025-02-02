// import NextAuth from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
// import GoogleProvider from "next-auth/providers/google";
// import FacebookProvider from "next-auth/providers/facebook";

// export const authOptions = {
//   providers: [
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {
//         email: { label: "Email", type: "email", placeholder: "example@mail.com" },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials) {
//         // Replace this with your database logic
//         if (!credentials) {
//           throw new Error("Credentials are required");
//         }

//         const user = { id: "1", name: "Test User", email: credentials.email };

//         if (user) {
//           return user;
//         } else {
//           throw new Error("Invalid credentials");
//         }
//       },
//     }),
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID!,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
//     }),
//     FacebookProvider({
//       clientId: process.env.FACEBOOK_CLIENT_ID!,
//       clientSecret: process.env.FACEBOOK_CLIENT_SECRET!,
//     }),
//   ],
//   session: {
//     strategy: "jwt" as "jwt",
//   },
//   pages: {
//     signIn: "/login",
//   },
//   secret: process.env.NEXTAUTH_SECRET,
// };

// const handler = NextAuth(authOptions);
// export { handler as GET, handler as POST };
