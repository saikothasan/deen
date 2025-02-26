"use client"

import { PrayerTracker } from "@/components/prayer-tracker"
import { Navigation } from "@/components/navigation"

export default function PrayerTrackerPage() {
  return (
    <div className="min-h-screen bg-background text-foreground pb-16">
      <header className="bg-primary text-primary-foreground p-4">
        <h1 className="text-2xl font-semibold">নামাজ ট্র্যাকার</h1>
      </header>

      <main className="p-4">
        <PrayerTracker />
      </main>

      <Navigation />
    </div>
  )
}

