import { QuantumCircuit } from '../quantum-circuit'

export default function QuantumCircuitExample() {
  //todo: remove mock functionality - replace with real quantum circuit data
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

  const handleToggleExecution = () => {
    console.log('Circuit execution toggled')
  }

  const handleReset = () => {
    console.log('Circuit reset')
  }

  return (
    <div className="p-6">
      <QuantumCircuit
        qubits={mockQubits}
        gates={mockGates}
        isRunning={false}
        onToggleExecution={handleToggleExecution}
        onReset={handleReset}
      />
    </div>
  )
}