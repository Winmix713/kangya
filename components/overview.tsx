import type React from "react"
import { cn } from "@/lib/utils"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

interface FeatureProps {
  title: string
  description: string
  icon?: React.ReactNode
  href?: string
}

interface OverviewProps {
  title?: string
  description?: string
  features: FeatureProps[]
  className?: string
}

export default function Overview({ title = "Áttekintés", description, features, className }: OverviewProps) {
  return (
    <div className={cn("space-y-8", className)}>
      <div className="space-y-2">
        <h2 className="text-3xl font-bold">{title}</h2>
        {description && <p className="text-xl text-muted-foreground">{description}</p>}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="p-6 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 hover:shadow-md transition-shadow"
          >
            {feature.icon && <div className="mb-4 text-primary">{feature.icon}</div>}
            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
            <p className="text-muted-foreground mb-4">{feature.description}</p>
            {feature.href && (
              <Link
                href={feature.href}
                className="inline-flex items-center text-sm font-medium text-primary hover:underline"
              >
                Tovább <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

