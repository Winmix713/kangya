import { cn } from "@/lib/utils"
import { Star, StarHalf } from "lucide-react"

interface SkillLevel {
  level: string
  description: string
  example: string
  stars: number // 1-5, can be half stars (0.5)
}

interface PromptSkillLevelsProps {
  title?: string
  description?: string
  levels: SkillLevel[]
  className?: string
}

export default function PromptSkillLevels({
  title = "Prompt készítési szintek",
  description = "Fejleszd a prompt készítési képességeidet lépésről lépésre",
  levels,
  className,
}: PromptSkillLevelsProps) {
  // Function to render stars based on skill level
  const renderStars = (count: number) => {
    const stars = []
    const fullStars = Math.floor(count)
    const hasHalfStar = count % 1 !== 0

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full-${i}`} className="fill-yellow-400 text-yellow-400" size={16} />)
    }

    if (hasHalfStar) {
      stars.push(<StarHalf key="half" className="fill-yellow-400 text-yellow-400" size={16} />)
    }

    const emptyStars = 5 - stars.length
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="text-gray-300 dark:text-gray-600" size={16} />)
    }

    return stars
  }

  return (
    <div className={cn("space-y-8", className)}>
      <div className="space-y-2">
        <h2 className="text-3xl font-bold">{title}</h2>
        {description && <p className="text-xl text-muted-foreground">{description}</p>}
      </div>

      <div className="space-y-6">
        {levels.map((level, index) => (
          <div
            key={index}
            className="p-6 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950"
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold">{level.level}</h3>
              <div className="flex">{renderStars(level.stars)}</div>
            </div>

            <p className="text-muted-foreground mb-4">{level.description}</p>

            <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
              <h4 className="text-sm font-medium mb-2">Példa prompt:</h4>
              <pre className="whitespace-pre-wrap text-sm">{level.example}</pre>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

