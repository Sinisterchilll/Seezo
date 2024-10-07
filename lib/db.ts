import { PrismaClient, UploadStatus } from '@prisma/client'

const prisma = new PrismaClient()

export async function createFileRecord(fileData: {
  name: string;
  url: string;
  key: string;
  userId: string;
}) {
  console.log('Attempting to create file record with data:', fileData);
  try {
    const newFile = await prisma.file.create({
      data: {
        name: fileData.name,
        url: fileData.url,
        key: fileData.key,
        uploadStatus: UploadStatus.SUCCESS,
        userId: fileData.userId,
      },
    });
    console.log('File record created successfully:', newFile);
    return newFile;
  } catch (error) {
    console.error('Error creating file record in database:', error);
    if (error instanceof Error) {
      console.error('Error message:', error.message);
      console.error('Error stack:', error.stack);
    }
    throw error;
  }
}