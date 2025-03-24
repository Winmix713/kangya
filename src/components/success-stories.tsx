import { cn } from "@/lib/utils"
import { Star } from "lucide-react"

interface Story {
  name: string
  role: string
  company?: string
  content: string
  rating: number // 1-5
  avatar?: string
}

interface SuccessStoriesProps {
  title?: string
  description?: string
  stories: Story[]
  className?: string
}

export default function SuccessStories({
  title = "Sikertörténetek",
  description = "Ismerd meg, hogyan segített másoknak a v0",
  stories,
  className,
}: SuccessStoriesProps) {
  // Function to render stars based on rating
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={cn("h-4 w-4", i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300 dark:text-gray-600")}
      />
    ))
  }

  return (
    <div className={cn("space-y-8", className)}>
      <div className="space-y-2">
        <h2 className="text-3xl font-bold">{title}</h2>
        {description && <p className="text-xl text-muted-foreground">{description}</p>}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stories.map((story, index) => (
          <div key={index} className="p-6 rounded-lg border border-border bg-card">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-full bg-secondary overflow-hidden flex-shrink-0">
                {story.avatar ? (
                  <img
                    src={story.avatar || "/placeholder.svg"}
                    alt={story.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground font-medium">
                    {story.name.charAt(0)}
                  </div>
                )}
              </div>

              <div>
                <h3 className="font-semibold">{story.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {story.role}
                  {story.company && ` · ${story.company}`}
                </p>
              </div>
            </div>

            <div className="mb-4">
              <p className="text-muted-foreground italic">"{story.content}"</p>
            </div>

            <div className="flex items-center">{renderStars(story.rating)}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

