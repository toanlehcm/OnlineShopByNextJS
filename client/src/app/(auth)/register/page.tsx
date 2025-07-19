import React from "react";
import RegisterForm from "@/app/(auth)/register/RegisterForm";

export default function RegisterPage() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1>Register</h1>
      <RegisterForm />
    </div>
  );
}
