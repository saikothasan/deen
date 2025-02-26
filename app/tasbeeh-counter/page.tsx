"use client"

import { TasbeehCounter } from "@/components/tasbeeh-counter"
import { Navigation } from "@/components/navigation"

export default function TasbeehCounterPage() {
  return (
    <div className="min-h-screen bg-background text-foreground pb-16">
      <header className="bg-primary text-primary-foreground p-4">
        <h1 className="text-2xl font-semibold">তাসবীহ গণনাকারী</h1>
      </header>

      <main className="p-4">
        <TasbeehCounter />
      </main>

      <Navigation />
    </div>
  )
}

