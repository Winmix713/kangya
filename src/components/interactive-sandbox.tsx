"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Play, Code, Eye, Copy, Check } from "lucide-react"
import { cn } from "@/lib/utils"

interface InteractiveSandboxProps {
  initialCode: string
  title?: string
  description?: string
  className?: string
}

export default function InteractiveSandbox({ initialCode, title, description, className }: InteractiveSandboxProps) {
  const [code, setCode] = useState(initialCode)
  const [output, setOutput] = useState<string>("")
  const [activeTab, setActiveTab] = useState<string>("editor")
  const [copied, setCopied] = useState(false)

  const runCode = () => {
    try {
      // This is a simplified example - in a real app, you'd need a safer way to execute code
      // For demo purposes, we'll just set some sample output
      setOutput(`// Kód futtatása sikeres
// Generált eredmény:
<div className="p-4 bg-white rounded-lg shadow-md">
  <h2 className="text-xl font-bold mb-2">Generált komponens</h2>
  <p className="text-gray-600">Ez egy példa kimenet a kód futtatásából.</p>
  <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
    Interakció
  </button>
</div>`)
      setActiveTab("preview")
    } catch (error) {
      if (error instanceof Error) {
        setOutput(`// Hiba történt a kód futtatása közben:\n${error.message}`)
      } else {
        setOutput("// Ismeretlen hiba történt a kód futtatása közben")
      }
    }
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className={cn("space-y-4", className)}>
      {(title || description) && (
        <div className="space-y-2">
          {title && <h3 className="text-2xl font-bold">{title}</h3>}
          {description && <p className="text-muted-foreground">{description}</p>}
        </div>
      )}

      <div className="border rounded-lg overflow-hidden">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <div className="bg-muted p-2 border-b flex justify-between items-center">
            <TabsList>
              <TabsTrigger value="editor" className="flex items-center gap-1.5">
                <Code size={16} /> Editor
              </TabsTrigger>
              <TabsTrigger value="preview" className="flex items-center gap-1.5">
                <Eye size={16} /> Előnézet
              </TabsTrigger>
            </TabsList>

            <div className="flex items-center gap-2">
              <Button size="sm" variant="outline" onClick={copyToClipboard} className="flex items-center gap-1">
                {copied ? <Check size={14} /> : <Copy size={14} />}
                {copied ? "Másolva" : "Másolás"}
              </Button>
              <Button size="sm" onClick={runCode} className="flex items-center gap-1">
                <Play size={14} />
                Futtatás
              </Button>
            </div>
          </div>

          <TabsContent value="editor" className="m-0 p-0">
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full h-80 p-4 font-mono text-sm bg-background focus:outline-none resize-none"
              spellCheck="false"
            />
          </TabsContent>

          <TabsContent value="preview" className="m-0 p-0">
            <div className="w-full h-80 p-4 font-mono text-sm bg-background overflow-auto">
              <pre>{output}</pre>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

