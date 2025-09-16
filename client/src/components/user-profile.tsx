import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { 
  User, 
  Settings, 
  Trophy, 
  Clock,
  Palette,
  History,
  BookOpen,
  Code
} from "lucide-react"

interface UserProfileProps {
  user: {
    name: string
    email: string
    avatar?: string
    level: number
    totalExperience: number
    experienceToNext: number
    achievements: number
    coursesCompleted: number
    quantumJobsRun: number
    totalUptime: string
  }
  themes: Array<{
    id: string
    name: string
    preview: string
    isSelected: boolean
  }>
  onThemeSelect?: (themeId: string) => void
  onEditProfile?: () => void
  onViewHistory?: () => void
  onViewSettings?: () => void
  className?: string
}

export function UserProfile({
  user,
  themes,
  onThemeSelect,
  onEditProfile,
  onViewHistory,
  onViewSettings,
  className
}: UserProfileProps) {
  const [activeTab, setActiveTab] = useState<"overview" | "themes" | "achievements">("overview")
  
  const experiencePercentage = (user.totalExperience / (user.totalExperience + user.experienceToNext)) * 100

  return (
    <Card className={className} data-testid="user-profile">
      <CardHeader>
        <div className="flex items-center gap-4">
          <Avatar className="h-16 w-16" data-testid="user-avatar">
            <AvatarImage src={user.avatar} alt={user.name} />
            <AvatarFallback>
              {user.name.split(' ').map(n => n[0]).join('').toUpperCase()}
            </AvatarFallback>
          </Avatar>
          
          <div className="flex-1">
            <h2 className="text-xl font-semibold">{user.name}</h2>
            <p className="text-sm text-muted-foreground">{user.email}</p>
            
            <div className="flex items-center gap-2 mt-2">
              <Badge className="text-xs">
                Level {user.level}
              </Badge>
              <Badge variant="outline" className="text-xs">
                <Trophy className="h-3 w-3 mr-1" />
                {user.achievements} Achievements
              </Badge>
            </div>
          </div>

          <Button 
            size="sm"
            variant="outline"
            onClick={onEditProfile}
            data-testid="button-edit-profile"
          >
            <User className="h-4 w-4 mr-1" />
            Edit
          </Button>
        </div>

        {/* Experience progress */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Experience</span>
            <span className="font-medium">
              {user.totalExperience} / {user.totalExperience + user.experienceToNext} XP
            </span>
          </div>
          <Progress value={experiencePercentage} className="h-2" />
          <p className="text-xs text-muted-foreground">
            {user.experienceToNext} XP until level {user.level + 1}
          </p>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Tab navigation */}
        <div className="flex border-b border-border">
          {[
            { id: "overview", label: "Overview", icon: User },
            { id: "themes", label: "Themes", icon: Palette },
            { id: "achievements", label: "Achievements", icon: Trophy }
          ].map((tab) => (
            <Button
              key={tab.id}
              variant="ghost"
              size="sm"
              onClick={() => setActiveTab(tab.id as any)}
              data-testid={`tab-${tab.id}`}
              className={`border-b-2 rounded-none px-4 ${
                activeTab === tab.id 
                  ? "border-primary text-primary" 
                  : "border-transparent"
              }`}
            >
              <tab.icon className="h-3 w-3 mr-1" />
              {tab.label}
            </Button>
          ))}
        </div>

        {/* Tab content */}
        {activeTab === "overview" && (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-3 bg-muted rounded-md">
                <div className="text-lg font-semibold">{user.coursesCompleted}</div>
                <div className="text-xs text-muted-foreground">Courses Completed</div>
              </div>
              <div className="text-center p-3 bg-muted rounded-md">
                <div className="text-lg font-semibold">{user.quantumJobsRun}</div>
                <div className="text-xs text-muted-foreground">Quantum Jobs Run</div>
              </div>
            </div>

            <div className="space-y-3">
              <Button
                variant="outline"
                size="sm"
                onClick={onViewHistory}
                data-testid="button-execution-history"
                className="w-full justify-start h-10"
              >
                <History className="h-4 w-4 mr-2" />
                <div className="text-left">
                  <div className="font-medium">Execution history</div>
                  <div className="text-xs text-muted-foreground">
                    See all your quantum computer runs.
                  </div>
                </div>
              </Button>

              <Button
                variant="outline"
                size="sm"
                onClick={onViewSettings}
                data-testid="button-qubit-settings"
                className="w-full justify-start h-10"
              >
                <Settings className="h-4 w-4 mr-2" />
                <div className="text-left">
                  <div className="font-medium">Default Qubit settings</div>
                  <div className="text-xs text-muted-foreground">
                    Adjust everything.
                  </div>
                </div>
              </Button>

              <Button
                variant="outline"
                size="sm"
                data-testid="button-learn-more"
                className="w-full justify-start h-10"
              >
                <BookOpen className="h-4 w-4 mr-2" />
                <div className="text-left">
                  <div className="font-medium">Learn more quantum</div>
                  <div className="text-xs text-muted-foreground">
                    Learning resources, events, and communities.
                  </div>
                </div>
              </Button>
            </div>
          </div>
        )}

        {activeTab === "themes" && (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-sm font-medium">Your theme collection</h3>
              <span className="text-xs text-muted-foreground">
                {themes.filter(t => t.isSelected).length}/{themes.length}
              </span>
            </div>
            
            <div className="grid grid-cols-4 gap-3">
              {themes.map((theme) => (
                <div
                  key={theme.id}
                  className={`relative aspect-square rounded-md cursor-pointer border-2 transition-all hover-elevate ${
                    theme.isSelected 
                      ? "border-primary ring-2 ring-primary/20" 
                      : "border-border"
                  }`}
                  onClick={() => onThemeSelect?.(theme.id)}
                  data-testid={`theme-${theme.id}`}
                >
                  <div 
                    className="w-full h-full rounded-sm"
                    style={{ background: theme.preview }}
                  />
                  {theme.isSelected && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-primary-foreground rounded-full" />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "achievements" && (
          <div className="space-y-3">
            <div className="text-center py-6 text-muted-foreground">
              <Trophy className="h-8 w-8 mx-auto mb-2 opacity-50" />
              <p className="text-sm">Achievement system coming soon</p>
              <p className="text-xs">Track your quantum computing milestones</p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}