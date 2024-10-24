// app/api/sync-user/route.ts

import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const { userId, email, firstName, lastName, companyName } =
      await request.json();

    await prisma.user.upsert({
      where: { user_id: userId },
      update: {
        email,
        firstName,
        lastName,
        companyName,
      },
      create: {
        user_id: userId,
        email,
        firstName,
        lastName,
        companyName,
      },
    });

    return NextResponse.json({ message: "User synced" });
  } catch (error) {
    console.error("Error syncing user:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
