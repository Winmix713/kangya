import { cn } from "@/lib/utils"
import { Lightbulb, Zap, Target, Sparkles } from "lucide-react"

interface TipsProps {
  className?: string
}

export default function TipsSection({ className }: TipsProps) {
  const tips = [
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Légy specifikus",
      description:
        "Minél részletesebb a leírásod, annál pontosabb lesz az eredmény. Adj meg színeket, méreteket, elrendezést és funkcionalitást.",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Használj referenciákat",
      description: "Hivatkozz ismert UI mintákra vagy weboldalakra inspirációként.",
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Iterálj fokozatosan",
      description: "Kezdd egyszerűen, majd lépésről lépésre finomítsd a promptodat a kívánt eredmény eléréséhez.",
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "Használj sablonokat",
      description:
        "A prompt sablonok segítenek gyorsabban elérni a kívánt eredményt. Nézd meg a haladó technikákat a sablonokért.",
    },
  ]

  return (
    <div className={cn("space-y-8", className)}>
      <div className="space-y-2">
        <h2 className="text-3xl font-bold">Tippek</h2>
        <p className="text-xl text-muted-foreground">Hogyan használd hatékonyan a v0-t</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tips.map((tip, index) => (
          <div key={index} className="glass-panel p-6 rounded-lg">
            <div className="flex items-start gap-4">
              <div className="mt-1 text-primary">{tip.icon}</div>
              <div>
                <h3 className="font-medium text-lg mb-2">{tip.title}</h3>
                <p className="text-muted-foreground">{tip.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

