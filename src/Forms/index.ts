// Exportar providers
export { NombreProvider } from "./contexts/NombreContext";
export { NuipProvider } from "./contexts/NuipContext";
export { SexoGeneroProvider } from "./contexts/SexoGeneroContext";
export { ContactoProvider } from "./contexts/ContactoContext";
export { UbicacionProvider } from "./contexts/UbicacionContext";
export { ComplementariosProvider } from "./contexts/ComplementariosContext";

// Exportar hooks
export {
  useIdPrimerNombre,
  useIdSegundoNombre,
  useIdPrimerApellido,
  useIdSegundoApellido,
} from "./hooks/NombreHook";
export {
  useIdNumeroIdentificacion,
  useIdTipoIdentificaicon,
  useIdFechaExpedicion,
} from "./hooks/NuipHook";
export {
  useIdSexo,
  useIdGenero,
  useIdOrientacionSexual,
} from "./hooks/SexoGeneroHook";
export {
  useIdCelularUno,
  useIdCelularDos,
  useIdTelefono,
  useIdCorreo,
} from "./hooks/ContactoHook";
export {
  useIdPais,
  useIdDepartamento,
  useIdMunicipio,
  useIdZona,
  useIdDireccionUrbana,
  useIdDireccionRural,
} from "./hooks/UbicacionHook";
export {
  useIdEstadoCivil,
  useIdFondoPension,
  useIdEps,
  useIdRh,
  useIdTipoVinculacion,
  useIdContratista,
  useIdFuncionario,
} from "./hooks/ComplementariosHook";

// Exportar componentes reutilizables
export { default as NombrePersona } from "./components/NombrePersona";
export { default as Nuip } from "./components/Nuip";
export { default as SexoGeneroPersona } from "./components/SexoGeneroPersona";
export { default as ContactoPersona } from "./components/ContactoPersona";
export { default as UbicacionPersona } from "./components/UbicacionPersona";
export { default as ComplementariosPersona } from "./components/ComplementariosPersona";
export { default as Contratista } from "./components/Contratista";
export { default as Funcionario } from "./components/Funcionario";
export { default as Pais } from "./components/Pais";
export { default as Departamento } from "./components/Departamento";
export { default as Municipio } from "./components/Municipio";

// Exportar componente formulario de datos basicos
export { default as CardFormBasicos } from "./CardFormBasicos";
