import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"

const duaCategories = [
  {
    id: "all",
    title: "সব দোয়া",
    description: "সকল দোয়া একসাথে",
  },
  {
    id: "morning-evening",
    title: "সকাল ও সন্ধ্যা",
    description: "সকাল-সন্ধ্যার যিকির ও দোয়া",
  },
  {
    id: "sleep-cleanliness",
    title: "ঘুম ও পরিষ্কার",
    description: "ঘুম ও পরিষ্কার সংক্রান্ত দোয়া",
  },
  {
    id: "food-drink",
    title: "খাদ্য ও পানীয়",
    description: "খাওয়া-দাওয়ার দোয়া",
  },
  {
    id: "praise",
    title: "আল্লাহ্‌র প্রশংসা",
    description: "আল্লাহর প্রশংসা ও স্মরণ",
  },
  {
    id: "prayer",
    title: "নামাজের আগে ও পরে",
    description: "নামাজ সংক্রান্ত দোয়া",
  },
  {
    id: "hajj",
    title: "হজ্জ ও উমরাহ্",
    description: "হজ্জ ও উমরাহ্ সংক্রান্ত দোয়া",
  },
  {
    id: "travel",
    title: "ভ্রমণ ও সফর",
    description: "সফরের দোয়া",
  },
  {
    id: "home",
    title: "ঘর ও বাসা",
    description: "ঘরে প্রবেশ ও বের হওয়ার দোয়া",
  },
  {
    id: "protection",
    title: "সুরক্ষা ও নিরাপত্তা",
    description: "বিপদ-আপদ থেকে সুরক্ষার দোয়া",
  },
  {
    id: "forgiveness",
    title: "ক্ষমা প্রার্থনা",
    description: "তাওবা ও ইস্তিগফারের দোয়া",
  },
  {
    id: "parents",
    title: "পিতা-মাতা",
    description: "পিতা-মাতার জন্য দোয়া",
  },
]

export default function DailyDuaPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground p-4 flex items-center gap-2">
        <Link href="/">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-6 w-6" />
          </Button>
        </Link>
        <h1 className="text-2xl font-semibold">প্রতিদিনের দোয়া আমল</h1>
      </header>

      <main className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {duaCategories.map((category) => (
            <Link key={category.id} href={`/daily-dua/${category.id}`}>
              <Card className="h-full hover:bg-accent transition-colors">
                <CardContent className="p-4">
                  <h2 className="text-xl font-semibold mb-2">{category.title}</h2>
                  <p className="text-sm text-muted-foreground">{category.description}</p>
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

