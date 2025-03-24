"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Terminal, Copy, Check } from "lucide-react"

interface CommandExampleProps {
  command: string
  description?: string
  className?: string
}

export function CommandExample({ command, description, className }: CommandExampleProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(command)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className={cn("space-y-2", className)}>
      {description && <p className="text-sm text-muted-foreground">{description}</p>}
      <div className="flex items-center space-x-2">
        <div className="flex-1 flex items-center rounded-md bg-muted px-4 py-2 text-sm font-mono">
          <Terminal className="mr-2 h-4 w-4 text-muted-foreground" />
          <span className="flex-1 truncate">{command}</span>
        </div>
        <Button variant="outline" size="sm" onClick={copyToClipboard} className="flex items-center gap-1">
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          <span className="sr-only md:not-sr-only md:inline-block">{copied ? "Másolva" : "Másolás"}</span>
        </Button>
      </div>
    </div>
  )
}

