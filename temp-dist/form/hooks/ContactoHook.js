import React from "react";
import { IdCelularUnoContext, IdCelularDosContext, IdTelefonoContext, IdCorreoContext, } from "../contexts/ContactoContext";
// Hooks para usar los contextos
var useIdCelularUno = function () {
    var context = React.useContext(IdCelularUnoContext);
    if (context === undefined) {
        throw new Error("useIdCelularUno must be used within an ContactoProvider");
    }
    return context;
};
var useIdCelularDos = function () {
    var context = React.useContext(IdCelularDosContext);
    if (context === undefined) {
        throw new Error("useIdCelularDos must be used within an ContactoProvider");
    }
    return context;
};
var useIdTelefono = function () {
    var context = React.useContext(IdTelefonoContext);
    if (context === undefined) {
        throw new Error("useIdTelefono must be used within an ContactoProvider");
    }
    return context;
};
var useIdCorreo = function () {
    var context = React.useContext(IdCorreoContext);
    if (context === undefined) {
        throw new Error("useIdCorreo must be used within an ContactoProvider");
    }
    return context;
};
export { useIdCelularUno, useIdCelularDos, useIdTelefono, useIdCorreo };
//# sourceMappingURL=ContactoHook.js.map