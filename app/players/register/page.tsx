"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Upload, Users } from "lucide-react"

export default function PlayerRegister() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    sport: "",
    skillLevel: "",
    goals: "",
    location: "",
    emergencyContact: "",
    emergencyPhone: "",
    medicalInfo: "",
  })

  const sports = [
    "Football",
    "Basketball",
    "Tennis",
    "Soccer",
    "Baseball",
    "Swimming",
    "Track & Field",
    "Volleyball",
    "Golf",
    "Other",
  ]

  const skillLevels = ["Beginner", "Intermediate", "Advanced", "Professional"]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Player registration:", formData)
    // Handle registration logic here
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="container mx-auto max-w-2xl">
        <Card>
          <CardHeader className="text-center">
            <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <CardTitle className="text-2xl">Player Registration</CardTitle>
            <CardDescription>Join our community and connect with professional coaches</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="dateOfBirth">Date of Birth</Label>
                  <Input
                    id="dateOfBirth"
                    type="date"
                    value={formData.dateOfBirth}
                    onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    placeholder="City, State"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    required
                  />
                </div>
              </div>

              {/* Sports Information */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="sport">Primary Sport</Label>
                  <Select onValueChange={(value) => setFormData({ ...formData, sport: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a sport" />
                    </SelectTrigger>
                    <SelectContent>
                      {sports.map((sport) => (
                        <SelectItem key={sport} value={sport.toLowerCase()}>
                          {sport}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="skillLevel">Skill Level</Label>
                  <Select onValueChange={(value) => setFormData({ ...formData, skillLevel: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select skill level" />
                    </SelectTrigger>
                    <SelectContent>
                      {skillLevels.map((level) => (
                        <SelectItem key={level} value={level.toLowerCase()}>
                          {level}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="goals">Goals & Objectives</Label>
                <Textarea
                  id="goals"
                  placeholder="What are your sports goals and what do you hope to achieve?"
                  value={formData.goals}
                  onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
                  rows={3}
                />
              </div>

              {/* Emergency Contact */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="emergencyContact">Emergency Contact Name</Label>
                  <Input
                    id="emergencyContact"
                    value={formData.emergencyContact}
                    onChange={(e) => setFormData({ ...formData, emergencyContact: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="emergencyPhone">Emergency Contact Phone</Label>
                  <Input
                    id="emergencyPhone"
                    value={formData.emergencyPhone}
                    onChange={(e) => setFormData({ ...formData, emergencyPhone: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="medicalInfo">Medical Information</Label>
                <Textarea
                  id="medicalInfo"
                  placeholder="Any medical conditions, allergies, or injuries we should know about?"
                  value={formData.medicalInfo}
                  onChange={(e) => setFormData({ ...formData, medicalInfo: e.target.value })}
                  rows={3}
                />
              </div>

              {/* Profile Photo Upload */}
              <div>
                <Label>Profile Photo</Label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">Click to upload or drag and drop</p>
                  <p className="text-sm text-gray-500">PNG, JPG up to 10MB</p>
                  <input type="file" className="hidden" accept="image/*" />
                </div>
              </div>

              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                Register as Player
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
