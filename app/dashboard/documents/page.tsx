// app/dashboard/page.tsx
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import prisma from "@/lib/prisma";
import { DocumentWithTag, Tag } from "@/types/types"; // Adjust the import path
import DocumentsPage from "../../../components/DocumentsPage";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  const userId = Number(session.user.id);
  try {
    if (!userId) {
      console.log(userId);
      throw Error("user Id is out of wack");
    }
    if (isNaN(userId)) {
      throw Error("user Id is not a number");
    }
  } catch (e) {
    console.log("The problem is", e);
  }

  const [documents, tags] = await Promise.all([
    prisma.document.findMany({
      where: { userId },
      include: {
        tag: true, // Ensure the tag is included
      },
    }),
    prisma.tag.findMany(),
  ]);

  const availableTags: Tag[] = [{ id: 0, name: "All" }, ...tags];

  return (
    <DocumentsPage
      documents={documents as DocumentWithTag[]}
      availableTags={availableTags}
    />
  );
}
