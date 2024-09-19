// components/Navbar.tsx
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link className="text-xl font-bold text-blue-600" href="/">
          TruckDocs
        </Link>
        <nav className="space-x-4">
          <Link className="text-gray-600 hover:text-blue-600" href="/features">
            Features
          </Link>
          <Link className="text-gray-600 hover:text-blue-600" href="/pricing">
            Pricing{" "}
          </Link>
          <Link className="text-gray-600 hover:text-blue-600" href="/contact">
            Contact
          </Link>
          <Link className="text-gray-600 hover:text-blue-600" href="/login">
            Login
          </Link>
          <Link
            className="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-500"
            href="/signup"
          >
            Sign Up
          </Link>
        </nav>
      </div>
    </header>
  );
}
