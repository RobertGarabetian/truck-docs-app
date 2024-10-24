import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Providers from "./Providers";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "@/app/api/uploadthing/core";
import NavbarWrapper from "@/components/NavbarWrapper";

import { ClerkProvider } from "@clerk/nextjs";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// app/layout.tsx
export const metadata: Metadata = {
  title: "TruckDocs - Simplify Your Document Management",
  description:
    "Upload, organize, and manage all your trucking documents with ease.",
  keywords: [
    "trucking",
    "document management",
    "upload",
    "organize",
    "reminders",
  ],
  authors: [{ name: "Your Company Name" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // List of paths where navbar should not appear

  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <NextSSRPlugin
            /**
             * The `extractRouterConfig` will extract **only** the route configs
             * from the router to prevent additional information from being
             * leaked to the client. The data passed to the client is the same
             * as if you were to fetch `/api/uploadthing` directly.
             */
            routerConfig={extractRouterConfig(ourFileRouter)}
          />
          <Providers>
            <div className="flex flex-col items-center w-screen">
              <NavbarWrapper />
              {children}
            </div>
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
