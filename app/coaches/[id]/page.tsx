"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import {
  Star,
  MapPin,
  Clock,
  DollarSign,
  Phone,
  Mail,
  Calendar,
  Award,
  Users,
  MessageCircle,
  Heart,
  Share2,
  CheckCircle,
} from "lucide-react"

// Mock data - in real app, this would come from API based on params.id
const coachData = {
  id: 1,
  name: "Mike Johnson",
  sport: "Basketball",
  experience: 8,
  rating: 4.9,
  totalReviews: 127,
  location: "Los Angeles, CA",
  hourlyRate: 75,
  image: "/placeholder.svg?height=200&width=200",
  coverImage: "/placeholder.svg?height=300&width=800",
  specialties: ["Shooting", "Defense", "Youth Training", "Game Strategy"],
  availability: "Available",
  email: "mike.johnson@sportspro.com",
  phone: "+1 (555) 123-4567",
  joinDate: "2022-03-15",
  totalStudents: 89,
  bio: "Passionate basketball coach with 8 years of experience training players from youth to college level. Former college player with a deep understanding of the game's fundamentals and advanced strategies. Specialized in developing shooting techniques and defensive skills.",
  certifications: [
    "USA Basketball Certified Coach",
    "Youth Development Specialist",
    "Sports Psychology Certificate",
    "First Aid & CPR Certified",
  ],
  achievements: [
    "Led 3 teams to regional championships",
    "Developed 15+ college scholarship recipients",
    "Coach of the Year 2023",
    "500+ successful training sessions",
  ],
  schedule: [
    { day: "Monday", slots: ["9:00 AM", "2:00 PM", "6:00 PM"] },
    { day: "Tuesday", slots: ["10:00 AM", "4:00 PM"] },
    { day: "Wednesday", slots: ["9:00 AM", "2:00 PM", "6:00 PM"] },
    { day: "Thursday", slots: ["10:00 AM", "4:00 PM"] },
    { day: "Friday", slots: ["9:00 AM", "2:00 PM"] },
    { day: "Saturday", slots: ["8:00 AM", "11:00 AM", "3:00 PM"] },
    { day: "Sunday", slots: ["Rest Day"] },
  ],
  reviews: [
    {
      id: 1,
      playerName: "Sarah Mitchell",
      rating: 5,
      date: "2024-01-15",
      comment:
        "Coach Mike transformed my shooting technique completely. His patience and expertise are unmatched. Highly recommend!",
      playerImage: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      playerName: "David Chen",
      rating: 5,
      date: "2024-01-10",
      comment:
        "Excellent coach! My son improved dramatically under his guidance. Great with kids and very professional.",
      playerImage: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 3,
      playerName: "Emma Rodriguez",
      rating: 4,
      date: "2024-01-05",
      comment: "Really good defensive training. Coach Mike knows how to break down complex concepts into simple steps.",
      playerImage: "/placeholder.svg?height=40&width=40",
    },
  ],
  videos: [
    {
      id: 1,
      title: "Perfect Shooting Form Tutorial",
      thumbnail: "/placeholder.svg?height=120&width=200",
      duration: "12:45",
      views: 2500,
    },
    {
      id: 2,
      title: "Defensive Stance Fundamentals",
      thumbnail: "/placeholder.svg?height=120&width=200",
      duration: "8:30",
      views: 1800,
    },
    {
      id: 3,
      title: "Youth Training Session Highlights",
      thumbnail: "/placeholder.svg?height=120&width=200",
      duration: "15:20",
      views: 3200,
    },
  ],
}

export default function CoachProfile() {
  const [isFollowing, setIsFollowing] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Cover Photo */}
      <div className="relative h-64 bg-gradient-to-r from-green-600 to-blue-600">
        <img
          src={coachData.coverImage || "/placeholder.svg"}
          alt="Cover"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30" />
      </div>

      <div className="container mx-auto px-4 -mt-20 relative z-10">
        {/* Profile Header */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-6">
              <Avatar className="w-32 h-32 border-4 border-white shadow-lg">
                <AvatarImage src={coachData.image || "/placeholder.svg"} alt={coachData.name} />
                <AvatarFallback className="text-2xl">
                  {coachData.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>

              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900">{coachData.name}</h1>
                    <div className="flex items-center gap-2 mt-2">
                      <Badge variant="secondary" className="text-lg px-3 py-1">
                        {coachData.sport} Coach
                      </Badge>
                      <Badge variant={coachData.availability === "Available" ? "default" : "destructive"}>
                        {coachData.availability}
                      </Badge>
                    </div>

                    <div className="flex items-center gap-4 mt-3 text-gray-600">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{coachData.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{coachData.experience} years experience</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        <span>{coachData.totalStudents} students trained</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 mt-3">
                      <div className="flex items-center gap-1">
                        <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        <span className="font-semibold text-lg">{coachData.rating}</span>
                        <span className="text-gray-600">({coachData.totalReviews} reviews)</span>
                      </div>
                      <div className="flex items-center gap-1 text-green-600 font-semibold text-lg">
                        <DollarSign className="h-5 w-5" />
                        <span>${coachData.hourlyRate}/hour</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 min-w-fit">
                    <Button size="lg" className="bg-green-600 hover:bg-green-700">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Message Coach
                    </Button>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        onClick={() => setIsFollowing(!isFollowing)}
                        className="flex-1 bg-transparent"
                      >
                        <Heart className={`h-4 w-4 mr-2 ${isFollowing ? "fill-red-500 text-red-500" : ""}`} />
                        {isFollowing ? "Following" : "Follow"}
                      </Button>
                      <Button variant="outline" size="icon" className="bg-transparent">
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Main Content */}
        <Tabs defaultValue="about" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="schedule">Schedule</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
            <TabsTrigger value="videos">Videos</TabsTrigger>
            <TabsTrigger value="contact">Contact</TabsTrigger>
          </TabsList>

          <TabsContent value="about" className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="md:col-span-2 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>About Coach {coachData.name.split(" ")[0]}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 leading-relaxed">{coachData.bio}</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Specialties</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {coachData.specialties.map((specialty) => (
                        <Badge key={specialty} variant="outline" className="px-3 py-1">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Achievements</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {coachData.achievements.map((achievement, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <Award className="h-5 w-5 text-yellow-600" />
                          <span>{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Quick Stats</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Experience:</span>
                      <span className="font-semibold">{coachData.experience} years</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Students Trained:</span>
                      <span className="font-semibold">{coachData.totalStudents}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Rating:</span>
                      <span className="font-semibold">{coachData.rating}/5.0</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Joined:</span>
                      <span className="font-semibold">{new Date(coachData.joinDate).toLocaleDateString()}</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Certifications</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {coachData.certifications.map((cert, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span className="text-sm">{cert}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="schedule" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Weekly Schedule</CardTitle>
                <CardDescription>Available time slots for training sessions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {coachData.schedule.map((day) => (
                    <div key={day.day} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="font-semibold text-lg">{day.day}</div>
                      <div className="flex gap-2">
                        {day.slots[0] === "Rest Day" ? (
                          <Badge variant="secondary">Rest Day</Badge>
                        ) : (
                          day.slots.map((slot) => (
                            <Badge key={slot} variant="outline" className="px-3 py-1">
                              {slot}
                            </Badge>
                          ))
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    <Calendar className="h-4 w-4 mr-2" />
                    Book a Session
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reviews" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Student Reviews ({coachData.totalReviews})</CardTitle>
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-2xl font-bold">{coachData.rating}</span>
                  <span className="text-gray-600">out of 5</span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {coachData.reviews.map((review) => (
                    <div key={review.id} className="border-b pb-6 last:border-b-0">
                      <div className="flex items-start gap-4">
                        <Avatar>
                          <AvatarImage src={review.playerImage || "/placeholder.svg"} alt={review.playerName} />
                          <AvatarFallback>
                            {review.playerName
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-semibold">{review.playerName}</h4>
                            <span className="text-sm text-gray-500">{new Date(review.date).toLocaleDateString()}</span>
                          </div>
                          <div className="flex mb-2">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star
                                key={star}
                                className={`h-4 w-4 ${star <= review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                              />
                            ))}
                          </div>
                          <p className="text-gray-700">{review.comment}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-6 bg-transparent">
                  Load More Reviews
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="videos" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Training Videos</CardTitle>
                <CardDescription>Educational content from Coach {coachData.name.split(" ")[0]}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {coachData.videos.map((video) => (
                    <div key={video.id} className="group cursor-pointer">
                      <div className="relative overflow-hidden rounded-lg">
                        <img
                          src={video.thumbnail || "/placeholder.svg"}
                          alt={video.title}
                          className="w-full h-32 object-cover group-hover:scale-105 transition-transform"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <Button size="sm" className="rounded-full">
                            <Clock className="h-4 w-4 mr-1" />
                            {video.duration}
                          </Button>
                        </div>
                      </div>
                      <div className="mt-2">
                        <h4 className="font-semibold text-sm line-clamp-2">{video.title}</h4>
                        <p className="text-xs text-gray-500 mt-1">{video.views.toLocaleString()} views</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="contact" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-gray-600" />
                    <span>{coachData.email}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-gray-600" />
                    <span>{coachData.phone}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-gray-600" />
                    <span>{coachData.location}</span>
                  </div>
                  <Separator />
                  <div className="space-y-2">
                    <Button className="w-full bg-green-600 hover:bg-green-700">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Send Message
                    </Button>
                    <Button variant="outline" className="w-full bg-transparent">
                      <Calendar className="h-4 w-4 mr-2" />
                      Schedule Call
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Quick Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div>
                      <label className="text-sm font-medium">Subject</label>
                      <select className="w-full mt-1 p-2 border rounded-md">
                        <option>Training Inquiry</option>
                        <option>Schedule Question</option>
                        <option>General Question</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-sm font-medium">Message</label>
                      <textarea
                        className="w-full mt-1 p-2 border rounded-md"
                        rows={4}
                        placeholder="Hi Coach Mike, I'm interested in..."
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
