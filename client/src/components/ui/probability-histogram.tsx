import React from 'react'
import { cn } from '@/lib/utils'
import { Card, CardContent, CardHeader, CardTitle } from './card'
import { Badge } from './badge'

interface ProbabilityData {
  state: string
  probability: number
  amplitude: number
  phase: number
  count?: number
}

interface ProbabilityHistogramProps {
  data: ProbabilityData[]
  title?: string
  showPhase?: boolean
  showCounts?: boolean
  maxBars?: number
  className?: string
  onStateClick?: (state: string) => void
  totalShots?: number
}

export function ProbabilityHistogram({
  data,
  title = "Probability Distribution",
  showPhase = false,
  showCounts = false,
  maxBars = 8,
  className,
  onStateClick,
  totalShots = 1000
}: ProbabilityHistogramProps) {
  // Clone data to avoid mutating props
  const sortedData = [...data]
    .sort((a, b) => b.probability - a.probability)
    .slice(0, maxBars)

  // Handle empty data case
  if (sortedData.length === 0) {
    return (
      <Card className={cn("", className)}>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm font-medium">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center text-muted-foreground py-8">
            No probability data available
          </div>
        </CardContent>
      </Card>
    )
  }

  const maxProbability = Math.max(...sortedData.map(d => d.probability), 0)

  const formatState = (state: string) => {
    return `|${state}⟩`
  }

  const getBarColor = (index: number, isActive: boolean) => {
    const colors = [
      'bg-probability-0',
      'bg-probability-1', 
      'bg-quantum-primary',
      'bg-quantum-secondary',
      'bg-quantum-success',
      'bg-quantum-warning',
      'bg-quantum-error',
      'bg-quantum-neutral'
    ]
    return cn(
      colors[index % colors.length],
      isActive && "quantum-glow animate-quantum-pulse"
    )
  }

  return (
    <Card className={cn("", className)}>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm font-medium">{title}</CardTitle>
          {showCounts && totalShots && (
            <Badge variant="outline" className="text-xs">
              {totalShots} shots
            </Badge>
          )}
        </div>
      </CardHeader>

      <CardContent>
        <div className="space-y-3">
          {/* Bars */}
          <div className="space-y-2">
            {sortedData.map((item, index) => {
              const heightPercent = maxProbability > 0 ? (item.probability / maxProbability) * 100 : 0
              const isSignificant = item.probability > 0.01

              return (
                <div 
                  key={item.state}
                  className={cn(
                    "group relative",
                    onStateClick && "cursor-pointer"
                  )}
                  onClick={() => onStateClick?.(item.state)}
                >
                  {/* State label and probability */}
                  <div className="flex items-center justify-between mb-1 text-xs">
                    <span className="font-mono text-foreground">
                      {formatState(item.state)}
                    </span>
                    <div className="flex items-center gap-2">
                      {showCounts && item.count && (
                        <span className="text-muted-foreground">
                          {item.count}
                        </span>
                      )}
                      <span className="font-medium">
                        {(item.probability * 100).toFixed(1)}%
                      </span>
                    </div>
                  </div>

                  {/* Probability bar */}
                  <div className="relative h-6 bg-muted rounded-sm overflow-hidden">
                    <div
                      className={cn(
                        "h-full transition-all duration-500 ease-out",
                        getBarColor(index, isSignificant),
                        "group-hover:brightness-110"
                      )}
                      style={{ width: `${heightPercent}%` }}
                    />
                    
                    {/* Amplitude visualization overlay */}
                    <div 
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                      style={{
                        width: `${Math.sqrt(item.probability) * 100}%`,
                        opacity: 0.3
                      }}
                    />
                  </div>

                  {/* Phase indicator */}
                  {showPhase && (
                    <div className="flex items-center justify-between mt-1 text-xs text-muted-foreground">
                      <span>Phase: {item.phase.toFixed(2)}π</span>
                      <span>|Amp|: {item.amplitude.toFixed(3)}</span>
                    </div>
                  )}

                  {/* Hover tooltip */}
                  {onStateClick && (
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-popover text-popover-foreground text-xs px-2 py-1 rounded shadow-lg pointer-events-none whitespace-nowrap z-10">
                      Click to analyze {formatState(item.state)}
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {/* Statistics summary */}
          <div className="grid grid-cols-3 gap-3 pt-3 border-t border-border text-xs">
            <div>
              <div className="text-muted-foreground">Entropy</div>
              <div className="font-mono font-medium">
                {(-sortedData.reduce((sum, item) => 
                  sum + (item.probability > 0 ? item.probability * Math.log2(item.probability) : 0), 0
                )).toFixed(2)}
              </div>
            </div>
            <div>
              <div className="text-muted-foreground">States</div>
              <div className="font-mono font-medium">{data.length}</div>
            </div>
            <div>
              <div className="text-muted-foreground">Max P</div>
              <div className="font-mono font-medium">
                {(maxProbability * 100).toFixed(1)}%
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}