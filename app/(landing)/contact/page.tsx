"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, User, Mail, MessageSquare } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
    // Here you would typically send the form data to your backend
    // For this example, we'll just simulate a successful submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col justify-center items-center container mx-auto px-4 py-16 h-screen">
      <Card className="max-w-md mx-auto w-1/2">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            Contact Us
          </CardTitle>
        </CardHeader>
        <CardContent>
          {!submitted ? (
            <motion.form
              onSubmit={handleSubmit}
              className="space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                  <Input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your Name"
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Message
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                  <Textarea
                    name="message"
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Your message here..."
                    rows={5}
                    className="pl-10"
                  />
                </div>
              </div>
              <Button type="submit" className="w-full">
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </motion.form>
          ) : (
            <motion.div
              className="text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <CheckCircle className="mx-auto mb-4 h-12 w-12 text-green-500" />
              <h2 className="text-2xl font-semibold mb-2">Thank You!</h2>
              <p className="text-gray-600">
                Your message has been sent. We&apos;ll get back to you soon.
              </p>
            </motion.div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactPage;
