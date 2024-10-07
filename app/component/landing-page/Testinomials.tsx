import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Star } from 'lucide-react'

export default function Testimonials() {
  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center mb-4">
                      <Star className="h-5 w-5 text-yellow-500 mr-1" />
                      <Star className="h-5 w-5 text-yellow-500 mr-1" />
                      <Star className="h-5 w-5 text-yellow-500 mr-1" />
                      <Star className="h-5 w-5 text-yellow-500 mr-1" />
                      <Star className="h-5 w-5 text-yellow-500" />
                    </div>
                    <p className="text-gray-500 mb-4">&quot;Insert a compelling testimonial here. Describe how your product or service positively impacted this user.&quot;</p>
                    <p className="font-bold">&quot;- Jane D., Happy Customer&quot;</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center mb-4">
                      <Star className="h-5 w-5 text-yellow-500 mr-1" />
                      <Star className="h-5 w-5 text-yellow-500 mr-1" />
                      <Star className="h-5 w-5 text-yellow-500 mr-1" />
                      <Star className="h-5 w-5 text-yellow-500 mr-1" />
                      <Star className="h-5 w-5 text-yellow-500" />
                    </div>
                    <p className="text-gray-500 mb-4">&quot;Add another glowing review here. Focus on specific benefits or results the user experienced.&quot;</p>
                    <p className="font-bold">&quot;- John S., Satisfied User&quot;</p>
                  </CardContent>
                </Card>
        </div>
      </div>
    </section>
  )
}