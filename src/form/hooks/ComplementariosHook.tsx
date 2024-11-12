import React from "react";
import {
  IdEstadoCivilContext,
  IdFondoPensionContext,
  IdEpsContext,
  IdRhContext,
  IdTipoVinculacionContext,
  IdContratistaContext,
  IdFuncionarioContext,
} from "../contexts/ComplementariosContext";

// Hooks para usar los contextos
const useIdEstadoCivil = () => {
  const context = React.useContext(IdEstadoCivilContext);
  if (context === undefined) {
    throw new Error(
      "useIdEstadoCivil must be used within an ComplementariosProvider"
    );
  }
  return context;
};
const useIdFondoPension = () => {
  const context = React.useContext(IdFondoPensionContext);
  if (context === undefined) {
    throw new Error(
      "useIdFondoPension must be used within an ComplementariosProvider"
    );
  }
  return context;
};
const useIdEps = () => {
  const context = React.useContext(IdEpsContext);
  if (context === undefined) {
    throw new Error("useIdEps must be used within an ComplementariosProvider");
  }
  return context;
};
const useIdRh = () => {
  const context = React.useContext(IdRhContext);
  if (context === undefined) {
    throw new Error("useIdRh must be used within an ComplementariosProvider");
  }
  return context;
};
const useIdTipoVinculacion = () => {
  const context = React.useContext(IdTipoVinculacionContext);
  if (context === undefined) {
    throw new Error(
      "useIdTipoVinculacion must be used within an ComplementariosProvider"
    );
  }
  return context;
};
const useIdContratista = () => {
  const context = React.useContext(IdContratistaContext);
  if (context === undefined) {
    throw new Error(
      "useIdContratista must be used within an ComplementariosProvider"
    );
  }
  return context;
};
const useIdFuncionario = () => {
  const context = React.useContext(IdFuncionarioContext);
  if (context === undefined) {
    throw new Error(
      "useIdFuncionario must be used within an ComplementariosProvider"
    );
  }
  return context;
};

export {
  useIdEstadoCivil,
  useIdFondoPension,
  useIdEps,
  useIdRh,
  useIdTipoVinculacion,
  useIdContratista,
  useIdFuncionario,
};
