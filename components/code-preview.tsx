"use client"

import { useState } from "react"
import { Check, Copy, Code } from "lucide-react"
import { cn } from "@/lib/utils"

interface CodePreviewProps {
  code: string
  language?: string
  title?: string
  description?: string
  className?: string
}

export function CodePreview({ code, language = "tsx", title, description, className }: CodePreviewProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className={cn("space-y-4", className)}>
      {(title || description) && (
        <div className="space-y-2">
          {title && <h3 className="text-lg font-semibold">{title}</h3>}
          {description && <p className="text-sm text-muted-foreground">{description}</p>}
        </div>
      )}

      <div className="relative rounded-lg border overflow-hidden">
        <div className="flex items-center justify-between bg-muted px-4 py-2 border-b">
          <div className="flex items-center gap-2">
            <Code size={16} />
            <span className="text-sm font-medium">{language.toUpperCase()}</span>
          </div>
          <button
            onClick={copyToClipboard}
            className="text-sm flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
          >
            {copied ? <Check size={14} /> : <Copy size={14} />}
            {copied ? "Másolva" : "Másolás"}
          </button>
        </div>
        <pre className="p-4 overflow-auto max-h-[400px] text-sm">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  )
}

