import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma"; // Adjust this import based on your setup
import { auth } from '@clerk/nextjs/server'

export async function POST(request: Request) {
  const serverId  = await auth();

  if (!serverId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { userId, email, firstName, lastName } = body;

    // Ensure the userId from the request matches the authenticated user
    if (userId !== serverId) {
      return NextResponse.json({ error: "Invalid user ID" }, { status: 400 });
    }

    // Create a new user in the database
    const user = await prisma.user.create({
      data: {
        user_id: userId,
        email,
        firstName,
        lastName,
        dotComplianceScore: 50,
      },
    });

    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    console.error("Database Error:", error);
    return NextResponse.json(
      { error: "Error creating user in database" },
      { status: 500 }
    );
  }
}
