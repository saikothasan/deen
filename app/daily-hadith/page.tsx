"use client"

import { DailyHadith } from "@/components/daily-hadith"
import { Navigation } from "@/components/navigation"

export default function DailyHadithPage() {
  return (
    <div className="min-h-screen bg-background text-foreground pb-16">
      <header className="bg-primary text-primary-foreground p-4">
        <h1 className="text-2xl font-semibold">দৈনিক হাদীস</h1>
      </header>

      <main className="p-4">
        <DailyHadith />
      </main>

      <Navigation />
    </div>
  )
}

