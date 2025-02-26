"use client"

import { IslamicEventCalendar } from "@/components/islamic-event-calendar"
import { Navigation } from "@/components/navigation"

export default function IslamicEventCalendarPage() {
  return (
    <div className="min-h-screen bg-background text-foreground pb-16">
      <header className="bg-primary text-primary-foreground p-4">
        <h1 className="text-2xl font-semibold">ইসলামিক ইভেন্ট ক্যালেন্ডার</h1>
      </header>

      <main className="p-4">
        <IslamicEventCalendar />
      </main>

      <Navigation />
    </div>
  )
}

