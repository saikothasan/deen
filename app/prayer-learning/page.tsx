import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"

const prayerTopics = [
  {
    id: "wudu",
    title: "ওজুর নিয়ম",
    description: "ওজু করার সঠিক পদ্ধতি ও দোয়া",
  },
  {
    id: "fard",
    title: "নামাজের ফরজসমূহ",
    description: "নামাজের ফরজ, ওয়াজিব ও সুন্নাত",
  },
  {
    id: "prayer-times",
    title: "নামাজের সময়",
    description: "পাঁচ ওয়াক্ত নামাজের সময়সূচী",
  },
  {
    id: "method",
    title: "নামাজ পড়ার নিয়ম",
    description: "নামাজ আদায়ের সঠিক পদ্ধতি",
  },
  {
    id: "dua",
    title: "নামাজের দোয়াসমূহ",
    description: "নামাজে পড়ার দোয়া ও জিকির",
  },
  {
    id: "mistakes",
    title: "সাধারণ ভুলত্রুটি",
    description: "নামাজে সাধারণ ভুলত্রুটি ও সমাধান",
  },
  {
    id: "women",
    title: "মহিলাদের নামাজ",
    description: "মহিলাদের নামাজ সংক্রান্ত বিশেষ নিয়মাবলী",
  },
  {
    id: "special",
    title: "বিশেষ নামাজসমূহ",
    description: "জুমা, ঈদ, তারাবীহ ও জানাযার নামাজ",
  },
]

export default function PrayerLearningPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground p-4 flex items-center gap-2">
        <Link href="/">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-6 w-6" />
          </Button>
        </Link>
        <h1 className="text-2xl font-semibold">নামাজ শিক্ষা</h1>
      </header>

      <main className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {prayerTopics.map((topic) => (
            <Link key={topic.id} href={`/prayer-learning/${topic.id}`}>
              <Card className="h-full hover:bg-accent transition-colors">
                <CardContent className="p-4">
                  <h2 className="text-xl font-semibold mb-2">{topic.title}</h2>
                  <p className="text-sm text-muted-foreground">{topic.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </main>

      <Navigation />
    </div>
  )
}

