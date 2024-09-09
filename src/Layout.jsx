import { Outlet, Link } from "react-router-dom";
import Header from "@/components/shared/header";
import Sidebar from "@/components/shared/sidebar";
import { useState } from "react";
import Footer from "@/components/shared/footer";

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <Header
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        toggleSidebar={toggleSidebar}
      />
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className="pt-14 md:ml-[220px] lg:ml-[300px] bg-gray-100">
        <div className="p-3 md:p-5 lg:p-6 min-h-svh">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
