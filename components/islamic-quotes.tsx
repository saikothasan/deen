"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const quotes = [
  {
    text: "আল্লাহর স্মরণেই হৃদয় প্রশান্তি লাভ করে।",
    source: "সূরা রা'দ, আয়াত ২৮",
  },
  {
    text: "নিশ্চয়ই কঠিন সময়ের পর সুখের সময় আসে।",
    source: "সূরা ইনশিরাহ, আয়াত ৫",
  },
  {
    text: "তোমরা ধৈর্য ও নামাযের মাধ্যমে সাহায্য প্রার্থনা কর।",
    source: "সূরা বাকারা, আয়াত ৪৫",
  },
  {
    text: "আল্লাহ তোমাদের উপর এমন কোন বোঝা চাপান না, যা বহন করার ক্ষমতা তোমাদের নেই।",
    source: "সূরা বাকারা, আয়াত ২৮৬",
  },
  {
    text: "নিশ্চয়ই আল্লাহ তাদের সাথে আছেন যারা তাকওয়া অবলম্বন করে এবং যারা সৎকর্ম করে।",
    source: "সূরা নাহল, আয়াত ১২৮",
  },
]

export function IslamicQuotes() {
  const [quote, setQuote] = useState(quotes[0])

  useEffect(() => {
    const interval = setInterval(
      () => {
        const randomIndex = Math.floor(Math.random() * quotes.length)
        setQuote(quotes[randomIndex])
      },
      24 * 60 * 60 * 1000,
    ) // Change quote every 24 hours

    return () => clearInterval(interval)
  }, [])

  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle>ইসলামিক উক্তি</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-lg mb-2">{quote.text}</p>
        <p className="text-sm text-muted-foreground">{quote.source}</p>
      </CardContent>
    </Card>
  )
}

