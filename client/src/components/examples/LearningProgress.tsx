import { LearningProgress } from '../learning-progress'

export default function LearningProgressExample() {
  //todo: remove mock functionality - replace with real learning data
  const mockModules = [
    {
      id: "quantum-basics",
      title: "Discover the laws of quantum",
      description: "Learn fundamental quantum mechanics principles and their applications in computing.",
      difficulty: "Beginner" as const,
      progress: 26,
      isLocked: false,
      isCompleted: false,
      estimatedTime: "2 hours",
      skills: ["Quantum States", "Superposition", "Measurement"]
    },
    {
      id: "quantum-algorithms",
      title: "Learn the first Quantum Algorithms",
      description: "Explore key quantum algorithms including Grover's and Shor's algorithms.",
      difficulty: "Intermediate" as const,
      progress: 0,
      isLocked: true,
      isCompleted: false,
      estimatedTime: "4 hours",
      skills: ["Grover's Algorithm", "Quantum Fourier Transform", "Phase Estimation"]
    },
    {
      id: "bit-commitment",
      title: "Bit commitment",
      description: "Advanced protocols for quantum cryptography and secure communication.",
      difficulty: "Advanced" as const,
      progress: 0,
      isLocked: true,
      isCompleted: false,
      estimatedTime: "3 hours",
      skills: ["Quantum Cryptography", "Commitment Schemes", "Security Proofs"]
    }
  ]

  const handleStartModule = (moduleId: string) => {
    console.log(`Starting module: ${moduleId}`)
  }

  return (
    <div className="p-6 max-w-lg">
      <LearningProgress
        modules={mockModules}
        totalProgress={26}
        unlockedSkills={3}
        onStartModule={handleStartModule}
      />
    </div>
  )
}