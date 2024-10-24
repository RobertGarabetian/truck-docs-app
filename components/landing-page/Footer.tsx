"use client";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">TruckDocs</h3>
            <p className="mb-4">
              Simplifying document management for the trucking industry.
            </p>
          </div>
          {/* Additional footer sections */}
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>
            &copy; {new Date().getFullYear()} TruckDocs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
