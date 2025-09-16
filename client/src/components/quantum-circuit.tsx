import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, Pause, RotateCcw, Info } from "lucide-react"

interface QuantumGate {
  id: string
  type: "H" | "X" | "Y" | "Z" | "CNOT" | "T"
  position: { qubit: number; step: number }
  target?: number // for CNOT gates
}

interface QuantumCircuitProps {
  qubits: Array<{ id: string; name: string; state: "0" | "1" | "+" }>
  gates: QuantumGate[]
  isRunning?: boolean
  onToggleExecution?: () => void
  onReset?: () => void
  className?: string
}

const gateColors = {
  H: "bg-qolour-electric-indigo",
  X: "bg-qolour-electric-indigo", 
  Y: "bg-qolour-sky-blue",
  Z: "bg-qolour-quantum-pink",
  CNOT: "bg-qolour-ember-orange",
  T: "bg-qolour-helio-yellow"
}

const stateColors = {
  "0": "bg-muted",
  "1": "bg-primary",
  "+": "bg-quantum-secondary"
}

export function QuantumCircuit({ 
  qubits, 
  gates, 
  isRunning = false, 
  onToggleExecution,
  onReset,
  className 
}: QuantumCircuitProps) {
  const [selectedGate, setSelectedGate] = useState<string | null>(null)
  const maxSteps = Math.max(...gates.map(g => g.position.step), 5)

  return (
    <Card className={className} data-testid="quantum-circuit">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">Quantum Circuit</CardTitle>
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="text-xs">
              {qubits.length} Qubits
            </Badge>
            <Badge variant="outline" className="text-xs">
              {gates.length} Gates
            </Badge>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button
            size="sm"
            onClick={onToggleExecution}
            data-testid="button-circuit-toggle"
            className="h-8"
          >
            {isRunning ? (
              <>
                <Pause className="h-3 w-3 mr-1" />
                Pause
              </>
            ) : (
              <>
                <Play className="h-3 w-3 mr-1" />
                Run
              </>
            )}
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={onReset}
            data-testid="button-circuit-reset"
            className="h-8"
          >
            <RotateCcw className="h-3 w-3 mr-1" />
            Reset
          </Button>
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-4">
          {/* Qubit visualization */}
          <div className="grid grid-cols-[100px_1fr] gap-4 items-center">
            <div className="text-sm font-medium text-muted-foreground">
              Qubits
            </div>
            <div className="flex gap-2">
              {qubits.map((qubit, index) => (
                <div 
                  key={qubit.id}
                  className="flex flex-col items-center gap-1"
                  data-testid={`qubit-${index}`}
                >
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-mono text-white ${stateColors[qubit.state]}`}>
                    {qubit.state}
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {qubit.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Circuit visualization */}
          <div className="grid grid-cols-[100px_1fr] gap-4">
            <div className="text-sm font-medium text-muted-foreground">
              Circuit
            </div>
            <div className="relative">
              {/* Quantum wire lines */}
              <svg className="w-full h-32" viewBox="0 0 400 120">
                {qubits.map((_, qubitIndex) => {
                  const y = 20 + qubitIndex * 20
                  return (
                    <line
                      key={qubitIndex}
                      x1="0"
                      y1={y}
                      x2="380"
                      y2={y}
                      stroke="currentColor"
                      strokeWidth="1"
                      className="text-border"
                    />
                  )
                })}
                
                {/* Render gates */}
                {gates.map((gate) => {
                  const x = 40 + gate.position.step * 60
                  const y = 20 + gate.position.qubit * 20
                  
                  if (gate.type === "CNOT" && gate.target !== undefined) {
                    const targetY = 20 + gate.target * 20
                    return (
                      <g key={gate.id}>
                        {/* Control qubit */}
                        <circle
                          cx={x}
                          cy={y}
                          r="4"
                          fill="currentColor"
                          className="text-foreground"
                        />
                        {/* Target qubit */}
                        <circle
                          cx={x}
                          cy={targetY}
                          r="8"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          className="text-foreground"
                        />
                        <line
                          x1={x}
                          y1={targetY - 6}
                          x2={x}
                          y2={targetY + 6}
                          stroke="currentColor"
                          strokeWidth="2"
                          className="text-foreground"
                        />
                        <line
                          x1={x - 6}
                          y1={targetY}
                          x2={x + 6}
                          y2={targetY}
                          stroke="currentColor"
                          strokeWidth="2"
                          className="text-foreground"
                        />
                        {/* Connecting line */}
                        <line
                          x1={x}
                          y1={Math.min(y, targetY)}
                          x2={x}
                          y2={Math.max(y, targetY)}
                          stroke="currentColor"
                          strokeWidth="1"
                          strokeDasharray="2,2"
                          className="text-muted-foreground"
                        />
                      </g>
                    )
                  }
                  
                  // Single qubit gates
                  return (
                    <g key={gate.id}>
                      <rect
                        x={x - 12}
                        y={y - 8}
                        width="24"
                        height="16"
                        fill="hsl(var(--primary))"
                        stroke="hsl(var(--primary-border))"
                        strokeWidth="1"
                        rx="2"
                        className={`cursor-pointer hover-elevate ${selectedGate === gate.id ? 'ring-2 ring-ring' : ''}`}
                        onClick={() => setSelectedGate(selectedGate === gate.id ? null : gate.id)}
                      />
                      <text
                        x={x}
                        y={y + 4}
                        textAnchor="middle"
                        className="text-xs fill-primary-foreground font-mono"
                      >
                        {gate.type}
                      </text>
                    </g>
                  )
                })}
              </svg>

              {/* Gate information panel */}
              {selectedGate && (
                <div className="absolute top-2 right-2 bg-popover border border-popover-border rounded-md p-2 shadow-sm">
                  <div className="flex items-center gap-2 text-sm">
                    <Info className="h-3 w-3" />
                    <span className="font-medium">
                      {gates.find(g => g.id === selectedGate)?.type} Gate
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Measurement results */}
          <div className="grid grid-cols-[100px_1fr] gap-4 items-center">
            <div className="text-sm font-medium text-muted-foreground">
              Measurement
            </div>
            <div className="text-sm font-mono bg-muted px-3 py-2 rounded-md">
              {isRunning ? "Running..." : qubits.map(q => q.state).join("")}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}