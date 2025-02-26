import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"

const womenPrayerRules = [
  {
    title: "পোশাক সংক্রান্ত নিয়মাবলী",
    rules: [
      "সম্পূর্ণ শরীর ঢেকে রাখা (শুধুমাত্র মুখ ও হাতের কব্জি পর্যন্ত প্রকাশ থাকতে পারে)",
      "পোশাক অবশ্যই আলগা হতে হবে, শরীরের গঠন যেন প্রকাশ না পায়",
      "পোশাক স্বচ্ছ বা পাতলা হবে না",
      "মাথা ও গলা ভালোভাবে ঢেকে রাখতে হবে",
      "পায়ের গোড়ালি ঢেকে রাখতে হবে",
    ],
  },
  {
    title: "দাঁড়ানোর নিয়ম",
    rules: ["পা জোড়া করে রাখা", "হাত বুকের উপর রাখা", "শরীর যথাসম্ভব সংকুচিত রাখা", "মাথা সামান্য নত করে রাখা"],
  },
  {
    title: "রুকুর নিয়ম",
    rules: ["সামান্য ঝুঁকে রুকু করা", "হাত হাঁটুর উপর রাখা (আঙ্গুল ছড়িয়ে না রেখে)", "কনুই শরীরের সাথে লাগিয়ে রাখা", "পিঠ সম্পূর্ণ সোজা না করা"],
  },
  {
    title: "সিজদার নিয়ম",
    rules: [
      "আগে হাঁটু মাটিতে রাখা",
      "তারপর হাত রাখা",
      "সর্বশেষে মাথা রাখা",
      "হাত কনুই পর্যন্ত শরীরের সাথে লাগিয়ে রাখা",
      "পেট রান থেকে দূরে রাখা",
      "পা ডান দিকে বের করে রাখা",
    ],
  },
  {
    title: "বৈঠকের নিয়ম",
    rules: ["ডান পায়ের উপর বসা", "বাম পা ডান দিকে বের করে রাখা", "উভয় হাত হাঁটুর উপর রাখা", "আঙ্গুলগুলো স্বাভাবিকভাবে রাখা"],
  },
  {
    title: "বিশেষ নির্দেশনা",
    rules: [
      "মহিলারা জামাআতে নামাজ পড়লে পুরুষদের পিছনে দাঁড়াবেন",
      "আজান-ইকামত দিবেন না",
      "উচ্চস্বরে কিরাআত পড়বেন না",
      "হাত কান পর্যন্ত না তুলে কাঁধ পর্যন্ত তুলবেন",
      "নামাজের সময় অলংকার খোলার প্রয়োজন নেই",
    ],
  },
]

const specialCases = [
  {
    title: "হায়েজ/নিফাস অবস্থায়",
    rules: ["এ সময় নামাজ মাফ থাকে", "পবিত্র হওয়ার পর কাজা করতে হয় না", "পবিত্র হওয়ার পর গোসল করে নামাজ শুরু করতে হয়"],
  },
  {
    title: "সফর অবস্থায়",
    rules: ["৪৮ মাইলের বেশি দূরে সফরে চার রাকাত ফরজ নামাজ দুই রাকাত পড়তে হয়", "সফরে জমা করে নামাজ পড়া যায়", "সফরে নফল নামাজ মাফ থাকে"],
  },
  {
    title: "অসুস্থ অবস্থায়",
    rules: ["দাঁড়াতে না পারলে বসে নামাজ পড়া যায়", "বসতেও না পারলে শুয়ে নামাজ পড়া যায়", "ইশারায় রুকু-সিজদা করা যায়", "তায়াম্মুম করে নামাজ পড়া যায়"],
  },
]

export default function WomenPrayerPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground p-4 flex items-center gap-2">
        <Link href="/prayer-learning">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-6 w-6" />
          </Button>
        </Link>
        <h1 className="text-2xl font-semibold">মহিলাদের নামাজ</h1>
      </header>

      <main className="p-4">
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>মহিলাদের নামাজের বিশেষ নিয়মাবলী</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              মহিলাদের নামাজ পড়ার ক্ষেত্রে কিছু বিশেষ নিয়ম রয়েছে। এই নিয়মগুলো মেনে চলা অত্যন্ত গুরুত্বপূর্ণ।
            </p>
          </CardContent>
        </Card>

        <div className="space-y-6">
          {womenPrayerRules.map((section, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{section.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  {section.rules.map((rule, ruleIndex) => (
                    <li key={ruleIndex}>{rule}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">বিশেষ পরিস্থিতি</h2>
        <div className="space-y-6">
          {specialCases.map((section, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{section.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  {section.rules.map((rule, ruleIndex) => (
                    <li key={ruleIndex}>{rule}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      <Navigation />
    </div>
  )
}

