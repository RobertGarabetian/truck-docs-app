// app/login/page.tsx
"use client";

import { signIn } from "next-auth/react";
import React from "react";

export default function LoginPage() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = await signIn("credentials", {
      redirect: true,
      email,
      password,
      callbackUrl: "/dashboard",
    });

    // Handle sign-in errors if needed
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100">
      {/* Similar form structure as SignUpPage */}
    </main>
  );
}
