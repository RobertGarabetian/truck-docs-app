// app/signup/page.tsx
"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

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
    <main className="flex items-center justify-center min-h-screen bg-gray-100 w-full">
      <div className="w-full max-w-md p-8 bg-white rounded shadow">
        <h1 className="text-2xl font-bold text-center mb-6">Sign Up</h1>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          {/* Company Name */}
          <div className="mb-4">
            <label htmlFor="companyName" className="block text-gray-700 mb-2">
              Company Name
            </label>
            <input
              type="text"
              id="companyName"
              {...register("companyName")}
              className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring ${
                errors.companyName
                  ? "border-red-500"
                  : "border-gray-300 focus:border-blue-300"
              }`}
            />
            {errors.companyName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.companyName.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              {...register("email")}
              className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring ${
                errors.email
                  ? "border-red-500"
                  : "border-gray-300 focus:border-blue-300"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              {...register("password")}
              className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring ${
                errors.password
                  ? "border-red-500"
                  : "border-gray-300 focus:border-blue-300"
              }`}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Confirm Password */}
          <div className="mb-6">
            <label
              htmlFor="confirmPassword"
              className="block text-gray-700 mb-2"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              {...register("confirmPassword")}
              className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring ${
                errors.confirmPassword
                  ? "border-red-500"
                  : "border-gray-300 focus:border-blue-300"
              }`}
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          {/* Error Message */}
          {error && (
            <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500 transition-colors"
          >
            Sign Up
          </button>
        </form>

        {/* Sign In Link */}
        <p className="text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-blue-600 hover:underline">
            Sign In
          </a>
        </p>
      </div>
    </main>
  );
}
