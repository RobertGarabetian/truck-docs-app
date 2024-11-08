"use client";
// import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="py-16 bg-teal-600">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4 text-white">
          Ready to Simplify Your Workflow?
        </h2>
        <p className="text-xl mb-8 text-teal-100">
          Join thousands of truckers who have streamlined their document
          management with TruckDocs.
        </p>
        <div>
          <Link
            href="/sign-up"
            className="bg-white text-teal-600 py-3 px-8 rounded-md font-semibold hover:bg-gray-100 transition-all duration-300 inline-flex items-center group"
          >
            Start Your Free Trial
            <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
