import React, { createContext, useState, ReactNode } from "react";
import {
  IdPrimerNombreContextType,
  IdSegundoNombreContextType,
  IdPrimerApellidoContextType,
  IdSegundoApellidoContextType,
} from "../types/NombreTypes";

// Crear contextos individuales con valores por defecto
const IdPrimerNombreContext = createContext<
  IdPrimerNombreContextType | undefined
>(undefined);
const IdSegundoNombreContext = createContext<
  IdSegundoNombreContextType | undefined
>(undefined);
const IdPrimerApellidoContext = createContext<
  IdPrimerApellidoContextType | undefined
>(undefined);
const IdSegundoApellidoContext = createContext<
  IdSegundoApellidoContextType | undefined
>(undefined);

interface NombreProviderProps {
  children: ReactNode;
}

// Crear un provider combinado
const NombreProvider: React.FC<NombreProviderProps> = ({ children }) => {
  const [idPrimerNombre, setIdPrimerNombre] = useState<string>("");
  const [idSegundoNombre, setIdSegundoNombre] = useState<string>("");
  const [idPrimerApellido, setIdPrimerApellido] = useState<string>("");
  const [idSegundoApellido, setIdSegundoApellido] = useState<string>("");

  return (
    <IdPrimerNombreContext.Provider
      value={{
        idPrimerNombre: idPrimerNombre,
        setIdPrimerNombre: setIdPrimerNombre,
      }}
    >
      <IdSegundoNombreContext.Provider
        value={{
          idSegundoNombre: idSegundoNombre,
          setIdSegundoNombre: setIdSegundoNombre,
        }}
      >
        <IdPrimerApellidoContext.Provider
          value={{
            idPrimerApellido: idPrimerApellido,
            setIdPrimerApellido: setIdPrimerApellido,
          }}
        >
          <IdSegundoApellidoContext.Provider
            value={{
              idSegundoApellido: idSegundoApellido,
              setIdSegundoApellido: setIdSegundoApellido,
            }}
          >
            {children}
          </IdSegundoApellidoContext.Provider>
        </IdPrimerApellidoContext.Provider>
      </IdSegundoNombreContext.Provider>
    </IdPrimerNombreContext.Provider>
  );
};

export {
  IdPrimerNombreContext,
  IdSegundoNombreContext,
  IdPrimerApellidoContext,
  IdSegundoApellidoContext,
};

export { NombreProvider };
