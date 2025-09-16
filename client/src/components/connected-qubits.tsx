import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Wifi, Battery, MoreHorizontal, RefreshCw } from "lucide-react"

interface ConnectedQubit {
  id: string
  name: string
  batteryLevel: number
  signalStrength: number
  isConnected: boolean
  distance: string
  entangled?: boolean
}

interface ConnectedQubitsProps {
  qubits: ConnectedQubit[]
  onConnect?: (qubitId: string) => void
  onDisconnect?: (qubitId: string) => void
  onRefresh?: () => void
  className?: string
}

export function ConnectedQubits({
  qubits,
  onConnect,
  onDisconnect,
  onRefresh,
  className
}: ConnectedQubitsProps) {
  const [isScanning, setIsScanning] = useState(false)

  const handleRefresh = () => {
    setIsScanning(true)
    onRefresh?.()
    // Simulate scan duration
    setTimeout(() => setIsScanning(false), 2000)
  }

  const getBatteryColor = (level: number) => {
    if (level > 60) return "text-green-500"
    if (level > 30) return "text-yellow-500"
    return "text-red-500"
  }

  const getSignalStrength = (strength: number) => {
    const bars = Math.ceil((strength / 100) * 4)
    return Array.from({ length: 4 }, (_, i) => (
      <div
        key={i}
        className={`w-1 h-3 rounded-sm ${
          i < bars ? "bg-green-500" : "bg-gray-300"
        }`}
      />
    ))
  }

  return (
    <Card className={className} data-testid="connected-qubits">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">Nearby Qubits</CardTitle>
          <Button
            size="sm"
            variant="outline"
            onClick={handleRefresh}
            disabled={isScanning}
            data-testid="button-refresh-qubits"
            className="h-8"
          >
            <RefreshCw className={`h-3 w-3 mr-1 ${isScanning ? "animate-spin" : ""}`} />
            {isScanning ? "Scanning..." : "Scan again"}
          </Button>
        </div>
        <p className="text-sm text-muted-foreground">
          Qubits might be grouped together if they are already entangled.
        </p>
      </CardHeader>

      <CardContent className="space-y-3">
        {qubits.map((qubit) => (
          <div
            key={qubit.id}
            className="flex items-center justify-between p-3 border border-border rounded-md hover-elevate"
            data-testid={`qubit-item-${qubit.id}`}
          >
            <div className="flex items-center gap-3">
              {/* Connection status indicator */}
              <div className={`w-3 h-3 rounded-full ${
                qubit.isConnected ? "bg-green-500" : "bg-gray-400"
              }`} />

              {/* Qubit info */}
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-sm">{qubit.name}</span>
                  {qubit.entangled && (
                    <Badge variant="secondary" className="text-xs">
                      Entangled
                    </Badge>
                  )}
                </div>
                <div className="flex items-center gap-3 mt-1">
                  {/* Signal strength */}
                  <div className="flex items-center gap-1">
                    <Wifi className="h-3 w-3 text-muted-foreground" />
                    <div className="flex gap-0.5">
                      {getSignalStrength(qubit.signalStrength)}
                    </div>
                  </div>

                  {/* Battery level */}
                  <div className="flex items-center gap-1">
                    <Battery className={`h-3 w-3 ${getBatteryColor(qubit.batteryLevel)}`} />
                    <span className="text-xs text-muted-foreground">
                      {qubit.batteryLevel}%
                    </span>
                  </div>

                  {/* Distance */}
                  <span className="text-xs text-muted-foreground">
                    {qubit.distance}
                  </span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              {qubit.isConnected ? (
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => onDisconnect?.(qubit.id)}
                  data-testid={`button-disconnect-${qubit.id}`}
                  className="h-8 text-xs"
                >
                  Disconnect
                </Button>
              ) : (
                <Button
                  size="sm"
                  onClick={() => onConnect?.(qubit.id)}
                  data-testid={`button-connect-${qubit.id}`}
                  className="h-8 text-xs"
                >
                  Connect
                </Button>
              )}
              
              <Button
                size="icon"
                variant="ghost"
                data-testid={`button-options-${qubit.id}`}
                className="h-8 w-8"
              >
                <MoreHorizontal className="h-3 w-3" />
              </Button>
            </div>
          </div>
        ))}

        {qubits.length === 0 && !isScanning && (
          <div className="text-center py-8 text-muted-foreground">
            <Wifi className="h-8 w-8 mx-auto mb-2 opacity-50" />
            <p className="text-sm">No qubits found nearby</p>
            <p className="text-xs">Try scanning again or check your quantum network connection</p>
          </div>
        )}

        {isScanning && (
          <div className="text-center py-8 text-muted-foreground">
            <RefreshCw className="h-8 w-8 mx-auto mb-2 animate-spin" />
            <p className="text-sm">Scanning for quantum systems...</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}