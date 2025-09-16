import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Check, Palette } from "lucide-react"
import { Link } from "wouter"

export default function Themes() {
  const [selectedTheme, setSelectedTheme] = useState("quantum-purple")

  const themes = [
    { 
      id: "quantum-purple", 
      name: "Quantum Purple", 
      preview: "linear-gradient(135deg, #8B5CF6, #A855F7)",
      description: "Classic quantum computing theme with deep purples"
    },
    { 
      id: "quantum-blue", 
      name: "Quantum Blue", 
      preview: "linear-gradient(135deg, #3B82F6, #1D4ED8)",
      description: "Cool and professional blue gradient"
    },
    { 
      id: "quantum-cyan", 
      name: "Quantum Cyan", 
      preview: "linear-gradient(135deg, #06B6D4, #0891B2)",
      description: "Fresh cyan tones for modern interfaces"
    },
    { 
      id: "quantum-emerald", 
      name: "Quantum Emerald", 
      preview: "linear-gradient(135deg, #10B981, #059669)",
      description: "Natural green for sustainable quantum computing"
    },
    { 
      id: "quantum-orange", 
      name: "Quantum Orange", 
      preview: "linear-gradient(135deg, #F97316, #EA580C)",
      description: "Energetic orange for high-performance computing"
    },
    { 
      id: "quantum-pink", 
      name: "Quantum Pink", 
      preview: "linear-gradient(135deg, #EC4899, #DB2777)",
      description: "Creative pink for experimental quantum work"
    },
    { 
      id: "quantum-indigo", 
      name: "Quantum Indigo", 
      preview: "linear-gradient(135deg, #6366F1, #4F46E5)",
      description: "Deep indigo for focused research environments"
    },
    { 
      id: "quantum-rose", 
      name: "Quantum Rose", 
      preview: "linear-gradient(135deg, #F43F5E, #E11D48)",
      description: "Warm rose for collaborative quantum projects"
    }
  ]

  const handleThemeSelect = (themeId: string) => {
    setSelectedTheme(themeId)
    console.log(`Theme selected: ${themeId}`)
  }

  const handleApplyTheme = () => {
    console.log(`Applying theme: ${selectedTheme}`)
    // Apply theme logic would go here
  }

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6" data-testid="page-themes">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link href="/">
          <Button size="icon" variant="ghost" data-testid="button-back" aria-label="Go back to dashboard">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div>
          <h1 className="text-2xl font-semibold">Color Themes</h1>
          <p className="text-sm text-muted-foreground">
            Choose a color theme that matches your quantum computing style
          </p>
        </div>
      </div>

      {/* Current Theme */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Palette className="h-5 w-5" />
            Current Theme
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4">
            <div 
              className="w-12 h-12 rounded-lg border"
              style={{ background: themes.find(t => t.id === selectedTheme)?.preview }}
            />
            <div>
              <h3 className="font-medium">{themes.find(t => t.id === selectedTheme)?.name}</h3>
              <p className="text-sm text-muted-foreground">
                {themes.find(t => t.id === selectedTheme)?.description}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Theme Selection */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {themes.map((theme) => (
          <Card 
            key={theme.id} 
            className={`cursor-pointer transition-all hover:shadow-md ${
              selectedTheme === theme.id ? 'ring-2 ring-primary' : ''
            }`}
            onClick={() => handleThemeSelect(theme.id)}
            data-testid={`theme-card-${theme.id}`}
          >
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <div 
                  className="w-12 h-12 rounded-lg border flex-shrink-0"
                  style={{ background: theme.preview }}
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium truncate">{theme.name}</h3>
                    {selectedTheme === theme.id && (
                      <Badge variant="secondary" className="text-xs">
                        <Check className="h-3 w-3 mr-1" />
                        Active
                      </Badge>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                    {theme.description}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Apply Theme Button */}
      <div className="flex items-center justify-center pt-4">
        <Button 
          onClick={handleApplyTheme}
          size="lg"
          data-testid="button-apply-theme"
        >
          <Palette className="h-4 w-4 mr-2" />
          Apply Selected Theme
        </Button>
      </div>
    </div>
  )
}