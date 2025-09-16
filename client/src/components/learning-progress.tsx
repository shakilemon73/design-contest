import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Lock, Play, CheckCircle, Clock, BookOpen, Award } from "lucide-react"

interface LearningModule {
  id: string
  title: string
  description: string
  difficulty: "Beginner" | "Intermediate" | "Advanced"
  progress: number
  isLocked: boolean
  isCompleted: boolean
  estimatedTime: string
  skills: string[]
}

interface LearningProgressProps {
  modules: LearningModule[]
  totalProgress: number
  unlockedSkills: number
  onStartModule?: (moduleId: string) => void
  className?: string
}

const difficultyColors = {
  Beginner: "bg-green-500/10 text-green-700 border-green-500/20",
  Intermediate: "bg-yellow-500/10 text-yellow-700 border-yellow-500/20", 
  Advanced: "bg-red-500/10 text-red-700 border-red-500/20"
}

export function LearningProgress({
  modules,
  totalProgress,
  unlockedSkills,
  onStartModule,
  className
}: LearningProgressProps) {
  const [expandedModule, setExpandedModule] = useState<string | null>(null)

  const completedModules = modules.filter(m => m.isCompleted).length

  return (
    <Card className={className} data-testid="learning-progress">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">Learn Quantum</CardTitle>
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="text-xs">
              <Award className="h-3 w-3 mr-1" />
              {unlockedSkills} skills
            </Badge>
          </div>
        </div>
        
        {/* Overall progress */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Overall Progress</span>
            <span className="font-medium">{totalProgress}%</span>
          </div>
          <Progress value={totalProgress} className="h-2" />
          <p className="text-xs text-muted-foreground">
            {completedModules} of {modules.length} modules completed
          </p>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {modules.map((module) => (
          <div
            key={module.id}
            className="border border-border rounded-md hover-elevate transition-all"
            data-testid={`module-${module.id}`}
          >
            <div className="p-4">
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-medium text-sm">{module.title}</h3>
                    <Badge 
                      variant="outline" 
                      className={`text-xs ${difficultyColors[module.difficulty]}`}
                    >
                      {module.difficulty}
                    </Badge>
                    {module.isCompleted && (
                      <CheckCircle className="h-4 w-4 text-green-500" />
                    )}
                    {module.isLocked && (
                      <Lock className="h-4 w-4 text-muted-foreground" />
                    )}
                  </div>
                  
                  <p className="text-xs text-muted-foreground mb-3">
                    {module.description}
                  </p>

                  {/* Progress bar for active modules */}
                  {!module.isLocked && !module.isCompleted && module.progress > 0 && (
                    <div className="space-y-1 mb-3">
                      <div className="flex justify-between text-xs">
                        <span className="text-muted-foreground">Progress</span>
                        <span>{module.progress}%</span>
                      </div>
                      <Progress value={module.progress} className="h-1" />
                    </div>
                  )}

                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>{module.estimatedTime}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <BookOpen className="h-3 w-3" />
                      <span>{module.skills.length} skills</span>
                    </div>
                  </div>
                </div>

                {/* Action button */}
                <div className="flex flex-col gap-2">
                  {module.isLocked ? (
                    <Button 
                      size="sm" 
                      variant="ghost" 
                      disabled
                      className="h-8 text-xs"
                    >
                      <Lock className="h-3 w-3 mr-1" />
                      Locked
                    </Button>
                  ) : module.isCompleted ? (
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => onStartModule?.(module.id)}
                      data-testid={`button-review-${module.id}`}
                      className="h-8 text-xs"
                    >
                      Review
                    </Button>
                  ) : (
                    <Button 
                      size="sm"
                      onClick={() => onStartModule?.(module.id)}
                      data-testid={`button-start-${module.id}`}
                      className="h-8 text-xs"
                    >
                      <Play className="h-3 w-3 mr-1" />
                      {module.progress > 0 ? "Continue" : "Start"}
                    </Button>
                  )}

                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => setExpandedModule(
                      expandedModule === module.id ? null : module.id
                    )}
                    data-testid={`button-expand-${module.id}`}
                    className="h-8 text-xs"
                  >
                    {expandedModule === module.id ? "Less" : "More"}
                  </Button>
                </div>
              </div>

              {/* Expanded details */}
              {expandedModule === module.id && (
                <div className="mt-4 pt-4 border-t border-border space-y-3">
                  <div>
                    <h4 className="text-xs font-medium mb-2">Skills you'll learn:</h4>
                    <div className="flex flex-wrap gap-1">
                      {module.skills.map((skill, index) => (
                        <Badge 
                          key={index}
                          variant="secondary" 
                          className="text-xs"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}