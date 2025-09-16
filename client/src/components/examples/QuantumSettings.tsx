import { QuantumSettings } from '../quantum-settings'

export default function QuantumSettingsExample() {
  //todo: remove mock functionality - replace with real settings data
  const mockSettings = {
    measurementRounding: "major-half-axes" as const,
    brightness: 27,
    screensaver: "singlet-precession" as const,
    autoCalibration: true,
    errorCorrection: false,
    gateFidelityThreshold: 0.995,
    coherenceTimeLimit: 85,
    connectedQubits: 2
  }

  const handleSettingsChange = (newSettings: any) => {
    console.log('Settings changed:', newSettings)
  }

  const handleSave = () => {
    console.log('Settings saved')
  }

  const handleReset = () => {
    console.log('Settings reset')
  }

  return (
    <div className="p-6 max-w-2xl">
      <QuantumSettings
        settings={mockSettings}
        onSettingsChange={handleSettingsChange}
        onSave={handleSave}
        onReset={handleReset}
      />
    </div>
  )
}