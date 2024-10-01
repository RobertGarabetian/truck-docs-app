"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Hexagon,
  Upload,
  FolderOpen,
  Bell,
  Share2,
  Folder,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    title: "Upload Documents",
    description: "Quickly upload all your documents in one place.",
    icon: Upload,
    color: "from-blue-400 to-blue-600",
  },
  {
    title: "Organized Storage",
    description: "Keep your documents neatly organized and accessible.",
    icon: FolderOpen,
    color: "from-blue-400 to-blue-600",
  },
  {
    title: "Deadline Reminders",
    description: "Receive SMS reminders for important filing deadlines.",
    icon: Bell,
    color: "from-blue-400 to-blue-600",
  },
  {
    title: "Document Sharing",
    description:
      "Seamlessly share specific documents via a secure link with employers, inspectors, insurance agents, and 3rd parties.",
    icon: Share2,
    color: "from-blue-400 to-blue-600",
  },
  {
    title: "Customizable Folders",
    description:
      'Organize documents by categories like "Insurance," "Permits," "Vehicle Registration," and more.',
    icon: Folder,
    color: "from-blue-400 to-blue-600",
  },
  {
    title: "Compliance Tracking",
    description:
      "Track important FMCSA and DOT regulations and deadlines to keep compliant.",
    icon: ShieldCheck,
    color: "from-blue-400 to-blue-600",
  },
];

const FeaturesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white w-full overflow-hidden">
      <div className="container mx-auto px-6 py-16 relative z-10">
        <motion.h1
          className="text-6xl font-bold text-center my-16  bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Experience the Future of Document Management
        </motion.h1>
        <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={`relative overflow-hidden rounded-2xl shadow-xl`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-75`}
              ></div>
              <div className="relative p-8 h-full flex flex-col justify-between z-10">
                <div>
                  <div className="flex items-center mb-4">
                    <Hexagon className="h-12 w-12 mr-4 p-2 bg-white bg-opacity-20 rounded-lg" />
                    <h2 className="text-2xl font-semibold">{feature.title}</h2>
                  </div>
                  <p className="mb-4 text-lg">{feature.description}</p>
                </div>
                <p className="text-sm bg-black bg-opacity-30 p-3 rounded-lg">
                  {getAdditionalText(feature.title)}
                </p>
              </div>
              <feature.icon className="absolute bottom-4 right-4 h-32 w-32 text-white opacity-10" />
            </motion.div>
          ))}
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        {[...Array(0)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full opacity-10"
            style={{
              width: Math.random() * 300 + 50,
              height: Math.random() * 300 + 50,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 100 - 50],
              scale: [1, Math.random() + 0.5],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
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
