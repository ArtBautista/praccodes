"use client";

import React from "react";
import { useSession } from "next-auth/react";
const AdminHome = () => {
  const { data: session } = useSession();
  return (
    <div>
      {session && (
        <span className="text-2xl traccking-normal py-10 font-semibold">
          {session.user?.name}
          {session.user?.email}
        </span>
      )}
    </div>
  );
};

export default AdminHome;
