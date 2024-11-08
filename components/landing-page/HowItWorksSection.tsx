"use client";
import Image from "next/image";
import { Upload, Folder, Bell, Share2 } from "lucide-react";

export default function HowItWorksSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          How TruckDocs Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="https://utfs.io/f/TyvOmWdABc6GiinXK2qbJKGoCOxhAfnzm4lNyeVw7gLX9QaB"
              alt="TruckDocs Dashboard"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <ol className="space-y-6">
              <li className="flex items-start">
                <div className="bg-teal-100 rounded-full p-2 mr-4">
                  <Upload className="h-6 w-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    Upload Your Documents
                  </h3>
                  <p className="text-gray-600">
                    Easily scan and upload all your important trucking
                    documents.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-teal-100 rounded-full p-2 mr-4">
                  <Folder className="h-6 w-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    Organize and Categorize
                  </h3>
                  <p className="text-gray-600">
                    Sort your documents into custom categories for easy
                    retrieval.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-teal-100 rounded-full p-2 mr-4">
                  <Bell className="h-6 w-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    Receive Timely Reminders
                  </h3>
                  <p className="text-gray-600">
                    Get notifications about upcoming deadlines and expirations.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-teal-100 rounded-full p-2 mr-4">
                  <Share2 className="h-6 w-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Share Securely</h3>
                  <p className="text-gray-600">
                    Share documents with authorized parties through secure
                    links.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
