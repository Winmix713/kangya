"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Check, Copy, Code, Cpu, Database } from "lucide-react"
import { cn } from "@/lib/utils"

interface CodeExample {
  name: string
  language: string
  code: string
}

interface CodeExportPreviewProps {
  title?: string
  description?: string
  examples: {
    component: CodeExample
    styles: CodeExample
    api: CodeExample
  }
  className?: string
}

export default function CodeExportPreview({
  title = "Kód exportálás és használat",
  description = "Az alábbiakban láthatod, hogyan használhatod a generált kódot a saját projektedben.",
  examples,
  className,
}: CodeExportPreviewProps) {
  const [activeTab, setActiveTab] = useState("component")
  const [copiedId, setCopiedId] = useState<string | null>(null)

  const getActiveExample = () => {
    switch (activeTab) {
      case "component":
        return examples.component
      case "styles":
        return examples.styles
      case "api":
        return examples.api
      default:
        return examples.component
    }
  }

  const copyToClipboard = () => {
    const example = getActiveExample()
    navigator.clipboard.writeText(example.code)
    setCopiedId(activeTab)
    setTimeout(() => setCopiedId(null), 2000)
  }

  return (
    <div className={cn("space-y-6", className)}>
      {(title || description) && (
        <div className="space-y-2">
          {title && <h3 className="text-2xl font-bold">{title}</h3>}
          {description && <p className="text-muted-foreground">{description}</p>}
        </div>
      )}

      <div className="border border-border rounded-lg overflow-hidden">
        <Tabs defaultValue="component" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="bg-secondary/50 p-2 border-b border-border">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="component" className="flex items-center gap-1.5">
                <Code size={16} /> Komponens
              </TabsTrigger>
              <TabsTrigger value="styles" className="flex items-center gap-1.5">
                <Cpu size={16} /> Stílusok
              </TabsTrigger>
              <TabsTrigger value="api" className="flex items-center gap-1.5">
                <Database size={16} /> API
              </TabsTrigger>
            </TabsList>
          </div>

          <div className="relative">
            <div className="absolute top-2 right-2 z-10">
              <button
                onClick={copyToClipboard}
                className="p-2 bg-background/10 backdrop-blur-sm rounded-md text-sm flex items-center gap-1 hover:bg-background/20 transition-colors"
              >
                {copiedId === activeTab ? <Check size={14} /> : <Copy size={14} />}
                {copiedId === activeTab ? "Másolva" : "Másolás"}
              </button>
            </div>

            <TabsContent value="component" className="m-0">
              <div className="p-0 overflow-auto">
                <pre className="language-tsx p-4 overflow-auto max-h-[500px]">
                  <code>{examples.component.code}</code>
                </pre>
              </div>
            </TabsContent>

            <TabsContent value="styles" className="m-0">
              <div className="p-0 overflow-auto">
                <pre className="language-css p-4 overflow-auto max-h-[500px]">
                  <code>{examples.styles.code}</code>
                </pre>
              </div>
            </TabsContent>

            <TabsContent value="api" className="m-0">
              <div className="p-0 overflow-auto">
                <pre className="language-tsx p-4 overflow-auto max-h-[500px]">
                  <code>{examples.api.code}</code>
                </pre>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  )
}

