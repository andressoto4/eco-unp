import React, { useMemo, useState, useContext } from "react";
import { AutenticacionContext } from "../contexts/AutenticacionContext";
var AutenticacionProvider = function (_a) {
    var children = _a.children;
    var _b = useState(localStorage.getItem("access_token")), token = _b[0], setToken_ = _b[1];
    var setToken = function (newToken) {
        setToken_(newToken);
    };
    var contextValue = useMemo(function () { return ({
        token: token,
        setToken: setToken,
    }); }, [token]);
    return (React.createElement(AutenticacionContext.Provider, { value: contextValue }, children));
};
var useAuth = function () {
    var context = useContext(AutenticacionContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
export { AutenticacionProvider, useAuth };
//# sourceMappingURL=AutenticacionProvider.js.map