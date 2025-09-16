import { useState } from "react"
import { Link, useLocation } from "wouter"
import { Button } from "@/components/ui/button"

interface MenuItem {
  title: string
  url: string
  icon: any
  description: string
  badge?: {
    text: string
    variant: "default" | "secondary" | "destructive" | "outline"
  }
  shortcut?: string
}
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar"
import { 
  Atom, 
  BookOpen, 
  Settings, 
  User, 
  Workflow,
  Zap,
  Brain,
  GraduationCap,
  Monitor,
  Cpu,
  Activity,
  History,
  BarChart3,
  Gauge,
  Play,
  Plus
} from "lucide-react"
import { Badge } from "@/components/ui/badge"

const quantumMenuItems: MenuItem[] = [
  {
    title: "Dashboard",
    url: "/",
    icon: BarChart3,
    description: "System overview & KPIs",
    badge: { text: "Live", variant: "destructive" as const }
  },
  {
    title: "Build Circuit", 
    url: "/add-qubits",
    icon: Plus,
    description: "Create quantum circuits",
    shortcut: "⌘+N"
  },
  {
    title: "Connected Qubits", 
    url: "/connected",
    icon: Zap,
    description: "Manage quantum connections",
    badge: { text: "3", variant: "secondary" as const }
  },
  {
    title: "Quantum Computers",
    url: "/quantum-computers", 
    icon: Cpu,
    description: "Available quantum systems",
    badge: { text: "5 online", variant: "default" as const }
  },
  {
    title: "History",
    url: "/history",
    icon: History,
    description: "Execution history & logs"
  }
]

const learningMenuItems: MenuItem[] = [
  {
    title: "Learn Quantum",
    url: "/learn",
    icon: GraduationCap,
    description: "Interactive quantum courses",
    badge: { text: "60% complete", variant: "default" as const }
  },
  {
    title: "Run Story",
    url: "/run-story", 
    icon: Play,
    description: "Algorithm walkthrough"
  },
  {
    title: "Execution Report",
    url: "/execution-report",
    icon: Activity,
    description: "Results & analysis",
    badge: { text: "New", variant: "destructive" as const }
  }
]

const settingsMenuItems: MenuItem[] = [
  {
    title: "Profile",
    url: "/profile",
    icon: User,
    description: "Account and preferences"
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
    description: "System configuration"
  }
]

export function QuantumSidebar() {
  const [location] = useLocation()

  return (
    <Sidebar data-testid="sidebar-quantum">
      <SidebarHeader className="border-b border-sidebar-border p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg quantum-gradient quantum-glow">
            <Atom className="h-5 w-5 text-white animate-quantum-pulse" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-sidebar-foreground">
              Qubi
            </h2>
            <div className="text-xs text-muted-foreground flex items-center gap-1">
              <span className="w-2 h-2 bg-quantum-success rounded-full animate-quantum-pulse"></span>
              Quantum Lab Online
            </div>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Quantum Computing</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {quantumMenuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild 
                    isActive={location === item.url}
                    data-testid={`nav-${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className={location === item.url ? 'quantum-glow' : ''}
                  >
                    <Link href={item.url} className="flex items-center gap-3 w-full">
                      <item.icon className={`h-4 w-4 ${location === item.url ? 'text-quantum-primary animate-quantum-pulse' : ''}`} />
                      <div className="flex flex-col flex-1">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">{item.title}</span>
                          {item.shortcut && (
                            <span className="text-xs text-muted-foreground px-1.5 py-0.5 bg-muted rounded">
                              {item.shortcut}
                            </span>
                          )}
                        </div>
                        <span className="text-xs text-muted-foreground text-left">
                          {item.description}
                        </span>
                      </div>
                      {item.badge && (
                        <Badge 
                          variant={item.badge.variant} 
                          className="text-xs px-1.5 py-0.5"
                        >
                          {item.badge.text}
                        </Badge>
                      )}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Learning & Resources</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {learningMenuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild 
                    isActive={location === item.url}
                    data-testid={`nav-${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className={location === item.url ? 'quantum-glow' : ''}
                  >
                    <Link href={item.url} className="flex items-center gap-3 w-full">
                      <item.icon className={`h-4 w-4 ${location === item.url ? 'text-quantum-primary animate-quantum-pulse' : ''}`} />
                      <div className="flex flex-col flex-1">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">{item.title}</span>
                          {item.shortcut && (
                            <span className="text-xs text-muted-foreground px-1.5 py-0.5 bg-muted rounded">
                              {item.shortcut}
                            </span>
                          )}
                        </div>
                        <span className="text-xs text-muted-foreground text-left">
                          {item.description}
                        </span>
                      </div>
                      {item.badge && (
                        <Badge 
                          variant={item.badge.variant} 
                          className="text-xs px-1.5 py-0.5"
                        >
                          {item.badge.text}
                        </Badge>
                      )}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-sidebar-border p-4">
        <SidebarMenu>
          {settingsMenuItems.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton 
                asChild 
                isActive={location === item.url}
                data-testid={`nav-${item.title.toLowerCase()}`}
              >
                <Link href={item.url}>
                  <item.icon className="h-4 w-4" />
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}