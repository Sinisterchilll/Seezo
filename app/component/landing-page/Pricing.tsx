import React from 'react'
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight } from 'lucide-react'
import axios from 'axios'
import Link from 'next/link'

export default function Pricing() {

    const buyProduct = async () => {
  
        try {
          const response = await axios.post("/api/payment/lemonsqueezy/order", {
            productId: "529363",
          });
      
          window.open(response.data.checkoutUrl, "_blank");
        } catch (error) {
          console.error(error);
          alert("Failed to buy product");
        }
      };

  return (
    <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Pricing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card>
                  <CardHeader>
                    <CardTitle>Basic Plan</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-4xl font-bold mb-4">$9.99/mo</p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center">
                        <ChevronRight className="h-5 w-5 mr-2 text-primary" /> Feature 1
                      </li>
                      <li className="flex items-center">
                        <ChevronRight className="h-5 w-5 mr-2 text-primary" /> Feature 2
                      </li>
                      <li className="flex items-center">
                        <ChevronRight className="h-5 w-5 mr-2 text-primary" /> Feature 3
                      </li>
                    </ul>
                    <Button className="w-full" asChild>
                <Link href={`/api/payment/razorpay/checkout/?amount=999`}>Razorpay</Link>
              </Button>
                  </CardContent>
                </Card>
                <Card className="border-2 border-primary">
                  <CardHeader>
                    <CardTitle>Pro Plan</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-4xl font-bold mb-4">$19.99/mo</p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center">
                        <ChevronRight className="h-5 w-5 mr-2 text-primary" /> All Basic Features
                      </li>
                      <li className="flex items-center">
                        <ChevronRight className="h-5 w-5 mr-2 text-primary" /> Pro Feature 1
                      </li>
                      <li className="flex items-center">
                        <ChevronRight className="h-5 w-5 mr-2 text-primary" /> Pro Feature 2
                      </li>
                    </ul>
                    <Button className="w-full bg-primary text-primary-foreground" onClick={buyProduct}>lemonsqueezy</Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Enterprise Plan</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-4xl font-bold mb-4">Custom</p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center">
                        <ChevronRight className="h-5 w-5 mr-2 text-primary" /> All Pro Features
                      </li>
                      <li className="flex items-center">
                        <ChevronRight className="h-5 w-5 mr-2 text-primary" /> Custom Integration
                      </li>
                      <li className="flex items-center">
                        <ChevronRight className="h-5 w-5 mr-2 text-primary" /> Dedicated Support
                      </li>
                    </ul>
                    <Button className="w-full" asChild>
                      <Link href="/">Contact Sales</Link>
                    </Button>
                  </CardContent>
                </Card>
        </div>
      </div>
    </section>
  )
}