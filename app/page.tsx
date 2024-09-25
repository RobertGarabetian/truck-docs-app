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
              <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center space-y-3">
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-14 "
                >
                  <path d="M15 16H1L1 9H3L3 14H13V9H15L15 16Z" fill="#000000" />
                  <path
                    d="M12 6L9 6L9 1.74846e-07L7 0V6L4 6L4 7L8 11L12 7L12 6Z"
                    fill="#000000"
                  />
                </svg>
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
              <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center space-y-3">
                <svg
                  viewBox="0 0 16 16"
                  fill=""
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-14 "
                >
                  <path d="M1 5V3L8 0L15 3V5L8 8L1 5Z" fill="#000000" />
                  <path d="M8 16L1 13V11L8 14L15 11V13L8 16Z" fill="#000000" />
                  <path d="M1 9L8 12L15 9V7L8 10L1 7V9Z" fill="#000000" />
                </svg>
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
              <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col space-y-3 items-center">
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-14 "
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5 2H7V3.07645C3.88491 3.55745 1.5 6.25021 1.5 9.5C1.5 13.0899 4.41015 16 8 16C11.5899 16 14.5 13.0899 14.5 9.5C14.5 8.0659 14.0356 6.74027 13.2489 5.66531L14.7071 4.20711L13.2929 2.79289L11.8347 4.2511C11.0146 3.65097 10.0487 3.23838 9 3.07645V2H11V0H5V2ZM7 6V10H9V6H7Z"
                      fill="#000000"
                    ></path>{" "}
                  </g>
                </svg>
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
              <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col space-y-3 items-center">
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-14 "
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M0 5.3585V14H16V5.35849L8 10.3585L0 5.3585Z"
                      fill="#000000"
                    ></path>{" "}
                    <path d="M16 3V2H0V3L8 8L16 3Z" fill="#000000"></path>{" "}
                  </g>
                </svg>
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
              <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col space-y-3 items-center">
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-14"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M0 1H5L8 3H13V5H3.7457L2.03141 11H4.11144L5.2543 7H16L14 14H0V1Z"
                      fill="#000000"
                    ></path>{" "}
                  </g>
                </svg>
                <h3 className="text-xl font-semibold mb-2 text-center">
                  Customizable Folders
                </h3>
                <p className="text-gray-600 text-center">
                  Users can organize documents by categories like
                  &quot;Insurance,&quot; &quot;Permits,&quot; &quot;Vehicle
                  Registration,&quot; and more.
                </p>
              </div>
            </div>
            {/* Feature 6 */}
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col space-y-3 items-center">
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-14"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path d="M10 0H6V3H10V0Z" fill="#000000"></path>{" "}
                    <path d="M4 2H2V16H14V2H12V5H4V2Z" fill="#000000"></path>{" "}
                  </g>
                </svg>
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
