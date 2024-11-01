import React from "react";
import ClientSidebar from "@/components/ui/AdminLayout/ClientSidebar";

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen overflow-hidden relative bg-zinc-900 ">
      <ClientSidebar />
      <main className="flex-1 overflow-y-auto transition-all duration-300">
        <div>{children}</div>
      </main>
    </div>
  );
};

export default Layout;
