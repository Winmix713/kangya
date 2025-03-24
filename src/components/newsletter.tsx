"use client"

import type React from "react"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Send, CheckCircle } from "lucide-react"

interface NewsletterProps {
  title?: string
  description?: string
  className?: string
}

export default function Newsletter({
  title = "Iratkozz fel hírlevelünkre",
  description = "Értesülj elsőként a legújabb funkciókról, tippekről és trükkökről.",
  className,
}: NewsletterProps) {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setIsLoading(true)

    // Validate email
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setError("Kérjük, adj meg egy érvényes email címet.")
      setIsLoading(false)
      return
    }

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setIsSubmitted(true)
    } catch (err) {
      setError("Hiba történt a feliratkozás során. Kérjük, próbáld újra később.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className={cn("p-6 bg-secondary/50 rounded-lg", className)}>
      {!isSubmitted ? (
        <>
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold mb-2">{title}</h3>
            <p className="text-muted-foreground">{description}</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email címed"
                className="w-full p-3 rounded-lg border border-border bg-background"
                disabled={isLoading}
              />
              {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
            </div>

            <Button
              type="submit"
              className="w-full flex items-center justify-center gap-2 button-primary"
              disabled={isLoading}
            >
              {isLoading ? "Feldolgozás..." : "Feliratkozás"}
              <Send size={16} />
            </Button>
          </form>
        </>
      ) : (
        <div className="text-center py-6">
          <CheckCircle size={48} className="mx-auto mb-4 text-green-500" />
          <h3 className="text-2xl font-bold mb-2">Sikeres feliratkozás!</h3>
          <p className="text-muted-foreground">
            Köszönjük a feliratkozást! Hamarosan értesítünk a legújabb hírekről és tippekről.
          </p>
        </div>
      )}
    </div>
  )
}

