"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const islamicEvents = [
  { name: "রমজান", date: "২৩ মার্চ, ২০২৩" },
  { name: "লাইলাতুল কদর", date: "১৭ এপ্রিল, ২০২৩" },
  { name: "ঈদুল ফিতর", date: "২২ এপ্রিল, ২০২৩" },
  { name: "হজ্জ", date: "২৭ জুন, ২০২৩" },
  { name: "ঈদুল আযহা", date: "২৯ জুন, ২০২৩" },
  { name: "ইসলামি নববর্ষ", date: "১৯ জুলাই, ২০২৩" },
  { name: "আশুরা", date: "২৮ জুলাই, ২০২৩" },
  { name: "মিলাদুন নবী", date: "২৭ সেপ্টেম্বর, ২০২৩" },
]

export function IslamicEventCalendar() {
  const [selectedEvent, setSelectedEvent] = useState(islamicEvents[0])

  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle>ইসলামিক ইভেন্ট ক্যালেন্ডার</CardTitle>
      </CardHeader>
      <CardContent>
        <Select
          value={selectedEvent.name}
          onValueChange={(value) =>
            setSelectedEvent(islamicEvents.find((event) => event.name === value) || islamicEvents[0])
          }
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select an event" />
          </SelectTrigger>
          <SelectContent>
            {islamicEvents.map((event) => (
              <SelectItem key={event.name} value={event.name}>
                {event.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <p className="mt-4 text-center">
          <span className="font-bold">{selectedEvent.name}</span>: {selectedEvent.date}
        </p>
      </CardContent>
    </Card>
  )
}

