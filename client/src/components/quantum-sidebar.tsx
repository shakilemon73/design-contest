import { useState } from "react"
import { Link, useLocation } from "wouter"
import { Button } from "@/components/ui/button"
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
  Monitor
} from "lucide-react"

const quantumMenuItems = [
  {
    title: "Quantum Lab",
    url: "/",
    icon: Atom,
    description: "Manage your qubits and circuits"
  },
  {
    title: "Connected Qubits", 
    url: "/connected",
    icon: Zap,
    description: "View nearby quantum systems"
  },
  {
    title: "Circuit Builder",
    url: "/circuits", 
    icon: Workflow,
    description: "Design quantum algorithms"
  },
  {
    title: "Quantum Simulator",
    url: "/simulator",
    icon: Monitor,
    description: "Test your quantum programs"
  }
]

const learningMenuItems = [
  {
    title: "Learn Quantum",
    url: "/learn",
    icon: GraduationCap,
    description: "Interactive quantum courses"
  },
  {
    title: "Algorithms",
    url: "/algorithms", 
    icon: Brain,
    description: "Quantum algorithm library"
  },
  {
    title: "Documentation",
    url: "/docs",
    icon: BookOpen,
    description: "Reference and guides"
  }
]

const settingsMenuItems = [
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
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
            <Atom className="h-4 w-4 text-primary-foreground" />
          </div>
          <div>
            <h2 className="text-sm font-semibold text-sidebar-foreground">
              Quantum Lab
            </h2>
            <p className="text-xs text-muted-foreground">
              Advanced Computing
            </p>
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
                    data-testid={`nav-${item.title.toLowerCase().replace(/\\s+/g, '-')}`}
                  >
                    <Link href={item.url}>
                      <item.icon className="h-4 w-4" />
                      <div className="flex flex-col">
                        <span className="text-sm">{item.title}</span>
                        <span className="text-xs text-muted-foreground">
                          {item.description}
                        </span>
                      </div>
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
                    data-testid={`nav-${item.title.toLowerCase().replace(/\\s+/g, '-')}`}
                  >
                    <Link href={item.url}>
                      <item.icon className="h-4 w-4" />
                      <div className="flex flex-col">
                        <span className="text-sm">{item.title}</span>
                        <span className="text-xs text-muted-foreground">
                          {item.description}
                        </span>
                      </div>
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