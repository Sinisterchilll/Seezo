import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/authOptions";
import { prisma } from "@/lib/prisma";

const f = createUploadthing();

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  imageUploader: f({ image: { maxFileSize: "16MB" }, pdf: { maxFileSize: "16MB" } })
    .middleware(async ({ req }) => {
      // Use NextAuth for authentication
      const session = await getServerSession(authOptions);

      // If you throw, the user will not be able to upload
      if (!session || !session.user) throw new UploadThingError("Unauthorized");

      // Check if the user exists in the database
      const user = await prisma.user.findUnique({
        where: { email: session.user.email ?? '' },
      });

      if (!user) throw new UploadThingError("User not found");

      return { userId: user.id };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      try {
        // This code remains unchanged
        const createdFile = await prisma.file.create({
          data: {
            name: file.name,
            key: file.key,
            url: file.url,
            uploadStatus: "SUCCESS",
            userId: metadata.userId,
          },
        });

        console.log("Upload complete for userId:", metadata.userId);
        console.log("File stored in database with id:", createdFile.id);

        return { uploadedBy: metadata.userId, fileId: createdFile.id };
      } catch (error) {
        console.error("Error creating file record:", error);
        throw new UploadThingError("Failed to store file information");
      }
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
