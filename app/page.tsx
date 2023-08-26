'use client'
import { SignIn, SignOut } from "./Actions";
import { getServerSession } from "next-auth/next";
import Image from "next/image";
import Form from "./Form";
import { type Session } from "next-auth";
import {useSession} from "next-auth/react";



export default function Home() {
  const session = useSession()
  let posts;

  // try {
  //   const [postsRes] = await Promise.allSettled([
  //     getPosts(),
  //     // getServerSession(authOptions),
  //   ]);
  //
  //   if (postsRes.status === "fulfilled" && postsRes.value[0]) {
  //     posts = postsRes.value;
  //   } else {
  //     console.error(postsRes);
  //   }
  //
  //   // if (sessionRes.status === "fulfilled") {
  //   //   session = sessionRes.value;
  //   // } else {
  //   //   console.error(sessionRes);
  //   // }
  // } catch (error) {
  //   console.error(error);
  // }

  console.log({session})

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
        <div className="container flex flex-col items-center justify-center gap-10 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
            Our <span className="text-[hsl(280,100%,70%)]">BLOG</span> App
          </h1>
          <div className="flex flex-col items-center justify-center gap-1">
            {session?.data?.user ? (
              <>
                Zalogowany jako {session.data?.user.name}
                <SignOut />
                <Form />
              </>
            ) : (
              <SignIn />
            )}
          </div>
          <div className="flex max-w-md flex-col items-center justify-center gap-5">
            {/*{posts?.map((post) => (*/}
            {/*  <div*/}
            {/*    key={post.id}*/}
            {/*    className="flex flex-row items-center justify-center gap-2"*/}
            {/*  >*/}
            {/*    <h2 className="text-sm">{post.author?.name}:</h2>*/}
            {/*    <p className="break-all text-sm font-bold">{post.title}</p>*/}
            {/*    /!*{session?.user.email === post.author?.email && (*!/*/}
            {/*    /!*  <Delete id={post.id} />*!/*/}
            {/*    /!*)}*!/*/}
            {/*  </div>*/}
            {/*))}*/}
          </div>
        </div>
      </main>
    </>
  );
}
