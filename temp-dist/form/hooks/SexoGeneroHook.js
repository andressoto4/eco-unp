import React from "react";
import { IdSexoContext, IdGeneroContext, IdOrientacionSexualContext, } from "../contexts/SexoGeneroContext";
// Hooks para usar los contextos
var useIdSexo = function () {
    var context = React.useContext(IdSexoContext);
    if (context === undefined) {
        throw new Error("useIdSexo must be used within an SexoGeneroProvider");
    }
    return context;
};
var useIdGenero = function () {
    var context = React.useContext(IdGeneroContext);
    if (context === undefined) {
        throw new Error("useIdGenero must be used within an SexoGeneroProvider");
    }
    return context;
};
var useIdOrientacionSexual = function () {
    var context = React.useContext(IdOrientacionSexualContext);
    if (context === undefined) {
        throw new Error("useIdOrientacionSexual must be used within an SexoGeneroProvider");
    }
    return context;
};
export { useIdSexo, useIdGenero, useIdOrientacionSexual };
//# sourceMappingURL=SexoGeneroHook.js.map