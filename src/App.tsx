import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')

  const tableData = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Editor' },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            React + Tailwind + shadcn/ui
          </h1>
          <p className="text-xl text-muted-foreground">
            A modern React setup with TypeScript, Tailwind CSS v4, and shadcn/ui components
          </p>
        </div>

        {/* Component Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Counter Card */}
          <Card>
            <CardHeader>
              <CardTitle>Interactive Counter</CardTitle>
              <CardDescription>
                Test React state management with this simple counter
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center space-y-4">
                <div className="text-3xl font-bold text-primary">{count}</div>
                <Button 
                  onClick={() => setCount(count + 1)}
                  className="w-full"
                >
                  Increment Count
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Form Card */}
          <Card>
            <CardHeader>
              <CardTitle>Form Example</CardTitle>
              <CardDescription>
                Basic form with shadcn/ui input components
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Your Name</Label>
                <Input 
                  id="name"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Save Information
              </Button>
            </CardFooter>
          </Card>

          {/* Dialog Example */}
          <Card>
            <CardHeader>
              <CardTitle>Modal Dialog</CardTitle>
              <CardDescription>
                Click the button to open a modal dialog
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="secondary" className="w-full">
                    Open Dialog
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Welcome!</DialogTitle>
                    <DialogDescription>
                      This is a modal dialog built with shadcn/ui components.
                      {name && ` Hello, ${name}!`}
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <p className="text-sm text-muted-foreground">
                      This dialog demonstrates the modal functionality and responsive design.
                    </p>
                  </div>
                  <DialogFooter>
                    <Button type="submit">Close</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>
        </div>

        {/* Data Table */}
        <Card>
          <CardHeader>
            <CardTitle>Data Table</CardTitle>
            <CardDescription>
              A responsive table showcasing user data with shadcn/ui table components
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableCaption>A list of recent users</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead className="text-right">Role</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {tableData.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell className="font-medium">{user.id}</TableCell>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell className="text-right">
                      <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-primary/10 text-primary">
                        {user.role}
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 border rounded-lg border-border bg-card">
            <h3 className="font-semibold text-card-foreground mb-2">⚡ Vite</h3>
            <p className="text-sm text-muted-foreground">Lightning fast development server</p>
          </div>
          <div className="p-4 border rounded-lg border-border bg-card">
            <h3 className="font-semibold text-card-foreground mb-2">🎨 Tailwind CSS v4</h3>
            <p className="text-sm text-muted-foreground">Utility-first CSS framework</p>
          </div>
          <div className="p-4 border rounded-lg border-border bg-card">
            <h3 className="font-semibold text-card-foreground mb-2">🧩 shadcn/ui</h3>
            <p className="text-sm text-muted-foreground">Beautiful, accessible components</p>
          </div>
          <div className="p-4 border rounded-lg border-border bg-card">
            <h3 className="font-semibold text-card-foreground mb-2">📝 TypeScript</h3>
            <p className="text-sm text-muted-foreground">Type-safe development</p>
          </div>
        </div>

        {/* Dark Mode Toggle Info */}
        <Card>
          <CardContent className="pt-6">
            <div className="text-center space-y-2">
              <p className="text-sm text-muted-foreground">
                💡 <strong>Tip:</strong> This setup includes comprehensive dark mode support with CSS variables.
                You can toggle dark mode by adding the <code className="bg-muted px-1 py-0.5 rounded">dark</code> class to the HTML element.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default App