import React from 'react'

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mb-4">1</div>
            <h3 className="text-xl font-bold mb-2">Step One</h3>
            <p className="text-gray-500">Describe the first step in using your product or service. Keep it simple and clear.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mb-4">2</div>
            <h3 className="text-xl font-bold mb-2">Step Two</h3>
            <p className="text-gray-500">Explain the second step. Focus on ease of use and any unique aspects of your process.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mb-4">3</div>
            <h3 className="text-xl font-bold mb-2">Step Three</h3>
            <p className="text-gray-500">Describe the final step or outcome. Emphasize the benefits or results users can expect.</p>
          </div>
        </div>
      </div>
    </section>
  )
}