// app/dashboard/page.jsx
import Dashboard from "./Dashboard";
import prisma from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

export default async function DashboardPage() {
  const user = await currentUser();
  if (!user) {
    redirect("/sign-in");
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const userId = parseInt(user.id, 10);

  const [documents, tags] = await Promise.all([
    prisma.document.findMany({
      where: { userId },
      include: {
        tag: true,
      },
    }),
    prisma.tag.findMany(),
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
