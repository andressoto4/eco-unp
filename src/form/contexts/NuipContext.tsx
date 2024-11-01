import React, { createContext, useState, ReactNode } from "react";
import {
  IdTipoIdentificacionContextType,
  IdNumeroIdentificacionContextType,
  IdFechaExpedicionContextType,
} from "../types/NuipTypes";

// Crear contextos individuales con valores por defecto
const IdTipoIdentificacionContext = createContext<
  IdTipoIdentificacionContextType | undefined
>(undefined);
const IdNumeroIdentificacionContext = createContext<
  IdNumeroIdentificacionContextType | undefined
>(undefined);
const IdFechaExpedicionContext = createContext<
  IdFechaExpedicionContextType | undefined
>(undefined);

interface NuipProviderProps {
  children: ReactNode;
}

// Crear un provider combinado
const NuipProvider: React.FC<NuipProviderProps> = ({ children }) => {
  const [idTipoIdentificacion, setIdTipoIdentificacion] = useState<string>("");
  const [idNumeroIdentificacion, setIdNumeroIdentificacion] =
    useState<string>("");
  const [idFechaExpedicion, setIdFechaExpedicion] = useState<string>("");

  return (
    <IdTipoIdentificacionContext.Provider
      value={{
        idTipoIdentificacion: idTipoIdentificacion,
        setIdTipoIdentificacion: setIdTipoIdentificacion,
      }}
    >
      <IdNumeroIdentificacionContext.Provider
        value={{
          idNumeroIdentificacion: idNumeroIdentificacion,
          setIdNumeroIdentificacion: setIdNumeroIdentificacion,
        }}
      >
        <IdFechaExpedicionContext.Provider
          value={{
            idFechaExpedicion: idFechaExpedicion,
            setIdFechaExpedicion: setIdFechaExpedicion,
          }}
        >
          {children}
        </IdFechaExpedicionContext.Provider>
      </IdNumeroIdentificacionContext.Provider>
    </IdTipoIdentificacionContext.Provider>
  );
};

export {
  IdTipoIdentificacionContext,
  IdNumeroIdentificacionContext,
  IdFechaExpedicionContext,
  // IdSegundoApellidoContext,
};

export { NuipProvider };
