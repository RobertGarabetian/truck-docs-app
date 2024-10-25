import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <SignIn
        fallbackRedirectUrl="/dashboard"
        signUpFallbackRedirectUrl="/sign-up"
      />
    </div>
  );
}
