import React, { createContext, useState } from "react";
// Crear contextos individuales con valores por defecto
var IdTipoIdentificacionContext = createContext(undefined);
var IdNumeroIdentificacionContext = createContext(undefined);
var IdFechaExpedicionContext = createContext(undefined);
// Crear un provider combinado
var NuipProvider = function (_a) {
    var children = _a.children;
    var _b = useState(""), idTipoIdentificacion = _b[0], setIdTipoIdentificacion = _b[1];
    var _c = useState(""), idNumeroIdentificacion = _c[0], setIdNumeroIdentificacion = _c[1];
    var _d = useState(""), idFechaExpedicion = _d[0], setIdFechaExpedicion = _d[1];
    return (React.createElement(IdTipoIdentificacionContext.Provider, { value: {
            idTipoIdentificacion: idTipoIdentificacion,
            setIdTipoIdentificacion: setIdTipoIdentificacion,
        } },
        React.createElement(IdNumeroIdentificacionContext.Provider, { value: {
                idNumeroIdentificacion: idNumeroIdentificacion,
                setIdNumeroIdentificacion: setIdNumeroIdentificacion,
            } },
            React.createElement(IdFechaExpedicionContext.Provider, { value: {
                    idFechaExpedicion: idFechaExpedicion,
                    setIdFechaExpedicion: setIdFechaExpedicion,
                } }, children))));
};
export { IdTipoIdentificacionContext, IdNumeroIdentificacionContext, IdFechaExpedicionContext,
// IdSegundoApellidoContext,
 };
export { NuipProvider };
//# sourceMappingURL=NuipContext.js.map