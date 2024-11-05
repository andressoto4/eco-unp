import React from "react";
import { IdPaisContext, IdDepartamentoContext, IdMunicipioContext, IdZonaContext, IdDireccionUrbanaContext, IdDireccionRuralContext, } from "../contexts/UbicacionContext";
// Hooks para usar los contextos
var useIdPais = function () {
    var context = React.useContext(IdPaisContext);
    if (context === undefined) {
        throw new Error("useIdPais must be used within an UbicacionProvider");
    }
    return context;
};
var useIdDepartamento = function () {
    var context = React.useContext(IdDepartamentoContext);
    if (context === undefined) {
        throw new Error("useIdDepartamento must be used within an UbicacionProvider");
    }
    return context;
};
var useIdMunicipio = function () {
    var context = React.useContext(IdMunicipioContext);
    if (context === undefined) {
        throw new Error("useIdMunicipio must be used within an UbicacionProvider");
    }
    return context;
};
var useIdZona = function () {
    var context = React.useContext(IdZonaContext);
    if (context === undefined) {
        throw new Error("useIdZona must be used within an UbicacionProvider");
    }
    return context;
};
var useIdDireccionUrbana = function () {
    var context = React.useContext(IdDireccionUrbanaContext);
    if (context === undefined) {
        throw new Error("useIdDireccionUrbana must be used within an UbicacionProvider");
    }
    return context;
};
var useIdDireccionRural = function () {
    var context = React.useContext(IdDireccionRuralContext);
    if (context === undefined) {
        throw new Error("useIdDireccionRural must be used within an UbicacionProvider");
    }
    return context;
};
export { useIdPais, useIdDepartamento, useIdMunicipio, useIdZona, useIdDireccionUrbana, useIdDireccionRural, };
//# sourceMappingURL=UbicacionHook.js.map