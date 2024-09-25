// /app/dashboard/layout.tsx
"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const { data: session } = useSession();

  return (
    <div className="flex h-screen w-screen">
      {/* Side Navigation */}
      <nav className="w-64 bg-white text-black flex flex-col border-r-2 border-blue-400 p-4 space-y-4">
        <ul className=" flex-1 menu  rounded-box bg-transparent">
          <li className="space-y-4">
            <Link
              href={session ? "/dashboard" : "/"}
              className=" menu-title text-xl font-bold text-blue-600"
            >
              TruckDocs
            </Link>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/dashboard"
                  className={`block py-2.5 px-4 hover:bg-slate-300 `}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard/documents"
                  className={`block py-2.5 px-4 hover:bg-slate-300 `}
                >
                  Documents
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard/settings"
                  className={`block py-2.5 px-4 hover:bg-slate-300 `}
                >
                  Settings
                </Link>
              </li>
              <li>
                <button
                  onClick={() => signOut()}
                  className={`block py-2.5 px-4 hover:bg-slate-300 `}
                >
                  Logout
                </button>
              </li>
            </ul>
          </li>
          {/* Add more navigation items here */}
        </ul>
        <div className="p-6"></div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 p-8 bg-slate-200 overflow-auto">{children}</main>
    </div>
  );
}
