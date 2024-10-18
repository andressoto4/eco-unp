import React, { createContext, useContext, useState } from "react";
// Crear contextos individuales con valores por defecto
const IdPaisUbicacionContext = createContext({
    id: "0",
    setID: () => { },
});
const IdDepartamentoUbicacionContext = createContext({
    id: "0",
    setID: () => { },
});
const IdMunicipioUbicacionContext = createContext({
    id: "0",
    setID: () => { },
});
const IdZonaUbicacionContext = createContext({
    id: "0",
    setID: () => { },
});
// Crear un provider combinado
const UbicacionProvider = ({ children }) => {
    const [idPaisUbicacion, setIDPaisUbicacion] = useState("0");
    const [idDepartamentoUbicacion, setIDDepartamentoUbicacion] = useState("0");
    const [idMunicipioUbicacion, setIDMunicipioUbicacion] = useState("0");
    const [idZonaUbicacion, setIdZonaUbicacion] = useState("0");
    return (React.createElement(IdPaisUbicacionContext.Provider, { value: { id: idPaisUbicacion, setID: setIDPaisUbicacion } },
        React.createElement(IdDepartamentoUbicacionContext.Provider, { value: {
                id: idDepartamentoUbicacion,
                setID: setIDDepartamentoUbicacion,
            } },
            React.createElement(IdMunicipioUbicacionContext.Provider, { value: { id: idMunicipioUbicacion, setID: setIDMunicipioUbicacion } },
                React.createElement(IdZonaUbicacionContext.Provider, { value: { id: idZonaUbicacion, setID: setIdZonaUbicacion } }, children)))));
};
// Hooks para usar los contextos
const useIdPaisUbicacion = () => useContext(IdPaisUbicacionContext);
const useIdDepartamentoUbicacion = () => useContext(IdDepartamentoUbicacionContext);
const useIdMunicipioUbicacion = () => useContext(IdMunicipioUbicacionContext);
const useIdZonaUbicacion = () => useContext(IdZonaUbicacionContext);
export { UbicacionProvider };
export { useIdPaisUbicacion, useIdDepartamentoUbicacion, useIdMunicipioUbicacion, useIdZonaUbicacion, };
export { IdPaisUbicacionContext, IdDepartamentoUbicacionContext, IdMunicipioUbicacionContext, IdZonaUbicacionContext, };
//# sourceMappingURL=UbicacionContext.js.map