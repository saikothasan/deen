import { PrayerTimes, type Coordinates, CalculationMethod, type CalculationParameters } from "adhan"
import type { PrayerTime, PrayerName } from "@/types/prayer"

const PRAYER_NAMES_BENGALI: Record<PrayerName, string> = {
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
  adjustments: Partial<Record<PrayerName, number>> = {},
): PrayerTime[] {
  const params = calculationMethod()
  Object.entries(adjustments).forEach(([prayer, minutes]) => {
    if (minutes !== undefined) {
      params.adjustments[prayer as keyof typeof params.adjustments] = minutes
    }
  })

  const prayerTimes = new PrayerTimes(coordinates, date, params)

  return (Object.keys(PRAYER_NAMES_BENGALI) as PrayerName[])
    .map((prayer) => {
      const time = prayerTimes.timeForPrayer(prayer)
      if (time === null) {
        return null
      }
      return {
        name: prayer,
        time: time,
        nameInBengali: PRAYER_NAMES_BENGALI[prayer],
      }
    })
    .filter((prayer): prayer is PrayerTime => prayer !== null)
}

export function getNextPrayer(prayerTimes: PrayerTime[]): PrayerTime | null {
  const now = new Date()
  return prayerTimes.find((prayer) => prayer.time > now) || null
}

