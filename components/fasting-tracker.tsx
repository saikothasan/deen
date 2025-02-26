"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function FastingTracker() {
  const [fastingDays, setFastingDays] = useState(0)
  const totalDays = 30 // Assuming 30 days of Ramadan

  useEffect(() => {
    const savedDays = localStorage.getItem("fastingDays")
    if (savedDays) {
      setFastingDays(Number.parseInt(savedDays, 10))
    }
  }, [])

  const incrementDay = () => {
    const newDays = Math.min(fastingDays + 1, totalDays)
    setFastingDays(newDays)
    localStorage.setItem("fastingDays", newDays.toString())
  }

  const resetTracker = () => {
    setFastingDays(0)
    localStorage.setItem("fastingDays", "0")
  }

  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle>রমজান ফাস্টিং ট্র্যাকার</CardTitle>
      </CardHeader>
      <CardContent>
        <Progress value={(fastingDays / totalDays) * 100} className="mb-2" />
        <p className="text-center mb-4">
          {fastingDays} / {totalDays} দিন সম্পন্ন
        </p>
        <div className="flex justify-center space-x-2">
          <button onClick={incrementDay} className="px-4 py-2 bg-primary text-primary-foreground rounded">
            দিন যোগ করুন
          </button>
          <button onClick={resetTracker} className="px-4 py-2 bg-destructive text-destructive-foreground rounded">
            রিসেট
          </button>
        </div>
      </CardContent>
    </Card>
  )
}

