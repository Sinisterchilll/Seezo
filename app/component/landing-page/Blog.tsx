import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Blog() {
  return (
    <section id="blog" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Latest from Our Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card>
                  <CardContent className="pt-6">
                    <div className="aspect-video bg-gray-200 mb-4"></div>
                    <h3 className="text-xl font-bold mb-2">Blog Post Title 1</h3>
                    <p className="text-gray-500 mb-4">Brief excerpt or summary of the blog post goes here. Entice readers to click and read more.</p>
                    <Button variant="outline">Read More</Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="aspect-video bg-gray-200 mb-4"></div>
                    <h3 className="text-xl font-bold mb-2">Blog Post Title 2</h3>
                    <p className="text-gray-500 mb-4">Another interesting blog post summary. Keep it brief but informative to attract readers.</p>
                    <Button variant="outline">Read More</Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="aspect-video bg-gray-200 mb-4"></div>
                    <h3 className="text-xl font-bold mb-2">Blog Post Title 3</h3>
                    <p className="text-gray-500 mb-4">A third engaging blog post preview. Use this space to showcase your expertise and value.</p>
                    <Button variant="outline">Read More</Button>
                  </CardContent>
                </Card>
        </div>
      </div>
    </section>
  )
}