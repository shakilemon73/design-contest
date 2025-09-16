import { ConnectedQubits } from '../connected-qubits'

export default function ConnectedQubitsExample() {
  //todo: remove mock functionality - replace with real connected qubits data
  const mockQubits = [
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
  ]

  const handleConnect = (qubitId: string) => {
    console.log(`Connecting to ${qubitId}`)
  }

  const handleDisconnect = (qubitId: string) => {
    console.log(`Disconnecting from ${qubitId}`)
  }

  const handleRefresh = () => {
    console.log('Refreshing quantum systems scan')
  }

  return (
    <div className="p-6 max-w-md">
      <ConnectedQubits
        qubits={mockQubits}
        onConnect={handleConnect}
        onDisconnect={handleDisconnect}
        onRefresh={handleRefresh}
      />
    </div>
  )
}