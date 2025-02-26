import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"

const prayerRules = {
  fard: [
    {
      title: "শর্তসমূহ",
      items: ["পবিত্রতা অর্জন", "সতর ঢাকা", "কিবলামুখী হওয়া", "ওয়াক্ত হওয়া", "নিয়্যাত করা", "তাকবীরে তাহরীমা"],
    },
    {
      title: "রুকনসমূহ",
      items: ["কিয়াম (দাঁড়ানো)", "কিরাআত (সূরা পাঠ)", "রুকু", "সিজদা", "শেষ বৈঠক"],
    },
  ],
  wajib: ["সূরা ফাতিহা পাঠ", "সূরা ফাতিহার পর অন্য সূরা পাঠ", "প্রথম বৈঠক", "তারতীব বজায় রাখা", "তাদিলে আরকান", "কাদা নামাজ আদায়", "সালাম ফিরানো"],
  sunnah: [
    "আজান",
    "ইকামত",
    "তাকবীর বলে হাত উঠানো",
    "হাত বাঁধা",
    "সানা পাঠ",
    "আমীন বলা",
    "রুকু-সিজদার তাসবীহ",
    "তাশাহহুদ পাঠ",
    "দরূদ শরীফ পাঠ",
  ],
}

export default function PrayerFardPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground p-4 flex items-center gap-2">
        <Link href="/prayer-learning">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-6 w-6" />
          </Button>
        </Link>
        <h1 className="text-2xl font-semibold">নামাজের ফরজ, ওয়াজিব ও সুন্নাত</h1>
      </header>

      <main className="p-4 space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>নামাজের ফরজসমূহ</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {prayerRules.fard.map((section, index) => (
                <div key={index}>
                  <h3 className="text-lg font-semibold mb-2">{section.title}</h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>নামাজের ওয়াজিবসমূহ</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              {prayerRules.wajib.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>নামাজের সুন্নাতসমূহ</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              {prayerRules.sunnah.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </main>

      <Navigation />
    </div>
  )
}

