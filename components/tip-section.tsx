import type React from "react"
import { cn } from "@/lib/utils"
import { Lightbulb } from "lucide-react"

interface TipProps {
  title: string
  description: string
  icon?: React.ReactNode
}

interface TipSectionProps {
  title?: string
  description?: string
  tips: TipProps[]
  className?: string
}

export default function TipSection({ title = "Tippek", description, tips, className }: TipSectionProps) {
  return (
    <div className={cn("space-y-8", className)}>
      <div className="space-y-2">
        <h2 className="text-3xl font-bold">{title}</h2>
        {description && <p className="text-xl text-muted-foreground">{description}</p>}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tips.map((tip, index) => (
          <div
            key={index}
            className="p-6 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950"
          >
            <div className="flex items-start gap-4">
              <div className="mt-1 text-primary">{tip.icon || <Lightbulb size={24} />}</div>
              <div>
                <h3 className="font-semibold text-lg mb-2">{tip.title}</h3>
                <p className="text-muted-foreground">{tip.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

