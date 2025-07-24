import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, MapPin, Clock, DollarSign } from "lucide-react"
import Link from "next/link"

export default function CoachesPage() {
  const coaches = [
    {
      id: 1,
      name: "Mike Johnson",
      sport: "Basketball",
      experience: 8,
      rating: 4.9,
      reviews: 127,
      location: "Los Angeles, CA",
      hourlyRate: 75,
      image: "/placeholder.svg?height=150&width=150",
      specialties: ["Shooting", "Defense", "Youth Training"],
      availability: "Available",
    },
    {
      id: 2,
      name: "Sarah Wilson",
      sport: "Soccer",
      experience: 12,
      rating: 4.8,
      reviews: 89,
      location: "Miami, FL",
      hourlyRate: 60,
      image: "/placeholder.svg?height=150&width=150",
      specialties: ["Dribbling", "Strategy", "Goalkeeping"],
      availability: "Busy",
    },
    {
      id: 3,
      name: "Alex Rodriguez",
      sport: "Tennis",
      experience: 15,
      rating: 5.0,
      reviews: 203,
      location: "New York, NY",
      hourlyRate: 90,
      image: "/placeholder.svg?height=150&width=150",
      specialties: ["Serve", "Backhand", "Mental Game"],
      availability: "Available",
    },
    {
      id: 4,
      name: "Emily Chen",
      sport: "Swimming",
      experience: 6,
      rating: 4.7,
      reviews: 45,
      location: "San Francisco, CA",
      hourlyRate: 55,
      image: "/placeholder.svg?height=150&width=150",
      specialties: ["Freestyle", "Technique", "Endurance"],
      availability: "Available",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Find Your Perfect Coach</h1>
          <p className="text-gray-600">Connect with experienced coaches in your sport</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coaches.map((coach) => (
            <Card key={coach.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardHeader className="text-center pb-4">
                <img
                  src={coach.image || "/placeholder.svg"}
                  alt={coach.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <CardTitle className="text-xl">{coach.name}</CardTitle>
                <CardDescription className="flex items-center justify-center gap-2">
                  <Badge variant="secondary">{coach.sport}</Badge>
                  <Badge variant={coach.availability === "Available" ? "default" : "destructive"}>
                    {coach.availability}
                  </Badge>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{coach.rating}</span>
                    <span className="text-gray-500">({coach.reviews} reviews)</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-600">
                    <Clock className="h-4 w-4" />
                    <span>{coach.experience} years</span>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-gray-600 text-sm">
                  <MapPin className="h-4 w-4" />
                  <span>{coach.location}</span>
                </div>

                <div className="flex items-center gap-1 text-green-600 font-medium">
                  <DollarSign className="h-4 w-4" />
                  <span>${coach.hourlyRate}/hour</span>
                </div>

                <div>
                  <p className="text-sm font-medium mb-2">Specialties:</p>
                  <div className="flex flex-wrap gap-1">
                    {coach.specialties.map((specialty) => (
                      <Badge key={specialty} variant="outline" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2 pt-2">
                  <Button asChild className="flex-1">
                    <Link href={`/coaches/${coach.id}`}>View Profile</Link>
                  </Button>
                  <Button variant="outline" className="flex-1 bg-transparent">
                    Message
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
            <Link href="/coaches/register">Become a Coach</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
