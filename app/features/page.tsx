// /features/page.tsx

import React from "react";

const features = [
  {
    title: "Upload Documents",
    description: "Quickly upload all your documents in one place.",
    icon: "/icons/upload.svg",
  },
  {
    title: "Organized Storage",
    description: "Keep your documents neatly organized and accessible.",
    icon: "/icons/organize.svg",
  },
  {
    title: "Deadline Reminders",
    description: "Receive SMS reminders for important filing deadlines.",
    icon: "/icons/reminders.svg",
  },
  {
    title: "Document Sharing",
    description:
      "Seamlessly share specific documents via a secure link with employers, inspectors, insurance agents, and 3rd parties.",
    icon: "/icons/sharing.svg",
  },
  {
    title: "Customizable Folders",
    description:
      'Organize documents by categories like "Insurance," "Permits," "Vehicle Registration," and more.',
    icon: "/icons/folders.svg",
  },
  {
    title: "Compliance Tracking",
    description:
      "Track important FMCSA and DOT regulations and deadlines to keep compliant.",
    icon: "/icons/compliance.svg",
  },
];

const FeaturesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r bg-blue-500 text-white w-full">
      <div className="container mt-[60px] mx-auto px-6 py-16">
        <h1 className="text-5xl font-bold text-center mb-12">
          Experience the Future of Document Management
        </h1>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-10 p-8 rounded-xl shadow-lg transform hover:scale-105 transition-transform"
            >
              <div className="flex items-center mb-4">
                {/* <img
                  src={feature.icon}
                  alt={feature.title}
                  className="h-12 w-12 mr-4"
                /> */}
                <h2 className="text-2xl font-semibold">{feature.title}</h2>
              </div>
              <p className="mb-4">{feature.description}</p>
              {/* Additional text */}
              <p className="text-sm text-gray-200">
                {getAdditionalText(feature.title)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

function getAdditionalText(title: string): string {
  switch (title) {
    case "Upload Documents":
      return "Drag and drop files or select from your computer. It's that simple!";
    case "Organized Storage":
      return "Find what you need instantly with our intelligent categorization.";
    case "Deadline Reminders":
      return "Stay ahead of the game with alerts sent directly to your phone.";
    case "Document Sharing":
      return "Securely share with a click, no more email attachments.";
    case "Customizable Folders":
      return "Personalize your workspace to suit your business needs.";
    case "Compliance Tracking":
      return "Automatic updates on regulations so you never miss a beat.";
    default:
      return "";
  }
}

export default FeaturesPage;
