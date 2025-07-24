"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Video, Upload, Play, Eye, Heart, Share2, Clock } from "lucide-react"

export default function VideosPage() {
  const [uploadData, setUploadData] = useState({
    title: "",
    description: "",
    category: "",
    tags: "",
    visibility: "public",
  })

  const categories = [
    "Training Drills",
    "Game Highlights",
    "Technique Tutorials",
    "Fitness Workouts",
    "Strategy Analysis",
    "Player Interviews",
    "Equipment Reviews",
    "Motivational Content",
  ]

  const mockVideos = [
    {
      id: 1,
      title: "Advanced Basketball Shooting Techniques",
      description: "Learn professional shooting techniques from NBA coaches",
      thumbnail: "/placeholder.svg?height=200&width=300",
      duration: "12:45",
      views: 1250,
      likes: 89,
      category: "Technique Tutorials",
      uploadedBy: "Coach Mike Johnson",
      uploadDate: "2 days ago",
    },
    {
      id: 2,
      title: "Soccer Dribbling Masterclass",
      description: "Master the art of dribbling with these proven techniques",
      thumbnail: "/placeholder.svg?height=200&width=300",
      duration: "18:30",
      views: 2100,
      likes: 156,
      category: "Training Drills",
      uploadedBy: "Coach Sarah Wilson",
      uploadDate: "1 week ago",
    },
    {
      id: 3,
      title: "Championship Game Highlights",
      description: "Best moments from the regional championship final",
      thumbnail: "/placeholder.svg?height=200&width=300",
      duration: "8:22",
      views: 3500,
      likes: 245,
      category: "Game Highlights",
      uploadedBy: "SportsPro Media",
      uploadDate: "3 days ago",
    },
    {
      id: 4,
      title: "Strength Training for Athletes",
      description: "Complete workout routine for building athletic strength",
      thumbnail: "/placeholder.svg?height=200&width=300",
      duration: "25:15",
      views: 890,
      likes: 67,
      category: "Fitness Workouts",
      uploadedBy: "Coach Alex Rodriguez",
      uploadDate: "5 days ago",
    },
  ]

  const handleUpload = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Uploading video:", uploadData)
    // Handle video upload logic here
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-8">
          <Video className="h-16 w-16 text-red-600 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-900">Video Hub</h1>
          <p className="text-gray-600 mt-2">Upload, share, and discover sports training videos</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Video Upload Section */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Upload Video</CardTitle>
                <CardDescription>Share your training videos with the community</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleUpload} className="space-y-4">
                  {/* File Upload Area */}
                  <div>
                    <Label>Video File</Label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                      <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-600 mb-2">Click to upload or drag and drop</p>
                      <p className="text-sm text-gray-500">MP4, MOV, AVI up to 500MB</p>
                      <input type="file" className="hidden" accept="video/*" />
                      <Button variant="outline" className="mt-2 bg-transparent">
                        Choose File
                      </Button>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="title">Video Title</Label>
                    <Input
                      id="title"
                      value={uploadData.title}
                      onChange={(e) => setUploadData({ ...uploadData, title: e.target.value })}
                      placeholder="Enter video title"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      value={uploadData.description}
                      onChange={(e) => setUploadData({ ...uploadData, description: e.target.value })}
                      placeholder="Describe your video..."
                      rows={3}
                    />
                  </div>

                  <div>
                    <Label htmlFor="category">Category</Label>
                    <Select onValueChange={(value) => setUploadData({ ...uploadData, category: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((category) => (
                          <SelectItem key={category} value={category.toLowerCase().replace(/\s+/g, "-")}>
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="tags">Tags</Label>
                    <Input
                      id="tags"
                      value={uploadData.tags}
                      onChange={(e) => setUploadData({ ...uploadData, tags: e.target.value })}
                      placeholder="basketball, training, shooting (comma separated)"
                    />
                  </div>

                  <div>
                    <Label htmlFor="visibility">Visibility</Label>
                    <Select onValueChange={(value) => setUploadData({ ...uploadData, visibility: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select visibility" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="public">Public</SelectItem>
                        <SelectItem value="unlisted">Unlisted</SelectItem>
                        <SelectItem value="private">Private</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button type="submit" className="w-full bg-red-600 hover:bg-red-700">
                    Upload Video
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Upload Guidelines */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Upload Guidelines</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Maximum file size: 500MB</li>
                  <li>• Supported formats: MP4, MOV, AVI</li>
                  <li>• Recommended resolution: 1080p</li>
                  <li>• Keep content appropriate and sports-related</li>
                  <li>• Add descriptive titles and tags</li>
                  <li>• Respect copyright and intellectual property</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Video Gallery */}
          <div className="lg:col-span-2">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Featured Videos</h2>
              <div className="flex gap-2">
                <Select defaultValue="recent">
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="recent">Most Recent</SelectItem>
                    <SelectItem value="popular">Most Popular</SelectItem>
                    <SelectItem value="views">Most Viewed</SelectItem>
                  </SelectContent>
                </Select>
                <Select defaultValue="all">
                  <SelectTrigger className="w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category.toLowerCase().replace(/\s+/g, "-")}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {mockVideos.map((video) => (
                <Card key={video.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <img
                      src={video.thumbnail || "/placeholder.svg"}
                      alt={video.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                      <Button size="lg" className="rounded-full">
                        <Play className="h-6 w-6" />
                      </Button>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {video.duration}
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-lg line-clamp-2">{video.title}</h3>
                      <Badge variant="secondary" className="ml-2 shrink-0">
                        {video.category}
                      </Badge>
                    </div>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">{video.description}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                      <span>{video.uploadedBy}</span>
                      <span>{video.uploadDate}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Eye className="h-4 w-4" />
                          {video.views.toLocaleString()}
                        </div>
                        <div className="flex items-center gap-1">
                          <Heart className="h-4 w-4" />
                          {video.likes}
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-8">
              <Button variant="outline" size="lg">
                Load More Videos
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
