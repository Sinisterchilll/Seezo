"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { X, Upload, FileText, Image } from 'lucide-react'
import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { UploadButton } from "../../lib/uploadthing";
import { useState } from "react";
import { createFileRecord } from "@/lib/db"; // Assume this function is created as discussed earlier

interface CreateAssessmentPopupProps {
  isOpen: boolean
  onClose: () => void
  userId: string // Add this prop to get the current user's ID
  onFileUpload: () => void // New prop to handle file upload
}

export function CreateAssessmentPopup({ isOpen, onClose, userId, onFileUpload }: CreateAssessmentPopupProps) {
  const router = useRouter();
  const [isUploading, setIsUploading] = useState(false);
  const [uploadSuccessful, setUploadSuccessful] = useState(false); // New state to track upload success

  if (!isOpen) return null

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // ... your existing upload logic ...
  
    if (uploadSuccessful) {
      onFileUpload() // Call this after successful upload
      onClose()
    }
  }
 
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold">Create New Assessment</h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-6 w-6" />
          </Button>
        </div>
        <div className="p-4">
          <p className="mb-4">Choose a method to create your assessment:</p>
          <div className="grid grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Upload File</CardTitle>
                <CardDescription>Upload a local file from your computer</CardDescription>
              </CardHeader>
              <CardContent>
                <UploadButton
                  endpoint="imageUploader"
                  onUploadBegin={() => {
                    setIsUploading(true);
                  }}
                  onClientUploadComplete={(res) => {
                    // Do something with the response
                    setIsUploading(false);
                    
                    console.log("Files: ", res);
                    alert("Upload Completed");
                    setUploadSuccessful(true); // Set upload success state
                  }}
                  onUploadError={(error: Error) => {
                    // Do something with the error.
                    alert(`ERROR! ${error.message}`);
                  }}
                />
                {isUploading && <p className="mt-2 text-sm text-gray-500">Uploading...</p>}
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>G Suite </CardTitle>
                <CardDescription>Import from Google Docs or Sheets</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  <FileText className="mr-2 h-4 w-4" /> Connect G Suite
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Diagram</CardTitle>
                <CardDescription>Upload a diagram or flowchart</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  <Image className="mr-2 h-4 w-4" /> Upload Diagram
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

