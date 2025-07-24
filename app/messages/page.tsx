"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, Search, Phone, Video, MoreVertical, Send, Paperclip, Smile, Calendar, Star } from "lucide-react"

interface Message {
  id: string
  senderId: string
  content: string
  timestamp: Date
  type: "text" | "image" | "file" | "system"
  read: boolean
}

interface Conversation {
  id: string
  participant: {
    id: string
    name: string
    avatar: string
    role: "coach" | "player"
    status: "online" | "offline" | "away"
  }
  lastMessage: Message
  unreadCount: number
  isPinned: boolean
}

export default function MessagesPage() {
  const [selectedConversation, setSelectedConversation] = useState<string | null>("1")
  const [newMessage, setNewMessage] = useState("")
  const [searchQuery, setSearchQuery] = useState("")

  const conversations: Conversation[] = [
    {
      id: "1",
      participant: {
        id: "coach1",
        name: "Mike Johnson",
        avatar: "/placeholder.svg?height=40&width=40",
        role: "coach",
        status: "online",
      },
      lastMessage: {
        id: "msg1",
        senderId: "coach1",
        content: "Great session today! Let's work on your shooting form next time.",
        timestamp: new Date(Date.now() - 5 * 60 * 1000),
        type: "text",
        read: false,
      },
      unreadCount: 2,
      isPinned: true,
    },
    {
      id: "2",
      participant: {
        id: "player1",
        name: "Sarah Mitchell",
        avatar: "/placeholder.svg?height=40&width=40",
        role: "player",
        status: "away",
      },
      lastMessage: {
        id: "msg2",
        senderId: "player1",
        content: "Thanks for the training tips! When is our next session?",
        timestamp: new Date(Date.now() - 30 * 60 * 1000),
        type: "text",
        read: true,
      },
      unreadCount: 0,
      isPinned: false,
    },
    {
      id: "3",
      participant: {
        id: "coach2",
        name: "Alex Rodriguez",
        avatar: "/placeholder.svg?height=40&width=40",
        role: "coach",
        status: "offline",
      },
      lastMessage: {
        id: "msg3",
        senderId: "coach2",
        content: "I've scheduled our strength training session for tomorrow at 3 PM.",
        timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
        type: "text",
        read: true,
      },
      unreadCount: 0,
      isPinned: false,
    },
  ]

  const messages: Message[] = [
    {
      id: "1",
      senderId: "coach1",
      content: "Hi Jake! How are you feeling after yesterday's training?",
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
      type: "text",
      read: true,
    },
    {
      id: "2",
      senderId: "current-user",
      content: "I'm feeling good! My shooting has definitely improved. Thanks for the tips on my form.",
      timestamp: new Date(Date.now() - 90 * 60 * 1000),
      type: "text",
      read: true,
    },
    {
      id: "3",
      senderId: "coach1",
      content: "That's great to hear! I noticed your follow-through is much more consistent now.",
      timestamp: new Date(Date.now() - 60 * 60 * 1000),
      type: "text",
      read: true,
    },
    {
      id: "4",
      senderId: "coach1",
      content: "Great session today! Let's work on your shooting form next time.",
      timestamp: new Date(Date.now() - 5 * 60 * 1000),
      type: "text",
      read: false,
    },
  ]

  const selectedConv = conversations.find((c) => c.id === selectedConversation)

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      console.log("Sending message:", newMessage)
      setNewMessage("")
    }
  }

  const formatTime = (date: Date) => {
    const now = new Date()
    const diff = now.getTime() - date.getTime()

    if (diff < 60 * 1000) return "Just now"
    if (diff < 60 * 60 * 1000) return `${Math.floor(diff / (60 * 1000))}m ago`
    if (diff < 24 * 60 * 60 * 1000) return `${Math.floor(diff / (60 * 60 * 1000))}h ago`
    return date.toLocaleDateString()
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "online":
        return "bg-green-500"
      case "away":
        return "bg-yellow-500"
      default:
        return "bg-muted-foreground"
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-3 mb-6">
          <MessageCircle className="h-8 w-8 text-blue-600 dark:text-blue-400" />
          <h1 className="text-3xl font-bold text-foreground">Messages</h1>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 h-[calc(100vh-200px)]">
          {/* Conversations List */}
          <Card className="lg:col-span-1 border-border">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg text-foreground">Conversations</CardTitle>
                <Button size="sm" variant="outline">
                  New Chat
                </Button>
              </div>
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search conversations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="space-y-1 max-h-[500px] overflow-y-auto">
                {conversations.map((conversation) => (
                  <div
                    key={conversation.id}
                    onClick={() => setSelectedConversation(conversation.id)}
                    className={`p-4 cursor-pointer hover:bg-muted/50 transition-colors ${
                      selectedConversation === conversation.id
                        ? "bg-blue-50 dark:bg-blue-950/20 border-r-2 border-blue-600 dark:border-blue-400"
                        : ""
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="relative">
                        <Avatar className="h-12 w-12">
                          <AvatarImage
                            src={conversation.participant.avatar || "/placeholder.svg"}
                            alt={conversation.participant.name}
                          />
                          <AvatarFallback>
                            {conversation.participant.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div
                          className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-background ${getStatusColor(conversation.participant.status)}`}
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <div className="flex items-center gap-2">
                            <h3 className="font-semibold text-sm truncate text-foreground">
                              {conversation.participant.name}
                            </h3>
                            <Badge variant="outline" className="text-xs">
                              {conversation.participant.role}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-1">
                            {conversation.isPinned && <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />}
                            <span className="text-xs text-muted-foreground">
                              {formatTime(conversation.lastMessage.timestamp)}
                            </span>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground truncate">{conversation.lastMessage.content}</p>
                        {conversation.unreadCount > 0 && (
                          <Badge className="mt-1 bg-blue-600 dark:bg-blue-700 text-xs px-2 py-0">
                            {conversation.unreadCount}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Chat Area */}
          <Card className="lg:col-span-2 flex flex-col border-border">
            {selectedConv ? (
              <>
                {/* Chat Header */}
                <CardHeader className="pb-3 border-b border-border">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <Avatar className="h-10 w-10">
                          <AvatarImage
                            src={selectedConv.participant.avatar || "/placeholder.svg"}
                            alt={selectedConv.participant.name}
                          />
                          <AvatarFallback>
                            {selectedConv.participant.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div
                          className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-background ${getStatusColor(selectedConv.participant.status)}`}
                        />
                      </div>
                      <div>
                        <h2 className="font-semibold text-foreground">{selectedConv.participant.name}</h2>
                        <p className="text-sm text-muted-foreground capitalize">{selectedConv.participant.status}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <Button size="sm" variant="outline">
                        <Phone className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="outline">
                        <Video className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="outline">
                        <Calendar className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="outline">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>

                {/* Messages */}
                <CardContent className="flex-1 p-4 overflow-y-auto">
                  <div className="space-y-4">
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex ${message.senderId === "current-user" ? "justify-end" : "justify-start"}`}
                      >
                        <div className={`max-w-[70%] ${message.senderId === "current-user" ? "order-2" : "order-1"}`}>
                          <div
                            className={`px-4 py-2 rounded-lg ${
                              message.senderId === "current-user"
                                ? "bg-blue-600 dark:bg-blue-700 text-white"
                                : "bg-muted text-foreground"
                            }`}
                          >
                            <p className="text-sm">{message.content}</p>
                          </div>
                          <p className="text-xs text-muted-foreground mt-1 px-1">{formatTime(message.timestamp)}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>

                {/* Message Input */}
                <div className="p-4 border-t border-border">
                  <div className="flex items-center gap-2">
                    <Button size="sm" variant="outline">
                      <Paperclip className="h-4 w-4" />
                    </Button>
                    <div className="flex-1 relative">
                      <Input
                        placeholder="Type your message..."
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                        className="pr-10"
                      />
                      <Button size="sm" variant="ghost" className="absolute right-1 top-1/2 -translate-y-1/2">
                        <Smile className="h-4 w-4" />
                      </Button>
                    </div>
                    <Button onClick={handleSendMessage} disabled={!newMessage.trim()}>
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex-1 flex items-center justify-center">
                <div className="text-center">
                  <MessageCircle className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">Select a conversation</h3>
                  <p className="text-muted-foreground">Choose a conversation from the list to start messaging</p>
                </div>
              </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  )
}
