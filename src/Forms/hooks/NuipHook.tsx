import React from "react";
import {
  IdTipoIdentificacionContext,
  IdNumeroIdentificacionContext,
  IdFechaExpedicionContext,
} from "../contexts/NuipContext";

// Hooks para usar los contextos
const useIdTipoIdentificaicon = () => {
  const context = React.useContext(IdTipoIdentificacionContext);
  if (context === undefined) {
    throw new Error(
      "useIdTipoIdentificaicon must be used within an NuipProvider"
    );
  }
  return context;
};
const useIdNumeroIdentificacion = () => {
  const context = React.useContext(IdNumeroIdentificacionContext);
  if (context === undefined) {
    throw new Error(
      "useIdNumeroIdentificacion must be used within an NuipProvider"
    );
  }
  return context;
};
const useIdFechaExpedicion = () => {
  const context = React.useContext(IdFechaExpedicionContext);
  if (context === undefined) {
    throw new Error("useIdFechaExpedicion must be used within an NuipProvider");
  }
  return context;
};

export {
  useIdTipoIdentificaicon,
  useIdNumeroIdentificacion,
  useIdFechaExpedicion,
};
