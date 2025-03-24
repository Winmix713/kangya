"use client"

import React from "react"
import { cn } from "@/lib/utils"
import { Copy, Check } from "lucide-react"

interface PromptTemplate {
  title: string
  description: string
  template: string
}

interface PromptTemplatesProps {
  title?: string
  description?: string
  templates: PromptTemplate[]
  className?: string
}

export default function PromptTemplates({
  title = "Prompt sablonok",
  description = "Használd ezeket a sablonokat a hatékonyabb prompt íráshoz",
  templates,
  className,
}: PromptTemplatesProps) {
  const [copiedIndex, setCopiedIndex] = React.useState<number | null>(null)

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text)
    setCopiedIndex(index)
    setTimeout(() => setCopiedIndex(null), 2000)
  }

  return (
    <div className={cn("space-y-8", className)}>
      <div className="space-y-2">
        <h2 className="text-3xl font-bold">{title}</h2>
        {description && <p className="text-xl text-muted-foreground">{description}</p>}
      </div>

      <div className="grid gap-6">
        {templates.map((template, index) => (
          <div key={index} className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden">
            <div className="p-4 bg-white dark:bg-gray-950">
              <h3 className="text-lg font-semibold mb-1">{template.title}</h3>
              <p className="text-muted-foreground text-sm">{template.description}</p>
            </div>

            <div className="relative bg-gray-50 dark:bg-gray-900 p-4 border-t border-gray-200 dark:border-gray-800">
              <button
                onClick={() => copyToClipboard(template.template, index)}
                className="absolute top-3 right-3 p-1.5 rounded-md bg-white/10 hover:bg-white/20 text-sm flex items-center gap-1 transition-colors"
              >
                {copiedIndex === index ? <Check size={14} /> : <Copy size={14} />}
                <span>{copiedIndex === index ? "Másolva" : "Másolás"}</span>
              </button>
              <pre className="whitespace-pre-wrap text-sm pt-2 pb-6">{template.template}</pre>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

