import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Plus, Zap } from "lucide-react"
import { Link } from "wouter"

export default function AddQubits() {
  const [qubitName, setQubitName] = useState("")
  const [initialState, setInitialState] = useState("0")
  const [coherenceTime, setCoherenceTime] = useState("100")

  const handleAddQubit = () => {
    console.log('Adding qubit:', { qubitName, initialState, coherenceTime })
    // Reset form
    setQubitName("")
    setInitialState("0")
    setCoherenceTime("100")
  }

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6" data-testid="page-add-qubits">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link href="/">
          <Button size="icon" variant="ghost" data-testid="button-back" aria-label="Go back to dashboard">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div>
          <h1 className="text-2xl font-semibold">Add New Qubit</h1>
          <p className="text-sm text-muted-foreground">
            Create a new qubit for your quantum circuits
          </p>
        </div>
      </div>

      {/* Add Qubit Form */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Plus className="h-5 w-5" />
            Qubit Configuration
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="qubit-name">Qubit Name</Label>
            <Input
              id="qubit-name"
              value={qubitName}
              onChange={(e) => setQubitName(e.target.value)}
              placeholder="e.g., Qubit v2"
              data-testid="input-qubit-name"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="initial-state">Initial State</Label>
            <Select value={initialState} onValueChange={setInitialState}>
              <SelectTrigger data-testid="select-initial-state" aria-label="Select initial qubit state">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0">|0⟩ (Ground state)</SelectItem>
                <SelectItem value="1">|1⟩ (Excited state)</SelectItem>
                <SelectItem value="superposition">|+⟩ (Superposition)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="coherence-time">Coherence Time (μs)</Label>
            <Input
              id="coherence-time"
              type="number"
              value={coherenceTime}
              onChange={(e) => setCoherenceTime(e.target.value)}
              placeholder="100"
              data-testid="input-coherence-time"
            />
          </div>

          <Button 
            onClick={handleAddQubit} 
            className="w-full"
            disabled={!qubitName}
            data-testid="button-add-qubit"
          >
            <Zap className="h-4 w-4 mr-2" />
            Add Qubit to Circuit
          </Button>
        </CardContent>
      </Card>

      {/* Quick Add Options */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Quick Add Templates</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <Button 
            variant="outline" 
            className="w-full justify-start"
            onClick={() => {
              setQubitName("Bell Pair A")
              setInitialState("0")
              setCoherenceTime("150")
            }}
            data-testid="button-bell-pair-template"
          >
            Bell Pair Qubit (Entanglement Ready)
          </Button>
          <Button 
            variant="outline" 
            className="w-full justify-start"
            onClick={() => {
              setQubitName("Grover Search")
              setInitialState("superposition")
              setCoherenceTime("200")
            }}
            data-testid="button-grover-template"
          >
            Grover Algorithm Qubit
          </Button>
          <Button 
            variant="outline" 
            className="w-full justify-start"
            onClick={() => {
              setQubitName("Error Correction")
              setInitialState("0")
              setCoherenceTime("300")
            }}
            data-testid="button-error-correction-template"
          >
            Error Correction Qubit
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}