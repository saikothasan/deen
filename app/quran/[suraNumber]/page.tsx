"use client"

import { useState, useEffect } from "react"
import { Play, Pause } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"

interface Ayah {
  number: number
  text: string
  audio: string
  translation: string
}

interface Sura {
  number: number
  name: string
  englishName: string
  englishNameTranslation: string
  numberOfAyahs: number
  ayahs: Ayah[]
}

export default function SuraPage({ params }: { params: { suraNumber: string } }) {
  const [sura, setSura] = useState<Sura | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentAyah, setCurrentAyah] = useState(0)
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null)

  useEffect(() => {
    fetchSura()
  }, [])

  const fetchSura = async () => {
    try {
      const [arabicResponse, translationResponse] = await Promise.all([
        fetch(`https://api.alquran.cloud/v1/surah/${params.suraNumber}`),
        fetch(`https://api.alquran.cloud/v1/surah/${params.suraNumber}/bn.bengali`),
      ])

      const arabicData = await arabicResponse.json()
      const translationData = await translationResponse.json()

      const combinedAyahs = arabicData.data.ayahs.map((ayah: any, index: number) => ({
        number: ayah.numberInSurah,
        text: ayah.text,
        audio: ayah.audio,
        translation: translationData.data.ayahs[index].text,
      }))

      setSura({
        ...arabicData.data,
        ayahs: combinedAyahs,
      })
    } catch (error) {
      console.error("Error fetching sura:", error)
    }
  }

  useEffect(() => {
    if (sura && sura.ayahs.length > 0) {
      const newAudio = new Audio(sura.ayahs[currentAyah].audio)
      setAudio(newAudio)

      newAudio.addEventListener("ended", handleAudioEnded)

      return () => {
        newAudio.removeEventListener("ended", handleAudioEnded)
        newAudio.pause()
      }
    }
  }, [sura, currentAyah])

  const handleAudioEnded = () => {
    if (currentAyah < sura!.ayahs.length - 1) {
      setCurrentAyah(currentAyah + 1)
    } else {
      setIsPlaying(false)
      setCurrentAyah(0)
    }
  }

  const toggleAudio = () => {
    if (audio) {
      if (isPlaying) {
        audio.pause()
      } else {
        audio.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  if (!sura) {
    return <div className="text-center p-4">Loading...</div>
  }

  return (
    <div className="min-h-screen bg-background text-foreground pb-16">
      <header className="bg-primary text-primary-foreground p-4 flex justify-between items-center">
        <h1 className="text-2xl font-semibold">{sura.name}</h1>
        <Button variant="secondary" onClick={toggleAudio}>
          {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
        </Button>
      </header>

      <div className="p-4">
        <div className="mb-4">
          <h2 className="text-xl">{sura.englishName}</h2>
          <p className="text-sm text-muted-foreground">{sura.englishNameTranslation}</p>
          <p className="text-sm">আয়াত সংখ্যা: {sura.numberOfAyahs}</p>
        </div>

        <div className="space-y-4">
          {sura.ayahs.map((ayah, index) => (
            <Card
              key={ayah.number}
              className={`bg-secondary ${index === currentAyah && isPlaying ? "border-2 border-primary" : ""}`}
            >
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-sm font-semibold">আয়াত {ayah.number}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      setCurrentAyah(index)
                      setIsPlaying(true)
                      audio?.pause()
                      const newAudio = new Audio(ayah.audio)
                      setAudio(newAudio)
                      newAudio.play()
                    }}
                  >
                    <Play className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-right text-xl mb-2 leading-loose">{ayah.text}</p>
                <p className="text-sm mt-2 leading-relaxed text-secondary-foreground">{ayah.translation}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Navigation />
    </div>
  )
}

