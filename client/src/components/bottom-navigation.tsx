import { Link, useLocation } from "wouter"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Atom, BookOpen, User } from "lucide-react"

interface BottomNavigationProps {
  className?: string
}

const navigationItems = [
  {
    id: "qubits",
    label: "Qubits",
    href: "/",
    icon: Atom,
  },
  {
    id: "learn", 
    label: "Learn",
    href: "/learn",
    icon: BookOpen,
  },
  {
    id: "profile",
    label: "Profile", 
    href: "/profile",
    icon: User,
  }
]

export function BottomNavigation({ className }: BottomNavigationProps) {
  const [location] = useLocation()

  const isActive = (href: string) => {
    if (href === "/") {
      return location === "/" || location === "/connected" || location === "/circuits" || location === "/simulator"
    }
    return location.startsWith(href)
  }

  return (
    <nav 
      className={`fixed bottom-0 left-0 right-0 bg-background border-t border-border ${className}`}
      data-testid="bottom-navigation"
    >
      <div className="flex items-center justify-around py-2 px-4 max-w-2xl mx-auto">
        {navigationItems.map((item) => (
          <Link key={item.id} href={item.href}>
            <Button
              variant="ghost"
              size="sm"
              className={`flex flex-col items-center gap-1 h-auto py-2 px-3 ${
                isActive(item.href) 
                  ? "text-primary" 
                  : "text-muted-foreground"
              }`}
              data-testid={`nav-${item.id}`}
            >
              <item.icon className="h-5 w-5" />
              <span className="text-xs font-medium">{item.label}</span>
            </Button>
          </Link>
        ))}
      </div>
    </nav>
  )
}