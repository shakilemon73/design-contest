import { QuantumSettings } from "@/components/quantum-settings"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { Link } from "wouter"

export default function Settings() {
  //todo: remove mock functionality - replace with real settings data
  const mockSettings = {
    measurementRounding: "major-half-axes" as const,
    brightness: 27,
    screensaver: "singlet-precession" as const,
    autoCalibration: true,
    errorCorrection: false,
    gateFidelityThreshold: 0.995,
    coherenceTimeLimit: 85,
    connectedQubits: 2
  }

  const handleSettingsChange = (newSettings: any) => {
    console.log('Settings changed:', newSettings)
    // Update application settings
  }

  const handleSave = () => {
    console.log('Settings saved successfully')
    // Save to backend/localStorage
  }

  const handleReset = () => {
    console.log('Settings reset to defaults')
    // Reset to default values
  }

  return (
    <div className="p-6 space-y-6" data-testid="page-settings">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link href="/">
          <Button size="icon" variant="ghost" data-testid="button-back">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div>
          <h1 className="text-2xl font-semibold">Quantum Settings</h1>
          <p className="text-sm text-muted-foreground">
            Configure your quantum computing environment and preferences
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-2xl mx-auto">
        <QuantumSettings
          settings={mockSettings}
          onSettingsChange={handleSettingsChange}
          onSave={handleSave}
          onReset={handleReset}
        />
      </div>
    </div>
  )
}