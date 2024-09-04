import { Outlet, Link } from "react-router-dom";
import Header from "@/components/shared/header";
import Sidebar from "@/components/shared/sidebar";

const Layout = () => {
  return (
    <>
      <Header />
      <Sidebar />

      <div className="pt-14 ml-[300px]">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
