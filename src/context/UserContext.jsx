import React, { createContext, useState, useContext, useEffect } from "react";

const UserContext = createContext();
import { toast } from "sonner";

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const hardcodedUser = {
    username: "juliana.martinez",
    password: "Password123",
    firstname: "Juliana",
    lastname: "Martinez",
  };

  const login = (username, password) => {
    if (
      username === hardcodedUser.username &&
      password === hardcodedUser.password
    ) {
      toast.success("Sesión inciada correctamente.");
      setUser(hardcodedUser);
      localStorage.setItem("user", JSON.stringify(hardcodedUser));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    toast.success("Sesión cerrada. Esperamos verte pronto nuevamente.");
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
