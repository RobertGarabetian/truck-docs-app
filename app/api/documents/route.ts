// app/api/documents/route.ts

import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { auth, currentUser } from "@clerk/nextjs/server";

export const runtime = 'nodejs';

export const GET = async (req: NextRequest) => {
  const user = await currentUser()
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const userId = parseInt(user.id, 10);
  console.log(userId);

  try {
    const documents = await prisma.document.findMany({
      where: { userId },
      include: { tag: true },
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json(documents, { status: 200 });
  } catch (error) {
    console.error('Error fetching documents:', error);
    return NextResponse.json({ error: 'Failed to fetch documents' }, { status: 500 });
  }
};
export async function POST(req: Request) {
  const { title, fileUrl, tagId } = await req.json();
  const user = await currentUser()

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const userId = parseInt(user.id, 10);
  console.log(userId);
  try {
    const document = await prisma.document.create({
      data: {
        title,
        fileUrl,
        tag: { connect: { id: tagId } },
        user: { connect: { id: userId } }, // Ensure you have the correct user ID
      },
    });

    return new Response(JSON.stringify(document), { status: 201 });
  } catch (error) {
    console.error("Error saving document:", error);
    return new Response(JSON.stringify({ error: "Failed to save document" }), { status: 500 });
  }
}
