// /contact/page.tsx
"use client";
import React, { useState } from "react";

const ContactPage: React.FC = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // TODO: Implement form submission logic, e.g., send data to an API route
    // Example using fetch:
    /*
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setSubmitted(true);
    } else {
      // Handle error
      console.error('Error submitting form');
    }
    */

    // For now, we'll just simulate a successful submission
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center w-full">
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-5xl font-bold text-center mb-12">Contact Us</h1>
        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="max-w-lg mx-auto bg-white p-8 rounded-xl shadow-lg"
          >
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block text-gray-700 font-semibold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-white border border-gray-300 p-3 rounded outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-gray-700 font-semibold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border bg-white border-gray-300 p-3 rounded outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-gray-700 font-semibold mb-2"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full border bg-white border-gray-300 p-3 rounded outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-3 rounded hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        ) : (
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Thank You!</h2>
            <p className="text-lg">
              Your message has been sent. We'll get back to you soon.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactPage;
