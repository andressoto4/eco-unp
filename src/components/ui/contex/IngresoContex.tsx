import React, { createContext, useContext } from "react";

// Definición de tipos para el contexto
interface IdUsuarioContextType {
  idUsuario: string;
  setIdUsuario: (id: string) => void;
}

interface IdContrasegnaContextType {
  idContrasegna: string;
  setIdContrasegna: (contrasegna: string) => void;
}

// Crear contextos individuales
const IdUsuarioContext = createContext<IdUsuarioContextType | undefined>(
  undefined
);
const IdContrasegnaContext = createContext<IdContrasegnaContextType | undefined>(
  undefined
);


// Hooks para usar los contextos
const useIdUsuario = (): IdUsuarioContextType => {
  const context = useContext(IdUsuarioContext);
  if (context === undefined) {
    throw new Error("useIdUsuario must be used within an IngresoProvider");
  }
  return context;
};

const useIdContrasegna = (): IdContrasegnaContextType => {
  const context = useContext(IdContrasegnaContext);
  if (context === undefined) {
    throw new Error("useIdContrasegna must be used within an IngresoProvider");
  }
  return context;
};

export {
  useIdUsuario, useIdContrasegna,
  IdUsuarioContext, IdContrasegnaContext,
};