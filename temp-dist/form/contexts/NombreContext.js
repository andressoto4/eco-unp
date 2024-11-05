import React, { createContext, useState } from "react";
// Crear contextos individuales con valores por defecto
var IdPrimerNombreContext = createContext(undefined);
var IdSegundoNombreContext = createContext(undefined);
var IdPrimerApellidoContext = createContext(undefined);
var IdSegundoApellidoContext = createContext(undefined);
// Crear un provider combinado
var NombreProvider = function (_a) {
    var children = _a.children;
    var _b = useState(""), idPrimerNombre = _b[0], setIdPrimerNombre = _b[1];
    var _c = useState(""), idSegundoNombre = _c[0], setIdSegundoNombre = _c[1];
    var _d = useState(""), idPrimerApellido = _d[0], setIdPrimerApellido = _d[1];
    var _e = useState(""), idSegundoApellido = _e[0], setIdSegundoApellido = _e[1];
    return (React.createElement(IdPrimerNombreContext.Provider, { value: {
            idPrimerNombre: idPrimerNombre,
            setIdPrimerNombre: setIdPrimerNombre,
        } },
        React.createElement(IdSegundoNombreContext.Provider, { value: {
                idSegundoNombre: idSegundoNombre,
                setIdSegundoNombre: setIdSegundoNombre,
            } },
            React.createElement(IdPrimerApellidoContext.Provider, { value: {
                    idPrimerApellido: idPrimerApellido,
                    setIdPrimerApellido: setIdPrimerApellido,
                } },
                React.createElement(IdSegundoApellidoContext.Provider, { value: {
                        idSegundoApellido: idSegundoApellido,
                        setIdSegundoApellido: setIdSegundoApellido,
                    } }, children)))));
};
export { IdPrimerNombreContext, IdSegundoNombreContext, IdPrimerApellidoContext, IdSegundoApellidoContext, };
export { NombreProvider };
//# sourceMappingURL=NombreContext.js.map