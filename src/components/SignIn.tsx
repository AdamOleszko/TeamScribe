"use client";
import { signIn } from "next-auth/react";
import { SiGoogle, SiMaildotru } from "react-icons/si";

export function SignIn() {
  return (
    <>
      <button
        className="text-dark-200 mb-4 flex rounded-md bg-white px-4 py-3 align-middle text-sm font-semibold text-black shadow-md transition-all "
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onClick={() => signIn("google")}
      >
        <SiGoogle style={{ margin: "auto" }} color="#DB4437" />
        <div className="ml-3">Sign in with Google</div>
      </button>
      <button
        className="mb-4 flex rounded-md bg-blue-700 px-4 py-3 align-middle text-sm font-semibold text-neutral-200 shadow-md transition-all hover:text-white "
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onClick={() => signIn("email", {}, {})}
      >
        <SiMaildotru style={{ margin: "auto" }} />
        <div className="ml-3">Sign in with magic link</div>
      </button>
    </>
  );
}
