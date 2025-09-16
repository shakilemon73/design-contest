import React from 'react'
import { cn } from '@/lib/utils'
import { Card, CardContent, CardHeader, CardTitle } from './card'
import { Badge } from './badge'
import { Progress } from './progress'
import { Activity, Zap, AlertCircle, CheckCircle } from 'lucide-react'

interface QubitStatusCardProps {
  qubit: {
    id: string
    name: string
    state: 'idle' | 'active' | 'superposition' | 'entangled' | 'error'
    fidelity: number
    coherenceTime: number
    errorRate: number
    temperature: number
    frequency: number
    isConnected: boolean
  }
  className?: string
  onStatusClick?: (qubitId: string) => void
  showDetails?: boolean
}

const stateConfig = {
  idle: {
    color: 'bg-qubit-idle',
    textColor: 'text-muted-foreground',
    label: 'Idle',
    variant: 'secondary' as const,
    icon: CheckCircle
  },
  active: {
    color: 'bg-qubit-active animate-quantum-pulse',
    textColor: 'text-quantum-primary',
    label: 'Active',
    variant: 'default' as const,
    icon: Activity
  },
  superposition: {
    color: 'bg-qubit-superposition animate-quantum-superposition',
    textColor: 'text-quantum-secondary',
    label: 'Superposition',
    variant: 'outline' as const,
    icon: Zap
  },
  entangled: {
    color: 'bg-qubit-entangled animate-quantum-entanglement',
    textColor: 'text-quantum-primary',
    label: 'Entangled',
    variant: 'destructive' as const,
    icon: Zap
  },
  error: {
    color: 'bg-red-500',
    textColor: 'text-red-500',
    label: 'Error',
    variant: 'destructive' as const,
    icon: AlertCircle
  }
}

export function QubitStatusCard({ 
  qubit, 
  className, 
  onStatusClick,
  showDetails = false 
}: QubitStatusCardProps) {
  const config = stateConfig[qubit.state]
  const StatusIcon = config.icon

  const getFidelityColor = (fidelity: number) => {
    if (fidelity >= 0.95) return 'text-quantum-success'
    if (fidelity >= 0.85) return 'text-quantum-warning'
    return 'text-quantum-error'
  }

  return (
    <Card 
      className={cn(
        "transition-all duration-300 hover:shadow-lg",
        qubit.state === 'active' && "quantum-glow",
        className
      )}
    >
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm font-medium">{qubit.name}</CardTitle>
          <div className="flex items-center gap-2">
            <div 
              className={cn("w-3 h-3 rounded-full", config.color)}
              title={`Qubit state: ${config.label}`}
            />
            <Badge variant={config.variant} className="text-xs px-2 py-0.5">
              {config.label}
            </Badge>
          </div>
        </div>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span>ID: {qubit.id}</span>
          {qubit.isConnected ? (
            <div className="flex items-center gap-1 text-quantum-success">
              <div className="w-1 h-1 bg-quantum-success rounded-full animate-quantum-pulse" />
              Connected
            </div>
          ) : (
            <div className="flex items-center gap-1 text-muted-foreground">
              <div className="w-1 h-1 bg-muted-foreground rounded-full" />
              Disconnected
            </div>
          )}
        </div>
      </CardHeader>

      <CardContent className="space-y-3">
        {/* Fidelity */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-muted-foreground">Fidelity</span>
            <span className={cn("text-xs font-mono", getFidelityColor(qubit.fidelity))}>
              {(qubit.fidelity * 100).toFixed(1)}%
            </span>
          </div>
          <Progress 
            value={qubit.fidelity * 100} 
            className="h-2"
          />
        </div>

        {/* Key metrics grid */}
        {showDetails && (
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div>
              <div className="text-muted-foreground">Coherence Time</div>
              <div className="font-mono font-medium">{qubit.coherenceTime}μs</div>
            </div>
            <div>
              <div className="text-muted-foreground">Error Rate</div>
              <div className="font-mono font-medium text-quantum-error">
                {(qubit.errorRate * 100).toFixed(3)}%
              </div>
            </div>
            <div>
              <div className="text-muted-foreground">Temperature</div>
              <div className="font-mono font-medium">{qubit.temperature}mK</div>
            </div>
            <div>
              <div className="text-muted-foreground">Frequency</div>
              <div className="font-mono font-medium">{qubit.frequency.toFixed(2)}GHz</div>
            </div>
          </div>
        )}

        {/* Action button */}
        {onStatusClick && (
          <button
            onClick={() => onStatusClick(qubit.id)}
            className="w-full mt-3 text-xs text-primary hover:text-primary/80 transition-colors"
          >
            View Details →
          </button>
        )}
      </CardContent>
    </Card>
  )
}