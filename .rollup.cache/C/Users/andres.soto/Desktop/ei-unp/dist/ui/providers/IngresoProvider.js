import React from "react";
import { IdUsuarioContext, IdContrasegnaContext } from "../contexs/IngresoContex";
// Declaración del componente IngresoProvider que acepta las propiedades definidas en IngresoProviderProps
const IngresoProvider = ({ children }) => {
    // Estado para manejar el ID del usuario
    const [idUsuario, setIdUsuario] = React.useState("");
    // Estado para manejar el ID de la contraseña
    const [idContrasegna, setIdContrasegna] = React.useState("");
    // ------> Renderizado
    return (
    // Proveedor del contexto de ID del usuario
    React.createElement(IdUsuarioContext.Provider, { value: { idUsuario, setIdUsuario } },
        React.createElement(IdContrasegnaContext.Provider, { value: { idContrasegna, setIdContrasegna } }, children)));
};
// Exporta el componente IngresoProvider para su uso en otros archivos
export { IngresoProvider };
//# sourceMappingURL=IngresoProvider.js.map