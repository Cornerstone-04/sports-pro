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
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MessageCircle } from "lucide-react"

interface MessageButtonProps {
  recipientName: string
  recipientId: string
  recipientType: "coach" | "player"
  className?: string
}

export function MessageButton({ recipientName, recipientId, recipientType, className }: MessageButtonProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [messageData, setMessageData] = useState({
    subject: "",
    message: "",
    priority: "normal",
  })

  const handleSendMessage = () => {
    console.log("Sending message to:", recipientId, messageData)
    // Here you would integrate with your messaging API
    setIsOpen(false)
    setMessageData({ subject: "", message: "", priority: "normal" })
  }

  const subjectOptions =
    recipientType === "coach"
      ? ["Training Inquiry", "Schedule Question", "Technique Help", "General Question"]
      : ["Training Feedback", "Schedule Confirmation", "Progress Update", "General Message"]

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className={className}>
          <MessageCircle className="h-4 w-4 mr-2" />
          Message {recipientType === "coach" ? "Coach" : "Player"}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Send Message</DialogTitle>
          <DialogDescription>Send a message to {recipientName}</DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <div>
            <Label htmlFor="subject">Subject</Label>
            <Select onValueChange={(value) => setMessageData({ ...messageData, subject: value })}>
              <SelectTrigger>
                <SelectValue placeholder="Select a subject" />
              </SelectTrigger>
              <SelectContent>
                {subjectOptions.map((option) => (
                  <SelectItem key={option} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              placeholder={`Hi ${recipientName}, I wanted to discuss...`}
              value={messageData.message}
              onChange={(e) => setMessageData({ ...messageData, message: e.target.value })}
              rows={4}
            />
          </div>

          <div>
            <Label htmlFor="priority">Priority</Label>
            <Select onValueChange={(value) => setMessageData({ ...messageData, priority: value })}>
              <SelectTrigger>
                <SelectValue placeholder="Normal" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="low">Low</SelectItem>
                <SelectItem value="normal">Normal</SelectItem>
                <SelectItem value="high">High</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button
            onClick={handleSendMessage}
            className="w-full"
            disabled={!messageData.subject || !messageData.message}
          >
            Send Message
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
