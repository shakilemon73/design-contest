import { QubitStatusCard } from '../qubit-status-card'

export default function QubitStatusCardExample() {
  //todo: remove mock functionality - replace with real qubit data
  const handleToggle = () => {
    console.log('Qubit toggled')
  }

  const handleConfigure = () => {
    console.log('Qubit configuration opened')
  }

  return (
    <div className="p-6 max-w-sm">
      <QubitStatusCard
        id="qubit-001"
        name="Qubit v1"
        state="superposition"
        coherenceTime={85}
        fidelity={0.997}
        temperature={15}
        isActive={true}
        onToggle={handleToggle}
        onConfigure={handleConfigure}
      />
    </div>
  )
}