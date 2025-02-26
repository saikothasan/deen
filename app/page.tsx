"use client"

import { useEffect, useState } from "react"
import { Moon } from "lucide-react"
import { format } from "date-fns"
import { bn } from "date-fns/locale"
import { PrayerCard } from "@/components/prayer-card"
import { LocationSelector } from "@/components/location-selector"
import { QiblaDirection } from "@/components/qibla-direction"
import { calculatePrayerTimes, getNextPrayer } from "@/utils/prayer-times"
import { useSettings } from "@/store/settings"
import type { PrayerTime } from "@/types/prayer"
import { useToast } from "@/components/ui/use-toast"
import { getIslamicDate } from "@/utils/islamic-date"
import { Navigation } from "@/components/navigation"

export default function HomePage() {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [prayerTimes, setPrayerTimes] = useState<PrayerTime[]>([])
  const [nextPrayer, setNextPrayer] = useState<PrayerTime | null>(null)
  const { selectedLocation, notificationsEnabled, calculationMethod, adjustments } = useSettings()
  const { toast } = useToast()

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

  useEffect(() => {
    if (notificationsEnabled && nextPrayer) {
      const timeUntilPrayer = nextPrayer.time.getTime() - currentTime.getTime()
      if (timeUntilPrayer > 0 && timeUntilPrayer <= 300000) {
        toast({
          title: "Prayer Time Approaching",
          description: `${nextPrayer.nameInBengali} prayer time in 5 minutes`,
        })
      }
    }
  }, [currentTime, nextPrayer, notificationsEnabled, toast])

  return (
    <main className="min-h-screen bg-background text-foreground pb-16">
      <div className="relative px-4 pt-8 bg-accent">
        <div className="text-accent-foreground mb-2">
          <div className="text-sm opacity-80">এখন সময়</div>
          <div className="text-4xl font-bold">{format(currentTime, "hh:mm", { locale: bn })}</div>
          <div className="text-sm opacity-80">{getIslamicDate(currentTime)}</div>
        </div>

        <LocationSelector />

        <QiblaDirection />

        <div className="absolute bottom-0 left-0 right-0 h-48">
          <svg className="w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none" fill="var(--background)">
            <path d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,224C672,213,768,171,864,149.3C960,128,1056,128,1152,133.3C1248,139,1344,149,1392,154.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
          </svg>
        </div>

        <div className="absolute top-4 right-4">
          <Moon className="text-accent-foreground w-16 h-16 opacity-90" />
        </div>
      </div>

      <div className="relative z-10 mt-12 bg-background rounded-t-3xl p-6">
        <div className="space-y-4">
          {prayerTimes.map((prayer) => (
            <PrayerCard key={prayer.name} prayer={prayer} isNext={nextPrayer?.name === prayer.name} />
          ))}
        </div>

        <div className="mt-8 text-center text-muted-foreground">
          {format(currentTime, "EEEE, d MMMM, yyyy", { locale: bn })}
        </div>

        <Navigation />
      </div>
    </main>
  )
}

