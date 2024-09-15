import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useUser } from "@/context/UserContext";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useUser();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!login(username, password)) {
      setError("Usuario o contraseña incorrectos");
    } else {
      navigate("/");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-700">
    <div className="relative flex flex-col m-6 space-y-8 bg-black shadow-2xl rounded-2xl md:flex-row md:space-y-0 w-full max-w-5xl">
      <div className="flex flex-col justify-center p-8 md:p-14 w-full md:max-w-md">
        <div className="flex">
          <img className="h-6 w-12" src="/logo.webp" alt="Rossum Logo" />
          <span className="font-bold ml-2 text-lg hidden md:inline-block text-white">
            <span className="logo_name text-white">Rossum | </span>HomeBanking
          </span>
        </div>

        {/* Formulario de inicio de sesión */}
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="my-2">
            <Label htmlFor="user" className="text-white">Usuario</Label>
            <Input 
              id="user" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              required 
            />
          </div>
          <div className="my-2">
            <Label htmlFor="password" className="text-white">Contraseña</Label>
            <Input 
              type="password" 
              id="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <Button type="submit" className="mt-4">Iniciar sesión</Button>
        </form>
      </div>

      <div className="relative">
        <img
          src="/src/assets/imagen de oficina.avif"
          alt="img"
          className="h-full w-full hidden rounded-r-2xl md:block object-cover"
        />
      </div>
    </div>
  </div>
  );
}

export default LoginForm;
