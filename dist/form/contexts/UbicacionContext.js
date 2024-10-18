import React, { createContext, useContext, useState } from "react";
// Crear contextos individuales con valores por defecto
var IdPaisUbicacionContext = createContext({
    id: "0",
    setID: function () { },
});
var IdDepartamentoUbicacionContext = createContext({
    id: "0",
    setID: function () { },
});
var IdMunicipioUbicacionContext = createContext({
    id: "0",
    setID: function () { },
});
var IdZonaUbicacionContext = createContext({
    id: "0",
    setID: function () { },
});
// Crear un provider combinado
var UbicacionProvider = function (_a) {
    var children = _a.children;
    var _b = useState("0"), idPaisUbicacion = _b[0], setIDPaisUbicacion = _b[1];
    var _c = useState("0"), idDepartamentoUbicacion = _c[0], setIDDepartamentoUbicacion = _c[1];
    var _d = useState("0"), idMunicipioUbicacion = _d[0], setIDMunicipioUbicacion = _d[1];
    var _e = useState("0"), idZonaUbicacion = _e[0], setIdZonaUbicacion = _e[1];
    return (React.createElement(IdPaisUbicacionContext.Provider, { value: { id: idPaisUbicacion, setID: setIDPaisUbicacion } },
        React.createElement(IdDepartamentoUbicacionContext.Provider, { value: {
                id: idDepartamentoUbicacion,
                setID: setIDDepartamentoUbicacion,
            } },
            React.createElement(IdMunicipioUbicacionContext.Provider, { value: { id: idMunicipioUbicacion, setID: setIDMunicipioUbicacion } },
                React.createElement(IdZonaUbicacionContext.Provider, { value: { id: idZonaUbicacion, setID: setIdZonaUbicacion } }, children)))));
};
// Hooks para usar los contextos
var useIdPaisUbicacion = function () { return useContext(IdPaisUbicacionContext); };
var useIdDepartamentoUbicacion = function () {
    return useContext(IdDepartamentoUbicacionContext);
};
var useIdMunicipioUbicacion = function () { return useContext(IdMunicipioUbicacionContext); };
var useIdZonaUbicacion = function () { return useContext(IdZonaUbicacionContext); };
export { UbicacionProvider };
export { useIdPaisUbicacion, useIdDepartamentoUbicacion, useIdMunicipioUbicacion, useIdZonaUbicacion, };
export { IdPaisUbicacionContext, IdDepartamentoUbicacionContext, IdMunicipioUbicacionContext, IdZonaUbicacionContext, };
//# sourceMappingURL=UbicacionContext.js.map