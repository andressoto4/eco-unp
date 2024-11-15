import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useIdAuth } from "../../Login/hooks/AuthHook";

const UserRoute: React.FC = () => {
  const { authToken, userToken } = useIdAuth();

  // Obtener el token directamente desde el localStorage si no está disponible en el contexto
  const token = userToken || localStorage.getItem("user_token");
  const auth = authToken || localStorage.getItem("access_token");

  if (!auth || !token) {
    return <Navigate to="/sistema/pagina-no-permitida" replace />;
  }

  return <Outlet />;
};

export default UserRoute;
