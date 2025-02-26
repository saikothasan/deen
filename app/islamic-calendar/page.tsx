"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { getIslamicDate, formatIslamicMonth } from "@/utils/islamic-date"
import { Navigation } from "@/components/navigation"

export default function IslamicCalendarPage() {
  const [currentDate, setCurrentDate] = useState(new Date())

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1))
  }

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1))
  }

  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate()
  }

  const days = getDaysInMonth(currentDate.getFullYear(), currentDate.getMonth())

  return (
    <div className="min-h-screen bg-background text-foreground pb-16">
      <header className="bg-primary text-primary-foreground p-4">
        <h1 className="text-2xl font-semibold">ইসলামিক ক্যালেন্ডার</h1>
      </header>

      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <Button variant="ghost" onClick={prevMonth}>
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <h2 className="text-lg font-semibold">{formatIslamicMonth(currentDate)}</h2>
          <Button variant="ghost" onClick={nextMonth}>
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>

        <div className="grid grid-cols-7 gap-2">
          {["রবি", "সোম", "মঙ্গল", "বুধ", "বৃহঃ", "শুক্র", "শনি"].map((day) => (
            <div key={day} className="text-center font-semibold">
              {day}
            </div>
          ))}
          {Array.from({ length: days }).map((_, index) => {
            const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), index + 1)
            return (
              <Card key={index} className="bg-secondary">
                <CardContent className="p-2 text-center">
                  <div>{index + 1}</div>
                  <div className="text-xs">{getIslamicDate(date)}</div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      <Navigation />
    </div>
  )
}

