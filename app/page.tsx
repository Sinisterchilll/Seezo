"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { useRouter } from "next/navigation";

export default function SeezoLanding() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="container mx-auto px-4 py-6 flex justify-around items-center">
        <div className="text-2xl font-bold">Seezo</div>
        <div>
        <ul className="flex space-x-6 text-purple-100">
            <li><a href="#" className="hover:text-gray-300">Home</a></li>
            <li><a href="#" className="hover:text-gray-300">Features</a></li>
            <li><a href="#" className="hover:text-gray-300">Pricing</a></li>
            <li><a href="#" className="hover:text-gray-300">Contact</a></li>
          </ul>
        </div>
        <nav>
        <Button className="bg-blue-600 text-white hover:bg-blue-700 mx-4" onClick={() => {
              router.push('/component/sign-up');
            }}>
              Start for free<ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button className="bg-black text-white border border-purple-100">Learn More</Button>
        </nav>
      </header>

      <main>
        <section className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-6xl font-normal max-w-5xl mx-auto mb-6">Security design reviews for every feature your company builds</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-purple-100">
          Seezo provides context-specific security requirements to developers before they start coding
          </p>
          <div className="flex justify-center space-x-4">
            <Button className="bg-blue-600 text-white hover:bg-blue-700" onClick={() => {
              router.push('/assesment');
            }}>
              Start for free<ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button className="bg-black text-white border border-purple-100">Learn More</Button>
          </div>
        </section>

        <section className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Create New Assesments</h3>
              <p>Create new assesments with ease.</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">See Your Assesments</h3>
              <p>See all your assesments with ease.</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Get Results for Assesments</h3>
              <p>Get results for your assesments with ease.</p>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Seezo?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="flex items-start">
              <CheckCircle2 className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" />
              <p>Create new assesments with ease.</p>
            </div>
            <div className="flex items-start">
              <CheckCircle2 className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" />
              <p>See all your assesments with ease.</p>
            </div>
            <div className="flex items-start">
              <CheckCircle2 className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" />
              <p>Get results for your assesments with ease.</p>
            </div>
            <div className="flex items-start">
              <CheckCircle2 className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" />
              <p>Get results for your assesments with ease.</p>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-20 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Development Process?</h2>
          <p className="text-xl mb-8">Join thousands of developers who are already using Seezo to revolutionize their workflow.</p>
          <div className="flex justify-center space-x-4">
            <Input type="email" placeholder="Enter your email" className="max-w-xs" />
            <Button className="bg-white text-black hover:bg-gray-200">
              Get Early Access
            </Button>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-bold mb-4 md:mb-0">Seezo</div>
            <nav>
              <ul className="flex space-x-6">
                <li><a href="#" className="hover:text-gray-300">Privacy</a></li>
                <li><a href="#" className="hover:text-gray-300">Terms</a></li>
                <li><a href="#" className="hover:text-gray-300">Contact</a></li>
              </ul>
            </nav>
          </div>
          <div className="mt-6 text-center text-sm text-gray-500">
            © 2024 Seezo. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}