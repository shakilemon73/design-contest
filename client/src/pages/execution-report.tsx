import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, Download, Share, Clock, CheckCircle, AlertTriangle } from "lucide-react"
import { Link } from "wouter"

export default function ExecutionReport() {
  // Mock execution data
  const executionData = {
    id: "exec-20241216-001",
    timestamp: "2024-12-16 17:42:15 UTC",
    quantumComputer: "IBM Hanoi",
    status: "completed",
    runtime: "2.34s",
    fidelity: 94.7,
    shots: 1024,
    gates: 12,
    qubits: 3,
    results: {
      "000": 342,
      "001": 89,
      "010": 156,
      "011": 201,
      "100": 78,
      "101": 94,
      "110": 45,
      "111": 19
    }
  }

  const handleDownload = () => {
    console.log('Downloading execution report...')
  }

  const handleShare = () => {
    console.log('Sharing execution results...')
  }

  const totalMeasurements = Object.values(executionData.results).reduce((sum, count) => sum + count, 0)

  return (
    <div className="space-y-6" data-testid="page-execution-report">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link href="/">
          <Button size="icon" variant="ghost" data-testid="button-back" aria-label="Go back to dashboard">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div className="flex-1">
          <h1 className="text-2xl font-semibold">Execution Report</h1>
          <p className="text-sm text-muted-foreground">
            Detailed results from your quantum circuit execution
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={handleDownload} data-testid="button-download">
            <Download className="h-4 w-4 mr-2" />
            Download
          </Button>
          <Button variant="outline" size="sm" onClick={handleShare} data-testid="button-share">
            <Share className="h-4 w-4 mr-2" />
            Share
          </Button>
        </div>
      </div>

      {/* Execution Summary */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              Execution Summary
            </CardTitle>
            <Badge variant="secondary">
              {executionData.status === 'completed' ? 'Completed' : 'Failed'}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3 text-sm">
            <div>
              <span className="text-muted-foreground">Execution ID:</span>
              <p className="font-mono">{executionData.id}</p>
            </div>
            <div>
              <span className="text-muted-foreground">Timestamp:</span>
              <p>{executionData.timestamp}</p>
            </div>
            <div>
              <span className="text-muted-foreground">Quantum Computer:</span>
              <p>{executionData.quantumComputer}</p>
            </div>
            <div>
              <span className="text-muted-foreground">Runtime:</span>
              <p className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {executionData.runtime}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Circuit Information */}
      <Card>
        <CardHeader>
          <CardTitle>Circuit Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4 text-center">
            <div>
              <div className="text-2xl font-semibold text-primary">{executionData.qubits}</div>
              <div className="text-sm text-muted-foreground">Qubits</div>
            </div>
            <div>
              <div className="text-2xl font-semibold text-primary">{executionData.gates}</div>
              <div className="text-sm text-muted-foreground">Gates</div>
            </div>
            <div>
              <div className="text-2xl font-semibold text-primary">{executionData.shots}</div>
              <div className="text-sm text-muted-foreground">Shots</div>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Circuit Fidelity</span>
              <span className="text-sm font-medium">{executionData.fidelity}%</span>
            </div>
            <Progress value={executionData.fidelity} className="h-2" />
            {executionData.fidelity < 95 && (
              <div className="flex items-center gap-2 text-xs text-amber-600">
                <AlertTriangle className="h-3 w-3" />
                Consider error correction for higher fidelity
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Measurement Results */}
      <Card>
        <CardHeader>
          <CardTitle>Measurement Results</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {Object.entries(executionData.results).map(([state, count]) => {
            const percentage = ((count / totalMeasurements) * 100).toFixed(1)
            return (
              <div key={state} className="space-y-1">
                <div className="flex justify-between items-center text-sm">
                  <span className="font-mono">|{state}⟩</span>
                  <span>{count} ({percentage}%)</span>
                </div>
                <Progress value={parseFloat(percentage)} className="h-1" />
              </div>
            )
          })}
        </CardContent>
      </Card>

      {/* Actions */}
      <div className="flex justify-center gap-3">
        <Link href="/learn">
          <Button variant="outline">
            Learn More About Results
          </Button>
        </Link>
        <Link href="/">
          <Button>
            Run Another Circuit
          </Button>
        </Link>
      </div>
    </div>
  )
}