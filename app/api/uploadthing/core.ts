import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import prisma from "@/lib/prisma";

const f = createUploadthing();
export const runtime = 'nodejs';

const auth = async (req: Request) => {
  const session = await getServerSession({ req, ...authOptions });

  if (session && session.user && session.user.id) {
    const userId = parseInt(session.user.id, 10); // Base 10
    return { id: userId };
  } else {
    return null;
  }
};
// FileRouter for your app, can contain multiple FileRoutes
// core.ts

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  uploader: f({ pdf: { maxFileSize: "4MB" } })
    .middleware(async ({ req }) => {
      try {
        const user = await auth(req);
        
        if (!user) throw new UploadThingError("Unauthorized");

        return { userId: user.id };
      } catch (error) {
        console.error("Error in middleware:", error);
        throw error;
      }
    })
    .onUploadComplete(async ({ metadata, file }) => {
      try {
        console.log("Upload complete for userId:", metadata.userId);
        console.log("File URL:", file.url);

        // Save file info to your database
        await prisma.document.create({
          data: {
            title: file.name,
            fileUrl: file.url,
            user: { connect: { id: metadata.userId } },
          },
        });
      } catch (error) {
        console.error("Error in onUploadComplete:", error);
        throw error;
      }
    }),
} satisfies FileRouter;
