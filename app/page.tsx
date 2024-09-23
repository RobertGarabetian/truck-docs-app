// app/page.tsx
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-gray-100 w-full">
      <div className="h-[60px] w-full bg-blue-600" />
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">
            Simplify Your Trucking Document Management
          </h1>
          <p className="text-xl mb-8">
            Upload, organize, and never miss a filing deadline again.
          </p>
          <a
            href="/signup"
            className="bg-white text-blue-600 py-3 px-6 rounded-full font-semibold hover:bg-gray-200"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold text-center mb-12">
            Why Choose TruckDocs?
          </h2>
          <div className="flex flex-wrap">
            {/* Feature 1 */}
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Image
                  src="/icons/upload.svg"
                  alt="Upload Documents"
                  width={48}
                  height={48}
                  className="h-12 mb-4 mx-auto"
                />
                <h3 className="text-xl font-semibold mb-2 text-center">
                  Easy Document Upload
                </h3>
                <p className="text-gray-600 text-center">
                  Quickly upload all your documents in one place.
                </p>
              </div>
            </div>
            {/* Feature 2 */}
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Image
                  src="/icons/organize.svg"
                  alt="Organize"
                  width={48}
                  height={48}
                  className="h-12 mb-4 mx-auto"
                />
                <h3 className="text-xl font-semibold mb-2 text-center">
                  Organized Storage
                </h3>
                <p className="text-gray-600 text-center">
                  Keep your documents neatly organized and accessible.
                </p>
              </div>
            </div>
            {/* Feature 3 */}
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Image
                  src="/icons/reminder.svg"
                  alt="Reminders"
                  width={48}
                  height={48}
                  className="h-12 mb-4 mx-auto"
                />
                <h3 className="text-xl font-semibold mb-2 text-center">
                  Deadline Reminders
                </h3>
                <p className="text-gray-600 text-center">
                  Receive SMS reminders for important filing deadlines.
                </p>
              </div>
            </div>
            {/* Feature 4 */}
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Image
                  src="/icons/reminder.svg"
                  alt="Reminders"
                  width={48}
                  height={48}
                  className="h-12 mb-4 mx-auto"
                />
                <h3 className="text-xl font-semibold mb-2 text-center">
                  Document Sharing
                </h3>
                <p className="text-gray-600 text-center">
                  Seamlessly share specific documents via a secure link with
                  employers, inspectors, insurance agents, 3rd parties etc..
                </p>
              </div>
            </div>
            {/* Feature 5 */}
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Image
                  src="/icons/reminder.svg"
                  alt="Reminders"
                  width={48}
                  height={48}
                  className="h-12 mb-4 mx-auto"
                />
                <h3 className="text-xl font-semibold mb-2 text-center">
                  Customizable Folders
                </h3>
                <p className="text-gray-600 text-center">
                  Users can organize documents by categories like "Insurance,"
                  "Permits," "Vehicle Registration," and more.
                </p>
              </div>
            </div>
            {/* Feature 6 */}
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Image
                  src="/icons/organize.svg"
                  alt="Organize"
                  width={48}
                  height={48}
                  className="h-12 mb-4 mx-auto"
                />
                <h3 className="text-xl font-semibold mb-2 text-center">
                  Compliance Tracking
                </h3>
                <p className="text-gray-600 text-center">
                  Track important FMCSA and DOT regulations and deadlines to
                  keep compliant{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Simplify Your Workflow?
          </h2>
          <a
            href="/signup"
            className="bg-white text-blue-600 py-3 px-6 rounded-full font-semibold hover:bg-gray-200"
          >
            Create an Account
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-400 py-6">
        <div className="container mx-auto px-6 text-center">
          <p>
            &copy; {new Date().getFullYear()} TruckDocs. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
