"use client"

import type React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ChevronRight, ChevronLeft, Check } from "lucide-react"

interface TutorialStepProps {
  title: string
  description: string
  currentStep: number
  totalSteps: number
  onNext?: () => void
  onPrev?: () => void
  isCompleted?: boolean
  className?: string
  children?: React.ReactNode
}

export function TutorialStep({
  title,
  description,
  currentStep,
  totalSteps,
  onNext,
  onPrev,
  isCompleted = false,
  className,
  children,
}: TutorialStepProps) {
  return (
    <div className={cn("space-y-6 rounded-lg border p-6", className)}>
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold">{title}</h3>
          <div className="flex items-center text-sm text-muted-foreground">
            <span>
              {currentStep} / {totalSteps}
            </span>
            {isCompleted && (
              <span className="ml-2 flex items-center text-green-500">
                <Check size={16} className="mr-1" />
                Kész
              </span>
            )}
          </div>
        </div>
        <p className="text-muted-foreground">{description}</p>
      </div>

      {children && <div className="py-2">{children}</div>}

      <div className="flex justify-between pt-4">
        <Button variant="outline" onClick={onPrev} disabled={currentStep === 1} className="flex items-center gap-1">
          <ChevronLeft size={16} />
          Előző
        </Button>
        <Button
          onClick={onNext}
          disabled={isCompleted && currentStep === totalSteps}
          className="flex items-center gap-1"
        >
          {currentStep === totalSteps ? "Befejezés" : "Következő"}
          {currentStep !== totalSteps && <ChevronRight size={16} />}
        </Button>
      </div>
    </div>
  )
}

