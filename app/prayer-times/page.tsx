"use client"

import { useEffect, useState } from "react"
import { format } from "date-fns"
import { bn } from "date-fns/locale"
import { PrayerCard } from "@/components/prayer-card"
import { calculatePrayerTimes, getNextPrayer } from "@/utils/prayer-times"
import { useSettings } from "@/store/settings"
import type { PrayerTime } from "@/types/prayer"
import { Navigation } from "@/components/navigation"

export default function PrayerTimesPage() {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [prayerTimes, setPrayerTimes] = useState<PrayerTime[]>([])
  const [nextPrayer, setNextPrayer] = useState<PrayerTime | null>(null)
  const { selectedLocation, calculationMethod, adjustments } = useSettings()

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const times = calculatePrayerTimes(selectedLocation.coordinates, currentTime, calculationMethod, adjustments)
    setPrayerTimes(times)
    setNextPrayer(getNextPrayer(times))
  }, [selectedLocation, currentTime, calculationMethod, adjustments])

  return (
    <div className="min-h-screen bg-background text-foreground pb-16">
      <header className="bg-primary text-primary-foreground p-4">
        <h1 className="text-2xl font-semibold">নামাজের সময়সূচী</h1>
      </header>

      <main className="p-4">
        <div className="space-y-4">
          {prayerTimes.map((prayer) => (
            <PrayerCard key={prayer.name} prayer={prayer} isNext={nextPrayer?.name === prayer.name} />
          ))}
        </div>

        <div className="mt-8 text-center text-muted-foreground">
          {format(currentTime, "EEEE, d MMMM, yyyy", { locale: bn })}
        </div>
      </main>

      <Navigation />
    </div>
  )
}

