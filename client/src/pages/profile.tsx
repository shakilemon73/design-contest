import { UserProfile } from "@/components/user-profile"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { Link } from "wouter"

export default function Profile() {
  //todo: remove mock functionality - replace with real user data
  const mockUser = {
    name: "Bucky Ozdemir",
    email: "bucky@qolour.io",
    avatar: undefined,
    level: 7,
    totalExperience: 2840,
    experienceToNext: 160,
    achievements: 12,
    coursesCompleted: 3,
    quantumJobsRun: 47,
    totalUptime: "24 hours"
  }

  const mockThemes = [
    { id: "quantum-purple", name: "Quantum Purple", preview: "linear-gradient(135deg, #8B5CF6, #A855F7)", isSelected: true },
    { id: "quantum-blue", name: "Quantum Blue", preview: "linear-gradient(135deg, #3B82F6, #1D4ED8)", isSelected: false },
    { id: "quantum-cyan", name: "Quantum Cyan", preview: "linear-gradient(135deg, #06B6D4, #0891B2)", isSelected: false },
    { id: "quantum-emerald", name: "Quantum Emerald", preview: "linear-gradient(135deg, #10B981, #059669)", isSelected: false },
    { id: "quantum-orange", name: "Quantum Orange", preview: "linear-gradient(135deg, #F97316, #EA580C)", isSelected: false },
    { id: "quantum-pink", name: "Quantum Pink", preview: "linear-gradient(135deg, #EC4899, #DB2777)", isSelected: false },
    { id: "quantum-indigo", name: "Quantum Indigo", preview: "linear-gradient(135deg, #6366F1, #4F46E5)", isSelected: false },
    { id: "quantum-rose", name: "Quantum Rose", preview: "linear-gradient(135deg, #F43F5E, #E11D48)", isSelected: false }
  ]

  const handleThemeSelect = (themeId: string) => {
    console.log(`Theme selected: ${themeId}`)
    // Update theme in the app
  }

  const handleEditProfile = () => {
    console.log('Edit profile clicked')
  }

  const handleViewHistory = () => {
    console.log('View execution history clicked')
  }

  const handleViewSettings = () => {
    console.log('View settings clicked')
  }

  return (
    <div className="p-6 space-y-6" data-testid="page-profile">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link href="/">
          <Button size="icon" variant="ghost" data-testid="button-back" aria-label="Go back to dashboard">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div>
          <h1 className="text-2xl font-semibold">Your Profile</h1>
          <p className="text-sm text-muted-foreground">
            Manage your account, preferences, and quantum computing journey
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-2xl mx-auto">
        <UserProfile
          user={mockUser}
          themes={mockThemes}
          onThemeSelect={handleThemeSelect}
          onEditProfile={handleEditProfile}
          onViewHistory={handleViewHistory}
          onViewSettings={handleViewSettings}
        />
      </div>
    </div>
  )
}