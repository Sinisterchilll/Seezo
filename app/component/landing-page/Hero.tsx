import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Your Product Tagline Here
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Describe your product or service in a compelling way. Highlight its main benefit or unique selling proposition.
            </p>
          </div>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="text-primary border-primary hover:bg-primary/10 w-full sm:w-auto">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}