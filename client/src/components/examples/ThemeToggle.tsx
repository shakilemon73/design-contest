import { ThemeToggle } from '../theme-toggle'
import { ThemeProvider } from '../theme-provider'

export default function ThemeToggleExample() {
  return (
    <ThemeProvider>
      <div className="p-8 flex items-center justify-center">
        <ThemeToggle />
      </div>
    </ThemeProvider>
  )
}