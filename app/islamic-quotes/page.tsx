"use client"

import { IslamicQuotes } from "@/components/islamic-quotes"
import { Navigation } from "@/components/navigation"

export default function IslamicQuotesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground pb-16">
      <header className="bg-primary text-primary-foreground p-4">
        <h1 className="text-2xl font-semibold">ইসলামিক উক্তি</h1>
      </header>

      <main className="p-4">
        <IslamicQuotes />
      </main>

      <Navigation />
    </div>
  )
}

