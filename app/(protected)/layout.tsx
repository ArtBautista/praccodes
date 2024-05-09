import { auth } from "@/auth";
import { SessionProvider, useSession } from "next-auth/react";
import React from "react";

interface protectedLayoutProps {
  children: React.ReactNode;
}
export default async function settingsLayout({
  children,
}: protectedLayoutProps) {
  const session = await auth();

  return (
    <div className="h-full w-full flex flex-col gap-y-10 items-center justify-center bg-odsYellow">
      <SessionProvider session={session}>{children}</SessionProvider>
    </div>
  );
}
