import { UserProfile } from '../user-profile'

export default function UserProfileExample() {
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
    { id: "quantum-emerald", name: "Quantum Emerald", preview: "linear-gradient(135deg, #10B981, #059669)", isSelected: false }
  ]

  const handleThemeSelect = (themeId: string) => {
    console.log(`Theme selected: ${themeId}`)
  }

  const handleEditProfile = () => {
    console.log('Edit profile clicked')
  }

  const handleViewHistory = () => {
    console.log('View history clicked')
  }

  const handleViewSettings = () => {
    console.log('View settings clicked')
  }

  return (
    <div className="p-6 max-w-2xl">
      <UserProfile
        user={mockUser}
        themes={mockThemes}
        onThemeSelect={handleThemeSelect}
        onEditProfile={handleEditProfile}
        onViewHistory={handleViewHistory}
        onViewSettings={handleViewSettings}
      />
    </div>
  )
}