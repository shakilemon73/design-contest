import { useState } from "react"
import { Link } from "wouter"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus, Settings, Palette, Info, ChevronRight, ChevronDown, History, CheckCircle } from "lucide-react"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { QuantumCircuitCanvas } from "@/components/ui/quantum-circuit-canvas"
import { QubitStatusCard } from "@/components/ui/qubit-status-card"
import { ProbabilityHistogram } from "@/components/ui/probability-histogram"
import { FidelityGauge } from "@/components/ui/fidelity-gauge"

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

  // Sample data for quantum components demo
  const sampleGates = [
    { id: '1', type: 'H' as const, qubit: 0, position: 0 },
    { id: '2', type: 'CNOT' as const, qubit: 1, position: 1, controlQubit: 0 },
    { id: '3', type: 'X' as const, qubit: 2, position: 2 },
    { id: '4', type: 'T' as const, qubit: 0, position: 3 },
  ]

  const sampleQubit = {
    id: 'q0',
    name: 'Transmon Q0',
    state: 'superposition' as const,
    fidelity: 0.956,
    coherenceTime: 104.2,
    errorRate: 0.0015,
    temperature: 15.2,
    frequency: 5.234,
    isConnected: true,
  }

  const sampleProbabilityData = [
    { state: '000', probability: 0.45, amplitude: 0.671, phase: 0 },
    { state: '111', probability: 0.32, amplitude: 0.566, phase: Math.PI },
    { state: '001', probability: 0.12, amplitude: 0.346, phase: Math.PI/2 },
    { state: '110', probability: 0.08, amplitude: 0.283, phase: -Math.PI/2 },
    { state: '101', probability: 0.03, amplitude: 0.173, phase: Math.PI/4 },
  ]

  return (
    <div className="bg-background min-h-screen" data-testid="page-dashboard">
      {/* Modern Header Section */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border/40">
        <div className="px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex flex-col">
                <h1 className="text-xl font-semibold tracking-tight text-foreground">Quantum Lab</h1>
                <p className="text-xs text-muted-foreground font-medium">Circuit Builder & Analytics</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button asChild size="sm" className="h-11 px-4 text-sm font-medium rounded-full bg-primary hover:bg-primary/90 shadow-sm" data-testid="button-build-circuit">
                <Link href="/add-qubits">
                  <Plus className="h-4 w-4 mr-2" />
                  Build
                </Link>
              </Button>
              <Button asChild size="icon" variant="ghost" className="h-11 w-11 rounded-full hover:bg-muted/80" data-testid="button-settings" aria-label="Settings">
                <Link href="/settings">
                  <Settings className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="icon" variant="ghost" className="h-11 w-11 rounded-full hover:bg-muted/80" data-testid="button-themes" aria-label="Themes">
                <Link href="/themes">
                  <Palette className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Quantum Circuit Section */}
      <section className="px-4 py-6 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold tracking-tight text-foreground">Quantum Circuit</h2>
            <p className="text-sm text-muted-foreground mt-1">Build and visualize quantum operations</p>
          </div>
          <Badge variant="outline" className="text-sm px-3 py-1 font-medium rounded-full">
            Live
          </Badge>
        </div>
        
        <Card className="border-0 bg-gradient-to-br from-background to-muted/30 shadow-sm">
          <CardContent className="p-4">
            <QuantumCircuitCanvas
              qubits={3}
              gates={sampleGates}
              showLabels={true}
              interactive={true}
              onGateClick={(gate) => console.log('Gate clicked:', gate)}
              onQubitClick={(qubit) => console.log('Qubit clicked:', qubit)}
            />
          </CardContent>
        </Card>
        
        <Card className="border-0 shadow-sm">
          <CardContent className="p-4">
            <QubitStatusCard
              qubit={sampleQubit}
              showDetails={true}
              onStatusClick={(id) => console.log('Status clicked:', id)}
            />
          </CardContent>
        </Card>
      </section>

      {/* Quantum Analytics Section */}
      <section className="px-4 pb-6 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-base font-semibold tracking-tight text-foreground">Quantum Analytics</h2>
            <p className="text-xs text-muted-foreground mt-0.5">Performance metrics and measurements</p>
          </div>
          <Button size="sm" variant="ghost" className="h-11 px-4 text-sm rounded-full">
            Export
          </Button>
        </div>
        
        <Card className="border-0 shadow-sm">
          <CardContent className="p-4">
            <ProbabilityHistogram
              data={sampleProbabilityData}
              title="Measurement Results"
              showPhase={true}
              showCounts={true}
              totalShots={1000}
              onStateClick={(state) => console.log('State clicked:', state)}
            />
          </CardContent>
        </Card>
        
        <div className="grid grid-cols-2 gap-3">
          <Card className="border-0 shadow-sm">
            <CardContent className="p-4">
              <FidelityGauge
                value={0.956}
                label="Gate Fidelity"
                target={0.95}
                previousValue={0.943}
                showTrend={true}
                showDetails={true}
                size="sm"
              />
            </CardContent>
          </Card>
          <Card className="border-0 shadow-sm">
            <CardContent className="p-4">
              <FidelityGauge
                value={0.874}
                label="Readout"
                target={0.9}
                previousValue={0.891}
                showTrend={true}
                showDetails={true}
                size="sm"
              />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Your Qubits Section */}
      <section className="px-4 pb-6 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold tracking-tight text-foreground">Your Qubits</h2>
            <p className="text-sm text-muted-foreground mt-1">{mockQubits.length} active qubits</p>
          </div>
          <Button size="sm" variant="ghost" className="h-11 px-4 text-sm rounded-full" data-testid="button-expand-options">
            <Plus className="h-4 w-4 mr-2" />
            Add
          </Button>
        </div>
        
        <div className="space-y-3">
          {mockQubits.map((qubit, index) => (
            <Card key={qubit.id} className="border-0 shadow-sm hover:shadow-md transition-all duration-200" data-testid={`qubit-card-${index}`}>
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                    <div>
                      <span className="text-base font-medium text-foreground">{qubit.name}</span>
                      <p className="text-sm text-muted-foreground mt-1">ID: {qubit.id}</p>
                    </div>
                  </div>
                  <Button size="sm" variant="ghost" className="h-11 w-11 rounded-full hover:bg-muted/80" data-testid={`button-info-${index}`} aria-label={`View details for ${qubit.name}`}>
                    <Info className="h-4 w-4" />
                  </Button>
                </div>

                {/* Quantum Gates */}
                <div className="mb-4">
                  <p className="text-sm font-medium text-muted-foreground mb-3">Quantum Gates</p>
                  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
                    {qubit.gates.map((gate, gateIndex) => (
                      <Button
                        key={gateIndex}
                        variant="outline"
                        size="sm"
                        className="h-11 text-sm font-mono border-0 bg-muted/50 hover:bg-muted/80 rounded-lg touch-manipulation"
                        onClick={() => handleGateClick(qubit.id, gate)}
                        data-testid={`gate-${gate.toLowerCase()}-${index}-${gateIndex}`}
                        aria-label={`Apply ${gate} gate to ${qubit.name}. ${gateDescriptions[gate]}`}
                        title={gateDescriptions[gate]}
                      >
                        {gate}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Measure Section */}
                <div className="flex items-center gap-3">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-muted-foreground mb-3">Operation</p>
                    <Select value={qubit.measureType} onValueChange={(value) => handleMeasure(qubit.id, value)}>
                      <SelectTrigger className="h-11 text-sm border-0 bg-muted/50 rounded-lg" data-testid={`select-measure-${index}`} aria-label={`Select measurement operation for ${qubit.name}`}>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="CNOT">CNOT</SelectItem>
                        <SelectItem value="Measure">Measure</SelectItem>
                        <SelectItem value="Reset">Reset</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="pt-8">
                    <Button size="icon" variant="ghost" className="h-11 w-11 rounded-full hover:bg-muted/80 touch-manipulation" data-testid={`button-dropdown-${index}`} aria-label={`More options for ${qubit.name}`}>
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Last Execution Section */}
      <section className="px-4 pb-6">
        <Card className="border-0 shadow-sm bg-gradient-to-br from-primary/5 to-secondary/5" data-testid="last-shake-card">
          <CardContent className="p-4">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <CheckCircle className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground">Last Execution</h3>
                  <p className="text-xs text-muted-foreground mt-0.5">IBM Hanoi • Completed 2m ago</p>
                </div>
              </div>
              <Badge variant="secondary" className="text-xs px-2 py-0.5 rounded-full">
                Success
              </Badge>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Button asChild size="sm" variant="outline" className="w-full h-11 text-sm border-0 bg-background/50 hover:bg-background/80 rounded-lg touch-manipulation" data-testid="button-read-report">
                <Link href="/execution-report">
                  View Results
                  <ChevronRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
              <Button asChild size="sm" variant="outline" className="w-full h-11 text-sm border-0 bg-background/50 hover:bg-background/80 rounded-lg touch-manipulation" data-testid="button-skip-story">
                <Link href="/run-story">
                  Learn More
                  <ChevronRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Pending Circuit Section */}
      <section className="px-4 pb-6 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-base font-semibold tracking-tight text-foreground">Pending Circuit</h2>
            <p className="text-xs text-muted-foreground mt-0.5">Ready for execution</p>
          </div>
          <Link href="/history">
            <Button size="sm" variant="ghost" className="h-7 px-2 text-xs rounded-full" data-testid="button-history">
              <History className="h-3 w-3 mr-1" />
              History
            </Button>
          </Link>
        </div>
        
        {/* Modern Circuit Visualization */}
        <Card className="border-0 shadow-sm" data-testid="circuit-visualization">
          <CardContent className="p-4">
            <div className="space-y-4">
              <div className="flex items-center justify-between mb-3">
                <p className="text-xs font-medium text-muted-foreground">Circuit Diagram</p>
                <Badge variant="outline" className="text-xs px-2 py-0.5 rounded-full">
                  2 Qubits
                </Badge>
              </div>
              
              {/* Enhanced Circuit lines with quantum gates */}
              <div className="bg-muted/20 rounded-lg p-4 space-y-4">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-2 w-16">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-xs font-mono text-muted-foreground">|0⟩</span>
                  </div>
                  <div className="flex-1 h-px bg-border relative">
                    <div className="absolute left-8 top-1/2 -translate-y-1/2 w-7 h-7 bg-primary rounded-lg flex items-center justify-center shadow-sm">
                      <span className="text-xs text-primary-foreground font-mono font-semibold">H</span>
                    </div>
                    <div className="absolute left-20 top-1/2 -translate-y-1/2 w-7 h-7 bg-red-500 rounded-lg flex items-center justify-center shadow-sm">
                      <span className="text-xs text-white font-mono font-semibold">X</span>
                    </div>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-muted-foreground" />
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-2 w-16">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-xs font-mono text-muted-foreground">|0⟩</span>
                  </div>
                  <div className="flex-1 h-px bg-border relative">
                    <div className="absolute left-20 top-1/2 -translate-y-1/2 w-7 h-7 bg-green-500 rounded-lg flex items-center justify-center shadow-sm">
                      <span className="text-xs text-white font-mono font-semibold">X</span>
                    </div>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-muted-foreground" />
                </div>

                {/* Enhanced connection lines for entanglement */}
                <div className="relative">
                  <svg className="w-full h-6" viewBox="0 0 200 24">
                    <line x1="108" y1="2" x2="108" y2="22" stroke="hsl(var(--primary))" strokeWidth="2" strokeDasharray="3,2" className="animate-pulse" />
                    <circle cx="108" cy="2" r="1.5" fill="hsl(var(--primary))" />
                    <circle cx="108" cy="22" r="1.5" fill="hsl(var(--primary))" />
                  </svg>
                </div>
              </div>
              
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>Gates: H, CNOT, X</span>
                <span>Depth: 2</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Next Execution Section */}
      <section className="px-4 pb-8">
        <Card className="border-0 shadow-sm" data-testid="next-shake-card">
          <CardContent className="p-4">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                    <div className="w-3 h-3 bg-primary rounded-sm" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">Next Execution</h3>
                    <p className="text-xs text-muted-foreground mt-0.5">Choose quantum computer</p>
                  </div>
                </div>
                <Badge variant="outline" className="text-xs px-2 py-0.5 rounded-full">
                  Ready
                </Badge>
              </div>
              
              <div className="space-y-2">
                <p className="text-xs font-medium text-muted-foreground">Quantum Computer</p>
                <Select value={selectedQuantumComputer} onValueChange={setSelectedQuantumComputer}>
                  <SelectTrigger className="h-9 border-0 bg-muted/50 rounded-lg" data-testid="select-quantum-computer" aria-label="Select quantum computer for next execution">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {quantumComputers.map((computer) => (
                      <SelectItem key={computer.id} value={computer.id}>
                        {computer.name} ({computer.qubits} qubits)
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="pt-2">
                <Button size="sm" className="w-full h-9 rounded-lg font-medium" data-testid="button-execute-circuit">
                  Execute Circuit
                  <ChevronRight className="h-3 w-3 ml-1" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}