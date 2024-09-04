import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <header>
        <div className="logo">
          <img className="h-8" src="/logo.webp" alt="Rossum Logo" />
          <span>
            <span className="logo_name">Rossum | </span>HomeBanking
          </span>
        </div>
      </header>
      {/*       <aside>
        <div>
          <div>
            <nav>
              <ul>
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
              </ul>
            </nav>
            <nav>
              <ul>
                <li>
                  <a href="configuracion.html">
                    <i className="fa-solid fa-gear fa-icon"></i> Configuración
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </aside> */}

      <Outlet />
    </>
  );
};

export default Layout;
