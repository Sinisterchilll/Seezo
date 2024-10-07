"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useSession, signOut } from "next-auth/react"
import { Menu } from "lucide-react"

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { data: session, status } = useSession()

  const navItems = [
    { href: "#features", label: "Features" },
    { href: "#how-it-works", label: "How It Works" },
    { href: "#pricing", label: "Pricing" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#faq", label: "FAQ" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <>
      <header className="px-4 lg:px-6 h-14 flex items-center justify-between border-b bg-white">
        <Link className="flex items-center justify-center" href="/">
          
          <span className="ml-2 text-xl sm:text-3xl font-bold">Your Brand</span>
        </Link>

        <nav className="ml-auto hidden md:flex gap-4 sm:gap-6">
          {navItems.map((item) => (
            <Link key={item.href} className="text-sm font-medium hover:text-primary transition-colors" href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-4 px-4">
          {session ? (
            <>
              <span className="text-sm font-medium">{session.user?.name}</span>
              <Button variant="outline" size="sm" onClick={() => signOut()}>
                Sign Out
              </Button>
            </>
          ) : (
            <Link href="/component/sign-up">  
              <Button variant="default" size="sm" className="bg-primary text-white hover:bg-primary/90">
                Sign Up
              </Button>
            </Link>
          )}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </header>
      
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b">
          <nav className="flex flex-col p-4">
            {navItems.map((item) => (
              <Link key={item.href} className="text-sm font-medium hover:text-primary transition-colors py-2" href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  )
}