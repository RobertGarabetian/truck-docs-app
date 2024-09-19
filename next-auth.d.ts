// next-auth.d.ts
import NextAuth, { DefaultSession, DefaultUser } from 'next-auth';

declare module 'next-auth' {
  interface User extends DefaultUser {
    id: string;
    // Add other custom properties if needed
  }

  interface Session extends DefaultSession {
    user: {
      id: string;
      email?: string | null;
      name?: string | null;
      image?: string | null;
      // Add other custom properties if needed
    };
  }

  interface JWT {
    id: string;
    // Add other custom properties if needed
  }
}
