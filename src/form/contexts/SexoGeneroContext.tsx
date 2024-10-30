import React, { createContext, useContext, useState, ReactNode } from "react";
import {
  IdSexoContextType,
  IdGeneroContextType,
  IdOrientacionSexualContextType,
} from "../types/SexoGeneroTypes";

// Crear contextos individuales con valores por defecto
const IdSexoContext = createContext<IdSexoContextType | undefined>(undefined);
const IdGeneroContext = createContext<IdGeneroContextType | undefined>(
  undefined
);
const IdOrientacionSexualContext = createContext<
  IdOrientacionSexualContextType | undefined
>(undefined);

interface SexoGeneroProviderProps {
  children: ReactNode;
}

// Crear un provider combinado
const SexoGeneroProvider: React.FC<SexoGeneroProviderProps> = ({
  children,
}) => {
  const [idSexo, setIdSexo] = useState<string>("");
  const [idGenero, setIdGenero] = useState<string>("");
  const [idOrientacionSexual, setIdOrientacionSexual] = useState<string>("");

  return (
    <IdSexoContext.Provider value={{ idSexo: idSexo, setIdSexo: setIdSexo }}>
      <IdGeneroContext.Provider
        value={{
          idGenero: idGenero,
          setIdGenero: setIdGenero,
        }}
      >
        <IdOrientacionSexualContext.Provider
          value={{
            idOrientacionSexual: idOrientacionSexual,
            setIdOrientacionSexual: setIdOrientacionSexual,
          }}
        >
          {children}
        </IdOrientacionSexualContext.Provider>
      </IdGeneroContext.Provider>
    </IdSexoContext.Provider>
  );
};

export { IdSexoContext, IdGeneroContext, IdOrientacionSexualContext };

export { SexoGeneroProvider };
