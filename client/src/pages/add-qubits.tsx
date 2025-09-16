import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, MoreVertical, Battery, Wifi } from "lucide-react"
import { Link } from "wouter"

export default function ConnectedQubis() {
  const [nearbyQubis, setNearbyQubis] = useState([
    {
      id: "qubi-v1-1",
      name: "Qubi v1", 
      battery: 90,
      isConnected: false
    },
    {
      id: "qubi-v2-1",
      name: "Qubi v2",
      battery: 20, 
      isConnected: true
    },
    {
      id: "qubi-v1-2",
      name: "Qubi v1",
      battery: 90,
      isConnected: false  
    }
  ])

  const handleConnect = (id: string) => {
    setNearbyQubis(prev => prev.map(q => 
      q.id === id ? {...q, isConnected: true} : q
    ))
    console.log(`Connected to ${id}`)
  }

  const handleScanAgain = () => {
    console.log('Scanning for nearby qubis...')
  }

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6" data-testid="page-connected-qubis">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link href="/">
          <Button size="icon" variant="ghost" data-testid="button-back" aria-label="Go back to dashboard">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div>
          <h1 className="text-2xl font-semibold">Connected Qubis</h1>
        </div>
      </div>

      {/* Nearby Qubis Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-medium">Nearby Qubis</h2>
          <Button variant="outline" size="sm" onClick={handleScanAgain} data-testid="button-scan-again">
            Scan again
          </Button>
        </div>

        <p className="text-sm text-muted-foreground">
          Qubis might be grouped together if they are already entangled.
        </p>

        {/* Qubis List */}
        <div className="space-y-3">
          {nearbyQubis.map((qubi) => (
            <Card key={qubi.id} className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-muted-foreground" />
                  <div className="flex-1">
                    <h3 className="font-medium">{qubi.name}</h3>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Battery className="h-3 w-3" />
                      <span>{qubi.battery}% battery</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {qubi.isConnected ? (
                    <Badge variant="secondary" className="text-xs">
                      <Wifi className="h-3 w-3 mr-1" />
                      Connected
                    </Badge>
                  ) : (
                    <Link href="/">
                      <Button 
                        size="sm" 
                        onClick={() => handleConnect(qubi.id)}
                        data-testid={`button-connect-${qubi.id}`}
                      >
                        Connect
                      </Button>
                    </Link>
                  )}
                  
                  <Button size="icon" variant="ghost" data-testid={`button-more-${qubi.id}`}>
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}