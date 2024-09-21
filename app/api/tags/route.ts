// app/api/tags/route.ts

import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export const runtime = 'nodejs';

export const GET = async (req: NextRequest) => {
  console.log(req)
  try {
    const tags = await prisma.tag.findMany({
      orderBy: { name: 'asc' },
    });

    return NextResponse.json(tags, { status: 200 });
  } catch (error) {
    console.error('Error fetching tags:', error);
    return NextResponse.json({ error: 'Failed to fetch tags' }, { status: 500 });
  }
};
