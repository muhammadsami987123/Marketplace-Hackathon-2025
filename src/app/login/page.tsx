"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { FcGoogle } from "react-icons/fc";
import { Facebook } from "lucide-react"
// import { signIn } from "next-auth/react"

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
        <div className="flex items-center justify-center mb-6">
        <Image src="/logo.ico" alt="logo" width={40} height={40} />
          {/* <Sport className="w-10 h-10 text-blue-600" /> */}
          <h2 className="text-3xl font-bold text-gray-800 ml-2">Welcome Back</h2>
        </div>
        <form className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-700">Email address</Label>
            <Input id="email" placeholder="Enter your email" type="email" required className="border-gray-300" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password" className="text-gray-700">Password</Label>
            <Input id="password" placeholder="Enter your password" type="password" required className="border-gray-300" />
          </div>
          <div className="text-right">
            <Link href="/ForgotPassword" className="text-sm text-blue-600 hover:underline">
              Forgot Password?
            </Link>
          </div>
          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md">
            Login
          </Button>
        </form>

        <div className="mt-6">
          <div className="relative flex items-center justify-center">
            <div className="w-full border-t border-gray-300" />
            <span className="absolute bg-white px-3 text-gray-500 text-sm">Or login with</span>
          </div>
          <div className="flex gap-4 mt-6">
          {/* <Button variant="outline" className="w-full flex items-center justify-center py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100" onClick={() => signIn("google", { callbackUrl: "/" })}>
            < FcGoogle className="w-5 h-5 text-blue-600 mr-2" /> Google
            </Button>
            <Button variant="outline" className="w-full flex items-center justify-center py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100" onClick={() => signIn("facebook", { callbackUrl: "/" })}>
              <Facebook className="w-5 h-5 text-blue-600 mr-2" /> Facebook
            </Button> */}
             <Button className="w-full flex items-center justify-center py-2 border  rounded-md">
              <FcGoogle className="w-5 h-5 text-blue-600 mr-2" /> Google
            </Button>
            <Button className="w-full flex items-center justify-center py-2 border  rounded-md" >
              <Facebook className="w-5 h-5 text-blue-600 mr-2" /> Facebook
            </Button> 
           
          </div>
        </div>
        
        <div className="mt-6 text-center text-sm text-gray-600">
          Do not have an account? 
          <Link href="/signup" className="text-blue-600 font-semibold hover:underline"> Sign up</Link>
        </div>
      </div>
    </div>
  )
}
