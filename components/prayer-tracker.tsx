"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"

interface PrayerStatus {
  name: string
  completed: boolean
}

export function PrayerTracker() {
  const [prayers, setPrayers] = useState<PrayerStatus[]>([
    { name: "ফজর", completed: false },
    { name: "যোহর", completed: false },
    { name: "আসর", completed: false },
    { name: "মাগরিব", completed: false },
    { name: "ইশা", completed: false },
  ])

  useEffect(() => {
    const savedPrayers = localStorage.getItem("prayerTracker")
    if (savedPrayers) {
      setPrayers(JSON.parse(savedPrayers))
    }
  }, [])

  const togglePrayer = (index: number) => {
    const updatedPrayers = [...prayers]
    updatedPrayers[index].completed = !updatedPrayers[index].completed
    setPrayers(updatedPrayers)
    localStorage.setItem("prayerTracker", JSON.stringify(updatedPrayers))
  }

  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle>নামাজ ট্র্যাকার</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-4">
          {prayers.map((prayer, index) => (
            <div key={prayer.name} className="flex items-center space-x-2">
              <Checkbox id={`prayer-${index}`} checked={prayer.completed} onCheckedChange={() => togglePrayer(index)} />
              <label
                htmlFor={`prayer-${index}`}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {prayer.name}
              </label>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

