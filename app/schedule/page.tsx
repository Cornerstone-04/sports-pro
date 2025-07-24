"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { CalendarIcon, Clock, Plus, Video, MapPin, Phone, CheckCircle, XCircle, AlertCircle } from "lucide-react"

interface ScheduledCall {
  id: string
  title: string
  participant: {
    name: string
    avatar: string
    role: "coach" | "player"
  }
  date: Date
  duration: number
  type: "video" | "phone" | "in-person"
  status: "scheduled" | "completed" | "cancelled" | "pending"
  location?: string
  notes?: string
}

export default function SchedulePage() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())
  const [isScheduleDialogOpen, setIsScheduleDialogOpen] = useState(false)
  const [scheduleForm, setScheduleForm] = useState({
    title: "",
    participant: "",
    date: "",
    time: "",
    duration: "60",
    type: "video",
    location: "",
    notes: "",
  })

  const scheduledCalls: ScheduledCall[] = [
    {
      id: "1",
      title: "Training Session Review",
      participant: {
        name: "Mike Johnson",
        avatar: "/placeholder.svg?height=40&width=40",
        role: "coach",
      },
      date: new Date(2024, 0, 25, 14, 0),
      duration: 60,
      type: "video",
      status: "scheduled",
      notes: "Discuss shooting technique improvements and next training goals",
    },
    {
      id: "2",
      title: "Strength Training Consultation",
      participant: {
        name: "Alex Rodriguez",
        avatar: "/placeholder.svg?height=40&width=40",
        role: "coach",
      },
      date: new Date(2024, 0, 27, 15, 0),
      duration: 45,
      type: "in-person",
      status: "scheduled",
      location: "SportsPro Gym, Downtown",
      notes: "Plan strength training routine for the upcoming season",
    },
    {
      id: "3",
      title: "Progress Check-in",
      participant: {
        name: "Sarah Mitchell",
        avatar: "/placeholder.svg?height=40&width=40",
        role: "player",
      },
      date: new Date(2024, 0, 23, 10, 0),
      duration: 30,
      type: "phone",
      status: "completed",
      notes: "Weekly progress discussion",
    },
  ]

  const availableParticipants = [
    { id: "coach1", name: "Mike Johnson", role: "coach" },
    { id: "coach2", name: "Alex Rodriguez", role: "coach" },
    { id: "player1", name: "Sarah Mitchell", role: "player" },
    { id: "player2", name: "David Chen", role: "player" },
  ]

  const handleScheduleCall = () => {
    console.log("Scheduling call:", scheduleForm)
    setIsScheduleDialogOpen(false)
    setScheduleForm({
      title: "",
      participant: "",
      date: "",
      time: "",
      duration: "60",
      type: "video",
      location: "",
      notes: "",
    })
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-4 w-4 text-green-600" />
      case "cancelled":
        return <XCircle className="h-4 w-4 text-red-600" />
      case "pending":
        return <AlertCircle className="h-4 w-4 text-yellow-600" />
      default:
        return <Clock className="h-4 w-4 text-blue-600" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800"
      case "cancelled":
        return "bg-red-100 text-red-800"
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-blue-100 text-blue-800"
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "video":
        return <Video className="h-4 w-4" />
      case "phone":
        return <Phone className="h-4 w-4" />
      default:
        return <MapPin className="h-4 w-4" />
    }
  }

  const formatDateTime = (date: Date) => {
    return {
      date: date.toLocaleDateString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
      }),
      time: date.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      }),
    }
  }

  const todaysCalls = scheduledCalls.filter((call) => {
    const today = new Date()
    return call.date.toDateString() === today.toDateString()
  })

  const upcomingCalls = scheduledCalls
    .filter((call) => {
      const today = new Date()
      return call.date > today
    })
    .sort((a, b) => a.date.getTime() - b.date.getTime())

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <CalendarIcon className="h-8 w-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900">Schedule</h1>
          </div>

          <Dialog open={isScheduleDialogOpen} onOpenChange={setIsScheduleDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Plus className="h-4 w-4 mr-2" />
                Schedule Call
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>Schedule a Call</DialogTitle>
                <DialogDescription>Set up a call with a coach or player</DialogDescription>
              </DialogHeader>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="title">Call Title</Label>
                  <Input
                    id="title"
                    placeholder="e.g., Training Session Review"
                    value={scheduleForm.title}
                    onChange={(e) => setScheduleForm({ ...scheduleForm, title: e.target.value })}
                  />
                </div>

                <div>
                  <Label htmlFor="participant">Participant</Label>
                  <Select onValueChange={(value) => setScheduleForm({ ...scheduleForm, participant: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select participant" />
                    </SelectTrigger>
                    <SelectContent>
                      {availableParticipants.map((participant) => (
                        <SelectItem key={participant.id} value={participant.id}>
                          <div className="flex items-center gap-2">
                            <span>{participant.name}</span>
                            <Badge variant="outline" className="text-xs">
                              {participant.role}
                            </Badge>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="date">Date</Label>
                    <Input
                      id="date"
                      type="date"
                      value={scheduleForm.date}
                      onChange={(e) => setScheduleForm({ ...scheduleForm, date: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="time">Time</Label>
                    <Input
                      id="time"
                      type="time"
                      value={scheduleForm.time}
                      onChange={(e) => setScheduleForm({ ...scheduleForm, time: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="duration">Duration (minutes)</Label>
                    <Select onValueChange={(value) => setScheduleForm({ ...scheduleForm, duration: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="60" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="30">30 minutes</SelectItem>
                        <SelectItem value="45">45 minutes</SelectItem>
                        <SelectItem value="60">60 minutes</SelectItem>
                        <SelectItem value="90">90 minutes</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="type">Call Type</Label>
                    <Select onValueChange={(value) => setScheduleForm({ ...scheduleForm, type: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Video" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="video">Video Call</SelectItem>
                        <SelectItem value="phone">Phone Call</SelectItem>
                        <SelectItem value="in-person">In Person</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {scheduleForm.type === "in-person" && (
                  <div>
                    <Label htmlFor="location">Location</Label>
                    <Input
                      id="location"
                      placeholder="e.g., SportsPro Gym, Downtown"
                      value={scheduleForm.location}
                      onChange={(e) => setScheduleForm({ ...scheduleForm, location: e.target.value })}
                    />
                  </div>
                )}

                <div>
                  <Label htmlFor="notes">Notes (Optional)</Label>
                  <Textarea
                    id="notes"
                    placeholder="Add any additional notes..."
                    value={scheduleForm.notes}
                    onChange={(e) => setScheduleForm({ ...scheduleForm, notes: e.target.value })}
                    rows={3}
                  />
                </div>

                <Button onClick={handleScheduleCall} className="w-full">
                  Schedule Call
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Calendar */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle>Calendar</CardTitle>
            </CardHeader>
            <CardContent>
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                className="rounded-md border"
              />
            </CardContent>
          </Card>

          {/* Scheduled Calls */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="today" className="space-y-4">
              <TabsList>
                <TabsTrigger value="today">Today</TabsTrigger>
                <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                <TabsTrigger value="all">All Calls</TabsTrigger>
              </TabsList>

              <TabsContent value="today" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Today's Calls</CardTitle>
                    <CardDescription>
                      {todaysCalls.length} call{todaysCalls.length !== 1 ? "s" : ""} scheduled for today
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {todaysCalls.length > 0 ? (
                      <div className="space-y-4">
                        {todaysCalls.map((call) => {
                          const { date, time } = formatDateTime(call.date)
                          return (
                            <div key={call.id} className="flex items-center justify-between p-4 border rounded-lg">
                              <div className="flex items-center gap-4">
                                <Avatar className="h-12 w-12">
                                  <AvatarImage
                                    src={call.participant.avatar || "/placeholder.svg"}
                                    alt={call.participant.name}
                                  />
                                  <AvatarFallback>
                                    {call.participant.name
                                      .split(" ")
                                      .map((n) => n[0])
                                      .join("")}
                                  </AvatarFallback>
                                </Avatar>
                                <div>
                                  <h3 className="font-semibold">{call.title}</h3>
                                  <p className="text-sm text-gray-600">with {call.participant.name}</p>
                                  <div className="flex items-center gap-4 mt-1">
                                    <div className="flex items-center gap-1 text-sm text-gray-500">
                                      <Clock className="h-3 w-3" />
                                      {time} ({call.duration}min)
                                    </div>
                                    <div className="flex items-center gap-1 text-sm text-gray-500">
                                      {getTypeIcon(call.type)}
                                      {call.type === "in-person" ? call.location : call.type}
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="flex items-center gap-2">
                                <Badge className={getStatusColor(call.status)}>
                                  {getStatusIcon(call.status)}
                                  <span className="ml-1 capitalize">{call.status}</span>
                                </Badge>
                                <Button size="sm" variant="outline" className="bg-transparent">
                                  Join
                                </Button>
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    ) : (
                      <div className="text-center py-8">
                        <CalendarIcon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                        <p className="text-gray-500">No calls scheduled for today</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="upcoming" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Upcoming Calls</CardTitle>
                    <CardDescription>Your scheduled calls for the coming days</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {upcomingCalls.map((call) => {
                        const { date, time } = formatDateTime(call.date)
                        return (
                          <div key={call.id} className="flex items-center justify-between p-4 border rounded-lg">
                            <div className="flex items-center gap-4">
                              <Avatar className="h-12 w-12">
                                <AvatarImage
                                  src={call.participant.avatar || "/placeholder.svg"}
                                  alt={call.participant.name}
                                />
                                <AvatarFallback>
                                  {call.participant.name
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                                </AvatarFallback>
                              </Avatar>
                              <div>
                                <h3 className="font-semibold">{call.title}</h3>
                                <p className="text-sm text-gray-600">with {call.participant.name}</p>
                                <div className="flex items-center gap-4 mt-1">
                                  <div className="flex items-center gap-1 text-sm text-gray-500">
                                    <CalendarIcon className="h-3 w-3" />
                                    {date} at {time}
                                  </div>
                                  <div className="flex items-center gap-1 text-sm text-gray-500">
                                    {getTypeIcon(call.type)}
                                    {call.type === "in-person" ? call.location : call.type}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <Badge className={getStatusColor(call.status)}>
                                {getStatusIcon(call.status)}
                                <span className="ml-1 capitalize">{call.status}</span>
                              </Badge>
                              <Button size="sm" variant="outline" className="bg-transparent">
                                Reschedule
                              </Button>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="all" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>All Scheduled Calls</CardTitle>
                    <CardDescription>Complete history of your calls</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {scheduledCalls.map((call) => {
                        const { date, time } = formatDateTime(call.date)
                        return (
                          <div key={call.id} className="flex items-center justify-between p-4 border rounded-lg">
                            <div className="flex items-center gap-4">
                              <Avatar className="h-12 w-12">
                                <AvatarImage
                                  src={call.participant.avatar || "/placeholder.svg"}
                                  alt={call.participant.name}
                                />
                                <AvatarFallback>
                                  {call.participant.name
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                                </AvatarFallback>
                              </Avatar>
                              <div>
                                <h3 className="font-semibold">{call.title}</h3>
                                <p className="text-sm text-gray-600">with {call.participant.name}</p>
                                <div className="flex items-center gap-4 mt-1">
                                  <div className="flex items-center gap-1 text-sm text-gray-500">
                                    <CalendarIcon className="h-3 w-3" />
                                    {date} at {time}
                                  </div>
                                  <div className="flex items-center gap-1 text-sm text-gray-500">
                                    {getTypeIcon(call.type)}
                                    {call.type === "in-person" ? call.location : call.type}
                                  </div>
                                </div>
                                {call.notes && <p className="text-xs text-gray-500 mt-1">{call.notes}</p>}
                              </div>
                            </div>
                            <Badge className={getStatusColor(call.status)}>
                              {getStatusIcon(call.status)}
                              <span className="ml-1 capitalize">{call.status}</span>
                            </Badge>
                          </div>
                        )
                      })}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}
