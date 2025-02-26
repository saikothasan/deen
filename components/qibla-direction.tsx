"use client"

import { useEffect, useState } from "react"
import { Compass } from "lucide-react"
import { useSettings } from "@/store/settings"

const KAABA_COORDS = { latitude: 21.4225, longitude: 39.8262 }

export function QiblaDirection() {
  const { selectedLocation } = useSettings()
  const [qiblaDirection, setQiblaDirection] = useState(0)

  useEffect(() => {
    const { latitude, longitude } = selectedLocation.coordinates
    const qiblaAngle = calculateQiblaDirection(latitude, longitude)
    setQiblaDirection(qiblaAngle)
  }, [selectedLocation])

  return (
    <div className="flex flex-col items-center mt-4">
      <Compass className="w-16 h-16 text-white" style={{ transform: `rotate(${qiblaDirection}deg)` }} />
      <p className="text-white mt-2">কিবলা দিক</p>
    </div>
  )
}

function calculateQiblaDirection(lat: number, lon: number): number {
  const latK = KAABA_COORDS.latitude * (Math.PI / 180)
  const lonK = KAABA_COORDS.longitude * (Math.PI / 180)
  const latP = lat * (Math.PI / 180)
  const lonP = lon * (Math.PI / 180)

  const y = Math.sin(lonK - lonP)
  const x = Math.cos(latP) * Math.tan(latK) - Math.sin(latP) * Math.cos(lonK - lonP)
  let qibla = Math.atan2(y, x)
  qibla = qibla * (180 / Math.PI)
  qibla = (qibla + 360) % 360

  return qibla
}

