"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { CreditCard, Shield, CheckCircle } from "lucide-react"

export default function PaymentsPage() {
  const [paymentData, setPaymentData] = useState({
    amount: "",
    service: "",
    description: "",
    email: "",
    name: "",
  })

  const services = [
    { value: "coaching", label: "Personal Coaching Session", price: 50 },
    { value: "group", label: "Group Training", price: 25 },
    { value: "assessment", label: "Skills Assessment", price: 75 },
    { value: "program", label: "Training Program", price: 200 },
    { value: "equipment", label: "Equipment Rental", price: 30 },
    { value: "custom", label: "Custom Service", price: 0 },
  ]

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault()

    // Paystack integration would go here
    console.log("Processing payment:", paymentData)

    // Mock Paystack initialization
    const paystackConfig = {
      reference: `ref_${Date.now()}`,
      email: paymentData.email,
      amount: Number.parseFloat(paymentData.amount) * 100, // Paystack expects amount in kobo
      publicKey: "pk_test_your_paystack_public_key", // Replace with actual key
      text: "Pay Now",
      onSuccess: (reference: any) => {
        console.log("Payment successful:", reference)
        alert("Payment successful!")
      },
      onClose: () => {
        console.log("Payment cancelled")
      },
    }

    // In a real implementation, you would use the Paystack popup here
    alert("Payment integration would be initialized here with Paystack")
  }

  const selectedService = services.find((s) => s.value === paymentData.service)

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8">
          <CreditCard className="h-16 w-16 text-purple-600 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-900">Payment Hub</h1>
          <p className="text-gray-600 mt-2">Secure payments powered by Paystack</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Payment Form */}
          <Card>
            <CardHeader>
              <CardTitle>Make a Payment</CardTitle>
              <CardDescription>Pay for coaching services, training programs, and more</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handlePayment} className="space-y-6">
                <div>
                  <Label htmlFor="service">Service Type</Label>
                  <Select
                    onValueChange={(value) => {
                      setPaymentData({ ...paymentData, service: value })
                      const service = services.find((s) => s.value === value)
                      if (service && service.price > 0) {
                        setPaymentData((prev) => ({ ...prev, service: value, amount: service.price.toString() }))
                      }
                    }}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service.value} value={service.value}>
                          {service.label} {service.price > 0 && `- $${service.price}`}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      value={paymentData.name}
                      onChange={(e) => setPaymentData({ ...paymentData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={paymentData.email}
                      onChange={(e) => setPaymentData({ ...paymentData, email: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="amount">Amount ($)</Label>
                  <Input
                    id="amount"
                    type="number"
                    step="0.01"
                    value={paymentData.amount}
                    onChange={(e) => setPaymentData({ ...paymentData, amount: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="description">Description (Optional)</Label>
                  <Textarea
                    id="description"
                    placeholder="Additional details about the payment..."
                    value={paymentData.description}
                    onChange={(e) => setPaymentData({ ...paymentData, description: e.target.value })}
                    rows={3}
                  />
                </div>

                <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700">
                  Pay with Paystack
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Payment Summary & Security */}
          <div className="space-y-6">
            {/* Payment Summary */}
            <Card>
              <CardHeader>
                <CardTitle>Payment Summary</CardTitle>
              </CardHeader>
              <CardContent>
                {selectedService ? (
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Service:</span>
                      <span className="font-medium">{selectedService.label}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Amount:</span>
                      <span className="font-medium">${paymentData.amount || "0.00"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Processing Fee:</span>
                      <span className="font-medium">$0.00</span>
                    </div>
                    <hr />
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total:</span>
                      <span>${paymentData.amount || "0.00"}</span>
                    </div>
                  </div>
                ) : (
                  <p className="text-gray-500">Select a service to see payment summary</p>
                )}
              </CardContent>
            </Card>

            {/* Security Features */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-green-600" />
                  Secure Payment
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">256-bit SSL encryption</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">PCI DSS compliant</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Powered by Paystack</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Money-back guarantee</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Popular Services */}
            <Card>
              <CardHeader>
                <CardTitle>Popular Services</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {services.slice(0, 4).map((service) => (
                    <div key={service.value} className="flex justify-between items-center p-2 hover:bg-gray-50 rounded">
                      <span className="text-sm">{service.label}</span>
                      <span className="text-sm font-medium">${service.price}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
