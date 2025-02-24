
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"

const Admin = () => {
  const [userName, setUserName] = useState("")
  const [file, setFile] = useState<File | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // This is just a placeholder to show the collected data
    console.log("Form submitted:", { userName, file })
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="mx-auto max-w-2xl">
        <h1 className="mb-8 text-3xl font-bold">Admin Panel</h1>
        
        <div className="rounded-lg border bg-white p-6 shadow-sm">
          <h2 className="mb-6 text-xl font-semibold">Upload Certificate</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="userName" className="text-sm font-medium">
                User Name
              </label>
              <Input
                id="userName"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Enter user name"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="pdfFile" className="text-sm font-medium">
                PDF Certificate
              </label>
              <Input
                id="pdfFile"
                type="file"
                accept=".pdf"
                onChange={(e) => setFile(e.target.files?.[0] || null)}
                required
              />
            </div>

            <Button type="submit" className="w-full">
              Upload Certificate
            </Button>
          </form>

          {/* Display upload history - placeholder for now */}
          <div className="mt-8 space-y-4">
            <h3 className="text-lg font-medium">Recent Uploads</h3>
            <div className="rounded-md border p-4">
              <p className="text-sm text-gray-500">No uploads yet</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Admin
