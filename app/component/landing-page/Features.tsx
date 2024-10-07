import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Zap, Lock, CreditCard } from "lucide-react"

export default function Features() {
  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Zap className="h-8 w-8 text-primary mb-2" />}
            title="Feature 1"
            description="Describe the first key feature of your product or service. Highlight its benefits to the user."
          />
          <FeatureCard
            icon={<Lock className="h-8 w-8 text-primary mb-2" />}
            title="Feature 2"
            description="Explain another important feature. Focus on how it solves a problem or improves the user's life."
          />
          <FeatureCard
            icon={<CreditCard className="h-8 w-8 text-primary mb-2" />}
            title="Feature 3"
            description="Highlight a third key feature. Emphasize its unique aspects or how it differentiates your offering."
          />
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <Card>
      <CardHeader>
        {icon}
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        {description}
      </CardContent>
    </Card>
  )
}