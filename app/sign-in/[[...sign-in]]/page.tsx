// import { SignIn } from "@clerk/nextjs";

// export default function Page() {
//   return (
//     <div className="w-screen h-screen flex flex-col justify-center items-center">
//       <SignIn
//         fallbackRedirectUrl="/dashboard"
//         signUpFallbackRedirectUrl="/sign-up"
//       />
//     </div>
//   );
// }
// app/sign-in/[[...sign-in]]/page.tsx
"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSignIn } from "@clerk/nextjs";
import SigninForm from "@/components/auth-stuff/SigninForm";

const Signin = () => {
  const { isLoaded, signIn, setActive } = useSignIn();
  const [clerkError, setClerkError] = useState("");
  const router = useRouter();

  const signInWithEmail = async ({
    emailAddress,
    password,
  }: {
    emailAddress: string;
    password: string;
  }) => {
    if (!isLoaded) {
      return;
    }

    try {
      const result = await signIn.create({
        identifier: emailAddress,
        password,
      });
      if (result.status === "complete") {
        console.log(result);
        await setActive({ session: result.createdSessionId });
        router.push("/");
      } else {
        console.log(result);
      }
    } catch (err: any) {
      console.log(JSON.stringify(err, null, 2));
      setClerkError(err.errors[0].message);
    }
  };

  return (
    <SigninForm signInWithEmail={signInWithEmail} clerkError={clerkError} />
  );
};

export default Signin;
