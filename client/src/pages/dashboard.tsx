import { useState } from "react"
import { Link } from "wouter"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus, Settings, Palette, Info, ChevronRight, ChevronDown, History, CheckCircle, Zap, ArrowRight, Link2 } from "lucide-react"
import { cn } from "@/lib/utils"
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

      {/* Your Qubits Section - Mobile Optimized */}
      <section className="px-4 pb-6 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold tracking-tight text-foreground">Your Qubits</h2>
            <p className="text-sm text-muted-foreground mt-1">Manage your quantum bits</p>
          </div>
          <Button size="sm" variant="ghost" className="h-11 px-4 text-sm rounded-full bg-primary/10 hover:bg-primary/20" data-testid="button-expand-options">
            <Plus className="h-4 w-4 mr-2" />
            Add Qubit
          </Button>
        </div>
        
        <div className="grid gap-4">
          {mockQubits.map((qubit, index) => (
            <Card key={qubit.id} className="border-0 shadow-sm hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-background to-muted/30" data-testid={`qubit-card-${index}`}>
              <CardContent className="p-5">
                {/* Qubit Header */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-2 border-blue-500/30 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                    </div>
                    <div>
                      <div className="text-lg font-bold text-foreground">{qubit.name}</div>
                      <div className="text-sm text-muted-foreground">ID: {qubit.id}</div>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="w-2 h-2 rounded-full bg-green-500" />
                        <span className="text-xs text-green-600 font-medium">Active</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <Button size="icon" variant="ghost" className="h-12 w-12 rounded-2xl hover:bg-muted/80 transition-colors" data-testid={`button-info-${index}`} aria-label={`View details for ${qubit.name}`}>
                      <Info className="h-5 w-5" />
                    </Button>
                  </div>
                </div>

                {/* Quantum Gates Grid */}
                <div className="mb-5">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-base font-semibold text-foreground">Available Gates</h4>
                    <Badge variant="secondary" className="text-xs px-2 py-1 rounded-full">
                      {qubit.gates.length} gates
                    </Badge>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {qubit.gates.map((gate, gateIndex) => {
                      const gateColors: Record<string, string> = {
                        'X': 'bg-red-500 hover:bg-red-600 border-red-500/30',
                        'Y': 'bg-green-500 hover:bg-green-600 border-green-500/30', 
                        'Z': 'bg-blue-500 hover:bg-blue-600 border-blue-500/30',
                        'T': 'bg-purple-500 hover:bg-purple-600 border-purple-500/30',
                        'H': 'bg-orange-500 hover:bg-orange-600 border-orange-500/30'
                      }
                      return (
                        <Button
                          key={gateIndex}
                          variant="outline"
                          size="sm"
                          className={cn(
                            "h-14 text-white font-mono font-bold border-2 rounded-xl transition-all duration-200 touch-manipulation shadow-sm hover:shadow-md hover:scale-105 active:scale-95",
                            gateColors[gate] || 'bg-gray-500 hover:bg-gray-600 border-gray-500/30'
                          )}
                          onClick={() => handleGateClick(qubit.id, gate)}
                          data-testid={`gate-${gate.toLowerCase()}-${index}-${gateIndex}`}
                          aria-label={`Apply ${gate} gate to ${qubit.name}. ${gateDescriptions[gate]}`}
                          title={gateDescriptions[gate]}
                        >
                          <div className="flex flex-col items-center gap-1">
                            <span className="text-base">{gate}</span>
                            <span className="text-xs opacity-80">{gateDescriptions[gate]?.split(':')[0] || 'Gate'}</span>
                          </div>
                        </Button>
                      )
                    })}
                  </div>
                </div>

                {/* Operations Panel */}
                <div className="bg-muted/30 rounded-2xl p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-base font-semibold text-foreground">Measurement</h4>
                    <Badge variant="outline" className="text-xs px-2 py-1 rounded-full">
                      {qubit.measureType}
                    </Badge>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <Select value={qubit.measureType} onValueChange={(value) => handleMeasure(qubit.id, value)}>
                      <SelectTrigger className="col-span-2 h-12 text-sm border-0 bg-background/80 rounded-xl" data-testid={`select-measure-${index}`} aria-label={`Select measurement operation for ${qubit.name}`}>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="CNOT">CNOT Gate</SelectItem>
                        <SelectItem value="Measure">Measure State</SelectItem>
                        <SelectItem value="Reset">Reset Qubit</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button size="sm" variant="outline" className="h-12 border-0 bg-background/80 rounded-xl hover:bg-muted/80" data-testid={`button-dropdown-${index}`}>
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

      {/* Pending Circuit Section - Mobile Optimized */}
      <section className="px-4 pb-6 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold tracking-tight text-foreground">Pending Circuit</h2>
            <p className="text-sm text-muted-foreground mt-1">Ready for quantum execution</p>
          </div>
          <Button asChild size="sm" variant="ghost" className="h-11 px-4 text-sm rounded-full" data-testid="button-history">
            <Link href="/history">
              <History className="h-4 w-4 mr-2" />
              History
            </Link>
          </Button>
        </div>
        
        {/* Revolutionary Mobile Circuit Design */}
        <Card className="border-0 shadow-lg bg-gradient-to-br from-background to-purple-50/30 dark:to-purple-950/20" data-testid="circuit-visualization">
          <CardContent className="p-6">
            {/* Circuit Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 border-2 border-purple-500/30 flex items-center justify-center">
                  <Zap className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-foreground">Quantum Circuit</h3>
                  <p className="text-sm text-muted-foreground">Bell State Preparation</p>
                </div>
              </div>
              <Badge variant="outline" className="text-sm px-3 py-1 rounded-full border-purple-500/30 text-purple-600">
                2 Qubits
              </Badge>
            </div>
            
            {/* Mobile-First Qubit Operations */}
            <div className="space-y-5">
              {/* Qubit 0 Operations */}
              <Card className="border-0 bg-gradient-to-r from-blue-500/5 to-blue-500/10">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
                        <span className="text-sm font-bold font-mono text-blue-700">q0</span>
                      </div>
                      <div>
                        <div className="text-sm font-semibold">Qubit 0</div>
                        <div className="text-xs text-muted-foreground">Initial State |0⟩</div>
                      </div>
                    </div>
                    <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse" />
                  </div>
                  
                  <div className="flex items-center gap-3 overflow-x-auto pb-2">
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <div className="w-6 h-6 rounded-lg bg-muted/50 flex items-center justify-center">
                        <span className="text-xs font-mono">|0⟩</span>
                      </div>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                    <Button size="sm" className="h-10 px-4 bg-purple-500 hover:bg-purple-600 text-white rounded-xl flex-shrink-0">
                      <span className="font-mono font-bold">H</span>
                    </Button>
                    <ArrowRight className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                    <Button size="sm" className="h-10 px-4 bg-red-500 hover:bg-red-600 text-white rounded-xl flex-shrink-0">
                      <span className="font-mono font-bold">X</span>
                    </Button>
                    <ArrowRight className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <div className="w-6 h-6 rounded-lg bg-primary/20 flex items-center justify-center">
                        <span className="text-xs font-mono">?</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Qubit 1 Operations */}
              <Card className="border-0 bg-gradient-to-r from-green-500/5 to-green-500/10">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-xl bg-green-500/20 border border-green-500/30 flex items-center justify-center">
                        <span className="text-sm font-bold font-mono text-green-700">q1</span>
                      </div>
                      <div>
                        <div className="text-sm font-semibold">Qubit 1</div>
                        <div className="text-xs text-muted-foreground">Initial State |0⟩</div>
                      </div>
                    </div>
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                  </div>
                  
                  <div className="flex items-center gap-3 overflow-x-auto pb-2">
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <div className="w-6 h-6 rounded-lg bg-muted/50 flex items-center justify-center">
                        <span className="text-xs font-mono">|0⟩</span>
                      </div>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                    <div className="h-10 px-4 flex items-center text-muted-foreground flex-shrink-0">
                      <span className="font-mono text-sm">Identity</span>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                    <Button size="sm" className="h-10 px-4 bg-green-500 hover:bg-green-600 text-white rounded-xl flex-shrink-0">
                      <span className="font-mono font-bold">X</span>
                    </Button>
                    <ArrowRight className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <div className="w-6 h-6 rounded-lg bg-primary/20 flex items-center justify-center">
                        <span className="text-xs font-mono">?</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Entanglement Indicator */}
              <div className="relative">
                <Card className="border-0 bg-gradient-to-r from-orange-500/5 to-pink-500/5">
                  <CardContent className="p-4 text-center">
                    <div className="flex items-center justify-center gap-3">
                      <Link2 className="h-5 w-5 text-orange-500" />
                      <span className="text-sm font-semibold text-foreground">Qubits Entangled</span>
                      <Link2 className="h-5 w-5 text-pink-500" />
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">Bell State: |00⟩ + |11⟩</p>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            {/* Circuit Summary */}
            <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t">
              <div className="text-center">
                <div className="text-lg font-bold text-purple-600">3</div>
                <div className="text-xs text-muted-foreground">Gates</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-blue-600">2</div>
                <div className="text-xs text-muted-foreground">Depth</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-green-600">1</div>
                <div className="text-xs text-muted-foreground">Entanglement</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Next Execution Section - Mobile Optimized */}
      <section className="px-4 pb-8">
        <Card className="border-0 shadow-lg bg-gradient-to-br from-background to-green-50/30 dark:to-green-950/20" data-testid="next-shake-card">
          <CardContent className="p-6">
            {/* Execution Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center border-2 border-green-500/30">
                  <div className="w-4 h-4 bg-green-500 rounded-lg animate-pulse" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">Execute Circuit</h3>
                  <p className="text-sm text-muted-foreground">Run on quantum hardware</p>
                </div>
              </div>
              <Badge variant="outline" className="text-sm px-3 py-1 rounded-full border-green-500/30 text-green-600 bg-green-500/5">
                ⚡ Ready
              </Badge>
            </div>
            
            {/* Hardware Selection */}
            <div className="space-y-5">
              <div>
                <h4 className="text-base font-semibold text-foreground mb-3">Quantum Computer</h4>
                <Select value={selectedQuantumComputer} onValueChange={setSelectedQuantumComputer}>
                  <SelectTrigger className="h-14 text-base border-0 bg-muted/50 rounded-2xl shadow-sm" data-testid="select-quantum-computer" aria-label="Select quantum computer for next execution">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                        <span className="text-sm font-mono font-bold">IBM</span>
                      </div>
                      <SelectValue />
                    </div>
                  </SelectTrigger>
                  <SelectContent>
                    {quantumComputers.map((computer) => (
                      <SelectItem key={computer.id} value={computer.id} className="h-12">
                        <div className="flex items-center gap-3 py-1">
                          <div className="w-6 h-6 rounded bg-primary/20 flex items-center justify-center">
                            <span className="text-xs font-mono">IBM</span>
                          </div>
                          <div>
                            <div className="font-medium">{computer.name}</div>
                            <div className="text-xs text-muted-foreground">{computer.qubits} qubits available</div>
                          </div>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              {/* Execution Stats */}
              <div className="grid grid-cols-3 gap-4">
                <Card className="border-0 bg-blue-500/5">
                  <CardContent className="p-3 text-center">
                    <div className="text-lg font-bold text-blue-600">~2ms</div>
                    <div className="text-xs text-muted-foreground">Exec Time</div>
                  </CardContent>
                </Card>
                <Card className="border-0 bg-purple-500/5">
                  <CardContent className="p-3 text-center">
                    <div className="text-lg font-bold text-purple-600">1000</div>
                    <div className="text-xs text-muted-foreground">Shots</div>
                  </CardContent>
                </Card>
                <Card className="border-0 bg-orange-500/5">
                  <CardContent className="p-3 text-center">
                    <div className="text-lg font-bold text-orange-600">2</div>
                    <div className="text-xs text-muted-foreground">Qubits</div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Execute Button */}
              <div className="pt-4">
                <Button size="lg" className="w-full h-14 text-base font-bold rounded-2xl bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white shadow-lg hover:shadow-xl transition-all duration-200 touch-manipulation" data-testid="button-execute-circuit">
                  <div className="flex items-center gap-3">
                    <Zap className="h-5 w-5" />
                    <span>Execute Quantum Circuit</span>
                    <ArrowRight className="h-5 w-5" />
                  </div>
                </Button>
                <p className="text-xs text-muted-foreground text-center mt-3">
                  Circuit will be executed on real quantum hardware
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}