"use client"

import type React from "react"
import { useState } from "react"
import { TutorialStep } from "@/components/tutorial-step"
import { CodePreview } from "@/components/code-preview"

interface Step {
  id: string
  title: string
  description: string
  code?: string
  language?: string
  content?: React.ReactNode
}

interface InteractiveTutorialProps {
  steps: Step[]
  className?: string
}

export function InteractiveTutorial({ steps, className }: InteractiveTutorialProps) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0)
  const [completedSteps, setCompletedSteps] = useState<string[]>([])

  const currentStep = steps[currentStepIndex]
  const totalSteps = steps.length

  const handleNext = () => {
    if (currentStepIndex < totalSteps - 1) {
      // Mark current step as completed
      if (!completedSteps.includes(currentStep.id)) {
        setCompletedSteps([...completedSteps, currentStep.id])
      }
      setCurrentStepIndex(currentStepIndex + 1)
    } else {
      // Mark final step as completed
      if (!completedSteps.includes(currentStep.id)) {
        setCompletedSteps([...completedSteps, currentStep.id])
      }
    }
  }

  const handlePrev = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(currentStepIndex - 1)
    }
  }

  return (
    <div className={className}>
      <TutorialStep
        title={currentStep.title}
        description={currentStep.description}
        currentStep={currentStepIndex + 1}
        totalSteps={totalSteps}
        onNext={handleNext}
        onPrev={handlePrev}
        isCompleted={completedSteps.includes(currentStep.id)}
      >
        {currentStep.code && <CodePreview code={currentStep.code} language={currentStep.language || "tsx"} />}
        {currentStep.content}
      </TutorialStep>
    </div>
  )
}

