// app/dashboard/page.tsx
import { redirect } from "next/navigation";
import { currentUser } from "@clerk/nextjs/server";
import prisma from "@/lib/prisma";
import DocumentsPage from "@/components/DocumentsPage";

export default async function DashboardPage() {
  const User = await currentUser();

  if (!User) {
    redirect("/sign-in");
  }

  const documents = await prisma.document.findMany({
    where: { user_id: User.id },
    include: {
      tag: true,
    },
  });
  const tags = await prisma.tag.findMany({
    where: { OR: [{ user_id: User.id }, { id: { lt: 10 } }] },
  });

  return <DocumentsPage documents={documents} tags={tags} />;
}
