import React from 'react'
import { cn } from '@/lib/utils'

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

const gateColors = {
  'X': 'bg-red-500',
  'Y': 'bg-green-500', 
  'Z': 'bg-blue-500',
  'H': 'bg-quantum-primary',
  'CNOT': 'bg-quantum-secondary',
  'T': 'bg-purple-500',
  'S': 'bg-orange-500'
}

const gateDescriptions = {
  'X': 'Pauli-X (NOT) Gate',
  'Y': 'Pauli-Y Gate',
  'Z': 'Pauli-Z Gate', 
  'H': 'Hadamard Gate',
  'CNOT': 'Controlled NOT Gate',
  'T': 'T Gate (π/4 rotation)',
  'S': 'S Gate (π/2 rotation)'
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
  const qubitHeight = 70
  const gateWidth = 40
  const circuitWidth = Math.max(400, gates.length * 80 + 150)

  return (
    <div className={cn("relative bg-background border border-border rounded-lg p-4 overflow-x-auto", className)}>
      <svg 
        width={circuitWidth} 
        height={qubits * qubitHeight + 40}
        className="overflow-hidden"
        viewBox={`0 0 ${circuitWidth} ${qubits * qubitHeight + 40}`}
      >
        {/* Draw qubit lines */}
        {Array.from({ length: qubits }, (_, i) => (
          <g key={`qubit-${i}`}>
            {/* Qubit line */}
            <line
              x1={60}
              y1={40 + i * qubitHeight}
              x2={circuitWidth - 40}
              y2={40 + i * qubitHeight}
              stroke="hsl(var(--border))"
              strokeWidth="2"
              className="circuit-line"
            />
            
            {/* Qubit label */}
            {showLabels && (
              <>
                <circle
                  cx={30}
                  cy={40 + i * qubitHeight}
                  r={14}
                  fill="hsl(var(--primary))"
                  fillOpacity="0.1"
                  stroke="hsl(var(--primary))"
                  strokeWidth="2"
                  className={cn(
                    "qubit-node transition-all duration-200",
                    interactive && "cursor-pointer hover:fill-primary/20"
                  )}
                  onClick={() => interactive && onQubitClick?.(i)}
                />
                <text
                  x={30}
                  y={45 + i * qubitHeight}
                  textAnchor="middle"
                  className="text-sm font-mono font-semibold"
                  fill="currentColor"
                  style={{ fontSize: '12px' }}
                >
                  q{i}
                </text>
              </>
            )}
          </g>
        ))}

        {/* Draw gates */}
        {gates.map((gate, index) => {
          const x = 100 + gate.position * 80
          const y = 40 + gate.qubit * qubitHeight

          return (
            <g key={gate.id}>
              {/* CNOT gate connection line */}
              {gate.type === 'CNOT' && gate.controlQubit !== undefined && (
                <line
                  x1={x}
                  y1={40 + gate.controlQubit * qubitHeight}
                  x2={x}
                  y2={y}
                  stroke="hsl(var(--circuit-connection))"
                  strokeWidth="2"
                  strokeDasharray="4,2"
                  className="animate-quantum-entanglement"
                />
              )}

              {/* Control qubit dot for CNOT */}
              {gate.type === 'CNOT' && gate.controlQubit !== undefined && (
                <circle
                  cx={x}
                  cy={40 + gate.controlQubit * qubitHeight}
                  r={4}
                  fill="hsl(var(--circuit-connection))"
                  className="animate-quantum-pulse"
                />
              )}

              {/* Gate rectangle */}
              <rect
                x={x - gateWidth/2}
                y={y - 15}
                width={gateWidth}
                height={30}
                rx={6}
                className={cn(
                  gateColors[gate.type],
                  "transition-all duration-200",
                  interactive && "cursor-pointer hover:scale-110 hover:shadow-lg"
                )}
                onClick={() => interactive && onGateClick?.(gate)}
              />
              
              {/* Gate label */}
              <text
                x={x}
                y={y + 4}
                textAnchor="middle"
                className="text-xs font-mono fill-white font-bold pointer-events-none"
              >
                {gate.type}
              </text>

              {/* Gate tooltip area (invisible) */}
              {interactive && (
                <title>{gateDescriptions[gate.type]}</title>
              )}
            </g>
          )
        })}

        {/* Measurement indicators */}
        {Array.from({ length: qubits }, (_, i) => (
          <g key={`measurement-${i}`}>
            <rect
              x={circuitWidth - 70}
              y={25 + i * qubitHeight}
              width={30}
              height={30}
              rx={4}
              fill="hsl(var(--circuit-measurement))"
              className="opacity-80"
            />
            <text
              x={circuitWidth - 55}
              y={43 + i * qubitHeight}
              textAnchor="middle"
              className="text-xs font-mono fill-white"
            >
              M
            </text>
          </g>
        ))}
      </svg>
      
      {/* Circuit info overlay */}
      <div className="absolute top-2 right-2 flex items-center gap-2 text-xs text-muted-foreground">
        <span>{qubits} qubits</span>
        <span>•</span>
        <span>{gates.length} gates</span>
      </div>
    </div>
  )
}