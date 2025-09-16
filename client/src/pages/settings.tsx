import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"

export default function Settings() {
  const [measurementRounding, setMeasurementRounding] = useState("major-half-axes")
  const [brightness, setBrightness] = useState(27)
  const [screensaver, setScreensaver] = useState("singlet-precession")

  const handleSaveChanges = () => {
    console.log('Settings saved:', { measurementRounding, brightness, screensaver })
  }

  return (
    <div className="space-y-6" data-testid="page-settings">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold">Your Settings</h1>
      </div>

      {/* Connection Status */}
      <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-6">
        <div className="w-3 h-3 rounded-full bg-muted-foreground" />
        <div className="w-3 h-3 rounded-full bg-muted-foreground" />
        <span>Saved changes will apply to two connected qubis</span>
      </div>

      {/* Settings */}
      <Card>
        <CardContent className="p-6 space-y-6">
          {/* Measurement Rounding */}
          <div className="space-y-3">
            <div>
              <h3 className="font-medium">Measurement "rounding"</h3>
              <p className="text-sm text-muted-foreground">
                Does the qubi auto-adjust your shake to the nearest axis?
              </p>
            </div>
            <Select value={measurementRounding} onValueChange={setMeasurementRounding}>
              <SelectTrigger data-testid="select-measurement-rounding">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="major-half-axes">Major and half-axes</SelectItem>
                <SelectItem value="nearest-axis">Nearest axis</SelectItem>
                <SelectItem value="disabled">Disabled</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Brightness */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <h3 className="font-medium">Brightness</h3>
              <Badge variant="outline">{brightness}%</Badge>
            </div>
            <Slider
              value={[brightness]}
              onValueChange={([value]) => setBrightness(value)}
              max={100}
              step={1}
              className="w-full"
              data-testid="slider-brightness"
            />
          </div>

          {/* Screensaver */}
          <div className="space-y-3">
            <h3 className="font-medium">Screensaver</h3>
            <Select value={screensaver} onValueChange={setScreensaver}>
              <SelectTrigger data-testid="select-screensaver">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="singlet-precession">singlet precession</SelectItem>
                <SelectItem value="bloch-sphere">Bloch sphere</SelectItem>
                <SelectItem value="quantum-waves">Quantum waves</SelectItem>
                <SelectItem value="disabled">Disabled</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Save Button */}
      <div className="flex justify-center">
        <Button onClick={handleSaveChanges} data-testid="button-save-changes">
          Save changes
        </Button>
      </div>
    </div>
  )
}