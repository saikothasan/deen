"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"

export default function ZakatCalculatorPage() {
  const [wealth, setWealth] = useState("")
  const [zakatAmount, setZakatAmount] = useState(0)

  const calculateZakat = () => {
    const wealthAmount = Number.parseFloat(wealth)
    if (wealthAmount >= 87.48) {
      // Nisab threshold in gold grams
      setZakatAmount(wealthAmount * 0.025)
    } else {
      setZakatAmount(0)
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground pb-16">
      <header className="bg-primary text-primary-foreground p-4">
        <h1 className="text-2xl font-semibold">যাকাত ক্যালকুলেটর</h1>
      </header>

      <div className="p-4">
        <Card>
          <CardHeader>
            <CardTitle>আপনার যাকাত হিসাব করুন</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <label htmlFor="wealth" className="block text-sm font-medium text-foreground">
                  মোট সম্পদ (টাকা)
                </label>
                <Input
                  type="number"
                  id="wealth"
                  value={wealth}
                  onChange={(e) => setWealth(e.target.value)}
                  placeholder="আপনার মোট সম্পদের পরিমাণ লিখুন"
                  className="mt-1"
                />
              </div>
              <Button onClick={calculateZakat}>যাকাত হিসাব করুন</Button>
              {zakatAmount > 0 && (
                <div className="mt-4">
                  <h3 className="text-lg font-semibold">আপনার যাকাতের পরিমাণ:</h3>
                  <p className="text-2xl font-bold text-primary">{zakatAmount.toFixed(2)} টাকা</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      <Navigation />
    </div>
  )
}

