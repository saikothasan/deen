"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Home,
  Clock,
  Calendar,
  Book,
  CheckSquare,
  Hash,
  Quote,
  Moon,
  Heart,
  CalendarDays,
  Star,
  Menu,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const navItems = [
  { href: "/", icon: Home, label: "Home" },
  { href: "/prayer-times", icon: Clock, label: "Prayer Times" },
  { href: "/monthly-calendar", icon: Calendar, label: "Calendar" },
  { href: "/daily-hadith", icon: Book, label: "Hadith" },
  { href: "/prayer-tracker", icon: CheckSquare, label: "Prayer Tracker" },
  { href: "/tasbeeh-counter", icon: Hash, label: "Tasbeeh" },
  { href: "/islamic-quotes", icon: Quote, label: "Quotes" },
  { href: "/fasting-tracker", icon: Moon, label: "Fasting" },
  { href: "/sadaqah-tracker", icon: Heart, label: "Sadaqah" },
  { href: "/islamic-event-calendar", icon: CalendarDays, label: "Events" },
  { href: "/asmaul-husna", icon: Star, label: "99 Names" },
]

export function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const NavLink = ({ item }: { item: (typeof navItems)[number] }) => (
    <Link
      href={item.href}
      className={cn(
        "flex items-center space-x-2 px-4 py-2 rounded-md transition-colors",
        pathname === item.href ? "bg-primary text-primary-foreground" : "hover:bg-accent hover:text-accent-foreground",
      )}
      onClick={() => setIsOpen(false)}
    >
      <item.icon className="h-5 w-5" />
      <span>{item.label}</span>
    </Link>
  )

  return (
    <>
      {/* Mobile Navigation */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="fixed bottom-4 right-4 z-50 rounded-full shadow-lg md:hidden"
            aria-label="Open navigation menu"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="bottom" className="h-[80vh]">
          <nav className="flex flex-col space-y-2 mt-4">
            {navItems.map((item) => (
              <NavLink key={item.href} item={item} />
            ))}
          </nav>
        </SheetContent>
      </Sheet>

      {/* Desktop Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-background border-t border-border hidden md:block">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-6 lg:grid-cols-11 gap-1 py-2">
            {navItems.map((item) => (
              <NavLink key={item.href} item={item} />
            ))}
          </div>
        </div>
      </nav>
    </>
  )
}

