// app/api/documents/route.ts

import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export const runtime = 'nodejs';

export const GET = async (req: NextRequest) => {
  const session = await getServerSession({ req, ...authOptions });

  if (!session || !session.user || !session.user.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const userId = parseInt(session.user.id, 10);

  try {
    const documents = await prisma.document.findMany({
      // where: { userId },
      include: { tags: true },
      // orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json(documents, { status: 200 });
  } catch (error) {
    console.error('Error fetching documents:', error);
    return NextResponse.json({ error: 'Failed to fetch documents' }, { status: 500 });
  }
};
