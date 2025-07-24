import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Trophy, CreditCard, FileText, Video, UserCheck } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Welcome to <span className="text-green-600">SportsPro</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            The ultimate platform connecting coaches, players, and sports enthusiasts. Manage your sports career, make
            payments, and share your journey.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
              <Link href="/coaches/register">Join as Coach</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/players/register">Join as Player</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Platform Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <UserCheck className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle>Coaches Hub</CardTitle>
                <CardDescription>Register, create profiles, and manage your coaching career</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="/coaches">Explore Coaches</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Players Hub</CardTitle>
                <CardDescription>Connect with coaches, track progress, and build your sports profile</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="/players">Join Players</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CreditCard className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle>Payment Hub</CardTitle>
                <CardDescription>Secure payments through Paystack for training and services</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="/payments">Make Payment</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <FileText className="h-12 w-12 text-orange-600 mb-4" />
                <CardTitle>Form Builder</CardTitle>
                <CardDescription>Create custom forms for registrations, surveys, and assessments</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="/forms">Create Forms</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Video className="h-12 w-12 text-red-600 mb-4" />
                <CardTitle>Video Hub</CardTitle>
                <CardDescription>Upload and share training videos, highlights, and tutorials</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="/videos">Upload Videos</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Trophy className="h-12 w-12 text-yellow-600 mb-4" />
                <CardTitle>Achievements</CardTitle>
                <CardDescription>Track and showcase your sports achievements and milestones</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="/achievements">View Achievements</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-green-600 text-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold mb-2">500+</h3>
              <p className="text-green-100">Active Coaches</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">2,000+</h3>
              <p className="text-green-100">Registered Players</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">50+</h3>
              <p className="text-green-100">Sports Categories</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">10,000+</h3>
              <p className="text-green-100">Training Sessions</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
