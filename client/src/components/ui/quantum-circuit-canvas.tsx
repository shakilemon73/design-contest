import React from 'react'
import { cn } from '@/lib/utils'
import { Card, CardContent } from './card'
import { Badge } from './badge'
import { Button } from './button'
import { Zap, ArrowRight, RotateCcw, Target, Link2 } from 'lucide-react'

interface Gate {
  id: string
  type: 'X' | 'Y' | 'Z' | 'H' | 'CNOT' | 'T' | 'S'
  qubit: number
  position: number
  controlQubit?: number // For CNOT gates
}

interface QuantumCircuitCanvasProps {
  qubits: number
  gates: Gate[]
  className?: string
  onGateClick?: (gate: Gate) => void
  onQubitClick?: (qubit: number) => void
  showLabels?: boolean
  interactive?: boolean
}

const gateInfo = {
  'X': { name: 'Pauli-X', description: 'NOT Gate', color: 'bg-red-500', icon: RotateCcw },
  'Y': { name: 'Pauli-Y', description: 'Y Rotation', color: 'bg-green-500', icon: RotateCcw },
  'Z': { name: 'Pauli-Z', description: 'Phase Flip', color: 'bg-blue-500', icon: Target },
  'H': { name: 'Hadamard', description: 'Superposition', color: 'bg-purple-500', icon: Zap },
  'CNOT': { name: 'CNOT', description: 'Controlled NOT', color: 'bg-orange-500', icon: Link2 },
  'T': { name: 'T Gate', description: 'π/4 Rotation', color: 'bg-pink-500', icon: RotateCcw },
  'S': { name: 'S Gate', description: 'π/2 Rotation', color: 'bg-cyan-500', icon: RotateCcw }
}

export function QuantumCircuitCanvas({ 
  qubits, 
  gates, 
  className,
  onGateClick,
  onQubitClick,
  showLabels = true,
  interactive = false
}: QuantumCircuitCanvasProps) {
  
  // Create qubit arrays for mobile layout
  const qubitArray = Array.from({ length: qubits }, (_, i) => i)
  
  // Group gates by position for easier mobile rendering
  const maxPosition = Math.max(...gates.map(g => g.position), -1)
  const gatesByPosition = Array.from({ length: maxPosition + 1 }, (_, position) => 
    gates.filter(g => g.position === position)
  )

  const getQubitGates = (qubitIndex: number) => {
    return gates.filter(g => g.qubit === qubitIndex).sort((a, b) => a.position - b.position)
  }

  return (
    <div className={cn("space-y-4", className)}>
      {/* Mobile Circuit Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
            <Zap className="h-4 w-4 text-primary" />
          </div>
          <div>
            <h3 className="text-base font-semibold">Quantum Circuit</h3>
            <p className="text-sm text-muted-foreground">{qubits} qubits • {gates.length} gates</p>
          </div>
        </div>
        <Badge variant="outline" className="text-sm px-3 py-1">
          Depth: {maxPosition + 1}
        </Badge>
      </div>

      {/* Mobile-First Qubit Layout */}
      <div className="space-y-3">
        {qubitArray.map((qubitIndex) => {
          const qubitGates = getQubitGates(qubitIndex)
          
          return (
            <Card 
              key={`qubit-${qubitIndex}`}
              className={cn(
                "border-0 bg-gradient-to-r from-background to-muted/20 transition-all duration-200",
                interactive && "cursor-pointer hover:shadow-md hover:from-primary/5 hover:to-primary/10"
              )}
              onClick={() => interactive && onQubitClick?.(qubitIndex)}
            >
              <CardContent className="p-4">
                {/* Qubit Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 border-2 border-primary/20 flex items-center justify-center">
                      <span className="text-base font-bold font-mono text-primary">
                        q{qubitIndex}
                      </span>
                    </div>
                    <div>
                      <div className="text-base font-semibold">Qubit {qubitIndex}</div>
                      <div className="text-sm text-muted-foreground">
                        {qubitGates.length} {qubitGates.length === 1 ? 'gate' : 'gates'}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-xs text-muted-foreground">Active</span>
                  </div>
                </div>

                {/* Gates Flow */}
                {qubitGates.length > 0 ? (
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span>Gate Sequence:</span>
                    </div>
                    
                    <div className="flex items-center gap-2 overflow-x-auto pb-2">
                      <div className="flex items-center gap-1.5 min-w-0">
                        <div className="w-4 h-4 rounded-full bg-muted flex-shrink-0" />
                        <span className="text-xs text-muted-foreground whitespace-nowrap">|0⟩</span>
                      </div>
                      
                      {qubitGates.map((gate, index) => {
                        const gateConfig = gateInfo[gate.type]
                        const GateIcon = gateConfig.icon
                        
                        return (
                          <React.Fragment key={gate.id}>
                            <ArrowRight className="h-3 w-3 text-muted-foreground flex-shrink-0" />
                            <Button
                              size="sm"
                              variant="outline"
                              className={cn(
                                "h-10 px-3 border-0 rounded-lg shadow-sm transition-all duration-200 flex-shrink-0 min-w-[80px]",
                                gateConfig.color,
                                "text-white hover:brightness-110 touch-manipulation"
                              )}
                              onClick={(e) => {
                                e.stopPropagation()
                                onGateClick?.(gate)
                              }}
                              disabled={!interactive}
                            >
                              <div className="flex items-center gap-2">
                                <GateIcon className="h-3 w-3" />
                                <span className="font-mono font-bold text-sm">
                                  {gate.type}
                                </span>
                              </div>
                            </Button>
                          </React.Fragment>
                        )
                      })}
                      
                      <ArrowRight className="h-3 w-3 text-muted-foreground flex-shrink-0" />
                      <div className="w-4 h-4 rounded-full bg-primary flex-shrink-0" />
                    </div>
                    
                    {/* Gate Details */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                      {qubitGates.map((gate) => {
                        const gateConfig = gateInfo[gate.type]
                        return (
                          <div key={`${gate.id}-detail`} className="text-center p-2 rounded-lg bg-muted/50">
                            <div className="text-xs font-mono font-bold">{gate.type}</div>
                            <div className="text-xs text-muted-foreground mt-0.5">
                              {gateConfig.description}
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center gap-3 py-4">
                    <div className="flex-1 h-px bg-muted-foreground/30" />
                    <span className="text-sm text-muted-foreground">No gates applied</span>
                    <div className="flex-1 h-px bg-muted-foreground/30" />
                  </div>
                )}
                
                {/* CNOT Connections */}
                {gates.some(g => g.type === 'CNOT' && (g.qubit === qubitIndex || g.controlQubit === qubitIndex)) && (
                  <div className="mt-3 pt-3 border-t">
                    <div className="flex items-center gap-2 text-sm">
                      <Link2 className="h-4 w-4 text-orange-500" />
                      <span className="text-muted-foreground">
                        Entangled with other qubits
                      </span>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Circuit Summary */}
      <Card className="border-0 bg-muted/20">
        <CardContent className="p-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-xl font-bold text-primary">{qubits}</div>
              <div className="text-xs text-muted-foreground">Qubits</div>
            </div>
            <div>
              <div className="text-xl font-bold text-secondary">{gates.length}</div>
              <div className="text-xs text-muted-foreground">Gates</div>
            </div>
            <div>
              <div className="text-xl font-bold text-green-600">{maxPosition + 1}</div>
              <div className="text-xs text-muted-foreground">Depth</div>
            </div>
            <div>
              <div className="text-xl font-bold text-orange-600">
                {gates.filter(g => g.type === 'CNOT').length}
              </div>
              <div className="text-xs text-muted-foreground">Entanglement</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}