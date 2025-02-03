"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800">Forgot Password?</h2>
          <p className="text-gray-600 text-sm mt-2">Enter your email address below and we will send you a link to reset your password.</p>
        </div>
        <form className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-700">Email address</Label>
            <Input id="email" placeholder="Enter your email" type="email" required className="border-gray-300" />
          </div>
          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md">
            Send Reset Link
          </Button>
        </form>
        
        <div className="mt-6 text-center text-sm text-gray-600">
          Remember your password? 
          <Link href="/login" className="text-blue-600 font-semibold hover:underline"> Login</Link>
        </div>
      </div>
    </div>
  )
}
