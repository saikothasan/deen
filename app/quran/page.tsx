"use client"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Navigation } from "@/components/navigation"

interface Sura {
  number: number
  name: string
  englishName: string
  englishNameTranslation: string
  numberOfAyahs: number
  revelationType: string
}

export default function QuranPage() {
  const [suras, setSuras] = useState<Sura[]>([])
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    fetchSuras()
  }, [])

  const fetchSuras = async () => {
    try {
      const response = await fetch("https://api.alquran.cloud/v1/surah")
      const data = await response.json()
      setSuras(data.data)
    } catch (error) {
      console.error("Error fetching suras:", error)
    }
  }

  const filteredSuras = suras.filter(
    (sura) =>
      sura.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sura.englishName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sura.englishNameTranslation.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="min-h-screen bg-background text-foreground pb-16">
      <header className="bg-primary text-primary-foreground p-4">
        <h1 className="text-2xl font-semibold">আল-কুরআন</h1>
      </header>

      <div className="p-4">
        <Input
          type="text"
          placeholder="Search suras..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mb-4"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSuras.map((sura) => (
            <Link href={`/quran/${sura.number}`} key={sura.number}>
              <Card className="bg-secondary hover:bg-secondary/80 transition-colors">
                <CardContent className="p-4">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold">{sura.name}</span>
                    <span className="text-sm">{sura.number}</span>
                  </div>
                  <div className="text-sm text-secondary-foreground/70">{sura.englishName}</div>
                  <div className="text-xs text-secondary-foreground/60">{sura.englishNameTranslation}</div>
                  <div className="text-xs mt-2">
                    আয়াত: {sura.numberOfAyahs} | প্রকার: {sura.revelationType === "Meccan" ? "মাক্কী" : "মাদানী"}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      <Navigation />
    </div>
  )
}

