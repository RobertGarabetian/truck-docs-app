// components/Navbar.tsx
"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className={` z-50 shadow fixed bg-teal-600 w-screen`}>
      {/* <nav
      className={` z-50 shadow fixed bg-gradient-to-r from-blue-600 to-purple-600 w-screen`}
    > */}
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link
          href={session ? "/dashboard" : "/"}
          className=" text-2xl font-bold text-white"
        >
          TruckDocs
        </Link>

        <div className="space-x-4 text-white">
          <Link href="/features" className="hover:underline">
            Features
          </Link>
          <Link href="/pricing" className="hover:underline">
            Pricing
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
          {session ? (
            <>
              <Link href="/dashboard" className="hover:underline">
                Dashboard
              </Link>
              <button
                onClick={() => signOut()}
                className="bg-transparent text-white px-4 py-2 border border-white rounded-2xl hover:text-teal-600 hover:bg-white transition-colors"
              >
                Sign Out
              </button>
            </>
          ) : (
            <>
              <Link href="/login" className="hover:underline">
                Sign In
              </Link>
              <Link
                href="/signup"
                className="bg-transparent text-white px-4 py-2 border border-white rounded-2xl hover:text-teal-600 hover:bg-white transition-colors"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
