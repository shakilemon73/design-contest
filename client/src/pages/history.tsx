import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Search, Filter, Clock, CheckCircle, XCircle, Eye } from "lucide-react"
import { Link } from "wouter"

export default function History() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")

  // Mock history data
  const historyData = [
    {
      id: "exec-20241216-001",
      name: "Bell State Circuit",
      timestamp: "2024-12-16 17:42:15",
      status: "completed",
      runtime: "2.34s",
      qubits: 2,
      gates: 3,
      fidelity: 94.7,
      quantumComputer: "IBM Hanoi"
    },
    {
      id: "exec-20241216-002",
      name: "Grover Search Algorithm",
      timestamp: "2024-12-16 15:28:43",
      status: "completed",
      runtime: "8.91s",
      qubits: 4,
      gates: 15,
      fidelity: 89.3,
      quantumComputer: "IBM Lagos"
    },
    {
      id: "exec-20241216-003",
      name: "Quantum Teleportation",
      timestamp: "2024-12-16 14:15:22",
      status: "failed",
      runtime: "1.12s",
      qubits: 3,
      gates: 8,
      fidelity: 0,
      quantumComputer: "IBM Nairobi",
      error: "Qubit decoherence timeout"
    },
    {
      id: "exec-20241215-001",
      name: "Shor's Algorithm Test",
      timestamp: "2024-12-15 22:45:18",
      status: "completed",
      runtime: "12.67s",
      qubits: 5,
      gates: 28,
      fidelity: 91.8,
      quantumComputer: "IBM Hanoi"
    },
    {
      id: "exec-20241215-002",
      name: "Random Circuit",
      timestamp: "2024-12-15 18:33:09",
      status: "completed",
      runtime: "3.45s",
      qubits: 3,
      gates: 9,
      fidelity: 96.2,
      quantumComputer: "IBM Lagos"
    }
  ]

  const filteredHistory = historyData.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.id.includes(searchTerm)
    const matchesFilter = filterStatus === "all" || item.status === filterStatus
    return matchesSearch && matchesFilter
  })

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-4 w-4 text-green-500" />
      case 'failed':
        return <XCircle className="h-4 w-4 text-red-500" />
      default:
        return <Clock className="h-4 w-4 text-amber-500" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'text-green-600 bg-green-50'
      case 'failed':
        return 'text-red-600 bg-red-50'
      default:
        return 'text-amber-600 bg-amber-50'
    }
  }

  return (
    <div className="space-y-6" data-testid="page-history">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link href="/">
          <Button size="icon" variant="ghost" data-testid="button-back" aria-label="Go back to dashboard">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div>
          <h1 className="text-2xl font-semibold">Execution History</h1>
          <p className="text-sm text-muted-foreground">
            View and manage your quantum circuit execution history
          </p>
        </div>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex gap-3">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search executions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
                data-testid="input-search"
              />
            </div>
            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger className="w-40" data-testid="select-filter">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="failed">Failed</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* History List */}
      <div className="space-y-3">
        {filteredHistory.length === 0 ? (
          <Card>
            <CardContent className="p-8 text-center">
              <p className="text-muted-foreground">No executions found matching your criteria.</p>
            </CardContent>
          </Card>
        ) : (
          filteredHistory.map((execution) => (
            <Card key={execution.id} className="cursor-pointer hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-3">
                      {getStatusIcon(execution.status)}
                      <h3 className="font-medium">{execution.name}</h3>
                      <Badge variant="outline" className={getStatusColor(execution.status)}>
                        {execution.status}
                      </Badge>
                    </div>
                    
                    <div className="text-sm text-muted-foreground space-y-1">
                      <div className="flex items-center gap-4">
                        <span>ID: {execution.id}</span>
                        <span>{execution.timestamp}</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <span>{execution.qubits} qubits</span>
                        <span>{execution.gates} gates</span>
                        <span>{execution.runtime}</span>
                        <span>{execution.quantumComputer}</span>
                      </div>
                      {execution.status === 'completed' && (
                        <div>Fidelity: {execution.fidelity}%</div>
                      )}
                      {execution.error && (
                        <div className="text-red-600">Error: {execution.error}</div>
                      )}
                    </div>
                  </div>
                  
                  <Link href={`/execution-report?id=${execution.id}`}>
                    <Button size="sm" variant="ghost" data-testid={`button-view-${execution.id}`}>
                      <Eye className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>

      {/* Stats Summary */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Summary Statistics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4 text-center text-sm">
            <div>
              <div className="text-lg font-semibold text-primary">
                {historyData.filter(h => h.status === 'completed').length}
              </div>
              <div className="text-muted-foreground">Completed</div>
            </div>
            <div>
              <div className="text-lg font-semibold text-red-500">
                {historyData.filter(h => h.status === 'failed').length}
              </div>
              <div className="text-muted-foreground">Failed</div>
            </div>
            <div>
              <div className="text-lg font-semibold">
                {Math.round(historyData.filter(h => h.status === 'completed').reduce((sum, h) => sum + h.fidelity, 0) / historyData.filter(h => h.status === 'completed').length)}%
              </div>
              <div className="text-muted-foreground">Avg. Fidelity</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}