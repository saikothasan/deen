import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"

const prayerSteps = [
  {
    title: "নিয়্যাত",
    description: "নামাজের নিয়্যাত করে তাকবীরে তাহরীমা বলুন",
    arabic: "اللَّهُ أَكْبَرُ",
    bengali: "আল্লাহু আকবার",
    details: "দাঁড়িয়ে কিবলামুখী হয়ে দুই কান পর্যন্ত হাত উঠিয়ে নিয়্যাত করুন",
  },
  {
    title: "কিয়াম",
    description: "দাঁড়িয়ে সূরা ফাতিহা ও অন্য সূরা পাঠ করুন",
    arabic: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ",
    bengali: "বিসমিল্লাহির রাহমানির রাহীম",
    details: "ডান হাত বাম হাতের উপর রেখে নাভির নিচে বাঁধুন",
  },
  {
    title: "রুকু",
    description: "রুকুতে গিয়ে তাসবীহ পাঠ করুন",
    arabic: "سُبْحَانَ رَبِّيَ الْعَظِيمِ",
    bengali: "সুবহানা রাব্বিয়াল আজীম",
    details: "পিঠ সমান রেখে রুকুতে যান",
  },
  {
    title: "সিজদা",
    description: "সিজদায় গিয়ে তাসবীহ পাঠ করুন",
    arabic: "سُبْحَانَ رَبِّيَ الْأَعْلَى",
    bengali: "সুবহানা রাব্বিয়াল আ'লা",
    details: "আগে হাঁটু, তারপর হাত, নাক ও কপাল রেখে সিজদা করুন",
  },
  {
    title: "তাশাহহুদ",
    description: "বসে আত্তাহিয়্যাতু পাঠ করুন",
    arabic: "التَّحِيَّاتُ لِلَّهِ وَالصَّلَوَاتُ وَالطَّيِّبَاتُ",
    bengali: "আত্তাহিয়্যাতু লিল্লাহি ওয়াস সালাওয়াতু ওয়াত তায়্যিবাতু",
    details: "বাম পায়ের উপর বসে শাহাদাত আঙ্গুল দিয়ে ইশারা করুন",
  },
  {
    title: "সালাম",
    description: "ডানে ও বামে সালাম ফিরান",
    arabic: "السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللَّهِ",
    bengali: "আসসালামু আলাইকুম ওয়া রাহমাতুল্লাহ",
    details: "প্রথমে ডান দিকে, তারপর বাম দিকে মুখ ফিরিয়ে সালাম দিন",
  },
]

export default function PrayerMethodPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground p-4 flex items-center gap-2">
        <Link href="/prayer-learning">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-6 w-6" />
          </Button>
        </Link>
        <h1 className="text-2xl font-semibold">নামাজ পড়ার নিয়ম</h1>
      </header>

      <main className="p-4">
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>নামাজের গুরুত্ব</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              নামাজ ইসলামের দ্বিতীয় রুকন। আল্লাহ তাআলা বলেন: "নিশ্চয় নামাজ মুমিনদের উপর নির্ধারিত সময়ে ফরজ করা হয়েছে।" (সূরা নিসা: ১০৩)
            </p>
          </CardContent>
        </Card>

        <div className="space-y-4">
          {prayerSteps.map((step, index) => (
            <Card key={index}>
              <CardContent className="p-4">
                <h2 className="text-lg font-semibold mb-2">
                  {index + 1}. {step.title}
                </h2>
                <p className="text-muted-foreground mb-2">{step.description}</p>
                <div className="bg-secondary/50 p-3 rounded-lg mb-2">
                  <p className="text-right text-lg mb-1">{step.arabic}</p>
                  <p className="text-sm text-muted-foreground">{step.bengali}</p>
                </div>
                <p className="text-sm text-muted-foreground">{step.details}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-6">
          <CardHeader>
            <CardTitle>নামাজের শর্তসমূহ</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>পবিত্রতা অর্জন (ওজু/গোসল)</li>
              <li>সময় হওয়া</li>
              <li>সতর ঢাকা</li>
              <li>কিবলামুখী হওয়া</li>
              <li>নিয়্যাত করা</li>
              <li>স্থান ও কাপড় পাক হওয়া</li>
            </ul>
          </CardContent>
        </Card>
      </main>

      <Navigation />
    </div>
  )
}

