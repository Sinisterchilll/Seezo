import React from 'react'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
                  <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
                  <form className="space-y-4">
                    <Input placeholder="Your Name" />
                    <Input type="email" placeholder="Your Email" />
                    <Textarea placeholder="Your Message" />
                    <Button type="submit">Send Message</Button>
                  </form>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                  <div className="space-y-2">
                    <p className="flex items-center"><Mail className="mr-2 h-5 w-5" /> contact@example.com</p>
                    <p className="flex items-center"><Phone className="mr-2 h-5 w-5" /> +1 (555) 123-4567</p>
                    <p className="flex items-center"><MapPin className="mr-2 h-5 w-5" /> 123 Main St, City, Country</p>
                  </div>
                </div>
        </div>
      </div>
    </section>
  )
}