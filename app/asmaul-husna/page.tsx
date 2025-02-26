"use client"

import { AsmaUlHusna } from "@/components/asmaulhusna"
import { Navigation } from "@/components/navigation"

export default function AsmaUlHusnaPage() {
  return (
    <div className="min-h-screen bg-background text-foreground pb-16">
      <header className="bg-primary text-primary-foreground p-4">
        <h1 className="text-2xl font-semibold">আসমাউল হুসনা</h1>
      </header>

      <main className="p-4">
        <AsmaUlHusna />
      </main>

      <Navigation />
    </div>
  )
}

