import type React from "react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface FeatureCardProps {
  title: string
  description: string
  icon?: React.ReactNode
  href?: string
  className?: string
}

export function FeatureCard({ title, description, icon, href, className }: FeatureCardProps) {
  const CardContent = (
    <div
      className={cn(
        "group relative p-6 rounded-lg border bg-card text-card-foreground transition-all hover:shadow-md",
        className,
      )}
    >
      {icon && (
        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
          {icon}
        </div>
      )}
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-muted-foreground">{description}</p>

      {href && (
        <div className="mt-4 flex items-center text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
          Tovább
          <ArrowRight className="ml-1 h-4 w-4" />
        </div>
      )}
    </div>
  )

  if (href) {
    return (
      <Link href={href} className="block">
        {CardContent}
      </Link>
    )
  }

  return CardContent
}

