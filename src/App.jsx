import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layout";
import Home from "./pages/home";
import Cuentas from "./pages/cuentas";
import Transferencias from "./pages/transferencias";
import Conversor from "./pages/Conversor";
import Configuracion from "./pages/configuracion";
import LoginForm from "./pages/LoginForm";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/login" element={<LoginForm />} />
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/cuentas" element={<Cuentas />} />
            <Route path="/transferencias" element={<Transferencias />} />
            <Route path="/conversor" element={<Conversor />} />
            <Route path="/configuracion" element={<Configuracion />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
