"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, User, Mail, MessageSquare } from "lucide-react";

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white flex items-center w-full overflow-hidden">
      <div className="container mx-auto px-6 py-12 relative z-10">
        <motion.h1
          className="text-6xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Get in Touch
        </motion.h1>
        {!submitted ? (
          <motion.form
            onSubmit={handleSubmit}
            className="max-w-lg mx-auto bg-white bg-opacity-10 p-8 rounded-xl shadow-lg backdrop-blur-md"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block text-white font-semibold mb-2 flex items-center"
              >
                <User className="mr-2" size={18} />
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-white bg-opacity-20 border border-gray-300 border-opacity-50 p-3 rounded outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-300"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-white font-semibold mb-2 flex items-center"
              >
                <Mail className="mr-2" size={18} />
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-white bg-opacity-20 border border-gray-300 border-opacity-50 p-3 rounded outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-300"
                placeholder="your@email.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-white font-semibold mb-2 flex items-center"
              >
                <MessageSquare className="mr-2" size={18} />
                Message
              </label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full bg-white bg-opacity-20 border border-gray-300 border-opacity-50 p-3 rounded outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-300"
                placeholder="Your message here..."
              ></textarea>
            </div>
            <motion.button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 rounded hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Send className="mr-2" size={18} />
              Send Message
            </motion.button>
          </motion.form>
        ) : (
          <motion.div
            className="text-center bg-white bg-opacity-10 p-8 rounded-xl shadow-lg backdrop-blur-md max-w-lg mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <CheckCircle className="mx-auto mb-4 text-green-400" size={48} />
            <h2 className="text-3xl font-bold mb-4">Thank You!</h2>
            <p className="text-lg">
              Your message has been sent. We&apos;ll get back to you soon.
            </p>
          </motion.div>
        )}
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
    </div>
  );
};

export default ContactPage;
