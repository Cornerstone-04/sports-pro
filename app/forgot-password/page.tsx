"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Trophy, Mail, ArrowLeft, CheckCircle, Clock } from "lucide-react"

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isEmailSent, setIsEmailSent] = useState(false)
  const [countdown, setCountdown] = useState(0)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    console.log("Password reset request for:", email)
    setIsLoading(false)
    setIsEmailSent(true)
    setCountdown(60)

    // Start countdown
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          return 0
        }
        return prev - 1
      })
    }, 1000)
  }

  const handleResendEmail = () => {
    if (countdown === 0) {
      setCountdown(60)
      console.log("Resending email to:", email)

      // Start countdown again
      const timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(timer)
            return 0
          }
          return prev - 1
        })
      }, 1000)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo and Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center space-x-2 mb-6">
            <Trophy className="h-8 w-8 text-green-600" />
            <span className="text-2xl font-bold text-gray-900">SportsPro</span>
          </Link>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            {isEmailSent ? "Check Your Email" : "Forgot Password?"}
          </h1>
          <p className="text-gray-600">
            {isEmailSent
              ? "We've sent a password reset link to your email address"
              : "No worries! Enter your email and we'll send you reset instructions"}
          </p>
        </div>

        <Card className="shadow-lg border-0">
          {!isEmailSent ? (
            <>
              <CardHeader className="space-y-1 pb-4">
                <CardTitle className="text-xl text-center">Reset Password</CardTitle>
                <CardDescription className="text-center">
                  Enter your email address to receive reset instructions
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="pl-10"
                        required
                      />
                    </div>
                    <p className="text-sm text-gray-500">We'll send reset instructions to this email address</p>
                  </div>

                  <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700" disabled={isLoading}>
                    {isLoading ? "Sending Instructions..." : "Send Reset Instructions"}
                  </Button>
                </form>

                <div className="text-center pt-4">
                  <Link href="/login" className="inline-flex items-center text-sm text-gray-600 hover:text-gray-800">
                    <ArrowLeft className="h-4 w-4 mr-1" />
                    Back to Sign In
                  </Link>
                </div>
              </CardContent>
            </>
          ) : (
            <>
              <CardHeader className="space-y-1 pb-4 text-center">
                <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-xl">Email Sent Successfully</CardTitle>
                <CardDescription>
                  We've sent password reset instructions to:
                  <br />
                  <span className="font-medium text-gray-900">{email}</span>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-medium text-blue-900 mb-2">What's next?</h4>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• Check your email inbox (and spam folder)</li>
                    <li>• Click the reset link in the email</li>
                    <li>• Create a new password</li>
                    <li>• Sign in with your new password</li>
                  </ul>
                </div>

                <div className="text-center space-y-3">
                  <p className="text-sm text-gray-600">Didn't receive the email?</p>
                  <Button
                    variant="outline"
                    onClick={handleResendEmail}
                    disabled={countdown > 0}
                    className="w-full bg-transparent"
                  >
                    {countdown > 0 ? (
                      <span className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        Resend in {countdown}s
                      </span>
                    ) : (
                      "Resend Email"
                    )}
                  </Button>
                </div>

                <div className="text-center pt-4 space-y-2">
                  <Link href="/login" className="inline-flex items-center text-sm text-gray-600 hover:text-gray-800">
                    <ArrowLeft className="h-4 w-4 mr-1" />
                    Back to Sign In
                  </Link>
                </div>
              </CardContent>
            </>
          )}
        </Card>

        {/* Help Section */}
        <div className="mt-8 text-center">
          <Card className="bg-gray-50 border-gray-200">
            <CardContent className="p-4">
              <h4 className="font-medium text-gray-900 mb-2">Need Help?</h4>
              <p className="text-sm text-gray-600 mb-3">
                If you're having trouble resetting your password, contact our support team.
              </p>
              <Button variant="outline" size="sm" className="bg-transparent">
                Contact Support
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Additional Links */}
        <div className="mt-6 text-center space-y-2">
          <div className="flex justify-center space-x-4 text-sm text-gray-500">
            <Link href="/privacy" className="hover:text-gray-700">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-gray-700">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
