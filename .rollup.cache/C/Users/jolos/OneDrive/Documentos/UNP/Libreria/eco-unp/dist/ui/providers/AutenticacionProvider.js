import React, { useMemo, useState, useContext } from "react";
import { AutenticacionContext } from "../context/AutenticacionContext";
const AutenticacionProvider = ({ children }) => {
    const [token, setToken_] = useState(localStorage.getItem("access_token"));
    const setToken = (newToken) => {
        setToken_(newToken);
    };
    const contextValue = useMemo(() => ({
        token,
        setToken,
    }), [token]);
    return (React.createElement(AutenticacionContext.Provider, { value: contextValue }, children));
};
const useAuth = () => {
    const context = useContext(AutenticacionContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
export { AutenticacionProvider, useAuth };
//# sourceMappingURL=AutenticacionProvider.js.map