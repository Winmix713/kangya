"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { Check, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"

interface PricingPlan {
  id: string
  name: string
  description: string
  price: {
    monthly: number
    yearly: number
  }
  features: string[]
  cta: string
  popular?: boolean
}

interface PricingCardsProps {
  title?: string
  description?: string
  plans: PricingPlan[]
  className?: string
}

export default function PricingCards({
  title = "Árazás",
  description = "Válaszd ki a számodra megfelelő csomagot",
  plans,
  className,
}: PricingCardsProps) {
  const [isYearly, setIsYearly] = useState(false)

  return (
    <div className={cn("space-y-8", className)}>
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold">{title}</h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{description}</p>

        <div className="flex items-center justify-center gap-2 pt-4">
          <span className={cn("text-sm", !isYearly && "font-medium")}>Havi</span>
          <Switch checked={isYearly} onCheckedChange={setIsYearly} aria-label="Váltás éves számlázásra" />
          <span className={cn("text-sm", isYearly && "font-medium")}>
            Éves <span className="text-green-500 text-xs font-medium">20% kedvezmény</span>
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={cn("relative rounded-lg border bg-card p-6", plan.popular && "border-primary shadow-lg")}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground text-xs font-medium py-1 px-3 rounded-full">
                Legnépszerűbb
              </div>
            )}

            <div className="mb-6">
              <h3 className="text-xl font-bold">{plan.name}</h3>
              <p className="text-muted-foreground mt-1">{plan.description}</p>
            </div>

            <div className="mb-6">
              <div className="flex items-baseline">
                <span className="text-3xl font-bold">{isYearly ? plan.price.yearly : plan.price.monthly}€</span>
                <span className="text-muted-foreground ml-1">/{isYearly ? "év" : "hó"}</span>
              </div>
              {isYearly && (
                <p className="text-sm text-green-500 mt-1">
                  {Math.round((1 - plan.price.yearly / (plan.price.monthly * 12)) * 100)}% megtakarítás
                </p>
              )}
            </div>

            <ul className="space-y-3 mb-6">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
              {plan.cta}
            </Button>
          </div>
        ))}
      </div>

      <div className="text-center text-sm text-muted-foreground">
        <p className="flex items-center justify-center gap-1">
          <HelpCircle size={16} />
          Kérdésed van?{" "}
          <a href="#" className="underline">
            Vedd fel velünk a kapcsolatot
          </a>
        </p>
      </div>
    </div>
  )
}

