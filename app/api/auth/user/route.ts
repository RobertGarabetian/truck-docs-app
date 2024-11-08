// route.ts
// route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getAuth } from "@clerk/nextjs/server"; // Update the import

export async function POST(request: any) {
  const { userId } = getAuth(request); // Pass the request object

  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { user_id, email, firstName, lastName } = body;

    // Ensure the userId from the request matches the authenticated user
    if (user_id !== userId) {
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
