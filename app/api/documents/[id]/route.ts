// app/api/documents/[id]/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma"; // Adjust based on your setup

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  const documentId = parseInt(params.id);
  const { title, tagId } = await request.json();

  if (!title || typeof title !== "string") {
    return NextResponse.json({ error: "Invalid title." }, { status: 400 });
  }

  if (!tagId || typeof tagId !== "number") {
    return NextResponse.json({ error: "Invalid tag ID." }, { status: 400 });
  }

  try {
    const updatedDocument = await prisma.document.update({
      where: { id: documentId },
      data: { title, tagId },
    });

    return NextResponse.json(updatedDocument, { status: 200 });
  } catch (error) {
    console.error("Error updating document:", error);
    return NextResponse.json(
      { error: "Failed to update document." },
      { status: 500 }
    );
  }
}
