import React from "react";
import { IdUsuarioContext, IdContrasegnaContext } from "../contexts/IngresoContex";
// Declaración del componente IngresoProvider que acepta las propiedades definidas en IngresoProviderProps
var IngresoProvider = function (_a) {
    var children = _a.children;
    // Estado para manejar el ID del usuario
    var _b = React.useState(""), idUsuario = _b[0], setIdUsuario = _b[1];
    // Estado para manejar el ID de la contraseña
    var _c = React.useState(""), idContrasegna = _c[0], setIdContrasegna = _c[1];
    // ------> Renderizado
    return (
    // Proveedor del contexto de ID del usuario
    React.createElement(IdUsuarioContext.Provider, { value: { idUsuario: idUsuario, setIdUsuario: setIdUsuario } },
        React.createElement(IdContrasegnaContext.Provider, { value: { idContrasegna: idContrasegna, setIdContrasegna: setIdContrasegna } }, children)));
};
// Exporta el componente IngresoProvider para su uso en otros archivos
export { IngresoProvider };
//# sourceMappingURL=IngresoProvider.js.map