import React, { createContext, useState } from "react";
// Crear contextos individuales con valores por defecto
var IdPaisContext = createContext(undefined);
var IdDepartamentoContext = createContext(undefined);
var IdMunicipioContext = createContext(undefined);
var IdZonaContext = createContext(undefined);
var IdDireccionUrbanaContext = createContext(undefined);
var IdDireccionRuralContext = createContext(undefined);
// Crear un provider combinado
var UbicacionProvider = function (_a) {
    var children = _a.children;
    var _b = useState(""), idPaisUbicacion = _b[0], setIDPaisUbicacion = _b[1];
    var _c = useState(""), idDepartamentoUbicacion = _c[0], setIDDepartamentoUbicacion = _c[1];
    var _d = useState(""), idMunicipioUbicacion = _d[0], setIDMunicipioUbicacion = _d[1];
    var _e = useState(""), idZonaUbicacion = _e[0], setIdZonaUbicacion = _e[1];
    var _f = useState(""), idCorregimiento = _f[0], setIdCorregimiento = _f[1];
    var _g = useState(""), idVereda = _g[0], setIdVereda = _g[1];
    var _h = useState(""), idCentroPoblado = _h[0], setIdCentroPoblado = _h[1];
    var _j = useState(""), idIndicacionDireccionR = _j[0], setIdIndicacionDireccionR = _j[1];
    var _k = useState(""), idResumenDireccionR = _k[0], setIdResumenDireccionR = _k[1];
    var _l = useState(""), idNombreBarrio = _l[0], setIdNombreBarrio = _l[1];
    var _m = useState(""), idViaPrincipal = _m[0], setIdViaPrincipal = _m[1];
    var _o = useState(""), idNumeroViaPrincipal = _o[0], setIdNumeroViaPrincipal = _o[1];
    var _p = useState(""), idLetraPrincipal = _p[0], setIdLetraPrincipal = _p[1];
    var _q = useState(false), idEsBis = _q[0], setIdEsBis = _q[1];
    var _r = useState(""), idCuadrantePrincipal = _r[0], setIdCuadrantePrincipal = _r[1];
    var _s = useState(""), idNumeroViaSecundaria = _s[0], setIdNumeroViaSecundaria = _s[1];
    var _t = useState(""), idLetraSecundaria = _t[0], setIdLetraSecundaria = _t[1];
    var _u = useState(""), idCuadranteSecundario = _u[0], setIdCuadranteSecundario = _u[1];
    var _v = useState(""), idNumeroPlaca = _v[0], setIdNumeroPlaca = _v[1];
    var _w = useState(""), idComplemento = _w[0], setIdComplemento = _w[1];
    var _x = useState(""), idIndicacionDireccionU = _x[0], setIdIndicacionDireccionU = _x[1];
    var _y = useState(""), idResumenDireccionU = _y[0], setIdResumenDireccionU = _y[1];
    return (React.createElement(IdPaisContext.Provider, { value: { idPais: idPaisUbicacion, setIdPais: setIDPaisUbicacion } },
        React.createElement(IdDepartamentoContext.Provider, { value: {
                idDepartamento: idDepartamentoUbicacion,
                setIdDepartamento: setIDDepartamentoUbicacion,
            } },
            React.createElement(IdMunicipioContext.Provider, { value: {
                    idMunicipio: idMunicipioUbicacion,
                    setIdMunicipio: setIDMunicipioUbicacion,
                } },
                React.createElement(IdZonaContext.Provider, { value: { idZona: idZonaUbicacion, setIdZona: setIdZonaUbicacion } },
                    React.createElement(IdDireccionUrbanaContext.Provider, { value: {
                            idNombreBarrio: idNombreBarrio,
                            setIdNombreBarrio: setIdNombreBarrio,
                            idViaPrincipal: idViaPrincipal,
                            setIdViaPrincipal: setIdViaPrincipal,
                            idNumeroViaPrincipal: idNumeroViaPrincipal,
                            setIdNumeroViaPrincipal: setIdNumeroViaPrincipal,
                            idLetraPrincipal: idLetraPrincipal,
                            setIdLetraPrincipal: setIdLetraPrincipal,
                            idEsBis: idEsBis,
                            setIdEsBis: setIdEsBis,
                            idCuadrantePrincipal: idCuadrantePrincipal,
                            setIdCuadrantePrincipal: setIdCuadrantePrincipal,
                            idNumeroViaSecundaria: idNumeroViaSecundaria,
                            setIdNumeroViaSecundaria: setIdNumeroViaSecundaria,
                            idLetraSecundaria: idLetraSecundaria,
                            setIdLetraSecundaria: setIdLetraSecundaria,
                            idCuadranteSecundario: idCuadranteSecundario,
                            setIdCuadranteSecundario: setIdCuadranteSecundario,
                            idNumeroPlaca: idNumeroPlaca,
                            setIdNumeroPlaca: setIdNumeroPlaca,
                            idComplemento: idComplemento,
                            setIdComplemento: setIdComplemento,
                            idIndicacionDireccionU: idIndicacionDireccionU,
                            setIdIndicacionDireccionU: setIdIndicacionDireccionU,
                            idResumenDireccionU: idResumenDireccionU,
                            setIdResumenDireccionU: setIdResumenDireccionU,
                        } },
                        React.createElement(IdDireccionRuralContext.Provider, { value: {
                                idCorregimiento: idCorregimiento,
                                setIdCorregimiento: setIdCorregimiento,
                                idVereda: idVereda,
                                setIdVereda: setIdVereda,
                                idCentroPoblado: idCentroPoblado,
                                setIdCentroPoblado: setIdCentroPoblado,
                                idIndicacionDireccionR: idIndicacionDireccionR,
                                setIdIndicacionDireccionR: setIdIndicacionDireccionR,
                                idResumenDireccionR: idResumenDireccionR,
                                setIdResumenDireccionR: setIdResumenDireccionR,
                            } }, children)))))));
};
export { IdPaisContext, IdDepartamentoContext, IdMunicipioContext, IdZonaContext, IdDireccionUrbanaContext, IdDireccionRuralContext, };
export { UbicacionProvider };
//# sourceMappingURL=UbicacionContext.js.map