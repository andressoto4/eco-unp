import React from "react";
import {
  IdCelularUnoContext,
  IdCelularDosContext,
  IdTelefonoContext,
  IdCorreoContext,
} from "../contexts/ContactoContext";

// Hooks para usar los contextos
const useIdCelularUno = () => {
  const context = React.useContext(IdCelularUnoContext);
  if (context === undefined) {
    throw new Error("useIdCelularUno must be used within an ContactoProvider");
  }
  return context;
};
const useIdCelularDos = () => {
  const context = React.useContext(IdCelularDosContext);
  if (context === undefined) {
    throw new Error("useIdCelularDos must be used within an ContactoProvider");
  }
  return context;
};
const useIdTelefono = () => {
  const context = React.useContext(IdTelefonoContext);
  if (context === undefined) {
    throw new Error("useIdTelefono must be used within an ContactoProvider");
  }
  return context;
};
const useIdCorreo = () => {
  const context = React.useContext(IdCorreoContext);
  if (context === undefined) {
    throw new Error("useIdCorreo must be used within an ContactoProvider");
  }
  return context;
};

export { useIdCelularUno, useIdCelularDos, useIdTelefono, useIdCorreo };
