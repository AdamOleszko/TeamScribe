"use client";
import { signOut } from "next-auth/react";

export function SignOut() {
  return (
    <button
      className="ml-10 mr-10 text-xs text-white hover:text-[hsl(280,100%,70%)]"
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      onClick={() => signOut()}
    >
      → Wyloguj
    </button>
  );
}
