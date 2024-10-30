import React from "react";
import {
  IdPrimerNombreContext,
  IdSegundoNombreContext,
  IdPrimerApellidoContext,
  IdSegundoApellidoContext,
} from "../contexts/NombreContext";

// Hooks para usar los contextos
const useIdPrimerNombre = () => {
  const context = React.useContext(IdPrimerNombreContext);
  if (context === undefined) {
    throw new Error("useIdPrimerNombre must be used within an NombreProvider");
  }
  return context;
};
const useIdSegundoNombre = () => {
  const context = React.useContext(IdSegundoNombreContext);
  if (context === undefined) {
    throw new Error("useIdSegundoNombre must be used within an NombreProvider");
  }
  return context;
};
const useIdPrimerApellido = () => {
  const context = React.useContext(IdPrimerApellidoContext);
  if (context === undefined) {
    throw new Error(
      "useIdPrimerApellido must be used within an NombreProvider"
    );
  }
  return context;
};
const useIdSegundoApellido = () => {
  const context = React.useContext(IdSegundoApellidoContext);
  if (context === undefined) {
    throw new Error(
      "useIdSegundoApellido must be used within an NombreProvider"
    );
  }
  return context;
};

export {
  useIdPrimerNombre,
  useIdSegundoNombre,
  useIdPrimerApellido,
  useIdSegundoApellido,
};
