// middleware.ts
export { default } from 'next-auth/middleware';

export const config = {
  matcher: ['/dashboard/:path*'], // Protects /dashboard and its subpaths
};
