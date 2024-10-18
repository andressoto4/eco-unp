import React from "react";
import { IdUsuarioContext, IdContrasegnaContext } from "../contexts/IngresoContex";
// Hook personalizado para usar el contexto de ID del usuario
var useIdUsuario = function () {
    var context = React.useContext(IdUsuarioContext);
    if (context === undefined) {
        throw new Error("useIdUsuario must be used within an IngresoProvider");
    }
    return context;
};
// Hook personalizado para usar el contexto de ID de la contraseña
var useIdContrasegna = function () {
    var context = React.useContext(IdContrasegnaContext);
    if (context === undefined) {
        throw new Error("useIdContrasegna must be used within an IngresoProvider");
    }
    return context;
};
// Exporta los hooks personalizados para su uso en otros archivos
export { useIdUsuario, useIdContrasegna };
//# sourceMappingURL=IngresoHook.js.map