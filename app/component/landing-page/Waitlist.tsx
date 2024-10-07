import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Waitlist() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Add your form submission logic here
    console.log('Form submitted with email:', email)
    // Reset the email input after submission if needed
    setEmail('')
  }

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Join Our Waitlist</h2>
            <p className="mx-auto max-w-[600px] md:text-xl">
              Be the first to know when we launch. Sign up for exclusive updates and early access.
            </p>
          </div>
          <div className="w-full max-w-sm space-y-2">
            <form className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2" onSubmit={handleSubmit}>
              <Input
                className="flex-1 bg-primary-foreground text-primary placeholder:text-gray-500"
                placeholder="Enter your email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button type="submit" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                Join Waitlist
              </Button>
            </form>
            <p className="text-xs">
              By subscribing, you agree to our Terms & Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}