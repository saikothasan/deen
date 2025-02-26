"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function SadaqahTracker() {
  const [totalAmount, setTotalAmount] = useState(0)
  const [newAmount, setNewAmount] = useState("")

  useEffect(() => {
    const savedAmount = localStorage.getItem("sadaqahAmount")
    if (savedAmount) {
      setTotalAmount(Number.parseFloat(savedAmount))
    }
  }, [])

  const addDonation = () => {
    const amount = Number.parseFloat(newAmount)
    if (!isNaN(amount) && amount > 0) {
      const newTotal = totalAmount + amount
      setTotalAmount(newTotal)
      localStorage.setItem("sadaqahAmount", newTotal.toString())
      setNewAmount("")
    }
  }

  const resetTracker = () => {
    setTotalAmount(0)
    localStorage.setItem("sadaqahAmount", "0")
  }

  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle>সাদাকাহ ট্র্যাকার</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-center text-2xl font-bold mb-4">{totalAmount.toFixed(2)} টাকা</p>
        <div className="flex space-x-2 mb-2">
          <Input type="number" value={newAmount} onChange={(e) => setNewAmount(e.target.value)} placeholder="পরিমাণ" />
          <Button onClick={addDonation}>যোগ করুন</Button>
        </div>
        <Button variant="outline" onClick={resetTracker} className="w-full">
          রিসেট
        </Button>
      </CardContent>
    </Card>
  )
}

