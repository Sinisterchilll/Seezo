"use client"
import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { BarChart2, BookOpen, ChevronDown, FileText, Home, PlusCircle, Search, Settings, Users } from 'lucide-react'
import { CreateAssessmentPopup } from '../component/UploadCard'
import Link from 'next/link'
import { useSession } from "next-auth/react"
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/authOptions";
import { prisma } from "@/lib/prisma";

// Move assessments outside the component
const assessments = [
  { id: 1, title: "Seeded File 1", Status: "success", createdAt: "30 mins", Risk: "Low", link: "/result", createdBy: "System" },
  { id: 2, title: "Seeded File 2", Status: "Failed", createdAt: "45 mins", Risk: "High", link: "/result", createdBy: "System" },
];

export default function AssessmentPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [allFiles, setAllFiles] = useState([])
  const session = useSession()

  useEffect(() => {
    fetchFiles()
  }, [])

  const fetchFiles = async () => {
    try {
      const response = await fetch('/api/file')
      const data = await response.json()
      console.log("API response:", data) // Add this line
      if (data.files) {
        setAllFiles(data.files)
      } else {
        console.error("No files data in the response")
      }
    } catch (error) {
      console.error("Error fetching files:", error)
    }
  }

  const handleFileUpload = async () => {
    // Your file upload logic here
    // After successful upload:
    await fetchFiles()
    setIsPopupOpen(false)
  }

  // Use session data to update createdBy if needed
  const updatedAssessments = assessments.map(assessment => ({
    ...assessment,
    createdBy: session?.data?.user?.name || assessment.createdBy
  }));

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className={`bg-white w-64 min-h-screen flex flex-col ${sidebarOpen ? 'block' : 'hidden'} md:block`}>
        <div className="p-4 border-b">
          <Link href="/">
            <h2 className="text-2xl font-bold">Seezo</h2>
          </Link>
        </div>
        <nav className="flex-grow">
          <ul className="p-2 space-y-2">
            <li><a href="#" className="flex items-center p-2 hover:bg-gray-100 rounded"><Home className="mr-2" /> Dashboard</a></li>
            <li><a href="#" className="flex items-center p-2 hover:bg-gray-100 rounded"><FileText className="mr-2" /> Assessments</a></li>
            <li><a href="#" className="flex items-center p-2 hover:bg-gray-100 rounded"><Users className="mr-2" /> Candidates</a></li>
            <li><a href="#" className="flex items-center p-2 hover:bg-gray-100 rounded"><BarChart2 className="mr-2" /> Reports</a></li>
            <li><a href="#" className="flex items-center p-2 hover:bg-gray-100 rounded"><Settings className="mr-2" /> Settings</a></li>
          </ul>
        </nav>
        <div className="p-4 border-t">
          <div className="flex items-center">
            <Avatar className="h-8 w-8 mr-2">
              <AvatarImage src="/placeholder-avatar.jpg" alt="User" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">{session?.data?.user?.name}</p>
              <p className="text-xs text-gray-500">{session?.data?.user?.email}</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b flex items-center justify-between p-4">
          <div className="flex items-center">
            <button className="md:hidden mr-2" onClick={() => setSidebarOpen(!sidebarOpen)}>
              <ChevronDown className="h-6 w-6" />
            </button>
            <h1 className="text-xl font-semibold">Assessments</h1>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input type="text" placeholder="Search assessments" className="pl-8" />
            </div>
            <Button onClick={() => setIsPopupOpen(true)}>
              <PlusCircle className="mr-2 h-4 w-4" /> Create Assessment
            </Button>
          </div>
        </header>

        {/* Assessment Cards */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {allFiles.length > 0 ? (
              allFiles.map((file: FileType) => (
                <Link href={file.link || `/result/${file.id}`} key={file.id}>
                  <Card key={file.id}>
                    <CardHeader>
                      <CardTitle>{file.title || file.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <span>Status: {file.Status || file.uploadStatus}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-500 mt-2">
                        <FileText className="h-4 w-4" />
                        <span>Created At: {file.createdAt}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-500 mt-2">
                        <span>Created By: {file.createdBy || session?.data?.user?.name}</span>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between items-center">
                      <Badge variant="secondary">Risk: {file.Risk || 'N/A'}</Badge>
                      <Button variant="outline">View Details</Button>
                    </CardFooter>
                  </Card>
                </Link>
              ))
            ) : (
              <p>No files found.</p>
            )}
          </div>
        </main>
      </div>

      {/* Create Assessment Popup */}
      <CreateAssessmentPopup 
        isOpen={isPopupOpen} 
        onClose={() => setIsPopupOpen(false)} 
        userId={session?.data?.user?.email ?? ''} 
        onFileUpload={handleFileUpload}
      />
    </div>
  )
}

interface FileType {
  id: string;
  link?: string;
  title?: string;
  name?: string;
  Status?: string;
  uploadStatus?: string;
  createdAt: string;
  createdBy?: string;
  Risk?: string;
}

// Move the GET function to a separate API route file, e.g., app/api/files/route.ts