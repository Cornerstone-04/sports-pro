"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Upload, UserCheck } from "lucide-react"

export default function CoachRegister() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    sport: "",
    experience: "",
    certifications: "",
    bio: "",
    location: "",
    hourlyRate: "",
    availability: [] as string[],
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

  const availabilityOptions = [
    "Monday Morning",
    "Monday Afternoon",
    "Monday Evening",
    "Tuesday Morning",
    "Tuesday Afternoon",
    "Tuesday Evening",
    "Wednesday Morning",
    "Wednesday Afternoon",
    "Wednesday Evening",
    "Thursday Morning",
    "Thursday Afternoon",
    "Thursday Evening",
    "Friday Morning",
    "Friday Afternoon",
    "Friday Evening",
    "Saturday Morning",
    "Saturday Afternoon",
    "Saturday Evening",
    "Sunday Morning",
    "Sunday Afternoon",
    "Sunday Evening",
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Coach registration:", formData)
    // Handle registration logic here
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="container mx-auto max-w-2xl">
        <Card>
          <CardHeader className="text-center">
            <UserCheck className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <CardTitle className="text-2xl">Coach Registration</CardTitle>
            <CardDescription>Join our platform and start connecting with players</CardDescription>
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

              {/* Professional Information */}
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
                  <Label htmlFor="experience">Years of Experience</Label>
                  <Input
                    id="experience"
                    type="number"
                    value={formData.experience}
                    onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="certifications">Certifications</Label>
                <Textarea
                  id="certifications"
                  placeholder="List your coaching certifications..."
                  value={formData.certifications}
                  onChange={(e) => setFormData({ ...formData, certifications: e.target.value })}
                />
              </div>

              <div>
                <Label htmlFor="bio">Bio</Label>
                <Textarea
                  id="bio"
                  placeholder="Tell us about your coaching philosophy and experience..."
                  value={formData.bio}
                  onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                  rows={4}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
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
                <div>
                  <Label htmlFor="hourlyRate">Hourly Rate ($)</Label>
                  <Input
                    id="hourlyRate"
                    type="number"
                    value={formData.hourlyRate}
                    onChange={(e) => setFormData({ ...formData, hourlyRate: e.target.value })}
                    required
                  />
                </div>
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

              {/* Availability */}
              <div>
                <Label>Availability</Label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-2">
                  {availabilityOptions.map((option) => (
                    <div key={option} className="flex items-center space-x-2">
                      <Checkbox
                        id={option}
                        checked={formData.availability.includes(option)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            setFormData({
                              ...formData,
                              availability: [...formData.availability, option],
                            })
                          } else {
                            setFormData({
                              ...formData,
                              availability: formData.availability.filter((a) => a !== option),
                            })
                          }
                        }}
                      />
                      <Label htmlFor={option} className="text-sm">
                        {option}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                Register as Coach
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
