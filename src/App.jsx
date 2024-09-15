import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "@/Layout";
import Home from "@/pages/home";
import Cuentas from "@/pages/cuentas";
import Transferencias from "@/pages/transferencias";
import Conversor from "@/pages/Conversor";
import LoginForm from "@/pages/login";
import { UserProvider } from "@/context/UserContext";
import ProtectedRoute from "@/components/protected-route";
import { Toaster } from "@/components/ui/sonner";

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/login"
            element={
              <ProtectedRoute
                element={<LoginForm />}
                auth={false}
                redirect="/"
              />
            }
          />
          <Route path="/" element={<Layout />}>
            <Route index element={<ProtectedRoute element={<Home />} />} />
            <Route
              path="/cuentas"
              element={<ProtectedRoute element={<Cuentas />} />}
            />
            <Route
              path="/transferencias"
              element={<ProtectedRoute element={<Transferencias />} />}
            />
            <Route
              path="/conversor"
              element={<ProtectedRoute element={<Conversor />} />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster position="bottom-center" />
    </UserProvider>
  );
}

export default App;
