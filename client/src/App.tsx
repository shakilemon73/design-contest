import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import { BottomNavigation } from "@/components/bottom-navigation";
import { ThemeToggle } from "@/components/theme-toggle";
import { QuantumSidebar } from "@/components/quantum-sidebar";
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { useIsMobile } from "@/hooks/use-mobile";
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
  const isMobile = useIsMobile()

  return (
    <SidebarProvider>
      <div className="min-h-screen bg-background flex">
        {!isMobile && <QuantumSidebar />}
        
        <SidebarInset className="flex-1">
          {/* Mobile Header */}
          {isMobile && (
            <header className="sticky top-0 z-50 flex items-center justify-between p-4 bg-background/95 backdrop-blur border-b border-border">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg quantum-gradient quantum-glow">
                  <div className="w-4 h-4 bg-white rounded-sm animate-quantum-pulse" />
                </div>
                <span className="font-bold text-lg">Qubi</span>
              </div>
              <ThemeToggle />
            </header>
          )}
          
          {/* Desktop Header */}
          {!isMobile && (
            <header className="sticky top-0 z-40 flex items-center justify-between p-4 bg-background/95 backdrop-blur border-b border-border">
              <div className="flex items-center gap-2">
                <SidebarTrigger className="h-8 w-8" />
                <span className="text-sm text-muted-foreground">Quantum Computing Dashboard</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="hidden sm:flex items-center gap-1 text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                  <div className="w-2 h-2 bg-quantum-success rounded-full animate-quantum-pulse"></div>
                  5 systems online
                </div>
                <ThemeToggle />
              </div>
            </header>
          )}

          {/* Main content */}
          <main className={`min-h-screen ${isMobile ? 'pb-20' : ''}`}>
            <Router />
          </main>
        </SidebarInset>

        {/* Mobile Bottom navigation */}
        {isMobile && <BottomNavigation />}
      </div>
      <Toaster />
    </SidebarProvider>
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
