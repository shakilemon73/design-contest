import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Save, RotateCcw, Info } from "lucide-react"

interface QuantumSettingsProps {
  settings: {
    measurementRounding: "major-half-axes" | "nearest-axis" | "disabled"
    brightness: number
    screensaver: "singlet-precession" | "bloch-sphere" | "disabled"
    autoCalibration: boolean
    errorCorrection: boolean
    gateFidelityThreshold: number
    coherenceTimeLimit: number
    connectedQubits: number
  }
  onSettingsChange?: (newSettings: any) => void
  onSave?: () => void
  onReset?: () => void
  className?: string
}

export function QuantumSettings({
  settings,
  onSettingsChange,
  onSave,
  onReset,
  className
}: QuantumSettingsProps) {
  const [localSettings, setLocalSettings] = useState(settings)
  const [hasChanges, setHasChanges] = useState(false)

  const updateSetting = (key: string, value: any) => {
    const newSettings = { ...localSettings, [key]: value }
    setLocalSettings(newSettings)
    setHasChanges(true)
    onSettingsChange?.(newSettings)
  }

  const handleSave = () => {
    onSave?.()
    setHasChanges(false)
  }

  const handleReset = () => {
    setLocalSettings(settings)
    setHasChanges(false)
    onReset?.()
  }

  return (
    <Card className={className} data-testid="quantum-settings">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">Quantum Settings</CardTitle>
          <div className="flex items-center gap-2">
            {hasChanges && (
              <Badge variant="secondary" className="text-xs">
                Unsaved changes
              </Badge>
            )}
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Measurement Settings */}
        <div className="space-y-4">
          <h3 className="text-sm font-medium">Measurement Configuration</h3>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <label className="text-sm font-medium">Measurement "rounding"</label>
                <p className="text-xs text-muted-foreground">
                  Does the qubit auto-adjust your shake to the nearest axis?
                </p>
              </div>
              <Select 
                value={localSettings.measurementRounding}
                onValueChange={(value) => updateSetting("measurementRounding", value)}
                data-testid="select-measurement-rounding"
              >
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="major-half-axes">Major and half-axes</SelectItem>
                  <SelectItem value="nearest-axis">Nearest axis</SelectItem>
                  <SelectItem value="disabled">Disabled</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <label className="text-sm font-medium">Auto Calibration</label>
                <p className="text-xs text-muted-foreground">
                  Automatically calibrate qubits before measurements
                </p>
              </div>
              <Switch
                checked={localSettings.autoCalibration}
                onCheckedChange={(checked) => updateSetting("autoCalibration", checked)}
                data-testid="switch-auto-calibration"
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <label className="text-sm font-medium">Error Correction</label>
                <p className="text-xs text-muted-foreground">
                  Enable quantum error correction protocols
                </p>
              </div>
              <Switch
                checked={localSettings.errorCorrection}
                onCheckedChange={(checked) => updateSetting("errorCorrection", checked)}
                data-testid="switch-error-correction"
              />
            </div>
          </div>
        </div>

        {/* Display Settings */}
        <div className="space-y-4">
          <h3 className="text-sm font-medium">Display & Interface</h3>
          
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium">Brightness</label>
                <span className="text-sm text-muted-foreground">
                  {localSettings.brightness}%
                </span>
              </div>
              <Slider
                value={[localSettings.brightness]}
                onValueChange={([value]) => updateSetting("brightness", value)}
                max={100}
                step={1}
                className="w-full"
                data-testid="slider-brightness"
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <label className="text-sm font-medium">Screensaver</label>
                <p className="text-xs text-muted-foreground">
                  Quantum visualization when idle
                </p>
              </div>
              <Select 
                value={localSettings.screensaver}
                onValueChange={(value) => updateSetting("screensaver", value)}
                data-testid="select-screensaver"
              >
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="singlet-precession">Singlet precession</SelectItem>
                  <SelectItem value="bloch-sphere">Bloch sphere</SelectItem>
                  <SelectItem value="disabled">Disabled</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Performance Settings */}
        <div className="space-y-4">
          <h3 className="text-sm font-medium">Performance Thresholds</h3>
          
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium">Gate Fidelity Threshold</label>
                <span className="text-sm text-muted-foreground">
                  {(localSettings.gateFidelityThreshold * 100).toFixed(1)}%
                </span>
              </div>
              <Slider
                value={[localSettings.gateFidelityThreshold * 100]}
                onValueChange={([value]) => updateSetting("gateFidelityThreshold", value / 100)}
                min={90}
                max={99.9}
                step={0.1}
                className="w-full"
                data-testid="slider-fidelity-threshold"
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium">Coherence Time Limit</label>
                <span className="text-sm text-muted-foreground">
                  {localSettings.coherenceTimeLimit}μs
                </span>
              </div>
              <Slider
                value={[localSettings.coherenceTimeLimit]}
                onValueChange={([value]) => updateSetting("coherenceTimeLimit", value)}
                min={10}
                max={200}
                step={5}
                className="w-full"
                data-testid="slider-coherence-time"
              />
            </div>
          </div>
        </div>

        {/* Connection Status */}
        <div className="space-y-4">
          <h3 className="text-sm font-medium">Connection Status</h3>
          
          <div className="flex items-center justify-between p-3 bg-muted rounded-md">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              <span className="text-sm">Connected Qubits</span>
            </div>
            <Badge variant="outline" data-testid="badge-connected-qubits">
              {localSettings.connectedQubits} active
            </Badge>
          </div>
          
          <p className="text-xs text-muted-foreground flex items-center gap-1">
            <Info className="h-3 w-3" />
            Saved changes will apply to {localSettings.connectedQubits} connected qubits
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-2 pt-4 border-t border-border">
          <Button
            onClick={handleSave}
            disabled={!hasChanges}
            data-testid="button-save-settings"
            className="flex-1"
          >
            <Save className="h-4 w-4 mr-2" />
            Save changes
          </Button>
          
          <Button
            variant="outline"
            onClick={handleReset}
            disabled={!hasChanges}
            data-testid="button-reset-settings"
          >
            <RotateCcw className="h-4 w-4 mr-2" />
            Reset
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}