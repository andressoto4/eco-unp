import React, { createContext, useState, ReactNode } from "react";
import {
  IdPaisContextType,
  IdDepartamentoContextType,
  IdMunicipioContextType,
  IdZonaContextType,
  IdDireccionUrbanaContextType,
  IdDireccionRuralContextType,
} from "../types/UbicacionTypes";

// Crear contextos individuales con valores por defecto
const IdPaisContext = createContext<IdPaisContextType | undefined>(undefined);
const IdDepartamentoContext = createContext<
  IdDepartamentoContextType | undefined
>(undefined);
const IdMunicipioContext = createContext<IdMunicipioContextType | undefined>(
  undefined
);
const IdZonaContext = createContext<IdZonaContextType | undefined>(undefined);

const IdDireccionUrbanaContext = createContext<
  IdDireccionUrbanaContextType | undefined
>(undefined);

const IdDireccionRuralContext = createContext<
  IdDireccionRuralContextType | undefined
>(undefined);

interface UbicacionProviderProps {
  children: ReactNode;
}

// Crear un provider combinado
const UbicacionProvider: React.FC<UbicacionProviderProps> = ({ children }) => {
  const [idPaisUbicacion, setIDPaisUbicacion] = useState<string>("");
  const [idDepartamentoUbicacion, setIDDepartamentoUbicacion] =
    useState<string>("");
  const [idMunicipioUbicacion, setIDMunicipioUbicacion] = useState<string>("");
  const [idZonaUbicacion, setIdZonaUbicacion] = useState<string>("");

  const [idCorregimiento, setIdCorregimiento] = useState<string>("");
  const [idVereda, setIdVereda] = useState<string>("");
  const [idCentroPoblado, setIdCentroPoblado] = useState<string>("");
  const [idIndicacionDireccionR, setIdIndicacionDireccionR] =
    useState<string>("");
  const [idResumenDireccionR, setIdResumenDireccionR] = useState<string>("");

  const [idNombreBarrio, setIdNombreBarrio] = useState<string>("");
  const [idViaPrincipal, setIdViaPrincipal] = useState<string>("");
  const [idNumeroViaPrincipal, setIdNumeroViaPrincipal] = useState<string>("");
  const [idLetraPrincipal, setIdLetraPrincipal] = useState<string>("");
  const [idEsBis, setIdEsBis] = useState<boolean>(false);
  const [idCuadrantePrincipal, setIdCuadrantePrincipal] = useState<string>("");
  const [idNumeroViaSecundaria, setIdNumeroViaSecundaria] =
    useState<string>("");
  const [idLetraSecundaria, setIdLetraSecundaria] = useState<string>("");
  const [idCuadranteSecundario, setIdCuadranteSecundario] =
    useState<string>("");
  const [idNumeroPlaca, setIdNumeroPlaca] = useState<string>("");
  const [idComplemento, setIdComplemento] = useState<string>("");
  const [idIndicacionDireccionU, setIdIndicacionDireccionU] =
    useState<string>("");
  const [idResumenDireccionU, setIdResumenDireccionU] = useState<string>("");

  return (
    <IdPaisContext.Provider
      value={{ idPais: idPaisUbicacion, setIdPais: setIDPaisUbicacion }}
    >
      <IdDepartamentoContext.Provider
        value={{
          idDepartamento: idDepartamentoUbicacion,
          setIdDepartamento: setIDDepartamentoUbicacion,
        }}
      >
        <IdMunicipioContext.Provider
          value={{
            idMunicipio: idMunicipioUbicacion,
            setIdMunicipio: setIDMunicipioUbicacion,
          }}
        >
          <IdZonaContext.Provider
            value={{ idZona: idZonaUbicacion, setIdZona: setIdZonaUbicacion }}
          >
            <IdDireccionUrbanaContext.Provider
              value={{
                idNombreBarrio: idNombreBarrio,
                setIdNombreBarrio: setIdNombreBarrio,
                idViaPrincipal: idViaPrincipal,
                setIdViaPrincipal: setIdViaPrincipal,
                idNumeroViaPrincipal: idNumeroViaPrincipal,
                setIdNumeroViaPrincipal: setIdNumeroViaPrincipal,
                idLetraPrincipal: idLetraPrincipal,
                setIdLetraPrincipal: setIdLetraPrincipal,
                idEsBis: idEsBis,
                setIdEsBis: setIdEsBis,
                idCuadrantePrincipal: idCuadrantePrincipal,
                setIdCuadrantePrincipal: setIdCuadrantePrincipal,
                idNumeroViaSecundaria: idNumeroViaSecundaria,
                setIdNumeroViaSecundaria: setIdNumeroViaSecundaria,
                idLetraSecundaria: idLetraSecundaria,
                setIdLetraSecundaria: setIdLetraSecundaria,
                idCuadranteSecundario: idCuadranteSecundario,
                setIdCuadranteSecundario: setIdCuadranteSecundario,
                idNumeroPlaca: idNumeroPlaca,
                setIdNumeroPlaca: setIdNumeroPlaca,
                idComplemento: idComplemento,
                setIdComplemento: setIdComplemento,
                idIndicacionDireccionU: idIndicacionDireccionU,
                setIdIndicacionDireccionU: setIdIndicacionDireccionU,
                idResumenDireccionU: idResumenDireccionU,
                setIdResumenDireccionU: setIdResumenDireccionU,
              }}
            >
              <IdDireccionRuralContext.Provider
                value={{
                  idCorregimiento: idCorregimiento,
                  setIdCorregimiento: setIdCorregimiento,
                  idVereda: idVereda,
                  setIdVereda: setIdVereda,
                  idCentroPoblado: idCentroPoblado,
                  setIdCentroPoblado: setIdCentroPoblado,
                  idIndicacionDireccionR: idIndicacionDireccionR,
                  setIdIndicacionDireccionR: setIdIndicacionDireccionR,
                  idResumenDireccionR: idResumenDireccionR,
                  setIdResumenDireccionR: setIdResumenDireccionR,
                }}
              >
                {children}
              </IdDireccionRuralContext.Provider>
            </IdDireccionUrbanaContext.Provider>
          </IdZonaContext.Provider>
        </IdMunicipioContext.Provider>
      </IdDepartamentoContext.Provider>
    </IdPaisContext.Provider>
  );
};

export {
  IdPaisContext,
  IdDepartamentoContext,
  IdMunicipioContext,
  IdZonaContext,
  IdDireccionUrbanaContext,
  IdDireccionRuralContext,
};

export { UbicacionProvider };
