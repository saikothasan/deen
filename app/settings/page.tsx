"use client"

import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Input } from "@/components/ui/input"
import { useSettings } from "@/store/settings"
import { BANGLADESH_DISTRICTS } from "@/utils/location"
import { CalculationMethod } from "adhan"
import { Navigation } from "@/components/navigation"

export default function SettingsPage() {
  const settings = useSettings()
  const [searchTerm, setSearchTerm] = useState("")

  const filteredDistricts = BANGLADESH_DISTRICTS.filter(
    (district) =>
      district.name.toLowerCase().includes(searchTerm.toLowerCase()) || district.nameInBengali.includes(searchTerm),
  )

  return (
    <div className="min-h-screen bg-background text-foreground pb-16">
      <header className="bg-primary text-primary-foreground p-4">
        <h1 className="text-2xl font-semibold">সেটিংস</h1>
      </header>

      <div className="p-4 space-y-6">
        <div>
          <h2 className="text-lg font-medium mb-2">অবস্থান</h2>
          <Input
            type="text"
            placeholder="Search districts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="mb-2"
          />
          <Select
            value={settings.selectedLocation.name}
            onValueChange={(value) => {
              const location = BANGLADESH_DISTRICTS.find((district) => district.name === value)
              if (location) settings.setLocation(location)
            }}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a district" />
            </SelectTrigger>
            <SelectContent>
              {filteredDistricts.map((district) => (
                <SelectItem key={district.name} value={district.name}>
                  {district.nameInBengali}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <h2 className="text-lg font-medium mb-2">বিজ্ঞপ্তি</h2>
          <div className="flex items-center">
            <Switch checked={settings.notificationsEnabled} onCheckedChange={settings.toggleNotifications} />
            <span className="ml-2">বিজ্ঞপ্তি সক্রিয় করুন</span>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-medium mb-2">গণনা পদ্ধতি</h2>
          <Select
            value={settings.calculationMethod.name}
            onValueChange={(value) => {
              const method = Object.values(CalculationMethod).find((m) => m.name === value)
              if (method) settings.setCalculationMethod(method)
            }}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select calculation method" />
            </SelectTrigger>
            <SelectContent>
              {Object.values(CalculationMethod).map((method) => (
                <SelectItem key={method.name} value={method.name}>
                  {method.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <h2 className="text-lg font-medium mb-2">সময় সমন্বয় (মিনিট)</h2>
          {Object.entries(settings.adjustments).map(([prayer, adjustment]) => (
            <div key={prayer} className="flex items-center justify-between mb-2">
              <span>{prayer}</span>
              <Input
                type="number"
                value={adjustment}
                onChange={(e) =>
                  settings.setAdjustment(prayer as keyof typeof settings.adjustments, Number.parseInt(e.target.value))
                }
                className="w-20"
              />
            </div>
          ))}
        </div>
      </div>

      <Navigation />
    </div>
  )
}

