import Dashboard from "./Dashboard";
import { prisma } from "@/lib/prisma";
import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const { userId } = await auth();
  if (!userId) {
    console.log("NO USERRR Clerk");
    redirect("/sign-in");
  }

  const user = await prisma.user.findUnique({
    where: { user_id: userId },
  });

  if (!user) {
    console.log(userId);
    console.log("NO USERRR Server");
    redirect("/sign-in");
  }
  const documents = await prisma.document.findMany({
    where: { user_id: userId },
    include: {
      tag: true,
    },
  });

  return <Dashboard user={user} documents={documents} />;
}
