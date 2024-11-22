import React, { createContext, useState, ReactNode } from "react";
import {
  IdCelularUnoContextType,
  IdCelularDosContextType,
  IdTelefonoContextType,
  IdCorreoContextType,
} from "../types/ContactoTypes";

// Crear contextos individuales con valores por defecto
const IdCelularUnoContext = createContext<IdCelularUnoContextType | undefined>(
  undefined
);
const IdCelularDosContext = createContext<IdCelularDosContextType | undefined>(
  undefined
);
const IdTelefonoContext = createContext<IdTelefonoContextType | undefined>(
  undefined
);
const IdCorreoContext = createContext<IdCorreoContextType | undefined>(
  undefined
);

interface ContactoProviderProps {
  children: ReactNode;
}

// Crear un provider combinado
const ContactoProvider: React.FC<ContactoProviderProps> = ({ children }) => {
  const [idCelularUno, setIdCelularUno] = useState<string>("");
  const [idCelularDos, setIdCelularDos] = useState<string>("");
  const [idTelefono, setIdTelefono] = useState<string>("");
  const [idCorreo, setIdCorreo] = useState<string>("");

  return (
    <IdCelularUnoContext.Provider
      value={{ idCelularUno: idCelularUno, setIdCelularUno: setIdCelularUno }}
    >
      <IdCelularDosContext.Provider
        value={{
          idCelularDos: idCelularDos,
          setIdCelularDos: setIdCelularDos,
        }}
      >
        <IdTelefonoContext.Provider
          value={{ idTelefono: idTelefono, setIdTelefono: setIdTelefono }}
        >
          <IdCorreoContext.Provider
            value={{ idCorreo: idCorreo, setIdCorreo: setIdCorreo }}
          >
            {children}
          </IdCorreoContext.Provider>
        </IdTelefonoContext.Provider>
      </IdCelularDosContext.Provider>
    </IdCelularUnoContext.Provider>
  );
};

export {
  IdCelularUnoContext,
  IdCelularDosContext,
  IdTelefonoContext,
  IdCorreoContext,
};

export { ContactoProvider };
