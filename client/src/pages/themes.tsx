import { useState } from "react"
import { Button } from "@/components/ui/button" 
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Lock } from "lucide-react"

export default function Themes() {
  const [selectedTheme, setSelectedTheme] = useState("quantum-glow")

  const themes = [
    {
      id: "quantum-glow",
      name: "100th anniversary of quantum glow",
      description: "This exclusive theme is for the owners of the Qubi \"year of quantum edition\". It features a blend of royal purple, rich gold, and marine blue.",
      isUnlocked: true,
      orbs: [
        { color: "#8B5CF6", size: "large" },
        { color: "#F59E0B", size: "medium" }, 
        { color: "#3B82F6", size: "small" },
        { color: "#EC4899", size: "medium" }
      ]
    },
    {
      id: "locked-theme-1",
      name: "Locked Theme",
      description: "Complete quantum lessons to unlock this theme",
      isUnlocked: false,
      orbs: [
        { color: "#6B7280", size: "large" },
        { color: "#6B7280", size: "medium" },
        { color: "#6B7280", size: "small" }
      ]
    },
    {
      id: "locked-theme-2", 
      name: "Locked Theme",
      description: "Complete quantum lessons to unlock this theme",
      isUnlocked: false,
      orbs: [
        { color: "#6B7280", size: "medium" },
        { color: "#6B7280", size: "large" },
        { color: "#6B7280", size: "medium" }
      ]
    }
  ]

  const handleApplyTheme = () => {
    console.log(`Applying theme: ${selectedTheme}`)
  }

  const getOrbSize = (size: string) => {
    switch(size) {
      case "large": return "w-16 h-16"
      case "medium": return "w-12 h-12"
      case "small": return "w-8 h-8"
      default: return "w-12 h-12"
    }
  }

  return (
    <div className="space-y-6" data-testid="page-themes">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold">Your themes</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Unlock more through the lessons!
        </p>
      </div>

      {/* Theme Collection */}
      <div className="space-y-6">
        {themes.map((theme) => (
          <Card 
            key={theme.id}
            className={`relative overflow-hidden ${
              !theme.isUnlocked ? 'opacity-75' : ''
            } ${selectedTheme === theme.id ? 'ring-2 ring-primary' : ''}`}
            role="button"
            tabIndex={theme.isUnlocked ? 0 : -1}
            aria-pressed={selectedTheme === theme.id}
            aria-disabled={!theme.isUnlocked}
            onClick={() => theme.isUnlocked && setSelectedTheme(theme.id)}
            onKeyDown={(e) => {
              if ((e.key === 'Enter' || e.key === ' ') && theme.isUnlocked) {
                e.preventDefault()
                setSelectedTheme(theme.id)
              }
            }}
            data-testid={`theme-card-${theme.id}`}
          >
            {!theme.isUnlocked && (
              <div className="absolute top-4 right-4 z-10">
                <Badge variant="secondary" className="bg-gray-100">
                  <Lock className="h-3 w-3 mr-1" />
                  Locked
                </Badge>
              </div>
            )}

            <CardContent className="p-6 space-y-4">
              {/* Theme Orbs */}
              <div className="flex items-center justify-center gap-2 py-4">
                {theme.orbs.map((orb, index) => (
                  <div 
                    key={index}
                    className={`${getOrbSize(orb.size)} rounded-full border-2 border-white/20 ${
                      !theme.isUnlocked ? 'grayscale' : ''
                    }`}
                    style={{ 
                      background: theme.isUnlocked 
                        ? `radial-gradient(circle at 30% 30%, ${orb.color}CC, ${orb.color})` 
                        : '#6B7280'
                    }}
                  />
                ))}
              </div>

              {/* Theme Info */}
              <div className="text-center space-y-2">
                <h3 className="font-medium text-lg">{theme.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {theme.description}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Connection Status */}
      <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
        <div className="w-3 h-3 rounded-full bg-muted-foreground" />
        <div className="w-3 h-3 rounded-full bg-muted-foreground" />
        <span>Theme will apply to two connected qubis</span>
      </div>

      {/* Apply Button */}
      <div className="flex justify-center">
        <Button 
          onClick={handleApplyTheme}
          disabled={!themes.find(t => t.id === selectedTheme)?.isUnlocked}
          data-testid="button-apply-theme"
        >
          Apply theme
        </Button>
      </div>
    </div>
  )
}