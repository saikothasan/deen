import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Navigation } from "@/components/navigation"

const prayerTimes = [
  { name: "ফজর", start: "সুবহে সাদিক", end: "সূর্যোদয়", notes: "সূর্যোদয়ের ২০ মিনিট আগে পর্যন্ত" },
  { name: "যোহর", start: "সূর্য ঢলার পর", end: "আসরের সময় শুরু", notes: "গ্রীষ্মকালে দেরি করে পড়া উত্তম" },
  { name: "আসর", start: "প্রতিটি বস্তুর ছায়া দ্বিগুণ", end: "সূর্যাস্তের পূর্ব পর্যন্ত", notes: "সূর্য হলুদ হওয়ার আগে শেষ করা উত্তম" },
  { name: "মাগরিব", start: "সূর্যাস্তের পর", end: "লাল আভা অদৃশ্য", notes: "তাড়াতাড়ি আদায় করা উত্তম" },
  { name: "ইশা", start: "লাল আভা অদৃশ্য", end: "মধ্যরাত্রি", notes: "মধ্যরাত্রির আগে আদায় করা উত্তম" },
]

const prohibitedTimes = ["সূর্যোদয়ের সময়", "সূর্য মধ্য আকাশে থাকার সময়", "সূর্যাস্তের সময়"]

export default function PrayerTimesPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground p-4 flex items-center gap-2">
        <Link href="/prayer-learning">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-6 w-6" />
          </Button>
        </Link>
        <h1 className="text-2xl font-semibold">নামাজের সময়</h1>
      </header>

      <main className="p-4">
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>নামাজের সময়সূচী</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>নামাজ</TableHead>
                  <TableHead>শুরু</TableHead>
                  <TableHead>শেষ</TableHead>
                  <TableHead>বিশেষ নোট</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {prayerTimes.map((prayer) => (
                  <TableRow key={prayer.name}>
                    <TableCell className="font-medium">{prayer.name}</TableCell>
                    <TableCell>{prayer.start}</TableCell>
                    <TableCell>{prayer.end}</TableCell>
                    <TableCell>{prayer.notes}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>নামাজ নিষিদ্ধ সময়</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              {prohibitedTimes.map((time, index) => (
                <li key={index}>{time}</li>
              ))}
            </ul>
            <p className="mt-4 text-muted-foreground">
              এই সময়গুলোতে কোন ধরনের নফল নামাজ পড়া নিষেধ। তবে ফরজ নামাজ, জানাজার নামাজ, ও কাজা নামাজ পড়া যায়।
            </p>
          </CardContent>
        </Card>
      </main>

      <Navigation />
    </div>
  )
}

