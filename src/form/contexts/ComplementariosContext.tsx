import React, { createContext, useContext, useState, ReactNode } from "react";
import {
  IdEstadoCivilContextType,
  IdFondoPensionContextType,
  IdEpsContextType,
  IdRhContextType,
  IdTipoVinculacionContextType,
  IdContratistaContextType,
  IdFuncionarioContextType,
} from "../types/ComplementariosTypes";

// Crear contextos individuales con valores por defecto
const IdEstadoCivilContext = createContext<
  IdEstadoCivilContextType | undefined
>(undefined);
const IdFondoPensionContext = createContext<
  IdFondoPensionContextType | undefined
>(undefined);
const IdEpsContext = createContext<IdEpsContextType | undefined>(undefined);
const IdRhContext = createContext<IdRhContextType | undefined>(undefined);
const IdTipoVinculacionContext = createContext<
  IdTipoVinculacionContextType | undefined
>(undefined);
const IdContratistaContext = createContext<
  IdContratistaContextType | undefined
>(undefined);
const IdFuncionarioContext = createContext<
  IdFuncionarioContextType | undefined
>(undefined);

interface ComplementariosProviderProps {
  children: ReactNode;
}

// Crear un provider combinado
const ComplementariosProvider: React.FC<ComplementariosProviderProps> = ({
  children,
}) => {
  const [idEstadoCivil, setIdEstadoCivil] = useState<string>("");
  const [idFondoPension, setIdFondoPension] = useState<string>("");
  const [idEps, setIdEps] = useState<string>("");
  const [idRh, setIdRh] = useState<string>("");
  const [idTipoVinculacion, setIdTipoVinculacion] = useState<string>("");
  const [idNumeroContrato, setIdNumeroContrato] = useState<string>("");
  const [idFechaInicioContrato, setIdFechaInicioContrato] =
    useState<string>("");
  const [idFechaFinContrato, setIdFechaFinContrato] = useState<string>("");
  const [idNumeroResolucion, setIdNumeroResolucion] = useState<string>("");

  return (
    <IdEstadoCivilContext.Provider
      value={{
        idEstadoCivil: idEstadoCivil,
        setIdEstadoCivil: setIdEstadoCivil,
      }}
    >
      <IdFondoPensionContext.Provider
        value={{
          idFondoPension: idFondoPension,
          setIdFondoPension: setIdFondoPension,
        }}
      >
        <IdEpsContext.Provider
          value={{
            idEps: idEps,
            setIdEps: setIdEps,
          }}
        >
          <IdRhContext.Provider
            value={{
              idRh: idRh,
              setIdRh: setIdRh,
            }}
          >
            <IdTipoVinculacionContext.Provider
              value={{
                idTipoVinculacion: idTipoVinculacion,
                setIdTipoVinculacion: setIdTipoVinculacion,
              }}
            >
              <IdContratistaContext.Provider
                value={{
                  idNumeroContrato: idNumeroContrato,
                  setIdNumeroContrato: setIdNumeroContrato,
                  idFechaInicioContrato: idFechaInicioContrato,
                  setIdFechaInicioContrato: setIdFechaInicioContrato,
                  idFechaFinContrato: idFechaFinContrato,
                  setIdFechaFinContrato: setIdFechaFinContrato,
                }}
              >
                <IdFuncionarioContext.Provider
                  value={{
                    idNumeroResolucion: idNumeroResolucion,
                    setIdNumeroResolucion: setIdNumeroResolucion,
                  }}
                >
                  {children}
                </IdFuncionarioContext.Provider>
              </IdContratistaContext.Provider>
            </IdTipoVinculacionContext.Provider>
          </IdRhContext.Provider>
        </IdEpsContext.Provider>
      </IdFondoPensionContext.Provider>
    </IdEstadoCivilContext.Provider>
  );
};

export {
  IdEstadoCivilContext,
  IdFondoPensionContext,
  IdEpsContext,
  IdRhContext,
  IdTipoVinculacionContext,
  IdContratistaContext,
  IdFuncionarioContext,
};

export { ComplementariosProvider };
