import React, { createContext, useState } from "react";
// Crear contextos individuales con valores por defecto
var IdSexoContext = createContext(undefined);
var IdGeneroContext = createContext(undefined);
var IdOrientacionSexualContext = createContext(undefined);
// Crear un provider combinado
var SexoGeneroProvider = function (_a) {
    var children = _a.children;
    var _b = useState(""), idSexo = _b[0], setIdSexo = _b[1];
    var _c = useState(""), idGenero = _c[0], setIdGenero = _c[1];
    var _d = useState(""), idOrientacionSexual = _d[0], setIdOrientacionSexual = _d[1];
    return (React.createElement(IdSexoContext.Provider, { value: { idSexo: idSexo, setIdSexo: setIdSexo } },
        React.createElement(IdGeneroContext.Provider, { value: {
                idGenero: idGenero,
                setIdGenero: setIdGenero,
            } },
            React.createElement(IdOrientacionSexualContext.Provider, { value: {
                    idOrientacionSexual: idOrientacionSexual,
                    setIdOrientacionSexual: setIdOrientacionSexual,
                } }, children))));
};
export { IdSexoContext, IdGeneroContext, IdOrientacionSexualContext };
export { SexoGeneroProvider };
//# sourceMappingURL=SexoGeneroContext.js.map