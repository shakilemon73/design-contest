import { Link, useLocation } from "wouter"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BarChart3, GraduationCap, User, Plus, Zap } from "lucide-react"

interface BottomNavigationProps {
  className?: string
}

const navigationItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    href: "/",
    icon: BarChart3,
    badge: { text: "Live", variant: "destructive" as const }
  },
  {
    id: "build",
    label: "Build",
    href: "/add-qubits",
    icon: Plus,
    badge: { text: "New", variant: "default" as const }
  },
  {
    id: "connected", 
    label: "Connected",
    href: "/connected",
    icon: Zap,
    badge: { text: "3", variant: "secondary" as const }
  },
  {
    id: "learn", 
    label: "Learn",
    href: "/learn",
    icon: GraduationCap,
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
      return location === "/"
    }
    return location.startsWith(href)
  }

  return (
    <nav 
      className={`fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur border-t border-border pb-[max(0.5rem,env(safe-area-inset-bottom))] ${className}`}
      data-testid="bottom-navigation"
    >
      <div className="flex items-center justify-around py-2 px-2 max-w-[430px] mx-auto">
        {navigationItems.map((item) => (
          <Link key={item.id} href={item.href}>
            <Button
              variant="ghost"
              size="sm"
              className={`relative flex flex-col items-center gap-1 h-auto py-2 px-2 transition-all duration-200 ${
                isActive(item.href) 
                  ? "text-quantum-primary quantum-glow" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
              data-testid={`nav-${item.id}`}
            >
              <div className="relative">
                <item.icon className={`h-5 w-5 ${
                  isActive(item.href) ? 'animate-quantum-pulse' : ''
                }`} />
                {item.badge && (
                  <Badge 
                    variant={item.badge.variant} 
                    className="absolute -top-2 -right-2 text-xs px-1 py-0 h-4 min-w-4 text-center"
                  >
                    {item.badge.text}
                  </Badge>
                )}
              </div>
              <span className="text-xs font-medium">{item.label}</span>
              {isActive(item.href) && (
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-quantum-primary rounded-full"></div>
              )}
            </Button>
          </Link>
        ))}
      </div>
    </nav>
  )
}