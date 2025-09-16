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

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ThemeProvider defaultTheme="dark">
          <div className="min-h-screen bg-background">
            {/* Header */}
            <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 bg-background/95 backdrop-blur border-b border-border">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-primary rounded-md flex items-center justify-center">
                  <div className="w-3 h-3 bg-primary-foreground rounded-sm" />
                </div>
                <span className="font-semibold text-sm">Qubi</span>
              </div>
              <ThemeToggle />
            </header>

            {/* Main content */}
            <main className="pt-16 pb-20 min-h-screen">
              <Router />
            </main>

            {/* Bottom navigation */}
            <BottomNavigation />
          </div>
          <Toaster />
        </ThemeProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
