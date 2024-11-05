import React from "react";
import { IdPrimerNombreContext, IdSegundoNombreContext, IdPrimerApellidoContext, IdSegundoApellidoContext, } from "../contexts/NombreContext";
// Hooks para usar los contextos
var useIdPrimerNombre = function () {
    var context = React.useContext(IdPrimerNombreContext);
    if (context === undefined) {
        throw new Error("useIdPrimerNombre must be used within an NombreProvider");
    }
    return context;
};
var useIdSegundoNombre = function () {
    var context = React.useContext(IdSegundoNombreContext);
    if (context === undefined) {
        throw new Error("useIdSegundoNombre must be used within an NombreProvider");
    }
    return context;
};
var useIdPrimerApellido = function () {
    var context = React.useContext(IdPrimerApellidoContext);
    if (context === undefined) {
        throw new Error("useIdPrimerApellido must be used within an NombreProvider");
    }
    return context;
};
var useIdSegundoApellido = function () {
    var context = React.useContext(IdSegundoApellidoContext);
    if (context === undefined) {
        throw new Error("useIdSegundoApellido must be used within an NombreProvider");
    }
    return context;
};
export { useIdPrimerNombre, useIdSegundoNombre, useIdPrimerApellido, useIdSegundoApellido, };
//# sourceMappingURL=NombreHook.js.map