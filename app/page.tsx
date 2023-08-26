"use client";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { SignIn } from "@/components/SignIn";
import { Dashboard } from "@/components/Dashboard";

export default function Home() {
  const session = useSession();
  console.log({ session });

  return session?.data?.user ? (
    <Dashboard />
  ) : (
    <main className="mainBackground flex min-h-screen flex-col items-center justify-center text-white">
      <div className="container flex flex-col items-center justify-center gap-10 px-4 py-16 ">
        <Image
          src="/logo-transparent.png"
          alt="TeamScribe"
          width={500}
          height={200}
        />

        <div
          className="flex flex-col items-center justify-center gap-1"
          style={{ marginBottom: "50px" }}
        >
          Tu będzie jakiś tekst
        </div>
        <div className="flex flex-col items-center justify-center gap-1">
          <SignIn />
        </div>
      </div>
    </main>
  );
}
