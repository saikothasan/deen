import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"

const specialPrayers = [
  {
    title: "জুমার নামাজ",
    description: "সাপ্তাহিক জামাআতে আদায়কৃত নামাজ",
    rules: [
      "জুমার নামাজ দুই রাকাত ফরজ",
      "জুমার নামাজের আগে খুতবা শোনা ওয়াজিব",
      "খুতবার সময় কথা বলা নিষেধ",
      "জুমার নামাজের আগে চার রাকাত সুন্নাত",
      "জুমার নামাজের পরে চার রাকাত সুন্নাত",
    ],
    conditions: ["পুরুষ হতে হবে", "প্রাপ্তবয়স্ক হতে হবে", "মুকীম হতে হবে", "সুস্থ হতে হবে"],
  },
  {
    title: "ঈদের নামাজ",
    description: "বছরে দুইবার আদায়কৃত বিশেষ নামাজ",
    rules: [
      "দুই রাকাত ওয়াজিব",
      "প্রথম রাকাতে ৭ বার এবং দ্বিতীয় রাকাতে ৫ বার অতিরিক্ত তাকবীর",
      "নামাজের পর খুতবা",
      "সূর্য উঠার ৪৫ মিনিট পর থেকে দুপুর পর্যন্ত সময়",
    ],
    conditions: ["জামাআতে আদায় করতে হয়", "আজান-ইকামত নেই", "সুন্নাত নামাজ নেই"],
  },
  {
    title: "তারাবীহ নামাজ",
    description: "রমজান মাসে রাতে আদায়কৃত বিশেষ নামাজ",
    rules: ["বিশ রাকাত সুন্নাত", "দুই রাকাত করে আদায় করা হয়", "প্রতি চার রাকাতের পর একটু বিশ্রাম", "শেষে তিন রাকাত বিতর"],
    virtues: ["ঈমানের সাথে তারাবীহ আদায় করলে পূর্বের গুনাহ মাফ হয়", "রমজানের রাতগুলো জীবিত করার সুযোগ"],
  },
  {
    title: "জানাজার নামাজ",
    description: "মৃত ব্যক্তির জন্য আদায়কৃত বিশেষ নামাজ",
    rules: [
      "চার তাকবীর",
      "কিয়াম অবস্থায় আদায় করা হয়",
      "রুকু-সিজদা নেই",
      "প্রথম তাকবীরের পর সানা",
      "দ্বিতীয় তাকবীরের পর দরূদ",
      "তৃতীয় তাকবীরের পর জানাজার দোয়া",
      "চতুর্থ তাকবীরের পর সালাম",
    ],
    dua: {
      arabic: "اللَّهُمَّ اغْفِرْ لِحَيِّنَا وَمَيِّتِنَا وَشَاهِدِنَا وَغَائِبِنَا وَصَغِيرِنَا وَكَبِيرِنَا وَذَكَرِنَا وَأُنْثَانَا",
      bengali: "আল্লাহুম্মাগফির লিহাইয়িনা ওয়া মাইয়িতিনা ওয়া শাহিদিনা ওয়া গায়িবিনা ওয়া সগীরিনা ওয়া কাবীরিনা ওয়া জাকারিনা ওয়া উনছানা",
      meaning: "হে আল্লাহ! আমাদের জীবিত ও মৃত, উপস্থিত ও অনুপস্থিত, ছোট ও বড়, পুরুষ ও নারী সকলকে ক্ষমা করুন",
    },
  },
]

export default function SpecialPrayersPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground p-4 flex items-center gap-2">
        <Link href="/prayer-learning">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-6 w-6" />
          </Button>
        </Link>
        <h1 className="text-2xl font-semibold">বিশেষ নামাজসমূহ</h1>
      </header>

      <main className="p-4">
        <div className="space-y-6">
          {specialPrayers.map((prayer, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{prayer.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{prayer.description}</p>

                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">নিয়মাবলী:</h3>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      {prayer.rules.map((rule, ruleIndex) => (
                        <li key={ruleIndex}>{rule}</li>
                      ))}
                    </ul>
                  </div>

                  {prayer.conditions && (
                    <div>
                      <h3 className="font-semibold mb-2">শর্তসমূহ:</h3>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        {prayer.conditions.map((condition, conditionIndex) => (
                          <li key={conditionIndex}>{condition}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {prayer.virtues && (
                    <div>
                      <h3 className="font-semibold mb-2">ফজিলত:</h3>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        {prayer.virtues.map((virtue, virtueIndex) => (
                          <li key={virtueIndex}>{virtue}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {prayer.dua && (
                    <div>
                      <h3 className="font-semibold mb-2">দোয়া:</h3>
                      <div className="bg-secondary/50 p-3 rounded-lg">
                        <p className="text-right text-lg mb-2">{prayer.dua.arabic}</p>
                        <p className="mb-1">{prayer.dua.bengali}</p>
                        <p className="text-sm text-muted-foreground">{prayer.dua.meaning}</p>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      <Navigation />
    </div>
  )
}

