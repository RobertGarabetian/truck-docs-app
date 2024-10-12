// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// import {
//   Upload,
//   FolderOpen,
//   Bell,
//   Share2,
//   Folder,
//   ShieldCheck,
//   ChevronRight,
// } from "lucide-react";
// import Link from "next/link";

// const features = [
//   {
//     title: "Easy Document Upload",
//     description: "Quickly upload all your documents in one place.",
//     icon: Upload,
//     color: "from-purple-400 to-pink-600",
//   },
//   {
//     title: "Organized Storage",
//     description: "Keep your documents neatly organized and accessible.",
//     icon: FolderOpen,
//     color: "from-green-400 to-cyan-500",
//   },
//   {
//     title: "Deadline Reminders",
//     description: "Receive SMS reminders for important filing deadlines.",
//     icon: Bell,
//     color: "from-yellow-400 to-orange-500",
//   },
//   {
//     title: "Document Sharing",
//     description:
//       "Seamlessly share specific documents via a secure link with employers, inspectors, insurance agents, and more.",
//     icon: Share2,
//     color: "from-blue-400 to-indigo-600",
//   },
//   {
//     title: "Customizable Folders",
//     description:
//       'Organize documents by categories like "Insurance," "Permits," "Vehicle Registration," and more.',
//     icon: Folder,
//     color: "from-red-400 to-pink-600",
//   },
//   {
//     title: "Compliance Tracking",
//     description:
//       "Track important FMCSA and DOT regulations and deadlines to stay compliant.",
//     icon: ShieldCheck,
//     color: "from-teal-400 to-green-500",
//   },
// ];

// export default function Home() {
//   return (
//     <main className="bg-gradient-to-br from-gray-900 to-gray-800 text-white min-h-screen w-screen">
//       {/* Hero Section */}
//       <section className="py-20 relative overflow-hidden">
//         <div className="container mx-auto px-6 text-center relative z-10">
//           <motion.h1
//             className="text-5xl font-extrabold mb-4 mt-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 h-16"
//             initial={{ opacity: 0, y: -50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             Simplify Your Trucking Document Management
//           </motion.h1>
//           <motion.p
//             className="text-3xl mb-8 text-gray-300 font-bold"
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//           >
//             Upload, organize, and never miss a filing deadline again.
//           </motion.p>
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//           >
//             <Link
//               href="/signup"
//               className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-8 rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center group"
//             >
//               Get Started
//               <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
//             </Link>
//           </motion.div>
//         </div>
//         <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
//           {[...Array(5)].map((_, i) => (
//             <motion.div
//               key={i}
//               className="absolute bg-white rounded-full opacity-10"
//               style={{
//                 width: Math.random() * 300 + 50,
//                 height: Math.random() * 300 + 50,
//                 top: `${Math.random() * 100}%`,
//                 left: `${Math.random() * 100}%`,
//               }}
//               animate={{
//                 y: [0, Math.random() * 100 - 50],
//                 x: [0, Math.random() * 100 - 50],
//                 scale: [1, Math.random() + 0.5],
//               }}
//               transition={{
//                 duration: Math.random() * 10 + 10,
//                 repeat: Infinity,
//                 repeatType: "reverse",
//               }}
//             />
//           ))}
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="py-16 relative z-10">
//         <div className="container mx-auto px-6">
//           <motion.h2
//             className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             Why Choose TruckDocs?
//           </motion.h2>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {features.map((feature, index) => (
//               <motion.div
//                 key={index}
//                 className={`bg-white bg-opacity-10 p-6 rounded-xl shadow-xl backdrop-blur-md`}
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//               >
//                 <div
//                   className={`mb-4 p-3 rounded-full bg-gradient-to-br ${feature.color} inline-block`}
//                 >
//                   <feature.icon className="h-6 w-6 text-white" />
//                 </div>
//                 <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
//                 <p className="text-gray-300">{feature.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Call to Action */}
//       <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
//         <div className="container mx-auto px-6 text-center relative z-10">
//           <motion.h2
//             className="text-3xl font-bold mb-4"
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             Ready to Simplify Your Workflow?
//           </motion.h2>
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//           >
//             <Link
//               href="/signup"
//               className="bg-white text-blue-600 py-3 px-8 rounded-full font-semibold hover:bg-gray-200 transition-all duration-300 inline-flex items-center group"
//             >
//               Create an Account
//               <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
//             </Link>
//           </motion.div>
//         </div>
//         <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
//           {[...Array(2)].map((_, i) => (
//             <motion.div
//               key={i}
//               className="absolute bg-white rounded-full opacity-10"
//               style={{
//                 width: Math.random() * 200 + 50,
//                 height: Math.random() * 200 + 50,
//                 top: `${Math.random() * 100}%`,
//                 left: `${Math.random() * 100}%`,
//               }}
//               animate={{
//                 y: [0, Math.random() * 50 - 25],
//                 x: [0, Math.random() * 50 - 25],
//                 scale: [1, Math.random() + 0.5],
//               }}
//               transition={{
//                 duration: Math.random() * 5 + 5,
//                 repeat: Infinity,
//                 repeatType: "reverse",
//               }}
//             />
//           ))}
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-900 text-gray-400 py-8">
//         <div className="container mx-auto px-6 text-center">
//           <p>
//             &copy; {new Date().getFullYear()} TruckDocs. All rights reserved.
//           </p>
//         </div>
//       </footer>
//     </main>
//   );
// }

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
  Truck,
  Clock,
  FileText,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

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
    description:
      "Seamlessly share specific documents via a secure link with employers, inspectors, insurance agents, and more.",
    icon: Share2,
  },
  {
    title: "Customizable Folders",
    description:
      'Organize documents by categories like "Insurance," "Permits," "Vehicle Registration," and more.',
    icon: Folder,
  },
  {
    title: "Compliance Tracking",
    description:
      "Track important FMCSA and DOT regulations and deadlines to stay compliant.",
    icon: ShieldCheck,
  },
];

const testimonials = [
  {
    name: "John D.",
    role: "Owner-Operator",
    content:
      "TruckDocs has been a game-changer for my business. I used to struggle keeping track of all my paperwork, but now everything is organized and easily accessible.",
  },
  {
    name: "Sarah M.",
    role: "Fleet Manager",
    content:
      "Managing documentation for our entire fleet has never been easier. TruckDocs saves us time and helps us stay compliant with regulations.",
  },
  {
    name: "Mike R.",
    role: "Independent Trucker",
    content:
      "The deadline reminders have saved me from late fees more than once. It's like having a personal assistant keeping me on track.",
  },
];

export default function Home() {
  return (
    <main className="bg-gray-50 text-gray-900 min-h-screen w-screen">
      {/* Hero Section */}
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

      {/* Features Section */}
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

      {/* How It Works Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            How TruckDocs Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/placeholder.svg"
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
                      documents to your secure TruckDocs account.
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
                      retrieval when you need them most.
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
                      Get notifications about upcoming deadlines, expirations,
                      and required document updates.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-teal-100 rounded-full p-2 mr-4">
                    <Share2 className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      Share Securely
                    </h3>
                    <p className="text-gray-600">
                      Quickly share necessary documents with authorized parties
                      through secure, time-limited links.
                    </p>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Benefits for Truckers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Truck className="h-12 w-12 text-teal-600 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">
                More Time on the Road
              </h3>
              <p className="text-gray-600">
                Spend less time managing paperwork and more time driving and
                earning.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Clock className="h-12 w-12 text-teal-600 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">
                Avoid Costly Delays
              </h3>
              <p className="text-gray-600">
                Never be held up at checkpoints due to missing or expired
                documents.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <FileText className="h-12 w-12 text-teal-600 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Simplified Audits</h3>
              <p className="text-gray-600">
                Breeze through audits with all your documents organized and
                readily available.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <CheckCircle className="h-12 w-12 text-teal-600 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Peace of Mind</h3>
              <p className="text-gray-600">
                Rest easy knowing your important documents are secure and
                up-to-date.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md">
                <p className="text-gray-600 mb-4">"{testimonial.content}"</p>
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-sm text-gray-500">{testimonial.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-teal-600">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            className="text-3xl font-bold mb-4 text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Ready to Simplify Your Workflow?
          </motion.h2>
          <motion.p
            className="text-xl mb-8 text-teal-100"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Join thousands of truckers who have streamlined their document
            management with TruckDocs.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              href="/signup"
              className="bg-white text-teal-600 py-3 px-8 rounded-md font-semibold hover:bg-gray-100 transition-all duration-300 inline-flex items-center group"
            >
              Start Your Free Trial
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">
                TruckDocs
              </h3>
              <p className="mb-4">
                Simplifying document management for the trucking industry.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Testimonials
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
            <p>
              &copy; {new Date().getFullYear()} TruckDocs. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
