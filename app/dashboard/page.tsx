import Dashboard from "./Dashboard";
import { prisma } from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const User = await currentUser();

  if (!User) {
    redirect("/sign-in");
  }

  const user = await prisma.user.findUnique({
    where: { user_id: User.id },
  });
  const documents = await prisma.document.findMany({
    where: { user_id: User.id },
    include: {
      tag: true,
    },
  });

  if (!user) {
    redirect("/sign-in");
  }

  return <Dashboard user={user} documents={documents} />;
}
