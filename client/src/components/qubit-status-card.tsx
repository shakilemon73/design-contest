import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Progress } from "@/components/ui/progress"
import { Info, Settings, Zap, Thermometer, Activity } from "lucide-react"

interface QubitStatusCardProps {
  id: string
  name: string
  state: "0" | "1" | "superposition"
  coherenceTime: number
  fidelity: number
  temperature: number
  isActive: boolean
  onToggle?: () => void
  onConfigure?: () => void
  className?: string
}

const stateInfo = {
  "0": { label: "Ground State", color: "bg-gray-500", description: "Qubit in |0⟩ state" },
  "1": { label: "Excited State", color: "bg-primary", description: "Qubit in |1⟩ state" },
  "superposition": { label: "Superposition", color: "bg-gradient-to-r from-blue-500 to-purple-500", description: "Qubit in |+⟩ state" }
}

export function QubitStatusCard({
  id,
  name,
  state,
  coherenceTime,
  fidelity,
  temperature,
  isActive,
  onToggle,
  onConfigure,
  className
}: QubitStatusCardProps) {
  const [showDetails, setShowDetails] = useState(false)
  
  const stateConfig = stateInfo[state]
  const coherencePercentage = Math.min((coherenceTime / 100) * 100, 100)
  const fidelityPercentage = fidelity * 100

  return (
    <Card className={`transition-all hover-elevate ${className}`} data-testid={`qubit-card-${id}`}>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`w-3 h-3 rounded-full ${stateConfig.color}`} />
            <div>
              <CardTitle className="text-base">{name}</CardTitle>
              <p className="text-xs text-muted-foreground">ID: {id}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Switch
              checked={isActive}
              onCheckedChange={onToggle}
              data-testid={`switch-qubit-${id}`}
              aria-label={`Toggle ${name}`}
            />
            <Button
              size="icon"
              variant="ghost"
              onClick={onConfigure}
              data-testid={`button-configure-${id}`}
              className="h-8 w-8"
            >
              <Settings className="h-3 w-3" />
            </Button>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Quantum State */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Quantum State</span>
            <Badge variant="outline" className="text-xs">
              {stateConfig.label}
            </Badge>
          </div>
          <p className="text-xs text-muted-foreground">
            {stateConfig.description}
          </p>
        </div>

        {/* Performance Metrics */}
        <div className="space-y-3">
          <div className="space-y-1">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-1">
                <Activity className="h-3 w-3" />
                <span>Coherence Time</span>
              </div>
              <span className="text-xs text-muted-foreground">
                {coherenceTime}μs
              </span>
            </div>
            <Progress value={coherencePercentage} className="h-1" />
          </div>

          <div className="space-y-1">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-1">
                <Zap className="h-3 w-3" />
                <span>Fidelity</span>
              </div>
              <span className="text-xs text-muted-foreground">
                {fidelityPercentage.toFixed(1)}%
              </span>
            </div>
            <Progress value={fidelityPercentage} className="h-1" />
          </div>

          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-1">
              <Thermometer className="h-3 w-3" />
              <span>Temperature</span>
            </div>
            <span className="text-xs text-muted-foreground">
              {temperature}mK
            </span>
          </div>
        </div>

        {/* Expandable details */}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setShowDetails(!showDetails)}
          data-testid={`button-details-${id}`}
          className="w-full h-8 text-xs"
        >
          <Info className="h-3 w-3 mr-1" />
          {showDetails ? "Hide Details" : "Show Details"}
        </Button>

        {showDetails && (
          <div className="space-y-2 pt-2 border-t border-border">
            <div className="text-xs space-y-1">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Gate Time:</span>
                <span>25ns</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Error Rate:</span>
                <span>{((1 - fidelity) * 100).toFixed(3)}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Frequency:</span>
                <span>5.2 GHz</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Last Calibration:</span>
                <span>2 hours ago</span>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}