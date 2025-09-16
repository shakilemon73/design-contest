import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import { BottomNavigation } from "@/components/bottom-navigation";
import { ThemeToggle } from "@/components/theme-toggle";
import Dashboard from "@/pages/dashboard";
import Connected from "@/pages/connected";
import Learn from "@/pages/learn";
import Profile from "@/pages/profile";
import Settings from "@/pages/settings";
import AddQubits from "@/pages/add-qubits";
import Themes from "@/pages/themes";
import ExecutionReport from "@/pages/execution-report";
import History from "@/pages/history";
import RunStory from "@/pages/run-story";
import QuantumComputers from "@/pages/quantum-computers";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Dashboard} />
      <Route path="/connected" component={Connected} />
      <Route path="/circuits" component={Dashboard} />
      <Route path="/simulator" component={Dashboard} />
      <Route path="/learn" component={Learn} />
      <Route path="/algorithms" component={Learn} />
      <Route path="/docs" component={Learn} />
      <Route path="/profile" component={Profile} />
      <Route path="/settings" component={Settings} />
      <Route path="/add-qubits" component={AddQubits} />
      <Route path="/themes" component={Themes} />
      <Route path="/execution-report" component={ExecutionReport} />
      <Route path="/history" component={History} />
      <Route path="/run-story" component={RunStory} />
      <Route path="/quantum-computers" component={QuantumComputers} />
      <Route component={NotFound} />
    </Switch>
  );
}

function AppContent() {
  return (
    <div className="min-h-screen bg-background">
      {/* Mobile Header */}
      <header className="sticky top-0 z-50 flex items-center justify-between p-4 bg-background/95 backdrop-blur border-b border-border">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg quantum-gradient quantum-glow">
            <div className="w-4 h-4 bg-white rounded-sm animate-quantum-pulse" />
          </div>
          <span className="font-bold text-lg">Qubi</span>
        </div>
        <ThemeToggle />
      </header>

      {/* Main content with mobile container */}
      <main className="mx-auto w-full max-w-[430px] px-4 pb-24 min-h-screen">
        <Router />
      </main>

      {/* Mobile Bottom navigation */}
      <BottomNavigation />
      <Toaster />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ThemeProvider defaultTheme="dark">
          <AppContent />
        </ThemeProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
