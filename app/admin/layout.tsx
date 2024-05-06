import Sidebar from "@/components/Admin/Sidebar";
import React from "react";

const Adminlayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Sidebar />
      <div className="h-full flex items-center justify-center z-1 relative">
        {children}
      </div>
    </div>
  );
};

export default Adminlayout;
