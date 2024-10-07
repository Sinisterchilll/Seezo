import React from 'react'
import { Card, CardContent } from "@/components/ui/card"

export default function Team() {
  return (
    <section id="team" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card>
                  <CardContent className="pt-6">
                    <div className="w-24 h-24 rounded-full bg-gray-200 mx-auto mb-4"></div>
                    <h3 className="text-xl font-bold text-center">Team Member 1</h3>
                    <p className="text-center text-gray-500">Position</p>
                    <p className="text-center mt-2">Brief bio or description of this team member&apos;s role and expertise.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="w-24 h-24 rounded-full bg-gray-200 mx-auto mb-4"></div>
                    <h3 className="text-xl font-bold text-center">Team Member 2</h3>
                    <p className="text-center text-gray-500">Position</p>
                    <p className="text-center mt-2">Brief bio or description of this team member&apos;s role and expertise.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="w-24 h-24 rounded-full bg-gray-200 mx-auto mb-4"></div>
                    <h3 className="text-xl font-bold text-center">Team Member 3</h3>
                    <p className="text-center text-gray-500">Position</p>
                    <p className="text-center mt-2">Brief bio or description of this team member&apos;s role and expertise.</p>
                  </CardContent>
                </Card>
        </div>
      </div>
    </section>
  )
}