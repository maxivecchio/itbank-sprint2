import { Outlet, Link } from "react-router-dom";
import Header from "@/components/shared/header";
import Sidebar from "@/components/shared/sidebar";
import { useState } from "react";

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} toggleSidebar={toggleSidebar} />
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className="pt-14 ml-[300px]">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
