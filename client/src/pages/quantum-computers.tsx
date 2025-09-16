import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, Cpu, Zap, Wifi, Info } from "lucide-react"
import { Link } from "wouter"

export default function QuantumComputers() {
  const [selectedComputer, setSelectedComputer] = useState("ibm-hanoi")

  const quantumComputers = [
    {
      id: "ibm-hanoi",
      name: "IBM Hanoi",
      provider: "IBM Quantum",
      qubits: 32,
      availability: 85,
      queue: 12,
      fidelity: 94.7,
      coherenceTime: 150,
      status: "online",
      location: "Yorktown Heights, NY",
      description: "High-fidelity superconducting quantum processor with advanced error correction"
    },
    {
      id: "ibm-lagos",
      name: "IBM Lagos", 
      provider: "IBM Quantum",
      qubits: 27,
      availability: 92,
      queue: 8,
      fidelity: 91.3,
      coherenceTime: 120,
      status: "online",
      location: "Yorktown Heights, NY", 
      description: "Reliable quantum processor optimized for intermediate-scale algorithms"
    },
    {
      id: "ibm-nairobi",
      name: "IBM Nairobi",
      provider: "IBM Quantum",
      qubits: 27,
      availability: 45,
      queue: 24,
      fidelity: 88.9,
      coherenceTime: 110,
      status: "maintenance",
      location: "Yorktown Heights, NY",
      description: "Currently undergoing calibration maintenance"
    },
    {
      id: "google-sycamore",
      name: "Google Sycamore",
      provider: "Google Quantum",
      qubits: 70,
      availability: 15,
      queue: 45,
      fidelity: 96.2,
      coherenceTime: 200,
      status: "busy",
      location: "Santa Barbara, CA",
      description: "State-of-the-art quantum processor for supremacy experiments"
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online':
        return 'text-green-600 bg-green-50'
      case 'busy':
        return 'text-amber-600 bg-amber-50'
      case 'maintenance':
        return 'text-red-600 bg-red-50'
      default:
        return 'text-gray-600 bg-gray-50'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'online':
        return <Wifi className="h-4 w-4 text-green-500" />
      case 'busy':
        return <Zap className="h-4 w-4 text-amber-500" />
      case 'maintenance':
        return <Info className="h-4 w-4 text-red-500" />
      default:
        return <Cpu className="h-4 w-4 text-gray-500" />
    }
  }

  const handleSelectComputer = (computerId: string) => {
    setSelectedComputer(computerId)
    console.log(`Selected quantum computer: ${computerId}`)
  }

  return (
    <div className="space-y-6" data-testid="page-quantum-computers">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link href="/">
          <Button size="icon" variant="ghost" data-testid="button-back" aria-label="Go back to dashboard">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div>
          <h1 className="text-2xl font-semibold">Quantum Computers</h1>
          <p className="text-sm text-muted-foreground">
            Select a quantum computer for your next circuit execution
          </p>
        </div>
      </div>

      {/* Current Selection */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Cpu className="h-5 w-5" />
            Current Selection
          </CardTitle>
        </CardHeader>
        <CardContent>
          {(() => {
            const current = quantumComputers.find(c => c.id === selectedComputer)
            if (!current) return null
            return (
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <h3 className="font-medium">{current.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {current.qubits} qubits • {current.provider}
                  </p>
                </div>
                <Badge variant="outline" className={getStatusColor(current.status)}>
                  {current.status}
                </Badge>
              </div>
            )
          })()}
        </CardContent>
      </Card>

      {/* Available Computers */}
      <div className="space-y-3">
        <h2 className="text-lg font-medium">Available Quantum Computers</h2>
        {quantumComputers.map((computer) => (
          <Card 
            key={computer.id}
            className={`cursor-pointer transition-all hover:shadow-md ${
              selectedComputer === computer.id ? 'ring-2 ring-primary' : ''
            }`}
            role="button"
            tabIndex={0}
            aria-pressed={selectedComputer === computer.id}
            aria-label={`Select ${computer.name} quantum computer with ${computer.qubits} qubits`}
            onClick={() => handleSelectComputer(computer.id)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                handleSelectComputer(computer.id)
              }
            }}
            data-testid={`computer-card-${computer.id}`}
          >
            <CardContent className="p-4">
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    {getStatusIcon(computer.status)}
                    <div className="flex-1">
                      <h3 className="font-medium">{computer.name}</h3>
                      <p className="text-sm text-muted-foreground">{computer.provider}</p>
                      <p className="text-xs text-muted-foreground mt-1">{computer.description}</p>
                    </div>
                  </div>
                  <Badge variant="outline" className={getStatusColor(computer.status)}>
                    {computer.status}
                  </Badge>
                </div>

                <div className="space-y-3 text-sm">
                  <div>
                    <span className="text-muted-foreground">Qubits:</span>
                    <span className="ml-2 font-medium">{computer.qubits}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Queue:</span>
                    <span className="ml-2 font-medium">{computer.queue} jobs</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Fidelity:</span>
                    <span className="ml-2 font-medium">{computer.fidelity}%</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Coherence:</span>
                    <span className="ml-2 font-medium">{computer.coherenceTime}μs</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Availability</span>
                    <span className="font-medium">{computer.availability}%</span>
                  </div>
                  <Progress value={computer.availability} className="h-2" />
                </div>

                <div className="text-xs text-muted-foreground">
                  📍 {computer.location}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex justify-center gap-3">
        <Link href="/">
          <Button variant="outline">
            Back to Dashboard
          </Button>
        </Link>
        <Button 
          disabled={!selectedComputer}
          onClick={() => console.log(`Execute on ${selectedComputer}`)}
        >
          Use Selected Computer
        </Button>
      </div>
    </div>
  )
}