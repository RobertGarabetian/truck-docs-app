import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <SignUp
        fallbackRedirectUrl="/sign-up"
        signInFallbackRedirectUrl="/dashboard"
      />
    </div>
  );
}
