import React, { createContext, useState } from "react";
// Crear contextos individuales con valores por defecto
var IdCelularUnoContext = createContext(undefined);
var IdCelularDosContext = createContext(undefined);
var IdTelefonoContext = createContext(undefined);
var IdCorreoContext = createContext(undefined);
// Crear un provider combinado
var ContactoProvider = function (_a) {
    var children = _a.children;
    var _b = useState(""), idCelularUno = _b[0], setIdCelularUno = _b[1];
    var _c = useState(""), idCelularDos = _c[0], setIdCelularDos = _c[1];
    var _d = useState(""), idTelefono = _d[0], setIdTelefono = _d[1];
    var _e = useState(""), idCorreo = _e[0], setIdCorreo = _e[1];
    return (React.createElement(IdCelularUnoContext.Provider, { value: { idCelularUno: idCelularUno, setIdCelularUno: setIdCelularUno } },
        React.createElement(IdCelularDosContext.Provider, { value: {
                idCelularDos: idCelularDos,
                setIdCelularDos: setIdCelularDos,
            } },
            React.createElement(IdTelefonoContext.Provider, { value: { idTelefono: idTelefono, setIdTelefono: setIdTelefono } },
                React.createElement(IdCorreoContext.Provider, { value: { idCorreo: idCorreo, setIdCorreo: setIdCorreo } }, children)))));
};
export { IdCelularUnoContext, IdCelularDosContext, IdTelefonoContext, IdCorreoContext, };
export { ContactoProvider };
//# sourceMappingURL=ContactoContext.js.map