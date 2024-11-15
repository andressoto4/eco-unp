// Exportar providers
export { InicioSesionProvider } from "./contexts/InicioSesionContext";
export { RegistroProvider } from "./contexts/RegistroContext";
export { AuthProvider } from "./contexts/AuthContex";

// Exportar hooks
export {
  useIdUsuario,
  useIdContrasena,
  useIdCaptcha,
} from "./hooks/InicioSesionHook";
export { useIdUsuarioR, useIdCorreo } from "./hooks/RegistroHook";
export { useIdAuth } from "./hooks/AuthHook";
export { FinSesionHook } from "./hooks/FinSesionHook";

// Exportar componentes reutilizables
export { default as LogosUnp } from "./components/Logos";
export { default as RedesSocialesICon } from "./components/RedesSocialesIcon";
export { default as PaginaNoPermitida } from "./components/PaginaNoPermitida";
export { default as PaginaNoEncontrada } from "./components/PaginaNoEncontrada";

// Exportar componente login y registro
export { default as InicioSesion } from "./InicioSesion";
export { default as Registro } from "./Registro";
