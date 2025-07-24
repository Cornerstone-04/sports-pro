"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "lucide-react"

interface ScheduleButtonProps {
  recipientName: string
  recipientId: string
  recipientType: "coach" | "player"
  className?: string
}

export function ScheduleButton({ recipientName, recipientId, recipientType, className }: ScheduleButtonProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [scheduleData, setScheduleData] = useState({
    title: "",
    date: "",
    time: "",
    duration: "60",
    type: "video",
    location: "",
    notes: "",
  })

  const handleScheduleCall = () => {
    console.log("Scheduling call with:", recipientId, scheduleData)
    // Here you would integrate with your scheduling API
    setIsOpen(false)
    setScheduleData({
      title: "",
      date: "",
      time: "",
      duration: "60",
      type: "video",
      location: "",
      notes: "",
    })
  }

  const callTitles =
    recipientType === "coach"
      ? ["Training Session Review", "Technique Discussion", "Progress Check-in", "Goal Setting Session"]
      : ["Training Feedback", "Progress Update", "Skill Assessment", "General Discussion"]

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className={className}>
          <Calendar className="h-4 w-4 mr-2" />
          Schedule Call
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Schedule a Call</DialogTitle>
          <DialogDescription>Schedule a call with {recipientName}</DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <div>
            <Label htmlFor="title">Call Title</Label>
            <Select onValueChange={(value) => setScheduleData({ ...scheduleData, title: value })}>
              <SelectTrigger>
                <SelectValue placeholder="Select call purpose" />
              </SelectTrigger>
              <SelectContent>
                {callTitles.map((title) => (
                  <SelectItem key={title} value={title}>
                    {title}
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
                value={scheduleData.date}
                onChange={(e) => setScheduleData({ ...scheduleData, date: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor="time">Time</Label>
              <Input
                id="time"
                type="time"
                value={scheduleData.time}
                onChange={(e) => setScheduleData({ ...scheduleData, time: e.target.value })}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="duration">Duration</Label>
              <Select onValueChange={(value) => setScheduleData({ ...scheduleData, duration: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="60 min" />
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
              <Select onValueChange={(value) => setScheduleData({ ...scheduleData, type: value })}>
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

          {scheduleData.type === "in-person" && (
            <div>
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                placeholder="e.g., SportsPro Gym, Downtown"
                value={scheduleData.location}
                onChange={(e) => setScheduleData({ ...scheduleData, location: e.target.value })}
              />
            </div>
          )}

          <div>
            <Label htmlFor="notes">Notes (Optional)</Label>
            <Textarea
              id="notes"
              placeholder="Add any additional notes..."
              value={scheduleData.notes}
              onChange={(e) => setScheduleData({ ...scheduleData, notes: e.target.value })}
              rows={3}
            />
          </div>

          <Button
            onClick={handleScheduleCall}
            className="w-full"
            disabled={!scheduleData.title || !scheduleData.date || !scheduleData.time}
          >
            Schedule Call
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
