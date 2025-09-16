import { LearningProgress } from "@/components/learning-progress"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BookOpen, Award, Target, TrendingUp } from "lucide-react"

export default function Learn() {
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
    },
    {
      id: "quantum-error-correction",
      title: "Quantum Error Correction",
      description: "Learn how to protect quantum information from decoherence and noise.",
      difficulty: "Advanced" as const,
      progress: 0,
      isLocked: true,
      isCompleted: false,
      estimatedTime: "5 hours",
      skills: ["Error Syndromes", "Stabilizer Codes", "Fault Tolerance"]
    }
  ]

  const handleStartModule = (moduleId: string) => {
    console.log(`Starting module: ${moduleId}`)
  }

  const totalProgress = 26
  const unlockedSkills = 3
  const completedModules = mockModules.filter(m => m.isCompleted).length

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6" data-testid="page-learn">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold">Learn Quantum Computing</h1>
        <p className="text-sm text-muted-foreground">
          Master quantum computing through interactive courses and hands-on practice
        </p>
      </div>

      {/* Progress overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card data-testid="card-overall-progress">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-semibold text-primary">{totalProgress}%</div>
            <div className="text-sm text-muted-foreground">Overall Progress</div>
          </CardContent>
        </Card>
        
        <Card data-testid="card-skills-unlocked">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-semibold">{unlockedSkills}</div>
            <div className="text-sm text-muted-foreground">Skills Unlocked</div>
          </CardContent>
        </Card>
        
        <Card data-testid="card-modules-completed">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-semibold">{completedModules}</div>
            <div className="text-sm text-muted-foreground">Modules Completed</div>
          </CardContent>
        </Card>
        
        <Card data-testid="card-learning-streak">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-semibold">7</div>
            <div className="text-sm text-muted-foreground">Day Streak</div>
          </CardContent>
        </Card>
      </div>

      {/* Quick actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Button 
          variant="outline" 
          className="h-auto p-4 justify-start"
          data-testid="button-continue-learning"
        >
          <BookOpen className="h-5 w-5 mr-3" />
          <div className="text-left">
            <div className="font-medium">Continue Learning</div>
            <div className="text-xs text-muted-foreground">
              Pick up where you left off
            </div>
          </div>
        </Button>
        
        <Button 
          variant="outline" 
          className="h-auto p-4 justify-start"
          data-testid="button-practice-problems"
        >
          <Target className="h-5 w-5 mr-3" />
          <div className="text-left">
            <div className="font-medium">Practice Problems</div>
            <div className="text-xs text-muted-foreground">
              Test your understanding
            </div>
          </div>
        </Button>
        
        <Button 
          variant="outline" 
          className="h-auto p-4 justify-start"
          data-testid="button-achievements"
        >
          <Award className="h-5 w-5 mr-3" />
          <div className="text-left">
            <div className="font-medium">Achievements</div>
            <div className="text-xs text-muted-foreground">
              View your progress badges
            </div>
          </div>
        </Button>
      </div>

      {/* Main learning content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <LearningProgress
            modules={mockModules}
            totalProgress={totalProgress}
            unlockedSkills={unlockedSkills}
            onStartModule={handleStartModule}
          />
        </div>

        {/* Learning sidebar */}
        <div className="space-y-6">
          {/* Current focus */}
          <Card data-testid="current-focus">
            <CardHeader className="pb-3">
              <CardTitle className="text-base flex items-center gap-2">
                <TrendingUp className="h-4 w-4" />
                Current Focus
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="p-3 bg-muted rounded-md">
                <h4 className="text-sm font-medium">Quantum Superposition</h4>
                <p className="text-xs text-muted-foreground mt-1">
                  Understanding how qubits exist in multiple states simultaneously
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <Badge variant="outline" className="text-xs">Beginner</Badge>
                  <span className="text-xs text-muted-foreground">75% complete</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recommended next */}
          <Card data-testid="recommended-next">
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Recommended Next</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <h4 className="text-sm font-medium">Quantum Entanglement</h4>
                <p className="text-xs text-muted-foreground">
                  Learn about quantum correlations and spooky action at a distance
                </p>
                <Button size="sm" className="w-full" data-testid="button-start-entanglement">
                  Start Learning
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Community */}
          <Card data-testid="community-card">
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Community</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="text-sm space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Active Learners:</span>
                  <span>1,247</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">This Week:</span>
                  <span>+89</span>
                </div>
              </div>
              <Button size="sm" variant="outline" className="w-full" data-testid="button-join-discussion">
                Join Discussion
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}