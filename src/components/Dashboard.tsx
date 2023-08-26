import { SignOut } from "@/components/SignOut";
import { useSession } from "next-auth/react";
import { MAIN_COLOR } from "@/colors";
import Image from "next/image";
import { Steps } from "@/components/Steps";

export const Dashboard = () => {
  const session = useSession();

  if (!session.data?.user) {
    return null;
  }

  return (
    <main className="lightBackground flex flex-col justify-center text-black">
      <div
        className="align-center padding-auto flex justify-end text-white"
        style={{
          backgroundColor: MAIN_COLOR,
          height: "75px",
          display: "flex",
          justifyContent: "space-between",
          paddingTop: "20px",
          paddingBottom: "20px",
          paddingLeft: "20px",
        }}
      >
        <Image
          src="/logo-transparent.png"
          alt="TeamScribe"
          width={200}
          height={50}
        />
        <div className="flex">
          <div
            className="margin-auto flex"
            style={{ marginTop: "auto", marginBottom: "auto" }}
          >
            Zalogowany jako {session.data?.user.name}
          </div>
          <SignOut />
        </div>
      </div>
      <div
        className="shadow-md"
        style={{
          width: "calc(100%-40px)",
          backgroundColor: "white",
          height: "80vh",
          margin: "20px",
          padding: "40px",
          paddingLeft: "100px",
        }}
      >
        <Steps />
      </div>
    </main>
  );
};
