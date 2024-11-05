import React from "react";
import { IdTipoIdentificacionContext, IdNumeroIdentificacionContext, IdFechaExpedicionContext, } from "../contexts/NuipContext";
// Hooks para usar los contextos
var useIdTipoIdentificaicon = function () {
    var context = React.useContext(IdTipoIdentificacionContext);
    if (context === undefined) {
        throw new Error("useIdTipoIdentificaicon must be used within an NuipProvider");
    }
    return context;
};
var useIdNumeroIdentificacion = function () {
    var context = React.useContext(IdNumeroIdentificacionContext);
    if (context === undefined) {
        throw new Error("useIdNumeroIdentificacion must be used within an NuipProvider");
    }
    return context;
};
var useIdFechaExpedicion = function () {
    var context = React.useContext(IdFechaExpedicionContext);
    if (context === undefined) {
        throw new Error("useIdFechaExpedicion must be used within an NuipProvider");
    }
    return context;
};
export { useIdTipoIdentificaicon, useIdNumeroIdentificacion, useIdFechaExpedicion, };
//# sourceMappingURL=NuipHook.js.map