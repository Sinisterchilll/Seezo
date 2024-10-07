import React from 'react'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"

export default function FAQ() {
  return (
    <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
        <AccordionItem value="item-1">
                  <AccordionTrigger>Question 1: What is [Your Product/Service]?</AccordionTrigger>
                  <AccordionContent>
                    Answer this question with a clear and concise explanation of your product or service. Highlight its main features and benefits.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Question 2: How does pricing work?</AccordionTrigger>
                  <AccordionContent>
                    Explain your pricing structure, any tiers or plans available, and what&apos;s included in each. Be transparent about any additional costs.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Question 3: Do you offer customer support?</AccordionTrigger>
                  <AccordionContent>
                    Describe your customer support options, such as email, phone, or chat support. Mention any self-help resources like documentation or tutorials.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>Question 4: Can I cancel my subscription at any time?</AccordionTrigger>
                  <AccordionContent>
                    Clearly state your cancellation policy. If you offer a money-back guarantee or free trial, mention it here.
                  </AccordionContent>
                </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}