import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"

const wuduSteps = [
  {
    title: "নিয়্যাত করা",
    description: "বিসমিল্লাহ বলে ওজু শুরু করার নিয়্যাত করুন",
    dua: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ",
    duaBengali: "বিসমিল্লাহির রাহমানির রাহীম",
  },
  {
    title: "হাত ধোয়া",
    description: "উভয় হাত কব্জি পর্যন্ত তিনবার ধুয়ে নিন",
  },
  {
    title: "কুলি করা",
    description: "তিনবার কুলি করুন এবং মিসওয়াক করুন",
  },
  {
    title: "নাকে পানি দেওয়া",
    description: "তিনবার নাকে পানি দিয়ে নাক পরিষ্কার করুন",
  },
  {
    title: "মুখমণ্ডল ধোয়া",
    description: "সম্পূর্ণ মুখমণ্ডল তিনবার ধুয়ে নিন",
  },
  {
    title: "হাত ধোয়া",
    description: "কনুই পর্যন্ত উভয় হাত তিনবার ধুয়ে নিন",
  },
  {
    title: "মাথা মাসেহ",
    description: "ভিজা হাত দিয়ে সম্পূর্ণ মাথা একবার মাসেহ করুন",
  },
  {
    title: "কান মাসেহ",
    description: "আঙ্গুল দিয়ে কানের ভিতর ও বাহির মাসেহ করুন",
  },
  {
    title: "পা ধোয়া",
    description: "টাখনু পর্যন্ত উভয় পা তিনবার ধুয়ে নিন",
  },
]

export default function WuduPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground p-4 flex items-center gap-2">
        <Link href="/prayer-learning">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-6 w-6" />
          </Button>
        </Link>
        <h1 className="text-2xl font-semibold">ওজুর নিয়ম</h1>
      </header>

      <main className="p-4">
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>ওজুর গুরুত্ব</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              ওজু হল নামাজের একটি পূর্বশর্ত। পবিত্র কুরআনে আল্লাহ তাআলা বলেন: "হে মুমিনগণ! যখন তোমরা নামাজে দাঁড়াতে চাও, তখন তোমাদের মুখমণ্ডল ও
              হাত কনুই পর্যন্ত ধৌত কর, তোমাদের মাথা মাসেহ কর এবং পা টাখনু পর্যন্ত ধৌত কর।" (সূরা মায়িদা: ৬)
            </p>
          </CardContent>
        </Card>

        <div className="space-y-4">
          {wuduSteps.map((step, index) => (
            <Card key={index}>
              <CardContent className="p-4">
                <h2 className="text-lg font-semibold mb-2">
                  {index + 1}. {step.title}
                </h2>
                <p className="text-muted-foreground mb-2">{step.description}</p>
                {step.dua && (
                  <div className="mt-2">
                    <p className="text-right text-lg mb-1">{step.dua}</p>
                    <p className="text-sm text-muted-foreground">{step.duaBengali}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-6">
          <CardHeader>
            <CardTitle>ওজু ভঙ্গের কারণসমূহ</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>পেশাব-পায়খানা করলে</li>
              <li>বায়ু বের হলে</li>
              <li>গভীর ঘুম</li>
              <li>অজ্ঞান হলে</li>
              <li>রক্ত বা পুঁজ বের হলে</li>
              <li>বমি করলে</li>
              <li>মাথা থেকে রক্ত বের হলে</li>
            </ul>
          </CardContent>
        </Card>
      </main>

      <Navigation />
    </div>
  )
}

