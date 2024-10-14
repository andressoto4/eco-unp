import React from "react";
interface IdUsuarioContextType {
    idUsuario: string;
    setIdUsuario: (id: string) => void;
}
interface IdContrasegnaContextType {
    idContrasegna: string;
    setIdContrasegna: (contrasegna: string) => void;
}
declare const IdUsuarioContext: React.Context<IdUsuarioContextType | undefined>;
declare const IdContrasegnaContext: React.Context<IdContrasegnaContextType | undefined>;
declare const useIdUsuario: () => IdUsuarioContextType;
declare const useIdContrasegna: () => IdContrasegnaContextType;
export { useIdUsuario, useIdContrasegna, IdUsuarioContext, IdContrasegnaContext, };
