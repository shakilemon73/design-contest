import React from 'react'
import { cn } from '@/lib/utils'
import { Card, CardContent, CardHeader, CardTitle } from './card'
import { Badge } from './badge'
import { TrendingUp, Zap, Activity } from 'lucide-react'

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
  title = "Measurement Results",
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
          <CardTitle className="text-base font-semibold">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center text-muted-foreground py-8">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted/50 flex items-center justify-center">
              <Activity className="h-6 w-6" />
            </div>
            <p className="text-sm">No measurement data available</p>
          </div>
        </CardContent>
      </Card>
    )
  }

  const maxProbability = Math.max(...sortedData.map(d => d.probability), 0)

  const formatState = (state: string) => {
    return `|${state}⟩`
  }

  const getCardColor = (index: number) => {
    const colors = [
      'from-blue-500/10 to-blue-600/5 border-blue-500/20',
      'from-green-500/10 to-green-600/5 border-green-500/20',
      'from-purple-500/10 to-purple-600/5 border-purple-500/20',
      'from-orange-500/10 to-orange-600/5 border-orange-500/20',
      'from-pink-500/10 to-pink-600/5 border-pink-500/20',
      'from-cyan-500/10 to-cyan-600/5 border-cyan-500/20',
      'from-yellow-500/10 to-yellow-600/5 border-yellow-500/20',
      'from-red-500/10 to-red-600/5 border-red-500/20',
    ]
    return colors[index % colors.length]
  }

  const getIconColor = (index: number) => {
    const colors = [
      'text-blue-600', 'text-green-600', 'text-purple-600', 'text-orange-600',
      'text-pink-600', 'text-cyan-600', 'text-yellow-600', 'text-red-600'
    ]
    return colors[index % colors.length]
  }

  const getProgressColor = (index: number) => {
    const colors = [
      'bg-blue-500', 'bg-green-500', 'bg-purple-500', 'bg-orange-500',
      'bg-pink-500', 'bg-cyan-500', 'bg-yellow-500', 'bg-red-500'
    ]
    return colors[index % colors.length]
  }

  return (
    <Card className={cn("", className)}>
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-base font-semibold">{title}</CardTitle>
            <p className="text-sm text-muted-foreground mt-1">
              Quantum state probabilities
            </p>
          </div>
          {showCounts && totalShots && (
            <Badge variant="outline" className="text-sm px-3 py-1 rounded-full">
              {totalShots} shots
            </Badge>
          )}
        </div>
      </CardHeader>

      <CardContent className="space-y-3">
        {/* Mobile-Optimized State Cards */}
        {sortedData.map((item, index) => {
          const heightPercent = maxProbability > 0 ? (item.probability / maxProbability) * 100 : 0
          const count = showCounts && totalShots ? Math.round(item.probability * totalShots) : 0
          
          return (
            <Card
              key={item.state}
              className={cn(
                "border bg-gradient-to-r transition-all duration-200 cursor-pointer touch-manipulation hover:shadow-lg",
                getCardColor(index),
                onStateClick && "hover:scale-[1.02] active:scale-[0.98]"
              )}
              onClick={() => onStateClick?.(item.state)}
            >
              <CardContent className="p-4">
                {/* Header Row */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className={cn(
                      "w-10 h-10 rounded-xl bg-background/50 flex items-center justify-center border",
                      getIconColor(index)
                    )}>
                      <Zap className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-lg font-bold font-mono text-foreground">
                        {formatState(item.state)}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Quantum State
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-foreground">
                      {(item.probability * 100).toFixed(1)}%
                    </div>
                    {showCounts && (
                      <div className="text-sm text-muted-foreground">
                        {count} hits
                      </div>
                    )}
                  </div>
                </div>

                {/* Progress Indicator */}
                <div className="space-y-3">
                  <div className="w-full bg-background/50 rounded-full h-2 overflow-hidden border">
                    <div
                      className={cn(
                        "h-full rounded-full transition-all duration-700 ease-out shadow-sm",
                        getProgressColor(index)
                      )}
                      style={{ width: `${heightPercent}%` }}
                    />
                  </div>
                  
                  {/* Detailed Info Row */}
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-4">
                      <span className="text-muted-foreground">
                        Amp: <span className="font-mono font-medium text-foreground">
                          {item.amplitude.toFixed(3)}
                        </span>
                      </span>
                      {showPhase && (
                        <span className="text-muted-foreground">
                          φ: <span className="font-mono font-medium text-foreground">
                            {item.phase.toFixed(2)}π
                          </span>
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <TrendingUp className="h-3 w-3" />
                      <span className="text-xs">Rank #{index + 1}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}

        {/* Mobile Summary Grid */}
        <div className="grid grid-cols-3 gap-3 pt-4 border-t">
          <Card className="border-0 bg-primary/5">
            <CardContent className="p-3 text-center">
              <div className="text-xl font-bold text-primary">
                {sortedData.length}
              </div>
              <div className="text-xs text-muted-foreground mt-1">
                Active States
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-0 bg-green-500/5">
            <CardContent className="p-3 text-center">
              <div className="text-xl font-bold text-green-600">
                {(maxProbability * 100).toFixed(0)}%
              </div>
              <div className="text-xs text-muted-foreground mt-1">
                Max Probability
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-0 bg-orange-500/5">
            <CardContent className="p-3 text-center">
              <div className="text-xl font-bold text-orange-600">
                {(-sortedData.reduce((sum, item) => 
                  sum + (item.probability > 0 ? item.probability * Math.log2(item.probability) : 0), 0
                )).toFixed(1)}
              </div>
              <div className="text-xs text-muted-foreground mt-1">
                Entropy (bits)
              </div>
            </CardContent>
          </Card>
        </div>
      </CardContent>
    </Card>
  )
}