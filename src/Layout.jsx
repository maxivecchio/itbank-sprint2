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
      <Header
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        toggleSidebar={toggleSidebar}
      />
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className="pt-14 md:ml-[220px] lg:ml-[300px]">
        <div className="p-3 md:p-5 lg:p-6">
          <Outlet />
        </div>
        <footer className="p-4 text-center border-t">
          <p>&copy; 2024 Banco Rossum. Todos los derechos reservados</p>
        </footer>
      </div>
    </>
  );
};

export default Layout;
