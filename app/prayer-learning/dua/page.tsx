import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"

const prayerDuas = [
  {
    title: "সানা",
    arabic: "سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ وَتَبَارَكَ اسْمُكَ وَتَعَالَى جَدُّكَ وَلَا إِلَهَ غَيْرُكَ",
    bengali: "সুবহানাকা আল্লাহুম্মা ওয়া বিহামদিকা ওয়া তাবারাকাসমুকা ওয়া তা'আলা জাদ্দুকা ওয়া লা ইলাহা গাইরুক",
    meaning:
      "হে আল্লাহ! আপনার পবিত্রতা বর্ণনা করছি। আপনার প্রশংসার সাথে, আপনার নাম বরকতময়, আপনার মর্যাদা সুউচ্চ এবং আপনি ছাড়া কোন উপাস্য নেই।",
  },
  {
    title: "রুকুর দোয়া",
    arabic: "سُبْحَانَ رَبِّيَ الْعَظِيمِ",
    bengali: "সুবহানা রাব্বিয়াল আজীম",
    meaning: "আমার মহান প্রভুর পবিত্রতা বর্ণনা করছি।",
  },
  {
    title: "রুকু থেকে উঠার দোয়া",
    arabic: "سَمِعَ اللَّهُ لِمَنْ حَمِدَهُ رَبَّنَا وَلَكَ الْحَمْدُ",
    bengali: "সামিআল্লাহু লিমান হামিদাহ, রাব্বানা ওয়া লাকাল হামদ",
    meaning: "যে আল্লাহর প্রশংসা করে, আল্লাহ তার প্রশংসা শোনেন। হে আমাদের প্রভু! সমস্ত প্রশংসা আপনারই জন্য।",
  },
  {
    title: "সিজদার দোয়া",
    arabic: "سُبْحَانَ رَبِّيَ الْأَعْلَى",
    bengali: "সুবহানা রাব্বিয়াল আ'লা",
    meaning: "আমার সর্বোচ্চ প্রভুর পবিত্রতা বর্ণনা করছি।",
  },
  {
    title: "তাশাহহুদ",
    arabic:
      "التَّحِيَّاتُ لِلَّهِ وَالصَّلَوَاتُ وَالطَّيِّبَاتُ السَّلَامُ عَلَيْكَ أَيُّهَا النَّبِيُّ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ السَّلَامُ عَلَيْنَا وَعَلَى عِبَادِ اللَّهِ الصَّالِحِينَ",
    bengali:
      "আত্তাহিয়্যাতু লিল্লাহি ওয়াস সালাওয়াতু ওয়াত তায়্যিবাতু, আসসালামু আলাইকা আইয়্যুহান নাবিয়্যু ওয়া রাহমাতুল্লাহি ওয়া বারাকাতুহু, আসসালামু আলাইনা ওয়া আলা ইবাদিল্লাহিস সালিহীন",
    meaning:
      "সমস্ত সম্মান, সালাত ও পবিত্র বাক্য আল্লাহর জন্য। হে নবী! আপনার প্রতি শান্তি, আল্লাহর রহমত ও বরকত বর্ষিত হোক। আমাদের প্রতি এবং আল্লাহর সৎ বান্দাদের প্রতি শান্তি বর্ষিত হোক।",
  },
  {
    title: "দরূদ শরীফ",
    arabic: "اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ",
    bengali: "আল্লাহুম্মা সাল্লি আলা মুহাম্মাদিন ওয়া আলা আলি মুহাম্মাদিন কামা সাল্লাইতা আলা ইবরাহীমা ওয়া আলা আলি ইবরাহীমা ইন্নাকা হামীদুম মাজীদ",
    meaning:
      "হে আল্লাহ! আপনি মুহাম্মাদ (সা.) ও তাঁর পরিবারবর্গের প্রতি রহমত বর্ষণ করুন, যেমন আপনি রহমত বর্ষণ করেছেন ইবরাহীম (আ.) ও তাঁর পরিবারবর্গের প্রতি। নিশ্চয় আপনি প্রশংসিত, মহিমান্বিত।",
  },
]

export default function PrayerDuaPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground p-4 flex items-center gap-2">
        <Link href="/prayer-learning">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-6 w-6" />
          </Button>
        </Link>
        <h1 className="text-2xl font-semibold">নামাজের দোয়াসমূহ</h1>
      </header>

      <main className="p-4">
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>দোয়ার গুরুত্ব</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              নামাজে পঠিত দোয়াগুলো সঠিকভাবে পাঠ করা অত্যন্ত গুরুত্বপূর্ণ। এগুলো নামাজের অপরিহার্য অংশ।
            </p>
          </CardContent>
        </Card>

        <div className="space-y-4">
          {prayerDuas.map((dua, index) => (
            <Card key={index}>
              <CardContent className="p-4">
                <h2 className="text-lg font-semibold mb-2">{dua.title}</h2>
                <div className="bg-secondary/50 p-3 rounded-lg mb-2">
                  <p className="text-right text-lg mb-2">{dua.arabic}</p>
                  <p className="text-sm mb-2">{dua.bengali}</p>
                  <p className="text-sm text-muted-foreground">{dua.meaning}</p>
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

