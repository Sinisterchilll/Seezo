"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart2, ChevronDown, FileText, Home, Settings, Users, CheckCircle, XCircle, AlertTriangle, FileCode, BarChart, List } from 'lucide-react'
import Link from 'next/link'
import { useSession } from 'next-auth/react'

export default function AssessmentResultPage() {
  const { data: session } = useSession()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const assessmentData = {
    title: "JavaScript Fundamentals",
    createdBy: session?.user?.name || "User",
    createdAt: "2023-05-15",
    lastModified: "2023-06-01",
    status: "Active",
    questions: 25,
    timeLimit: "30 minutes",
  }

  const latestScanData = {
    scanDate: "2023-06-10",
    scanTime: "14:30 UTC",
    vulnerabilities: {
      high: 2,
      medium: 5,
      low: 8,
    },
    score: 85,
  }

  const tabsData = [
    {
      id: "overview",
      title: "Overview",
      icon: <BarChart className="w-4 h-4" />,
      content: (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Assessment Overview</h3>
          <p>This assessment covers fundamental JavaScript concepts including variables, functions, arrays, and objects.</p>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium">Total Questions</h4>
              <p>{assessmentData.questions}</p>
            </div>
            <div>
              <h4 className="font-medium">Time Limit</h4>
              <p>{assessmentData.timeLimit}</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "questions",
      title: "Questions",
      icon: <List className="w-4 h-4" />,
      content: (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Question List</h3>
          <ul className="space-y-2">
            <li>1. What is the output of console.log(typeof [])?</li>
            <li>2. Which method is used to add elements to the end of an array?</li>
            <li>3. What does the &apos;===&apos; operator do in JavaScript?</li>
            <li>4. What is the purpose of the &apos;let&apos; keyword in JavaScript?</li>
            <li>5. What is a closure in JavaScript?</li>
          </ul>
        </div>
      ),
    },
    {
      id: "results",
      title: "Results",
      icon: <BarChart2 className="w-4 h-4" />,
      content: (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Assessment Results</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium">Average Score</h4>
              <p>78%</p>
            </div>
            <div>
              <h4 className="font-medium">Completion Rate</h4>
              <p>92%</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "code",
      title: "Code Analysis",
      icon: <FileCode className="w-4 h-4" />,
      content: (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Code Analysis</h3>
          <p>This section provides detailed analysis of code-related questions in the assessment.</p>
          <div className="bg-gray-100 p-4 rounded">
            <pre><code>{`function example() {
  let x = 5;
  return function() {
    return x;
  }
}`}</code></pre>
          </div>
        </div>
      ),
    },
  ]

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
              <p className="text-sm font-medium">{session?.user?.name}</p>
              <p className="text-xs text-gray-500">{session?.user?.email}</p>
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
            <h1 className="text-xl font-semibold">Assessment Result: {assessmentData.title}</h1>
          </div>
          <Button variant="outline">Download Report</Button>
        </header>

        {/* Assessment Result Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-4">
          <div className="max-w-6xl mx-auto space-y-6">
            {/* Top Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Assessment Metadata Card */}
              <Card>
                <CardHeader>
                  <CardTitle>Assessment Metadata</CardTitle>
                </CardHeader>
                <CardContent>
                  <dl className="grid grid-cols-2 gap-4">
                    <div>
                      <dt className="font-medium">Created By</dt>
                      <dd>{assessmentData.createdBy}</dd>
                    </div>
                    <div>
                      <dt className="font-medium">Created At</dt>
                      <dd>{assessmentData.createdAt}</dd>
                    </div>
                    <div>
                      <dt className="font-medium">Last Modified</dt>
                      <dd>{assessmentData.lastModified}</dd>
                    </div>
                    <div>
                      <dt className="font-medium">Status</dt>
                      <dd><Badge>{assessmentData.status}</Badge></dd>
                    </div>
                  </dl>
                </CardContent>
              </Card>

              {/* Latest Scan Details Card */}
              <Card>
                <CardHeader>
                  <CardTitle>Latest Scan Details</CardTitle>
                </CardHeader>
                <CardContent>
                  <dl className="grid grid-cols-2 gap-4">
                    <div>
                      <dt className="font-medium">Scan Date</dt>
                      <dd>{latestScanData.scanDate}</dd>
                    </div>
                    <div>
                      <dt className="font-medium">Scan Time</dt>
                      <dd>{latestScanData.scanTime}</dd>
                    </div>
                    <div>
                      <dt className="font-medium">Vulnerabilities</dt>
                      <dd className="flex space-x-2">
                        <Badge variant="destructive">{latestScanData.vulnerabilities.high} High</Badge>
                        <Badge variant="secondary">{latestScanData.vulnerabilities.medium} Medium</Badge>
                        <Badge variant="secondary">{latestScanData.vulnerabilities.low} Low</Badge>
                      </dd>
                    </div>
                    <div>
                      <dt className="font-medium">Score</dt>
                      <dd>{latestScanData.score}/100</dd>
                    </div>
                  </dl>
                </CardContent>
              </Card>
            </div>

            {/* Tabs Section */}
            <Card>
              <CardContent className="p-0">
                <Tabs defaultValue="overview" className="w-full">
                  <TabsList className="w-full justify-start rounded-none border-b">
                    {tabsData.map((tab) => (
                      <TabsTrigger key={tab.id} value={tab.id} className="flex items-center">
                        {tab.icon}
                        <span className="ml-2">{tab.title}</span>
                      </TabsTrigger>
                    ))}
                  </TabsList>
                  {tabsData.map((tab) => (
                    <TabsContent key={tab.id} value={tab.id} className="p-4">
                      {tab.content}
                    </TabsContent>
                  ))}
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}