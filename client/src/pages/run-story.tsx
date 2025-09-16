import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, Play, Book, Lightbulb, ArrowRight } from "lucide-react"
import { Link } from "wouter"

export default function RunStory() {
  const storyData = {
    title: "Bell State Entanglement Story",
    executionId: "exec-20241216-001",
    quantumComputer: "IBM Hanoi",
    timestamp: "2024-12-16 17:42:15",
    duration: "2.34s",
    steps: [
      {
        id: 1,
        title: "Circuit Initialization",
        description: "Two qubits initialized in the ground state |00⟩",
        gateApplied: "Initialize",
        stateBefore: "|00⟩",
        stateAfter: "|00⟩",
        probability: 100,
        insight: "Starting with a clean slate ensures reproducible results"
      },
      {
        id: 2, 
        title: "Superposition Creation",
        description: "Hadamard gate applied to first qubit creating superposition",
        gateApplied: "H",
        stateBefore: "|00⟩",
        stateAfter: "(|00⟩ + |10⟩)/√2",
        probability: 50,
        insight: "Hadamard gates are the foundation of quantum parallelism"
      },
      {
        id: 3,
        title: "Entanglement Formation", 
        description: "CNOT gate creates quantum entanglement between qubits",
        gateApplied: "CNOT",
        stateBefore: "(|00⟩ + |10⟩)/√2",
        stateAfter: "(|00⟩ + |11⟩)/√2", 
        probability: 50,
        insight: "Entanglement creates spooky action at a distance"
      },
      {
        id: 4,
        title: "Measurement",
        description: "Both qubits measured simultaneously",
        gateApplied: "Measure",
        stateBefore: "(|00⟩ + |11⟩)/√2",
        stateAfter: "|00⟩ or |11⟩",
        probability: 50,
        insight: "Measurement collapses the superposition to classical outcomes"
      }
    ]
  }

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6" data-testid="page-run-story">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link href="/">
          <Button size="icon" variant="ghost" data-testid="button-back" aria-label="Go back to dashboard">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div className="flex-1">
          <h1 className="text-2xl font-semibold">{storyData.title}</h1>
          <p className="text-sm text-muted-foreground">
            Step-by-step explanation of your quantum circuit execution
          </p>
        </div>
        <Badge variant="outline">
          <Book className="h-3 w-3 mr-1" />
          Interactive Story
        </Badge>
      </div>

      {/* Execution Info */}
      <Card>
        <CardContent className="p-4">
          <div className="flex justify-between items-center text-sm">
            <div>
              <span className="text-muted-foreground">Execution:</span>
              <span className="ml-2 font-mono">{storyData.executionId}</span>
            </div>
            <div>
              <span className="text-muted-foreground">Computer:</span>
              <span className="ml-2">{storyData.quantumComputer}</span>
            </div>
            <div>
              <span className="text-muted-foreground">Duration:</span>
              <span className="ml-2">{storyData.duration}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Story Steps */}
      <div className="space-y-4">
        {storyData.steps.map((step, index) => (
          <Card key={step.id} className="relative overflow-hidden">
            {/* Step connector line */}
            {index < storyData.steps.length - 1 && (
              <div className="absolute left-8 top-16 w-0.5 h-8 bg-border" />
            )}
            
            <CardHeader className="pb-3">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-medium flex-shrink-0">
                  {step.id}
                </div>
                <div className="flex-1">
                  <CardTitle className="text-base flex items-center gap-2">
                    {step.title}
                    <Badge variant="secondary" className="text-xs">
                      {step.gateApplied}
                    </Badge>
                  </CardTitle>
                  <p className="text-sm text-muted-foreground mt-1">
                    {step.description}
                  </p>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              {/* Quantum State Transition */}
              <div className="bg-muted/50 rounded-lg p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="text-center">
                    <div className="text-xs text-muted-foreground mb-1">Before</div>
                    <div className="font-mono text-sm bg-background px-2 py-1 rounded">
                      {step.stateBefore}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <ArrowRight className="h-4 w-4" />
                    <Badge variant="outline" className="font-mono">
                      {step.gateApplied}
                    </Badge>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                  
                  <div className="text-center">
                    <div className="text-xs text-muted-foreground mb-1">After</div>
                    <div className="font-mono text-sm bg-background px-2 py-1 rounded">
                      {step.stateAfter}
                    </div>
                  </div>
                </div>

                {/* Probability Bar */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-muted-foreground">Measurement Probability</span>
                    <span className="font-medium">{step.probability}%</span>
                  </div>
                  <Progress value={step.probability} className="h-1" />
                </div>
              </div>

              {/* Insight */}
              <div className="flex items-start gap-3 p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                <Lightbulb className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-blue-800 dark:text-blue-200">
                  <span className="font-medium">Insight: </span>
                  {step.insight}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Learning Actions */}
      <Card className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-950/20 dark:to-blue-950/20">
        <CardContent className="p-6 text-center space-y-4">
          <div className="space-y-2">
            <h3 className="font-semibold">Want to Learn More?</h3>
            <p className="text-sm text-muted-foreground">
              Explore our interactive quantum computing courses to master these concepts
            </p>
          </div>
          
          <div className="flex justify-center gap-3">
            <Link href="/learn">
              <Button variant="outline">
                <Book className="h-4 w-4 mr-2" />
                Take Courses
              </Button>
            </Link>
            <Link href="/execution-report">
              <Button>
                <Play className="h-4 w-4 mr-2" />
                View Full Report
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>

      {/* Navigation */}
      <div className="flex justify-between">
        <Link href="/history">
          <Button variant="outline">
            View All Executions
          </Button>
        </Link>
        <Link href="/">
          <Button>
            Build Another Circuit
          </Button>
        </Link>
      </div>
    </div>
  )
}