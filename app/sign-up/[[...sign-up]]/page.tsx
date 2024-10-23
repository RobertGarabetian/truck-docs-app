import { SignUp } from "@clerk/nextjs";
import { Divide } from "lucide-react";

export default function Page() {
  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen">
      <SignUp />
    </div>
  );
}
