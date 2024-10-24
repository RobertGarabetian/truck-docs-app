// app/dashboard/page.jsx

import Dashboard from "./Dashboard";
import { prisma } from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const user = await currentUser();
  if (!user) {
    redirect("/sign-in");
  }

  const [documents] = await Promise.all([
    prisma.document.findMany({
      where: {
        user_id: user.id, // Use 'user_id' as per your schema
      },
      include: {
        tag: true,
      },
    }),
    prisma.tag.findMany(),
  ]);

  const dotComplianceScore = 85; // Replace with actual data

  return (
    <Dashboard
      user={JSON.parse(JSON.stringify(user))}
      documents={documents.map((doc) => ({
        ...doc,
        createdAt: doc.createdAt.toISOString(), // Convert Dates to strings
        updatedAt: doc.updatedAt.toISOString(),
      }))}
      dotComplianceScore={dotComplianceScore}
    />
  );
}
