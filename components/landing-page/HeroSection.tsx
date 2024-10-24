"use client";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <motion.h1
          className="text-5xl font-extrabold mb-4 mt-16 text-gray-900"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Simplify Your Trucking Document Management
        </motion.h1>
        <motion.p
          className="text-2xl mb-8 text-gray-600"
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
            className="bg-teal-600 text-white py-3 px-8 rounded-md font-semibold hover:bg-teal-700 transition-all duration-300 inline-flex items-center group"
          >
            Get Started
            <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
