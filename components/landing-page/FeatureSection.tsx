"use client";
import { motion } from "framer-motion";
import {
  Upload,
  FolderOpen,
  Bell,
  Share2,
  Folder,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    title: "Easy Document Upload",
    description: "Quickly upload all your documents in one place.",
    icon: Upload,
  },
  {
    title: "Organized Storage",
    description: "Keep your documents neatly organized and accessible.",
    icon: FolderOpen,
  },
  {
    title: "Deadline Reminders",
    description: "Receive SMS reminders for important filing deadlines.",
    icon: Bell,
  },
  {
    title: "Document Sharing",
    description: "Seamlessly share specific documents via a secure link.",
    icon: Share2,
  },
  {
    title: "Customizable Folders",
    description: "Organize documents by categories like 'Insurance' and more.",
    icon: Folder,
  },
  {
    title: "Compliance Tracking",
    description: "Track important FMCSA and DOT regulations to stay compliant.",
    icon: ShieldCheck,
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl font-bold text-center mb-12 text-gray-900"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Why Choose TruckDocs?
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="mb-4 p-3 rounded-full bg-teal-100 inline-block">
                <feature.icon className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
