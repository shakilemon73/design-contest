import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { QuantumCircuit } from "@/components/quantum-circuit"
import { QubitStatusCard } from "@/components/qubit-status-card"
import { Plus, Settings, Info, Zap } from "lucide-react"

export default function Dashboard() {
  const [isRunning, setIsRunning] = useState(false)

  //todo: remove mock functionality - replace with real quantum data
  const mockQubits = [
    { id: "q0", name: "Q0", state: "0" as const },
    { id: "q1", name: "Q1", state: "1" as const },
    { id: "q2", name: "Q2", state: "+" as const }
  ]

  const mockGates = [
    { id: "h1", type: "H" as const, position: { qubit: 0, step: 0 } },
    { id: "x1", type: "X" as const, position: { qubit: 1, step: 1 } },
    { id: "cnot1", type: "CNOT" as const, position: { qubit: 0, step: 2 }, target: 2 },
    { id: "z1", type: "Z" as const, position: { qubit: 2, step: 3 } }
  ]

  const mockQubitCards = [
    {
      id: "qubit-001",
      name: "Qubit v1",
      state: "0" as const,
      coherenceTime: 85,
      fidelity: 0.997,
      temperature: 15,
      isActive: true
    },
    {
      id: "qubit-002", 
      name: "Qubit v2",
      state: "superposition" as const,
      coherenceTime: 92,
      fidelity: 0.993,
      temperature: 12,
      isActive: true
    }
  ]

  const handleToggleExecution = () => {
    setIsRunning(!isRunning)
    console.log('Circuit execution toggled:', !isRunning)
  }

  const handleReset = () => {
    setIsRunning(false)
    console.log('Circuit reset')
  }

  const handleQubitToggle = (qubitId: string) => {
    console.log(`Qubit ${qubitId} toggled`)
  }

  const handleQubitConfigure = (qubitId: string) => {
    console.log(`Configure qubit ${qubitId}`)
  }

  const handleAddQubit = () => {
    console.log('Add new qubit')
  }

  return (
    <div className="p-6 space-y-6" data-testid="page-dashboard">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Quantum Lab</h1>
          <p className="text-sm text-muted-foreground">
            Design and execute quantum circuits with your connected qubits
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button 
            size="sm" 
            variant="outline"
            data-testid="button-settings"
          >
            <Settings className="h-4 w-4 mr-1" />
            Settings
          </Button>
          <Button 
            size="sm"
            onClick={handleAddQubit}
            data-testid="button-add-qubit"
          >
            <Plus className="h-4 w-4 mr-1" />
            Add Qubit
          </Button>
        </div>
      </div>

      {/* Main content grid */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Quantum Circuit - Main focus */}
        <div className="xl:col-span-2">
          <QuantumCircuit
            qubits={mockQubits}
            gates={mockGates}
            isRunning={isRunning}
            onToggleExecution={handleToggleExecution}
            onReset={handleReset}
          />
        </div>

        {/* Sidebar with qubits and info */}
        <div className="space-y-6">
          {/* Quick stats */}
          <Card data-testid="stats-card">
            <CardHeader className="pb-3">
              <CardTitle className="text-base">System Status</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Active Qubits</span>
                <span className="text-sm font-medium">{mockQubitCards.length}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Circuit Gates</span>
                <span className="text-sm font-medium">{mockGates.length}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Execution Status</span>
                <div className="flex items-center gap-1">
                  <div className={`w-2 h-2 rounded-full ${isRunning ? 'bg-green-500' : 'bg-gray-400'}`} />
                  <span className="text-sm font-medium">
                    {isRunning ? 'Running' : 'Idle'}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Last execution info */}
          <Card data-testid="execution-info">
            <CardHeader className="pb-3">
              <CardTitle className="text-base flex items-center gap-2">
                <Zap className="h-4 w-4" />
                Last Execution
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">IBM Hanoi (32 qubits)</span>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="h-6 text-xs"
                    data-testid="button-skip-story"
                  >
                    Skip to the story
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">
                  Read the report for detailed quantum execution results
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Your Qubits section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Your Qubits</h2>
          <Button 
            size="sm" 
            variant="outline"
            data-testid="button-manage-qubits"
          >
            <Info className="h-4 w-4 mr-1" />
            Manage All
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {mockQubitCards.map((qubit) => (
            <QubitStatusCard
              key={qubit.id}
              {...qubit}
              onToggle={() => handleQubitToggle(qubit.id)}
              onConfigure={() => handleQubitConfigure(qubit.id)}
            />
          ))}
          
          {/* Add qubit card */}
          <Card 
            className="border-dashed border-2 hover-elevate cursor-pointer transition-all"
            onClick={handleAddQubit}
            data-testid="card-add-qubit"
          >
            <CardContent className="flex flex-col items-center justify-center p-6 text-center min-h-[200px]">
              <Plus className="h-8 w-8 text-muted-foreground mb-2" />
              <p className="text-sm font-medium">Add New Qubit</p>
              <p className="text-xs text-muted-foreground">
                Connect additional quantum hardware
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}