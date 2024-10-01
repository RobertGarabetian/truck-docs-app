"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Upload,
  FolderOpen,
  Bell,
  Share2,
  Folder,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";

const features = [
  {
    title: "Easy Document Upload",
    description: "Quickly upload all your documents in one place.",
    icon: Upload,
    color: "from-purple-400 to-pink-600",
  },
  {
    title: "Organized Storage",
    description: "Keep your documents neatly organized and accessible.",
    icon: FolderOpen,
    color: "from-green-400 to-cyan-500",
  },
  {
    title: "Deadline Reminders",
    description: "Receive SMS reminders for important filing deadlines.",
    icon: Bell,
    color: "from-yellow-400 to-orange-500",
  },
  {
    title: "Document Sharing",
    description:
      "Seamlessly share specific documents via a secure link with employers, inspectors, insurance agents, and more.",
    icon: Share2,
    color: "from-blue-400 to-indigo-600",
  },
  {
    title: "Customizable Folders",
    description:
      'Organize documents by categories like "Insurance," "Permits," "Vehicle Registration," and more.',
    icon: Folder,
    color: "from-red-400 to-pink-600",
  },
  {
    title: "Compliance Tracking",
    description:
      "Track important FMCSA and DOT regulations and deadlines to stay compliant.",
    icon: ShieldCheck,
    color: "from-teal-400 to-green-500",
  },
];

export default function Home() {
  return (
    <main className="bg-gradient-to-br from-gray-900 to-gray-800 text-white min-h-screen w-screen">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.h1
            className="text-5xl font-extrabold mb-4 mt-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 h-16"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Simplify Your Trucking Document Management
          </motion.h1>
          <motion.p
            className="text-3xl mb-8 text-gray-300 font-bold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Upload, organize, and never miss a filing deadline again.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              href="/signup"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-8 rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center group"
            >
              Get Started
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          {[...Array(5)].map((_, i) => (
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
      </section>

      {/* Features Section */}
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
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
                className={`bg-white bg-opacity-10 p-6 rounded-xl shadow-xl backdrop-blur-md`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div
                  className={`mb-4 p-3 rounded-full bg-gradient-to-br ${feature.color} inline-block`}
                >
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.h2
            className="text-3xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Ready to Simplify Your Workflow?
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Link
              href="/signup"
              className="bg-white text-blue-600 py-3 px-8 rounded-full font-semibold hover:bg-gray-200 transition-all duration-300 inline-flex items-center group"
            >
              Create an Account
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          {[...Array(2)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-white rounded-full opacity-10"
              style={{
                width: Math.random() * 200 + 50,
                height: Math.random() * 200 + 50,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, Math.random() * 50 - 25],
                x: [0, Math.random() * 50 - 25],
                scale: [1, Math.random() + 0.5],
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="container mx-auto px-6 text-center">
          <p>
            &copy; {new Date().getFullYear()} TruckDocs. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
