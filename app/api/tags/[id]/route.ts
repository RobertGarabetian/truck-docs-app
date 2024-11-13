// app/api/tag/[id]/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma"; // Adjust the import based on your Prisma setup

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  const tagId = parseInt(params.id);
  const { name } = await request.json();

  if (!name || typeof name !== "string") {
    return NextResponse.json({ error: "Invalid tag name." }, { status: 400 });
  }

  try {
    const updatedTag = await prisma.tag.update({
      where: { id: tagId },
      data: { name },
    });

    return NextResponse.json(updatedTag, { status: 200 });
  } catch (error) {
    console.error("Error updating tag:", error);
    return NextResponse.json({ error: "Failed to update tag." }, { status: 500 });
  }
}
