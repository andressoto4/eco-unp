// Importación de React y otros módulos necesarios
import React from "react";
import { FaFacebook, FaInstagram, FaXTwitter, FaYoutube, FaPhoneFlip, FaHeadphones } from 'react-icons/fa6';
import { MdError } from "react-icons/md";
import { Row, Col, Container, Button, Alert } from "react-bootstrap";
// Importaciones de componentes propios
import { IngresoProvider } from './providers/IngresoProvider';
import { InicioSesionHook } from "./hooks/InicioSesionHook";
import { LogosUnp } from "./componentes/Logos";
import { Recaptcha } from "./componentes/Recaptcha";
import { Usuario, Contrasegna, RedesSociales } from "./componentes/Login";
// Importación de archivos de estilos CSS
import './styles/Bootstrap.css';
import './styles/InicioSesionStyles.css';
// Definición del componente funcional Login que acepta las propiedades definidas en FormIngresoProps
const Login = (props) => {
    // Referencias para usuario, contraseña y reCAPTCHA
    const usuarioRef = React.useRef(null);
    const contrasegnaRef = React.useRef(null);
    const recaptchaRef = React.useRef(null);
    const maxAttempts = 3; // Número máximo de intentos permitidos
    const blockTime = 10; // Tiempo de bloqueo en segundos
    // Uso del hook personalizado InicioSesionHook para manejar el estado del formulario de inicio de sesión
    const { recaptchaToken, validated, error, attempts, isBlocked, timer, handleRecaptchaChange, handleSubmit } = InicioSesionHook(maxAttempts, blockTime);
    // ------ > Renderizado
    return (
    // Div que permite al login a ubicarse en el centro
    React.createElement("div", { className: "login-container" },
        React.createElement(Container, { style: { maxWidth: "720px" } },
            React.createElement(Row, { className: "justify-content-md-center border-0 rounded shadow" },
                React.createElement(Col, { md: 6, className: "bg-form align-content-center px-5 rounded-start" },
                    React.createElement(Row, { className: "justify-content-md-center" },
                        React.createElement("h2", { className: "text-center text-white" }, "Ecosistema de Informaci\u00F3n"),
                        React.createElement("hr", { className: "text-light" }),
                        React.createElement(LogosUnp, { src: "https://live.staticflickr.com/65535/54064468237_fb5a3edea2_z.jpg", size: "7em", alt: "Escudo Institucional Logos", height: "106px" }))),
                React.createElement(Col, { md: 6, className: "pt-4 pb-3 rounded-end bg-white" },
                    React.createElement(Row, { className: "justify-content-md-center text-center" },
                        React.createElement(LogosUnp, { size: "9em", src: "https://live.staticflickr.com/65535/54065780355_d6580531a4_q.jpg", alt: "Escudo Institucional UNP", height: "120px" }),
                        React.createElement("h4", { className: "mt-2" }, "Inicio de sesi\u00F3n")),
                    React.createElement(Row, { className: "justify-content-md-center mx-0" },
                        React.createElement("form", { method: "POST", noValidate: true, className: validated ? "was-validated" : "", onSubmit: (e) => handleSubmit(e, usuarioRef, contrasegnaRef, recaptchaRef) },
                            React.createElement(Col, { xl: 12, md: 12, xs: 12, className: "justify-content-center" },
                                React.createElement(Usuario, { usuarioRef: usuarioRef }),
                                React.createElement(Contrasegna, { contrasegnaRef: contrasegnaRef })),
                            React.createElement(Col, { xl: 12, md: 12, xs: 12, className: "d-grid gap-2" },
                                React.createElement(Button, { variant: "secondary", disabled: isBlocked, type: "submit" }, isBlocked ? `Espera ${timer} segundos` : "Ingresar")),
                            React.createElement(Recaptcha, { onChange: handleRecaptchaChange, sitekey: "6LeC9F0qAAAAAJrKsyU-wpvYmDquDcAoqhH_oASk" }))),
                    error && (React.createElement(Alert, { className: "mt-3", key: "danger", variant: "danger" },
                        React.createElement(MdError, null),
                        " ",
                        error)))),
            React.createElement(Row, { className: "mt-2 d-flex justify-content-beetween" },
                React.createElement(Col, { className: "ms-0 d-flex justify-content-start" },
                    React.createElement(RedesSociales, { IconoRedSocial: FaXTwitter, color: "#000", descripcion: "@UNPColombia", enlace: "https://x.com/UNPColombia" }),
                    React.createElement(RedesSociales, { IconoRedSocial: FaInstagram, color: "#F00075", descripcion: "@unpcolombia", enlace: "https://www.instagram.com/unpcolombia" }),
                    React.createElement(RedesSociales, { IconoRedSocial: FaFacebook, color: "#1778F2", descripcion: "@UNPColombia", enlace: "https://www.facebook.com/UNPColombia" }),
                    React.createElement(RedesSociales, { IconoRedSocial: FaYoutube, color: "#FF0000", descripcion: "@unpcolombia", enlace: "https://www.youtube.com/channel/UCUiRLOI-MUqa7ATG-mJwY1w" }),
                    React.createElement(RedesSociales, { IconoRedSocial: FaHeadphones, color: '#1CCFF9', descripcion: "UNPRadio", enlace: "https://unpradio.unp.gov.co" }),
                    React.createElement(RedesSociales, { IconoRedSocial: FaPhoneFlip, color: '#D32929', descripcion: "L\u00EDnea Vida 103", enlace: "https://www.unp.gov.co/atencion-y-servicios-a-la-ciudadania/directorio/linea-vida-103" })),
                React.createElement(Col, { className: "me-0 d-flex justify-content-end align-items-center" },
                    React.createElement("a", { href: "https://www.unp.gov.co/normativa/politicas-de-seguridad-de-la-informacion-y-proteccion-de-datos-personales/", target: "_blank", rel: "noopener noreferrer", style: { textDecoration: 'none' } },
                        React.createElement("p", { className: "politica-datos" }, "Pol\u00EDticas de seguridad de la informaci\u00F3n y protecci\u00F3n de datos personales"))))),
        React.createElement("br", null),
        props.children));
};
// Definición del componente funcional IniciarSesion
const IniciarSesion = () => {
    // -----> Renderizado
    return (
    // El componente IngresoProvider envuelve al componente Login
    React.createElement(IngresoProvider, null,
        React.createElement(Login, null)));
};
// Exporta el componente IniciarSesion para su uso en otros archivos
export default IniciarSesion;
//# sourceMappingURL=InicioSesion.js.map