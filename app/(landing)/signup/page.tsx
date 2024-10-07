// app/signup/page.tsx
"use client";
import React, { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { User, Mail, Lock, CheckCircle } from "lucide-react";
import Link from "next/link";
const signupSchema = z
  .object({
    companyName: z.string().min(1, "Company name is required"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string().min(6, "Please confirm your password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type SignupFormInputs = z.infer<typeof signupSchema>;

export default function SignupPage() {
  const backgroundElements = useMemo(() => {
    return [...Array(5)].map((_, i) => ({
      key: i,
      style: {
        width: Math.random() * 300 + 50,
        height: Math.random() * 300 + 50,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
      },
      animate: {
        y: [0, Math.random() * 100 - 50],
        x: [0, Math.random() * 100 - 50],
        scale: [1, Math.random() + 0.5],
      },
      transition: {
        duration: Math.random() * 10 + 10,
        repeat: Infinity,
        repeatType: "reverse",
      },
    }));
  }, []);
  const router = useRouter();
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormInputs>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = async (data: SignupFormInputs) => {
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        body: JSON.stringify({
          companyName: data.companyName,
          email: data.email,
          password: data.password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.ok) {
        // Automatically sign in the user
        const signInResult = await signIn("credentials", {
          redirect: false,
          email: data.email,
          password: data.password,
        });

        if (signInResult?.error) {
          setError("Error signing in after registration.");
        } else {
          // Redirect to dashboard
          router.push("/dashboard");
        }
      } else {
        const errorData = await res.json();
        setError(errorData.error || "Registration failed");
      }
    } catch (err) {
      console.error("Registration Error:", err);
      setError("An unexpected error occurred");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white flex items-center justify-center w-full overflow-hidden">
      <div className="container mx-auto px-6 py-12 relative z-10">
        <motion.div
          className="max-w-md mx-auto bg-white bg-opacity-10 p-8 rounded-xl shadow-lg backdrop-blur-md"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Sign Up
          </h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="space-y-4"
          >
            <div>
              <label
                htmlFor="companyName"
                className=" text-white font-semibold mb-2 flex items-center"
              >
                <User className="mr-2" size={18} />
                Company Name
              </label>
              <input
                type="text"
                id="companyName"
                {...register("companyName")}
                className={`w-full bg-white bg-opacity-20 border border-gray-300 border-opacity-50 p-3 rounded outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-300`}
                placeholder="Your Company Name"
              />
              {errors.companyName && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.companyName.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className=" text-white font-semibold mb-2 flex items-center"
              >
                <Mail className="mr-2" size={18} />
                Email Address
              </label>
              <input
                type="email"
                id="email"
                {...register("email")}
                className={`w-full bg-white bg-opacity-20 border border-gray-300 border-opacity-50 p-3 rounded outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-300`}
                placeholder="your@email.com"
              />
              {errors.email && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="password"
                className=" text-white font-semibold mb-2 flex items-center"
              >
                <Lock className="mr-2" size={18} />
                Password
              </label>
              <input
                type="password"
                id="password"
                {...register("password")}
                className={`w-full bg-white bg-opacity-20 border border-gray-300 border-opacity-50 p-3 rounded outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-300`}
                placeholder="••••••••"
              />
              {errors.password && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className=" text-white font-semibold mb-2 flex items-center"
              >
                <CheckCircle className="mr-2" size={18} />
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                {...register("confirmPassword")}
                className={`w-full bg-white bg-opacity-20 border border-gray-300 border-opacity-50 p-3 rounded outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-300`}
                placeholder="••••••••"
              />
              {errors.confirmPassword && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            {error && (
              <p className="text-red-400 text-sm text-center">{error}</p>
            )}

            <motion.button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 rounded hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Sign Up
            </motion.button>
          </form>

          <p className="text-center text-gray-300 mt-6">
            Already have an account?{" "}
            <Link href="/login" className="text-blue-400 hover:underline">
              Sign In
            </Link>
          </p>
        </motion.div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        {backgroundElements.map((element) => (
          <motion.div
            key={element.key}
            className="absolute bg-white rounded-full opacity-10"
            style={element.style}
            animate={element.animate}
            transition={element.transition}
          />
        ))}
      </div>
    </div>
  );
}
