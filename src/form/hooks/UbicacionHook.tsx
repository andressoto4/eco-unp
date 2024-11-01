import React from "react";
import {
  IdPaisContext,
  IdDepartamentoContext,
  IdMunicipioContext,
  IdZonaContext,
  IdDireccionUrbanaContext,
  IdDireccionRuralContext,
} from "../contexts/UbicacionContext";

// Hooks para usar los contextos
const useIdPais = () => {
  const context = React.useContext(IdPaisContext);
  if (context === undefined) {
    throw new Error("useIdPais must be used within an UbicacionProvider");
  }
  return context;
};
const useIdDepartamento = () => {
  const context = React.useContext(IdDepartamentoContext);
  if (context === undefined) {
    throw new Error(
      "useIdDepartamento must be used within an UbicacionProvider"
    );
  }
  return context;
};
const useIdMunicipio = () => {
  const context = React.useContext(IdMunicipioContext);
  if (context === undefined) {
    throw new Error("useIdMunicipio must be used within an UbicacionProvider");
  }
  return context;
};
const useIdZona = () => {
  const context = React.useContext(IdZonaContext);
  if (context === undefined) {
    throw new Error("useIdZona must be used within an UbicacionProvider");
  }
  return context;
};
const useIdDireccionUrbana = () => {
  const context = React.useContext(IdDireccionUrbanaContext);
  if (context === undefined) {
    throw new Error(
      "useIdDireccionUrbana must be used within an UbicacionProvider"
    );
  }
  return context;
};
const useIdDireccionRural = () => {
  const context = React.useContext(IdDireccionRuralContext);
  if (context === undefined) {
    throw new Error(
      "useIdDireccionRural must be used within an UbicacionProvider"
    );
  }
  return context;
};

export {
  useIdPais,
  useIdDepartamento,
  useIdMunicipio,
  useIdZona,
  useIdDireccionUrbana,
  useIdDireccionRural,
};
