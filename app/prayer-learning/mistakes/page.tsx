import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"

const commonMistakes = [
  {
    title: "ওজু সংক্রান্ত ভুলসমূহ",
    mistakes: [
      "সম্পূর্ণভাবে ওজুর অঙ্গ না ধোয়া",
      "ওজুর ক্রম না মানা",
      "অপচয় করে পানি ব্যবহার করা",
      "মাসাহ সঠিকভাবে না করা",
      "ওজু ভঙ্গের কারণ সম্পর্কে না জানা",
    ],
  },
  {
    title: "দাঁড়ানো অবস্থায় ভুলসমূহ",
    mistakes: ["পা দুটি খুব বেশি ফাঁক করে রাখা", "মাথা নত করে রাখা", "এদিক-ওদিক তাকানো", "চোখ বন্ধ করে রাখা", "হাত সঠিকভাবে না বাঁধা"],
  },
  {
    title: "রুকু সংক্রান্ত ভুলসমূহ",
    mistakes: ["পিঠ সোজা না রাখা", "মাথা খুব নিচে বা উঁচু করা", "হাঁটু না ধরা", "তাড়াহুড়া করে রুকু করা", "তাসবীহ না পড়া"],
  },
  {
    title: "সিজদা সংক্রান্ত ভুলসমূহ",
    mistakes: ["কনুই মাটিতে লাগানো", "পা উঠিয়ে রাখা", "পায়ের আঙ্গুল খাড়া না রাখা", "কপাল-নাক মাটিতে ভালোভাবে না লাগানো", "তাড়াহুড়া করে সিজদা করা"],
  },
  {
    title: "বৈঠক সংক্রান্ত ভুলসমূহ",
    mistakes: ["পা সঠিকভাবে না রাখা", "আঙ্গুল দিয়ে ইশারা না করা", "তাশাহহুদ ভুল পড়া", "দরূদ শরীফ না পড়া", "শেষ দোয়া না পড়া"],
  },
  {
    title: "সাধারণ ভুলসমূহ",
    mistakes: ["নামাজে কথা বলা", "মোবাইল ফোন দেখা", "ঘড়ি দেখা", "অযথা নড়াচড়া করা", "সূরা ভুল পড়া", "জামাআতে ইমামের আগে আগে যাওয়া"],
  },
]

export default function PrayerMistakesPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground p-4 flex items-center gap-2">
        <Link href="/prayer-learning">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-6 w-6" />
          </Button>
        </Link>
        <h1 className="text-2xl font-semibold">নামাজের সাধারণ ভুলত্রুটি</h1>
      </header>

      <main className="p-4">
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>ভুল সংশোধনের গুরুত্ব</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              নামাজ সঠিকভাবে আদায় করার জন্য সাধারণ ভুলগুলো সম্পর্কে জানা এবং সেগুলো এড়িয়ে চলা অত্যন্ত গুরুত্বপূর্ণ। নিচে কিছু সাধারণ ভুল এবং সেগুলো
              কীভাবে এড়ানো যায় তা আলোচনা করা হলো।
            </p>
          </CardContent>
        </Card>

        <div className="space-y-6">
          {commonMistakes.map((section, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{section.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  {section.mistakes.map((mistake, mistakeIndex) => (
                    <li key={mistakeIndex}>{mistake}</li>
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

