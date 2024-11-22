import React from "react";
import {
  IdSexoContext,
  IdGeneroContext,
  IdOrientacionSexualContext,
} from "../contexts/SexoGeneroContext";

// Hooks para usar los contextos
const useIdSexo = () => {
  const context = React.useContext(IdSexoContext);
  if (context === undefined) {
    throw new Error("useIdSexo must be used within an SexoGeneroProvider");
  }
  return context;
};
const useIdGenero = () => {
  const context = React.useContext(IdGeneroContext);
  if (context === undefined) {
    throw new Error("useIdGenero must be used within an SexoGeneroProvider");
  }
  return context;
};
const useIdOrientacionSexual = () => {
  const context = React.useContext(IdOrientacionSexualContext);
  if (context === undefined) {
    throw new Error(
      "useIdOrientacionSexual must be used within an SexoGeneroProvider"
    );
  }
  return context;
};

export { useIdSexo, useIdGenero, useIdOrientacionSexual };
