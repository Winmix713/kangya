import Link from "next/link"
import { Button } from "@/components/ui/button"

interface HeroProps {
  title: string
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
    <section
      className={`bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 pt-32 pb-24 ${className}`}
    >
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">{title}</h1>
          <p className="text-xl text-muted-foreground">{subtitle}</p>

          {(primaryCta || secondaryCta) && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              {primaryCta && (
                <Button size="lg" asChild>
                  <Link href={primaryCta.href}>{primaryCta.text}</Link>
                </Button>
              )}

              {secondaryCta && (
                <Button size="lg" variant="outline" asChild>
                  <Link href={secondaryCta.href}>{secondaryCta.text}</Link>
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

