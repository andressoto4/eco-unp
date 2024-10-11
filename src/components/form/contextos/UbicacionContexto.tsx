import React, { createContext, useContext, useState, ReactNode } from "react";

// Definir interfaces para los contextos
interface IdContextType {
  id: string;
  setID: (value: string) => void;
}

// Crear contextos individuales con valores por defecto
const IdPaisUbicacionContext = createContext<IdContextType>({
  id: '0',
  setID: () => {},
});
const IdDepartamentoUbicacionContext = createContext<IdContextType>({
  id: '0',
  setID: () => {},
});
const IdMunicipioUbicacionContext = createContext<IdContextType>({
  id: '0',
  setID: () => {},
});
const IdZonaUbicacionContext = createContext<IdContextType>({
  id: '0',
  setID: () => {},
});

interface UbicacionProviderProps {
  children: ReactNode;
}

// Crear un provider combinado
const UbicacionProvider: React.FC<UbicacionProviderProps> = ({ children }) => {
  const [idPaisUbicacion, setIDPaisUbicacion] = useState<string>('0');
  const [idDepartamentoUbicacion, setIDDepartamentoUbicacion] = useState<string>('0');
  const [idMunicipioUbicacion, setIDMunicipioUbicacion] = useState<string>('0');
  const [idZonaUbicacion, setIdZonaUbicacion] = useState<string>('0');

  return (
    <IdPaisUbicacionContext.Provider value={{ id: idPaisUbicacion, setID: setIDPaisUbicacion }}>
      <IdDepartamentoUbicacionContext.Provider value={{ id: idDepartamentoUbicacion, setID: setIDDepartamentoUbicacion }}>
        <IdMunicipioUbicacionContext.Provider value={{ id: idMunicipioUbicacion, setID: setIDMunicipioUbicacion }}>
          <IdZonaUbicacionContext.Provider value={{ id: idZonaUbicacion, setID: setIdZonaUbicacion }}>
            {children}
          </IdZonaUbicacionContext.Provider>
        </IdMunicipioUbicacionContext.Provider>
      </IdDepartamentoUbicacionContext.Provider>
    </IdPaisUbicacionContext.Provider>
  );
};

// Hooks para usar los contextos
const useIdPaisUbicacion = () => useContext(IdPaisUbicacionContext);
const useIdDepartamentoUbicacion = () => useContext(IdDepartamentoUbicacionContext);
const useIdMunicipioUbicacion = () => useContext(IdMunicipioUbicacionContext);
const useIdZonaUbicacion = () => useContext(IdZonaUbicacionContext);

export { UbicacionProvider };
export { useIdPaisUbicacion, useIdDepartamentoUbicacion, useIdMunicipioUbicacion, useIdZonaUbicacion };
export { IdPaisUbicacionContext, IdDepartamentoUbicacionContext, IdMunicipioUbicacionContext, IdZonaUbicacionContext };