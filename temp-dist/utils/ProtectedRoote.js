import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContex";
import { jwtDecode } from "jwt-decode";
var ProtectedRoote = function () {
    var _a = useAuth(), authToken = _a.authToken, userToken = _a.userToken;
    var location = useLocation();
    // Obtener el token directamente desde el localStorage si no está disponible en el contexto
    var token = userToken || localStorage.getItem('user_token');
    var auth = authToken || localStorage.getItem('access_token');
    if (!auth || !token) {
        return React.createElement(Navigate, { to: "/", replace: true });
    }
    var decodedToken;
    try {
        decodedToken = jwtDecode(token);
    }
    catch (error) {
        console.error("Error decoding token:", error);
        return React.createElement(Navigate, { to: "/", replace: true });
    }
    var accessUrls = decodedToken.access_url;
    var locationUrl = location.pathname;
    var formattedUrls = accessUrls.map(function (url) { return url.startsWith("/") ? url : "/".concat(url); });
    var formattedLocationUrl = locationUrl.startsWith("/") ? locationUrl : "/".concat(locationUrl);
    // Verificar si la ruta actual está en la lista de rutas permitidas
    if (!formattedUrls.includes(formattedLocationUrl)) {
        return React.createElement(Navigate, { to: "/sistema/pagina-no-permitida", replace: true });
    }
    return React.createElement(Outlet, null);
};
export default ProtectedRoote;
//# sourceMappingURL=ProtectedRoote.js.map