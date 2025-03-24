import type React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

interface HeroProps {
  title: React.ReactNode
  subtitle: string
  primaryCta?: {
    text: string
    href: string
  }
  secondaryCta?: {
    text: string
    href: string
  }
  className?: string
}

export default function Hero({ title, subtitle, primaryCta, secondaryCta, className }: HeroProps) {
  return (
    <section className={cn(`bg-gradient-to-b from-secondary/50 to-background pt-32 pb-24 ${className}`)}>
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">{title}</h1>
          <p className="text-xl text-muted-foreground">{subtitle}</p>

          {(primaryCta || secondaryCta) && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              {primaryCta && (
                <Button size="lg" asChild className="button-primary">
                  {primaryCta.href.startsWith("#") ? (
                    <a href={primaryCta.href}>{primaryCta.text}</a>
                  ) : (
                    <Link to={primaryCta.href}>{primaryCta.text}</Link>
                  )}
                </Button>
              )}

              {secondaryCta && (
                <Button size="lg" variant="outline" asChild className="button-outline">
                  {secondaryCta.href.startsWith("#") ? (
                    <a href={secondaryCta.href}>{secondaryCta.text}</a>
                  ) : (
                    <Link to={secondaryCta.href}>{secondaryCta.text}</Link>
                  )}
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

