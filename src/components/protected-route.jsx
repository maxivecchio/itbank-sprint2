import React from "react";
import { Navigate } from "react-router-dom";
import { useUser } from "@/context/UserContext";

const ProtectedRoute = ({ element, auth = true, redirect = "/login" }) => {
  const { user } = useUser();

  if (auth && !user) {
    return <Navigate to={redirect} />;
  }

  if (!auth && user) {
    return <Navigate to={redirect} />;
  }

  return element;
};

export default ProtectedRoute;
