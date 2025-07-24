"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import {
  MapPin,
  Calendar,
  Trophy,
  Target,
  MessageCircle,
  UserPlus,
  Share2,
  Award,
  Clock,
  Activity,
  Heart,
} from "lucide-react"

// Mock data - in real app, this would come from API based on params.id
const playerData = {
  id: 1,
  name: "Jake Thompson",
  sport: "Basketball",
  age: 16,
  skillLevel: "Intermediate",
  location: "Chicago, IL",
  joinDate: "2024-01-15",
  image: "/placeholder.svg?height=200&width=200",
  coverImage: "/placeholder.svg?height=300&width=800",
  position: "Point Guard",
  height: "6'1\"",
  weight: "165 lbs",
  school: "Lincoln High School",
  gpa: 3.8,
  goals: "Earn a college basketball scholarship and play Division I basketball",
  bio: "Dedicated basketball player with a passion for the game. Known for excellent court vision and leadership skills. Currently working on improving shooting consistency and defensive techniques.",
  achievements: [
    "Regional Champion 2023",
    "MVP Award - District Tournament",
    "All-Conference Team Selection",
    "Team Captain - 2 years",
  ],
  stats: {
    gamesPlayed: 28,
    pointsPerGame: 18.5,
    assistsPerGame: 7.2,
    reboundsPerGame: 4.8,
    fieldGoalPercentage: 45.2,
    freeThrowPercentage: 78.5,
  },
  skillProgress: [
    { skill: "Shooting", level: 75, target: 85 },
    { skill: "Ball Handling", level: 88, target: 90 },
    { skill: "Defense", level: 65, target: 80 },
    { skill: "Court Vision", level: 92, target: 95 },
    { skill: "Physical Fitness", level: 80, target: 90 },
  ],
  trainingHistory: [
    {
      date: "2024-01-20",
      coach: "Mike Johnson",
      session: "Shooting Fundamentals",
      duration: "90 min",
      rating: 5,
    },
    {
      date: "2024-01-18",
      coach: "Sarah Wilson",
      session: "Defensive Techniques",
      duration: "60 min",
      rating: 4,
    },
    {
      date: "2024-01-15",
      coach: "Mike Johnson",
      session: "Ball Handling Drills",
      duration: "75 min",
      rating: 5,
    },
  ],
  upcomingSessions: [
    {
      date: "2024-01-25",
      time: "4:00 PM",
      coach: "Mike Johnson",
      focus: "Game Preparation",
    },
    {
      date: "2024-01-27",
      time: "2:00 PM",
      coach: "Alex Rodriguez",
      focus: "Strength Training",
    },
  ],
  videos: [
    {
      id: 1,
      title: "Game Highlights - Championship Final",
      thumbnail: "/placeholder.svg?height=120&width=200",
      duration: "5:30",
      views: 450,
      date: "2024-01-10",
    },
    {
      id: 2,
      title: "Training Session - Ball Handling",
      thumbnail: "/placeholder.svg?height=120&width=200",
      duration: "8:15",
      views: 280,
      date: "2024-01-05",
    },
  ],
  emergencyContact: {
    name: "Robert Thompson",
    relationship: "Father",
    phone: "+1 (555) 987-6543",
  },
}

export default function PlayerProfile() {
  const [isFollowing, setIsFollowing] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Cover Photo */}
      <div className="relative h-64 bg-gradient-to-r from-blue-600 to-purple-600">
        <img
          src={playerData.coverImage || "/placeholder.svg"}
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
                <AvatarImage src={playerData.image || "/placeholder.svg"} alt={playerData.name} />
                <AvatarFallback className="text-2xl">
                  {playerData.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>

              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900">{playerData.name}</h1>
                    <div className="flex items-center gap-2 mt-2">
                      <Badge variant="secondary" className="text-lg px-3 py-1">
                        {playerData.sport}
                      </Badge>
                      <Badge variant="outline">{playerData.position}</Badge>
                      <Badge variant="outline">Age {playerData.age}</Badge>
                    </div>

                    <div className="flex items-center gap-4 mt-3 text-gray-600">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{playerData.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>Joined {new Date(playerData.joinDate).toLocaleDateString()}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 mt-3">
                      <Badge
                        variant={playerData.skillLevel === "Advanced" ? "default" : "secondary"}
                        className="px-3 py-1"
                      >
                        {playerData.skillLevel}
                      </Badge>
                      <span className="text-gray-600">{playerData.school}</span>
                      <span className="text-gray-600">GPA: {playerData.gpa}</span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 min-w-fit">
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Message Player
                    </Button>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        onClick={() => setIsFollowing(!isFollowing)}
                        className="flex-1 bg-transparent"
                      >
                        <UserPlus className="h-4 w-4 mr-2" />
                        {isFollowing ? "Following" : "Connect"}
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
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="stats">Stats</TabsTrigger>
            <TabsTrigger value="progress">Progress</TabsTrigger>
            <TabsTrigger value="training">Training</TabsTrigger>
            <TabsTrigger value="videos">Videos</TabsTrigger>
            <TabsTrigger value="contact">Contact</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="md:col-span-2 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>About {playerData.name.split(" ")[0]}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 leading-relaxed mb-4">{playerData.bio}</p>
                    <div className="flex items-center gap-2">
                      <Target className="h-5 w-5 text-blue-600" />
                      <span className="font-semibold">Goal:</span>
                    </div>
                    <p className="text-gray-700 mt-2">{playerData.goals}</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Achievements</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-3">
                      {playerData.achievements.map((achievement, index) => (
                        <div key={index} className="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg">
                          <Trophy className="h-5 w-5 text-yellow-600" />
                          <span className="text-sm font-medium">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Upcoming Training Sessions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {playerData.upcomingSessions.map((session, index) => (
                        <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                          <div>
                            <p className="font-semibold">{session.focus}</p>
                            <p className="text-sm text-gray-600">with {session.coach}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-medium">{session.date}</p>
                            <p className="text-sm text-gray-600">{session.time}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Player Info</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Position:</span>
                      <span className="font-semibold">{playerData.position}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Height:</span>
                      <span className="font-semibold">{playerData.height}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Weight:</span>
                      <span className="font-semibold">{playerData.weight}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">School:</span>
                      <span className="font-semibold">{playerData.school}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">GPA:</span>
                      <span className="font-semibold">{playerData.gpa}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Skill Level:</span>
                      <Badge variant="secondary">{playerData.skillLevel}</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Send Message
                    </Button>
                    <Button variant="outline" className="w-full bg-transparent">
                      <Calendar className="h-4 w-4 mr-2" />
                      Schedule Training
                    </Button>
                    <Button variant="outline" className="w-full bg-transparent">
                      <Heart className="h-4 w-4 mr-2" />
                      Add to Favorites
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="stats" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Season Statistics</CardTitle>
                  <CardDescription>Current season performance</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Games Played</span>
                      <span className="font-bold text-2xl">{playerData.stats.gamesPlayed}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Points Per Game</span>
                      <span className="font-bold text-2xl text-blue-600">{playerData.stats.pointsPerGame}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Assists Per Game</span>
                      <span className="font-bold text-2xl text-green-600">{playerData.stats.assistsPerGame}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Rebounds Per Game</span>
                      <span className="font-bold text-2xl text-purple-600">{playerData.stats.reboundsPerGame}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Shooting Statistics</CardTitle>
                  <CardDescription>Accuracy and efficiency metrics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span>Field Goal %</span>
                        <span className="font-semibold">{playerData.stats.fieldGoalPercentage}%</span>
                      </div>
                      <Progress value={playerData.stats.fieldGoalPercentage} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span>Free Throw %</span>
                        <span className="font-semibold">{playerData.stats.freeThrowPercentage}%</span>
                      </div>
                      <Progress value={playerData.stats.freeThrowPercentage} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="progress" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Skill Development Progress</CardTitle>
                <CardDescription>Track improvement across different skill areas</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {playerData.skillProgress.map((skill) => (
                    <div key={skill.skill}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">{skill.skill}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-gray-600">Current: {skill.level}%</span>
                          <span className="text-sm text-blue-600">Target: {skill.target}%</span>
                        </div>
                      </div>
                      <div className="relative">
                        <Progress value={skill.level} className="h-3" />
                        <div
                          className="absolute top-0 h-3 w-1 bg-blue-600 rounded-full"
                          style={{ left: `${skill.target}%` }}
                        />
                      </div>
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>0%</span>
                        <span>100%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="training" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Training History</CardTitle>
                <CardDescription>Recent coaching sessions and feedback</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {playerData.trainingHistory.map((session, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                          <Activity className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <p className="font-semibold">{session.session}</p>
                          <p className="text-sm text-gray-600">with {session.coach}</p>
                          <p className="text-xs text-gray-500">{new Date(session.date).toLocaleDateString()}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-1 mb-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Award
                              key={star}
                              className={`h-4 w-4 ${star <= session.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                            />
                          ))}
                        </div>
                        <p className="text-sm text-gray-600">{session.duration}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="videos" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Player Videos</CardTitle>
                <CardDescription>Game highlights and training footage</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {playerData.videos.map((video) => (
                    <div key={video.id} className="group cursor-pointer">
                      <div className="relative overflow-hidden rounded-lg">
                        <img
                          src={video.thumbnail || "/placeholder.svg"}
                          alt={video.title}
                          className="w-full h-40 object-cover group-hover:scale-105 transition-transform"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <Button size="sm" className="rounded-full">
                            <Clock className="h-4 w-4 mr-1" />
                            {video.duration}
                          </Button>
                        </div>
                      </div>
                      <div className="mt-3">
                        <h4 className="font-semibold line-clamp-2">{video.title}</h4>
                        <div className="flex justify-between items-center mt-2 text-sm text-gray-500">
                          <span>{video.views} views</span>
                          <span>{new Date(video.date).toLocaleDateString()}</span>
                        </div>
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
                  <CardTitle>Contact Player</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div>
                      <label className="text-sm font-medium">Subject</label>
                      <select className="w-full mt-1 p-2 border rounded-md">
                        <option>Training Opportunity</option>
                        <option>Collaboration</option>
                        <option>General Message</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-sm font-medium">Message</label>
                      <textarea
                        className="w-full mt-1 p-2 border rounded-md"
                        rows={4}
                        placeholder="Hi Jake, I'd like to discuss..."
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Emergency Contact</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="font-semibold">{playerData.emergencyContact.name}</p>
                    <p className="text-sm text-gray-600">{playerData.emergencyContact.relationship}</p>
                    <p className="text-sm">{playerData.emergencyContact.phone}</p>
                  </div>
                  <div className="pt-4 border-t">
                    <p className="text-sm text-gray-600 mb-3">Quick Actions:</p>
                    <div className="space-y-2">
                      <Button variant="outline" className="w-full bg-transparent">
                        <MessageCircle className="h-4 w-4 mr-2" />
                        Send Message
                      </Button>
                      <Button variant="outline" className="w-full bg-transparent">
                        <Calendar className="h-4 w-4 mr-2" />
                        Schedule Meeting
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
