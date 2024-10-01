//app/api/uploadthing
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import prisma from "@/lib/prisma";

const f = createUploadthing();
export const runtime = "nodejs";

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
  uploader: f({
    pdf: { 
      maxFileSize: "4MB", 
      maxFileCount: 5 
    },
  })
  .middleware(async ({ req }) => {
    // This code runs on your server before upload
    const user = await auth(req);
    // If you throw, the user will not be able to upload
    if (!user) throw new UploadThingError("Unauthorized");
    // Whatever is returned here is accessible in onUploadComplete as `metadata`
    return { userId: user.id };
  })
  
  
  .onUploadComplete(async ({ metadata, file }) => {
    // This code RUNS ON YOUR SERVER after upload
    console.log("Upload complete for userId:", metadata.userId);
    console.log("file url", file.url);
    // !!! Whatever is returned here is sent to the clientside `onClientUploadComplete` callback
    return { uploadedBy: metadata.userId };
  }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
