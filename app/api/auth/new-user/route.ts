// app/api/create-user/route.ts

import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth, currentUser } from "@clerk/nextjs/server";


export async function GET() {
  const { userId } = auth();
  if (!userId) {
    return new NextResponse('Unauthorized', { status: 401 });
  }
  
  // Get user's information
  const user = await currentUser();
  if (!user) {
    return new NextResponse('User not exist', { status: 404 });
  }
  
  let dbUser = await prisma.user.findUnique({
    where: { user_id: user.id },
  });
  const tag = await prisma.tag.findFirst({
    where: {user_id: user.id}
  })
  
  // Create user and tag if they don't exist
  if (!dbUser) {
    dbUser = await prisma.user.create({
      data: {
        user_id: user.id,
        firstName: user.firstName ?? '',
        lastName: user.lastName ?? '',
        email: user.emailAddresses[0].emailAddress ?? '',
        dotComplianceScore: 50,
      },
    });
  }

  if (!tag) {
    await prisma.tag.create({
      data: {
        user_id: user.id,
        name: "Fuel and Tax",
        // Removed id: 1
      },
    });
  }

  
  if (!dbUser) {
    return new NextResponse(null, {
      status: 302, // 302 Found - temporary redirect
      headers: {
        Location: 'https://truck-docs-app.vercel.app/dashboard',
      },
    });
  }
    // Perform your Route Handler's logic with the returned user object
  
  return new NextResponse(null, {
    status: 302, // 302 Found - temporary redirect
    headers: {
      Location: 'https://truck-docs-app.vercel.app/dashboard',
    },
  });
  
  }