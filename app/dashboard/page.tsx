// app/dashboard/page.jsx
import Dashboard from "./Dashboard";
import prisma from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const user = await currentUser();
  if (!user) {
    redirect("/sign-in");
  }

  const [documents, tags] = await Promise.all([
    prisma.document.findMany({
      where: {
        user_id: user.id,
      },
      include: {
        tag: true, // Assuming there's a relation to `tag`
      },
    }),
    prisma.tag.findMany(), // Fetches all tags
  ]);

  const dotComplianceScore = 85; // Replace with actual data
  console.log(tags);
  return (
    <Dashboard
      user={user}
      documents={documents}
      dotComplianceScore={dotComplianceScore}
    />
  );
}
