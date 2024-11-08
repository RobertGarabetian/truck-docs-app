"use client";

import { FormEvent } from "react";
import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";

interface VerifyFormProps {
  handleVerify: (e: FormEvent) => void;
  code: string;
  setCode: (value: string) => void;
}

export default function VerifyForm({
  handleVerify,
  code,
  setCode,
}: VerifyFormProps) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 w-screen">
      <form onSubmit={handleVerify} className="space-y-6">
        <label
          htmlFor="otp"
          className="block text-sm font-medium text-gray-700"
        >
          Enter your OTP
        </label>
        <div className="mt-1">
          <InputOTP
            maxLength={6}
            value={code}
            id="code"
            name="code"
            onChange={setCode}
          >
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
        </div>
        <Button type="submit" className="w-full">
          Verify OTP
        </Button>
      </form>
    </div>
  );
}
