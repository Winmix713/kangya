import { AlertTriangle, XCircle, CheckCircle } from "lucide-react"
import { cn } from "@/lib/utils"

interface MistakeExample {
  bad: string
  good: string
  explanation: string
}

interface CommonMistakesProps {
  title?: string
  description?: string
  mistakes: MistakeExample[]
  className?: string
}

export default function CommonMistakes({
  title = "Gyakori hibák",
  description = "Kerüld el ezeket a gyakori hibákat a v0 használata során",
  mistakes,
  className,
}: CommonMistakesProps) {
  return (
    <div className={cn("space-y-8", className)}>
      {(title || description) && (
        <div className="space-y-2">
          {title && <h2 className="text-3xl font-bold">{title}</h2>}
          {description && <p className="text-xl text-muted-foreground">{description}</p>}
        </div>
      )}

      <div className="grid gap-8">
        {mistakes.map((mistake, index) => (
          <div key={index} className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-red-500">
                  <XCircle size={20} />
                  <h3 className="text-lg font-semibold">Kerülendő</h3>
                </div>
                <div className="p-4 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900 rounded-lg">
                  <pre className="whitespace-pre-wrap text-sm">{mistake.bad}</pre>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2 text-green-500">
                  <CheckCircle size={20} />
                  <h3 className="text-lg font-semibold">Javasolt</h3>
                </div>
                <div className="p-4 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-900 rounded-lg">
                  <pre className="whitespace-pre-wrap text-sm">{mistake.good}</pre>
                </div>
              </div>
            </div>

            <div className="p-4 bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900 rounded-lg">
              <div className="flex items-start gap-2">
                <AlertTriangle size={20} className="text-amber-500 mt-0.5 flex-shrink-0" />
                <p className="text-sm">{mistake.explanation}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

