import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHouse, FaArrowRightArrowLeft, FaMoneyBill, FaCalculator  } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";

const Sidebar = () => {
  const location = useLocation();
  const { pathname } = location;

  const links1 = [
    {
      name: "Inicio",
      url: "/",
      icon: <FaHouse />,
    },
    {
      name: "Cuentas",
      url: "/cuentas",
      icon: <FaMoneyBill  />,
    },
    {
      name: "Transferencias",
      url: "/transferencias",
      icon: <FaArrowRightArrowLeft />,
    },
    {
      name: "Conversor",
      url: "/conversor",
      icon: <FaCalculator  />,
    },
  ];

  const links2 = [
    {
      name: "Configuración",
      url: "/configuracion",
      icon: <IoMdSettings />,
    },
  ];

  return (
    <aside className="w-[300px] fixed bg-gray-200 mt-14 h-[calc(100vh-56px)] p-3">
      <nav className="flex flex-col justify-between h-full">
        <div className="flex flex-col gap-1.5">
          {links1.map((link, index) => (
            <Link key={index} to={link.url}>
              <div
                className={`${
                  pathname === link.url
                    ? "bg-primary text-primary-foreground"
                    : "bg-gray-300"
                } rounded-lg py-0.5 px-3 w-full flex items-center gap-1.5`}
              >
                {link.icon}
                {link.name}
              </div>
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-1.5">
          {links2.map((link, index) => (
            <Link key={index} to={link.url}>
              <div
                className={`${
                  pathname === link.url
                    ? "bg-primary text-primary-foreground"
                    : "bg-gray-300"
                } rounded-lg py-0.5 px-3 w-full flex items-center gap-1.5`}
              >
                {link.icon}
                {link.name}
              </div>
            </Link>
          ))}
        </div>

        {/* <ul>
              <li>
                <a href="inicio.html">
                  <i className="fa-solid fa-house fa-icon"></i> Inicio
                </a>
              </li>
              <li>
                <a href="cuentas.html">
                  <i className="fa-solid fa-money-bill fa-icon"></i> Cuentas
                </a>
              </li>
              <li>
                <a href="transferencias.html">
                  <i className="fa-solid fa-arrow-right-arrow-left fa-icon"></i>
                  Transferencias
                </a>
              </li>
              <li>
                <a href="conversor.html">
                  <i className="fa-solid fa-calculator fa-icon"></i> Conversor
                </a>
              </li>
            </ul> */}
      </nav>
      {/*  <nav>
            <ul>
              <li>
                <a href="configuracion.html">
                  <i className="fa-solid fa-gear fa-icon"></i> Configuración
                </a>
              </li>
            </ul>
          </nav> */}
    </aside>
  );
};

export default Sidebar;
