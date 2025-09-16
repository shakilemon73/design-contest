import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ConnectedQubits } from "@/components/connected-qubits"
import { ArrowLeft, Wifi, Info } from "lucide-react"
import { Link } from "wouter"

export default function Connected() {
  const [qubits, setQubits] = useState([
    //todo: remove mock functionality - replace with real connected qubits data
    {
      id: "qubit-v1",
      name: "Qubit v1",
      batteryLevel: 90,
      signalStrength: 85,
      isConnected: false,
      distance: "2.5m",
      entangled: false
    },
    {
      id: "qubit-v2",
      name: "Qubit v2", 
      batteryLevel: 20,
      signalStrength: 65,
      isConnected: true,
      distance: "1.8m",
      entangled: true
    },
    {
      id: "qubit-v3",
      name: "Qubit v3",
      batteryLevel: 75,
      signalStrength: 92,
      isConnected: false,
      distance: "0.9m",
      entangled: false
    }
  ])

  const handleConnect = (qubitId: string) => {
    setQubits(prev => prev.map(q => 
      q.id === qubitId ? { ...q, isConnected: true } : q
    ))
    console.log(`Connected to ${qubitId}`)
  }

  const handleDisconnect = (qubitId: string) => {
    setQubits(prev => prev.map(q => 
      q.id === qubitId ? { ...q, isConnected: false } : q
    ))
    console.log(`Disconnected from ${qubitId}`)
  }

  const handleRefresh = () => {
    console.log('Refreshing quantum systems scan')
    // Simulate finding new qubits
    setTimeout(() => {
      console.log('Scan complete')
    }, 2000)
  }

  const connectedCount = qubits.filter(q => q.isConnected).length

  return (
    <div className="p-6 space-y-6" data-testid="page-connected">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link href="/">
          <Button size="icon" variant="ghost" data-testid="button-back">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div>
          <h1 className="text-2xl font-semibold">Connected Qubits</h1>
          <p className="text-sm text-muted-foreground">
            Manage quantum system connections and entanglement
          </p>
        </div>
      </div>

      {/* Connection status */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="text-center p-4 bg-card border border-card-border rounded-md">
          <div className="text-2xl font-semibold text-primary">{connectedCount}</div>
          <div className="text-sm text-muted-foreground">Connected</div>
        </div>
        <div className="text-center p-4 bg-card border border-card-border rounded-md">
          <div className="text-2xl font-semibold">{qubits.length}</div>
          <div className="text-sm text-muted-foreground">Discovered</div>
        </div>
        <div className="text-center p-4 bg-card border border-card-border rounded-md">
          <div className="text-2xl font-semibold">{qubits.filter(q => q.entangled).length}</div>
          <div className="text-sm text-muted-foreground">Entangled</div>
        </div>
      </div>

      {/* Connection help */}
      <div className="flex items-start gap-3 p-4 bg-muted rounded-md">
        <Info className="h-5 w-5 text-muted-foreground mt-0.5" />
        <div className="space-y-1">
          <p className="text-sm font-medium">Quantum Network Discovery</p>
          <p className="text-xs text-muted-foreground">
            Qubits might be grouped together if they are already entangled. 
            Use the scan function to discover new quantum systems in your area.
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-2xl">
        <ConnectedQubits
          qubits={qubits}
          onConnect={handleConnect}
          onDisconnect={handleDisconnect}
          onRefresh={handleRefresh}
        />
      </div>
    </div>
  )
}