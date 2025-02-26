"use client"

import { MonthlyCalendar } from "@/components/monthly-calendar"
import { Navigation } from "@/components/navigation"

export default function MonthlyCalendarPage() {
  return (
    <div className="min-h-screen bg-background text-foreground pb-16">
      <header className="bg-primary text-primary-foreground p-4">
        <h1 className="text-2xl font-semibold">মাসিক ক্যালেন্ডার</h1>
      </header>

      <main className="p-4">
        <MonthlyCalendar />
      </main>

      <Navigation />
    </div>
  )
}

