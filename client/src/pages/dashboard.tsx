import { useState } from "react"
import { Link } from "wouter"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus, Settings, Palette, Info, ChevronRight, ChevronDown, History } from "lucide-react"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"

export default function Dashboard() {
  const [selectedQuantumComputer, setSelectedQuantumComputer] = useState("ibm-hanoi")

  //todo: remove mock functionality - replace with real quantum data
  const mockQubits = [
    {
      id: "qubit-v1-1",
      name: "Qubit v1",
      gates: ["X", "Y", "Z", "T", "T", "H"],
      measureType: "CNOT"
    },
    {
      id: "qubit-v1-2", 
      name: "Qubit v1",
      gates: ["X", "Y", "Z", "T", "T", "H"],
      measureType: "Measure"
    }
  ]

  const quantumComputers = [
    { id: "ibm-hanoi", name: "IBM Hanoi", qubits: 32 },
    { id: "ibm-lagos", name: "IBM Lagos", qubits: 27 },
    { id: "ibm-nairobi", name: "IBM Nairobi", qubits: 27 }
  ]

  const handleGateClick = (qubitId: string, gate: string) => {
    console.log(`${gate} gate clicked for ${qubitId}`)
  }

  const gateDescriptions: Record<string, string> = {
    "X": "Pauli-X gate: Flips qubit state (0↔1)",
    "Y": "Pauli-Y gate: Rotates qubit around Y-axis", 
    "Z": "Pauli-Z gate: Adds phase to |1⟩ state",
    "T": "T gate: Applies π/4 phase rotation",
    "H": "Hadamard gate: Creates superposition"
  }

  const handleMeasure = (qubitId: string, measureType: string) => {
    console.log(`${measureType} applied to ${qubitId}`)
  }

  return (
    <div className="max-w-2xl mx-auto bg-background min-h-screen px-4" data-testid="page-dashboard">
      {/* Build Circuit Section */}
      <div className="p-4 border-b border-border">
        <div className="flex items-center justify-between">
          <Link href="/add-qubits">
            <Button variant="ghost" className="text-primary hover:text-primary/80" data-testid="button-build-circuit">
              <Plus className="h-4 w-4 mr-1" />
              Build Circuit
            </Button>
          </Link>
          <div className="flex items-center gap-2">
            <Link href="/settings">
              <Button size="icon" variant="ghost" data-testid="button-settings" aria-label="Open quantum settings">
                <Settings className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/themes">
              <Button size="icon" variant="ghost" data-testid="button-themes" aria-label="Change theme colors">
                <Palette className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Your Qubits Section */}
      <div className="p-4 space-y-4">
        <h2 className="text-lg font-medium">Your Qubits</h2>
        
        {mockQubits.map((qubit, index) => (
          <Card key={qubit.id} className="relative" data-testid={`qubit-card-${index}`}>
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-muted-foreground" />
                  <span className="font-medium">{qubit.name}</span>
                </div>
                <Button size="sm" variant="ghost" data-testid={`button-info-${index}`} aria-label={`View details for ${qubit.name}`}>
                  <Info className="h-4 w-4" />
                </Button>
              </div>

              {/* Quantum Gates */}
              <div className="grid grid-cols-6 gap-2 mb-4">
                {qubit.gates.map((gate, gateIndex) => (
                  <Tooltip key={gateIndex}>
                    <TooltipTrigger asChild>
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-8 text-xs font-mono"
                        onClick={() => handleGateClick(qubit.id, gate)}
                        data-testid={`gate-${gate.toLowerCase()}-${index}-${gateIndex}`}
                        aria-label={`Apply ${gate} gate to ${qubit.name}`}
                      >
                        {gate}
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="text-sm">{gateDescriptions[gate]}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </div>

              {/* Measure Section */}
              <div className="flex items-center gap-2">
                <Select value={qubit.measureType} onValueChange={(value) => handleMeasure(qubit.id, value)}>
                  <SelectTrigger className="flex-1" data-testid={`select-measure-${index}`} aria-label={`Select measurement operation for ${qubit.name}`}>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="CNOT">CNOT</SelectItem>
                    <SelectItem value="Measure">Measure</SelectItem>
                    <SelectItem value="Reset">Reset</SelectItem>
                  </SelectContent>
                </Select>
                <Button size="icon" variant="ghost" data-testid={`button-dropdown-${index}`} aria-label={`More options for ${qubit.name}`}>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}

        {/* Dropdown for additional options */}
        <div className="flex justify-center">
          <Button size="icon" variant="ghost" data-testid="button-expand-options" aria-label="Show more quantum circuit options">
            <ChevronDown className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Last shake Section */}
      <Card className="mx-4 mb-4 bg-gradient-to-r from-blue-500/10 to-green-500/10 border-blue-500/20" data-testid="last-shake-card">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium text-sm">Last shake - IBM Hanoi</h3>
              <div className="flex items-center gap-2 mt-2">
                <Link href="/execution-report">
                  <Button size="sm" variant="outline" className="h-8 text-xs" data-testid="button-read-report">
                    View Results
                    <ChevronRight className="h-3 w-3 ml-1" />
                  </Button>
                </Link>
                <Link href="/run-story">
                  <Button size="sm" variant="outline" className="h-8 text-xs" data-testid="button-skip-story">
                    Learn More
                    <ChevronRight className="h-3 w-3 ml-1" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Pending circuit Section */}
      <div className="px-4 mb-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-medium">Pending circuit</h3>
          <Link href="/history">
            <Button size="sm" variant="ghost" data-testid="button-history">
            <History className="h-4 w-4 mr-1" />
            History
            </Button>
          </Link>
        </div>
        
        {/* Circuit Visualization */}
        <Card className="p-4" data-testid="circuit-visualization">
          <div className="space-y-3">
            {/* Circuit lines with quantum gates */}
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-muted-foreground" />
              <div className="flex-1 h-0.5 bg-border relative">
                <div className="absolute left-8 top-1/2 -translate-y-1/2 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-xs text-primary-foreground font-mono">H</span>
                </div>
                <div className="absolute left-20 top-1/2 -translate-y-1/2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-xs text-white font-mono">X</span>
                </div>
              </div>
              <div className="w-3 h-3 rounded-full bg-muted-foreground" />
            </div>
            
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-muted-foreground" />
              <div className="flex-1 h-0.5 bg-border relative">
                <div className="absolute left-20 top-1/2 -translate-y-1/2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-xs text-white font-mono">X</span>
                </div>
              </div>
              <div className="w-3 h-3 rounded-full bg-muted-foreground" />
            </div>

            {/* Connection lines for entanglement */}
            <div className="relative">
              <svg className="w-full h-8" viewBox="0 0 200 30">
                <line x1="100" y1="5" x2="100" y2="25" stroke="currentColor" strokeWidth="1" strokeDasharray="2,2" className="text-muted-foreground" />
                <circle cx="100" cy="5" r="2" fill="currentColor" className="text-primary" />
                <circle cx="100" cy="25" r="2" fill="currentColor" className="text-primary" />
              </svg>
            </div>
          </div>
        </Card>
      </div>

      {/* Next shake Section */}
      <Card className="mx-4 mb-4" data-testid="next-shake-card">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-muted rounded-md flex items-center justify-center">
                <div className="w-4 h-4 bg-primary rounded-sm" />
              </div>
              <div>
                <p className="text-sm font-medium">Next shake</p>
                <Select value={selectedQuantumComputer} onValueChange={setSelectedQuantumComputer}>
                  <Link href="/quantum-computers">
                    <SelectTrigger className="w-auto border-none p-0 h-auto shadow-none focus:ring-0" data-testid="select-quantum-computer" aria-label="Select quantum computer for next execution">
                      <SelectValue />
                    </SelectTrigger>
                  </Link>
                  <SelectContent>
                    {quantumComputers.map((computer) => (
                      <SelectItem key={computer.id} value={computer.id}>
                        {computer.name} ({computer.qubits} qubits)
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <Button size="icon" variant="ghost" data-testid="button-quantum-computer-dropdown" aria-label="Select different quantum computer">
              <ChevronDown className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}