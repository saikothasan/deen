import { PrayerTimes, type Coordinates, CalculationMethod, type CalculationParameters } from "adhan"
import type { PrayerTime } from "@/types/prayer"

const PRAYER_NAMES_BENGALI: Record<string, string> = {
  fajr: "ফজর",
  dhuhr: "যোহর",
  asr: "আসর",
  maghrib: "মাগরিব",
  isha: "ইশা",
}

export function calculatePrayerTimes(
  coordinates: Coordinates,
  date: Date = new Date(),
  calculationMethod: () => CalculationParameters = CalculationMethod.MoonsightingCommittee,
  adjustments: Record<string, number> = {},
): PrayerTime[] {
  const params = calculationMethod()
  Object.entries(adjustments).forEach(([prayer, minutes]) => {
    params.adjustments[prayer as keyof typeof params.adjustments] = minutes
  })

  const prayerTimes = new PrayerTimes(coordinates, date, params)

  return ["fajr", "dhuhr", "asr", "maghrib", "isha"].map((prayer) => ({
    name: prayer as PrayerTime["name"],
    time: prayerTimes[prayer],
    nameInBengali: PRAYER_NAMES_BENGALI[prayer],
  }))
}

export function getNextPrayer(prayerTimes: PrayerTime[]): PrayerTime | null {
  const now = new Date()
  return prayerTimes.find((prayer) => prayer.time > now) || null
}

