// components/Navbar.tsx
"use client";

import Link from "next/link";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { UserButton } from "@clerk/nextjs";

export default function Navbar() {
  return (
    <nav
      className={` z-50 shadow fixed bg-teal-600 w-screen flex justify-center items-center`}
    >
      <div className="container px-4 py-4 flex justify-between items-center">
        <Link href={"/"} className=" text-2xl font-bold text-white">
          TruckDocs
        </Link>

        <div className="flex items-center space-x-4 text-white">
          <Link href="/features" className="hover:underline">
            Features
          </Link>
          <Link href="/pricing" className="hover:underline">
            Pricing
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
          <SignedIn>
            <Link href="/dashboard" className="hover:underline">
              Dashboard
            </Link>

            <UserButton
              appearance={{
                elements: {
                  userButtonAvatarBox: "size-6",
                },
              }}
            />
          </SignedIn>
          <SignedOut>
            <Link href="/sign-in" className="hover:underline">
              Sign In
            </Link>
            <Link
              href="/sign-up"
              className="bg-transparent text-white px-4 py-2 border border-white rounded-2xl hover:text-teal-600 hover:bg-white transition-colors"
            >
              Sign Up
            </Link>
          </SignedOut>
        </div>
      </div>
    </nav>
  );
}
