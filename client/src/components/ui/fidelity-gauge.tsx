import React from 'react'
import { cn } from '@/lib/utils'
import { Card, CardContent, CardHeader, CardTitle } from './card'
import { Badge } from './badge'
import { TrendingUp, TrendingDown, Minus, AlertTriangle, CheckCircle } from 'lucide-react'

interface FidelityGaugeProps {
  value: number // 0-1 range
  label?: string
  target?: number
  previousValue?: number
  threshold?: {
    excellent: number // e.g., 0.95
    good: number // e.g., 0.85
    acceptable: number // e.g., 0.7
  }
  size?: 'sm' | 'md' | 'lg'
  showTrend?: boolean
  showDetails?: boolean
  className?: string
  onClick?: () => void
}

const defaultThreshold = {
  excellent: 0.95,
  good: 0.85,
  acceptable: 0.7
}

export function FidelityGauge({
  value,
  label = "Fidelity",
  target,
  previousValue,
  threshold = defaultThreshold,
  size = 'md',
  showTrend = false,
  showDetails = false,
  className,
  onClick
}: FidelityGaugeProps) {
  const sizeConfig = {
    sm: { radius: 32, strokeWidth: 4, textSize: 'text-xs' },
    md: { radius: 40, strokeWidth: 6, textSize: 'text-sm' },
    lg: { radius: 48, strokeWidth: 8, textSize: 'text-base' }
  }
  
  const config = sizeConfig[size]
  const circumference = 2 * Math.PI * config.radius
  const strokeDasharray = `${circumference} ${circumference}`
  const strokeDashoffset = circumference - (value * circumference)
  
  // Determine status and colors
  const getStatus = () => {
    if (value >= threshold.excellent) return 'excellent'
    if (value >= threshold.good) return 'good'  
    if (value >= threshold.acceptable) return 'acceptable'
    return 'poor'
  }

  const status = getStatus()
  
  const statusConfig = {
    excellent: {
      color: 'text-fidelity-high',
      strokeColor: 'stroke-fidelity-high',
      bgColor: 'bg-fidelity-high/10',
      label: 'Excellent',
      variant: 'default' as const,
      icon: CheckCircle
    },
    good: {
      color: 'text-quantum-success',
      strokeColor: 'stroke-quantum-success', 
      bgColor: 'bg-quantum-success/10',
      label: 'Good',
      variant: 'secondary' as const,
      icon: CheckCircle
    },
    acceptable: {
      color: 'text-fidelity-medium',
      strokeColor: 'stroke-fidelity-medium',
      bgColor: 'bg-fidelity-medium/10',
      label: 'Acceptable', 
      variant: 'outline' as const,
      icon: Minus
    },
    poor: {
      color: 'text-fidelity-low',
      strokeColor: 'stroke-fidelity-low',
      bgColor: 'bg-fidelity-low/10',
      label: 'Poor',
      variant: 'destructive' as const,
      icon: AlertTriangle
    }
  }

  const currentStatus = statusConfig[status]
  const StatusIcon = currentStatus.icon

  // Calculate trend
  const getTrend = () => {
    if (previousValue === undefined) return null
    const diff = value - previousValue
    if (Math.abs(diff) < 0.001) return 'stable'
    return diff > 0 ? 'up' : 'down'
  }

  const trend = getTrend()
  const trendIcons = {
    up: TrendingUp,
    down: TrendingDown,
    stable: Minus
  }

  const TrendIcon = trend ? trendIcons[trend] : null

  return (
    <Card 
      className={cn(
        "transition-all duration-300",
        status === 'excellent' && "quantum-glow",
        onClick && "cursor-pointer hover:shadow-lg",
        className
      )}
      onClick={onClick}
    >
      {showDetails && (
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <CardTitle className="text-sm font-medium">{label}</CardTitle>
            <Badge variant={currentStatus.variant} className="text-xs px-2 py-0.5">
              {currentStatus.label}
            </Badge>
          </div>
        </CardHeader>
      )}

      <CardContent className={cn(!showDetails && "pt-6")}>
        <div className="flex items-center justify-center">
          {/* SVG Gauge */}
          <div className="relative">
            <svg
              className="transform -rotate-90"
              width={config.radius * 2 + config.strokeWidth * 2}
              height={config.radius * 2 + config.strokeWidth * 2}
            >
              {/* Background circle */}
              <circle
                cx={config.radius + config.strokeWidth}
                cy={config.radius + config.strokeWidth}
                r={config.radius}
                stroke="currentColor"
                strokeWidth={config.strokeWidth}
                fill="none"
                className="text-muted opacity-20"
              />
              
              {/* Progress circle */}
              <circle
                cx={config.radius + config.strokeWidth}
                cy={config.radius + config.strokeWidth}
                r={config.radius}
                stroke="currentColor"
                strokeWidth={config.strokeWidth}
                fill="none"
                strokeDasharray={strokeDasharray}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                className={cn(
                  "transition-all duration-1000 ease-out",
                  currentStatus.strokeColor,
                  value >= threshold.excellent && "animate-quantum-pulse"
                )}
              />

              {/* Target indicator */}
              {target !== undefined && (
                <circle
                  cx={config.radius + config.strokeWidth}
                  cy={config.radius + config.strokeWidth}
                  r={config.radius}
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeDasharray="4 4"
                  strokeDashoffset={circumference - (target * circumference)}
                  className="text-muted-foreground opacity-50"
                />
              )}
            </svg>

            {/* Center content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className={cn("font-bold", config.textSize, currentStatus.color)}>
                {(value * 100).toFixed(1)}%
              </div>
              {!showDetails && (
                <div className="text-xs text-muted-foreground mt-1">{label}</div>
              )}
            </div>
          </div>
        </div>

        {/* Additional details */}
        {showDetails && (
          <div className="mt-4 space-y-2">
            {/* Trend indicator */}
            {showTrend && trend && TrendIcon && (
              <div className="flex items-center justify-center gap-1 text-xs">
                <TrendIcon className={cn(
                  "h-3 w-3",
                  trend === 'up' && "text-quantum-success",
                  trend === 'down' && "text-quantum-error", 
                  trend === 'stable' && "text-muted-foreground"
                )} />
                <span className="text-muted-foreground">
                  {trend === 'up' && 'Improving'}
                  {trend === 'down' && 'Declining'}  
                  {trend === 'stable' && 'Stable'}
                </span>
                {previousValue !== undefined && (
                  <span className="text-muted-foreground">
                    ({previousValue > value ? '-' : '+'}
                    {Math.abs((value - previousValue) * 100).toFixed(2)}%)
                  </span>
                )}
              </div>
            )}

            {/* Target comparison */}
            {target !== undefined && (
              <div className="text-xs text-center text-muted-foreground">
                Target: {(target * 100).toFixed(1)}% • 
                {value >= target ? (
                  <span className="text-quantum-success ml-1">Above target</span>
                ) : (
                  <span className="text-quantum-warning ml-1">
                    {((target - value) * 100).toFixed(1)}% below
                  </span>
                )}
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  )
}