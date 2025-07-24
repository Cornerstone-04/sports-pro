"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Trophy } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: "/coaches", label: "Coaches" },
    { href: "/players", label: "Players" },
    { href: "/payments", label: "Payments" },
    { href: "/forms", label: "Forms" },
    { href: "/videos", label: "Videos" },
  ]

  return (
    <nav className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Trophy className="h-8 w-8 text-green-600" />
            <span className="text-2xl font-bold text-gray-900">SportsPro</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-gray-600 hover:text-green-600 transition-colors">
                {item.label}
              </Link>
            ))}
            <Button asChild variant="outline">
              <Link href="/login">Login</Link>
            </Button>
            <Button asChild className="bg-green-600 hover:bg-green-700">
              <Link href="/register">Sign Up</Link>
            </Button>
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-gray-600 hover:text-green-600 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="/login">Login</Link>
                </Button>
                <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                  <Link href="/register">Sign Up</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
