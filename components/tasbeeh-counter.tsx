"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function TasbeehCounter() {
  const [count, setCount] = useState(0)

  const increment = () => setCount((prev) => prev + 1)
  const reset = () => setCount(0)

  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle>তাসবীহ গণনাকারী</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-center">
          <div className="text-4xl font-bold mb-4">{count}</div>
          <div className="flex justify-center space-x-2">
            <Button onClick={increment}>গণনা করুন</Button>
            <Button variant="outline" onClick={reset}>
              রিসেট
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

