import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar, Trophy } from "lucide-react"
import Link from "next/link"

export default function PlayersPage() {
  const players = [
    {
      id: 1,
      name: "Jake Thompson",
      sport: "Basketball",
      age: 16,
      skillLevel: "Intermediate",
      location: "Chicago, IL",
      joinDate: "2024-01-15",
      image: "/placeholder.svg?height=150&width=150",
      achievements: ["Regional Champion", "MVP Award"],
      goals: "College Scholarship",
    },
    {
      id: 2,
      name: "Maria Garcia",
      sport: "Soccer",
      age: 14,
      skillLevel: "Advanced",
      location: "Austin, TX",
      joinDate: "2023-11-20",
      image: "/placeholder.svg?height=150&width=150",
      achievements: ["State Finalist", "Team Captain"],
      goals: "National Team",
    },
    {
      id: 3,
      name: "David Kim",
      sport: "Tennis",
      age: 17,
      skillLevel: "Advanced",
      location: "Seattle, WA",
      joinDate: "2024-02-10",
      image: "/placeholder.svg?height=150&width=150",
      achievements: ["Junior Tournament Winner"],
      goals: "Professional Career",
    },
    {
      id: 4,
      name: "Sophie Brown",
      sport: "Swimming",
      age: 15,
      skillLevel: "Intermediate",
      location: "Phoenix, AZ",
      joinDate: "2024-03-05",
      image: "/placeholder.svg?height=150&width=150",
      achievements: ["School Record Holder"],
      goals: "Olympic Trials",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Player Community</h1>
          <p className="text-gray-600">Connect with fellow athletes and track your progress</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {players.map((player) => (
            <Card key={player.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardHeader className="text-center pb-4">
                <img
                  src={player.image || "/placeholder.svg"}
                  alt={player.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <CardTitle className="text-xl">{player.name}</CardTitle>
                <CardDescription className="flex items-center justify-center gap-2">
                  <Badge variant="secondary">{player.sport}</Badge>
                  <Badge variant="outline">Age {player.age}</Badge>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Skill Level:</span>
                  <Badge variant={player.skillLevel === "Advanced" ? "default" : "secondary"}>
                    {player.skillLevel}
                  </Badge>
                </div>

                <div className="flex items-center gap-1 text-gray-600 text-sm">
                  <MapPin className="h-4 w-4" />
                  <span>{player.location}</span>
                </div>

                <div className="flex items-center gap-1 text-gray-600 text-sm">
                  <Calendar className="h-4 w-4" />
                  <span>Joined {new Date(player.joinDate).toLocaleDateString()}</span>
                </div>

                <div>
                  <p className="text-sm font-medium mb-2 flex items-center gap-1">
                    <Trophy className="h-4 w-4" />
                    Achievements:
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {player.achievements.map((achievement) => (
                      <Badge key={achievement} variant="outline" className="text-xs">
                        {achievement}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-sm font-medium mb-1">Goal:</p>
                  <p className="text-sm text-gray-600">{player.goals}</p>
                </div>

                <div className="flex gap-2 pt-2">
                  <Button asChild className="flex-1">
                    <Link href={`/players/${player.id}`}>View Profile</Link>
                  </Button>
                  <Button variant="outline" className="flex-1 bg-transparent">
                    Connect
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
            <Link href="/players/register">Join as Player</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
