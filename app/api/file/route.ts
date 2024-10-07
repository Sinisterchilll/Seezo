import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/authOptions";
import { prisma } from "@/lib/prisma";

const assessments = [
  { id: 1, title: "Seeded File 1", Status: "success", createdAt: "30 mins", Risk: "Low", link: "/result", createdBy: "System" },
  { id: 2, title: "Seeded File 2", Status: "Failed", createdAt: "45 mins", Risk: "High", link: "/result", createdBy: "System" },
];

export async function GET() {
  console.log("GET request received for files");

  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
      console.log("Unauthorized access attempt");
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    console.log(`Fetching files for user: ${session.user.email}`);

    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
      select: { id: true }
    });

    if (!user) {
      console.log("User not found in database");
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    console.log(`User ID: ${user.id}`);

    const userFiles = await prisma.file.findMany({
      where: { userId: user.id },
      select: {
        id: true,
        name: true,
        url: true,
        createdAt: true,
        updatedAt: true,
        uploadStatus: true,
      }
    });

    console.log(`User files fetched: ${userFiles.length}`);

    const transformedUserFiles = userFiles
      .filter(file => file.uploadStatus === "SUCCESS")
      .map(file => ({
        id: file.id,
        title: file.name,
        name: file.name,
        Status: "success", // or map from uploadStatus
        createdAt: file.createdAt.toISOString(),
        Risk: "N/A", // Add if you have this information
        link: `/result/${file.id}`,
        createdBy: session?.user?.name || "User",
        url: file.url,
        type: getFileType(file.name),
        updatedAt: file.updatedAt.toISOString()
      }));

    console.log(`Transformed user files: ${transformedUserFiles.length}`);

    const allFiles = [
      ...assessments.map(file => ({
        ...file,
        createdAt: file.createdAt, // Keep as is or convert to ISO string if needed
      })),
      ...transformedUserFiles
    ];

    console.log(`Total files to return: ${allFiles.length}`);

    return NextResponse.json({
      message: "Files fetched successfully",
      files: allFiles
    });
  } catch (error) {
    console.error("Error fetching files:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

function getFileType(fileName: string): string {
  const extension = fileName.split('.').pop()?.toLowerCase();
  switch (extension) {
    case 'pdf': return 'pdf';
    case 'doc':
    case 'docx': return 'doc';
    case 'xls':
    case 'xlsx': return 'sheet';
    default: return 'unknown';
  }
}