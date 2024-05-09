"use client";
import Sidebar from "@/components/Student/Sidebar";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";

export default function StudentHome() {
  // const { data: session } = useSession();
  return (
    <div>
      <Sidebar />
      <p>Hellow</p>
      {/* {session && (
        <span className="text-2xl traccking-normal py-10 font-semibold">
          {session.user?.name}
        </span>
      )} */}
    </div>
  );
}
