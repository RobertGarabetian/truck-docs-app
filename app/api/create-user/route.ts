// app/api/create-user/route.ts

import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { useUser } from "@clerk/nextjs";

export async function POST(request: Request) {
  const { user } = useUser();

  if (!user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { emailAddress, companyName, firstName, lastName } = await request.json();
    console.log(emailAddress)
    console.log(companyName)
    // Create the user in the database
    await prisma.user.create({
      data: {
        user_id: user.id || "",
        email: emailAddress,
        firstName: firstName,
        lastName: lastName,
        companyName: companyName,
      },
    });

    // Create a default tag
    const tag = await prisma.tag.create({
      data: {
        name: "Tax",
      },
    });

    // Create a default document
    await prisma.document.create({
      data: {
        title: "Sample Document",
        fileUrl: "https://example.com/document.pdf",
        user_id: user?.id,
        tagId: tag.id,
        // 'createdAt' and 'updatedAt' are automatically handled by Prisma
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
