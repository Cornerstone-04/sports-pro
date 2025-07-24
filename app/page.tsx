import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Trophy, CreditCard, FileText, Video, UserCheck } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-background dark:from-green-950/20 dark:to-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-foreground mb-6">
            Welcome to <span className="text-green-600 dark:text-green-400">SportsPro</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            The ultimate platform connecting coaches, players, and sports enthusiasts. Manage your sports career, make
            payments, and share your journey.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button
              asChild
              size="lg"
              className="bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600"
            >
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
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Platform Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow border-border">
              <CardHeader>
                <UserCheck className="h-12 w-12 text-green-600 dark:text-green-400 mb-4" />
                <CardTitle className="text-foreground">Coaches Hub</CardTitle>
                <CardDescription>Register, create profiles, and manage your coaching career</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="/coaches">Explore Coaches</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-border">
              <CardHeader>
                <Users className="h-12 w-12 text-blue-600 dark:text-blue-400 mb-4" />
                <CardTitle className="text-foreground">Players Hub</CardTitle>
                <CardDescription>Connect with coaches, track progress, and build your sports profile</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="/players">Join Players</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-border">
              <CardHeader>
                <CreditCard className="h-12 w-12 text-purple-600 dark:text-purple-400 mb-4" />
                <CardTitle className="text-foreground">Payment Hub</CardTitle>
                <CardDescription>Secure payments through Paystack for training and services</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="/payments">Make Payment</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-border">
              <CardHeader>
                <FileText className="h-12 w-12 text-orange-600 dark:text-orange-400 mb-4" />
                <CardTitle className="text-foreground">Form Builder</CardTitle>
                <CardDescription>Create custom forms for registrations, surveys, and assessments</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="/forms">Create Forms</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-border">
              <CardHeader>
                <Video className="h-12 w-12 text-red-600 dark:text-red-400 mb-4" />
                <CardTitle className="text-foreground">Video Hub</CardTitle>
                <CardDescription>Upload and share training videos, highlights, and tutorials</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="/videos">Upload Videos</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-border">
              <CardHeader>
                <Trophy className="h-12 w-12 text-yellow-600 dark:text-yellow-400 mb-4" />
                <CardTitle className="text-foreground">Achievements</CardTitle>
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
      <section className="py-16 px-4 bg-green-600 dark:bg-green-800 text-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold mb-2">500+</h3>
              <p className="text-green-100 dark:text-green-200">Active Coaches</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">2,000+</h3>
              <p className="text-green-100 dark:text-green-200">Registered Players</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">50+</h3>
              <p className="text-green-100 dark:text-green-200">Sports Categories</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">10,000+</h3>
              <p className="text-green-100 dark:text-green-200">Training Sessions</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
