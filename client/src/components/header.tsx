import { ModeToggle } from "@/components/ui/ModeToggle";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div className=" mb-8">
      <ul>
        <li>
          <Link href="/login">Login</Link>
        </li>
        <li>
          <Link href="/register">Register</Link>
        </li>
      </ul>
      <ModeToggle />
    </div>
  );
}
