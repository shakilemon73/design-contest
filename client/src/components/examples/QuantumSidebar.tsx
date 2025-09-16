import { QuantumSidebar } from '../quantum-sidebar'
import { SidebarProvider } from "@/components/ui/sidebar"

export default function QuantumSidebarExample() {
  const style = {
    "--sidebar-width": "20rem",
    "--sidebar-width-icon": "4rem",
  };

  return (
    <SidebarProvider style={style as React.CSSProperties}>
      <div className="flex h-screen w-full">
        <QuantumSidebar />
      </div>
    </SidebarProvider>
  )
}