// Importación de React y otros módulos necesarios
import React from "react";
import { FaFileContract, FaKey } from "react-icons/fa6";
import { Row, Col, Container, Button } from "react-bootstrap";
// Importaciones de componentes propios
import { InicioSesionHook } from "./hooks/InicioSesionHook";
import { LogosUnp } from "./components/Logos";
import { Recaptcha } from "./components/Recaptcha";
import { Usuario, Contrasegna, RedesSociales } from "./components/Login";
// Importación de archivos de estilos CSS
import "./styles/Bootstrap.css";
import "./styles/InicioSesion.css";
// Definición del componente funcional Login que acepta las propiedades definidas en FormIngresoProps
var Login = function (props) {
    // Referencias para usuario, contraseña y reCAPTCHA
    var usuarioRef = React.useRef(null);
    var contrasegnaRef = React.useRef(null);
    var recaptchaRef = React.useRef(null);
    var maxAttempts = 3; // Número máximo de intentos permitidos
    var blockTime = 10; // Tiempo de bloqueo en segundos
    // Uso del hook personalizado InicioSesionHook para manejar el estado del formulario de inicio de sesión
    var _a = InicioSesionHook(maxAttempts, blockTime), recaptchaToken = _a.recaptchaToken, validated = _a.validated, attempts = _a.attempts, isBlocked = _a.isBlocked, timer = _a.timer, handleRecaptchaChange = _a.handleRecaptchaChange, handleSubmit = _a.handleSubmit;
    // ------ > Renderizado
    return (
    // Div que permite al login a ubicarse en el centro
    React.createElement("div", { className: "login-container" },
        React.createElement(Container, { style: { maxWidth: "720px", maxHeight: "600px" } },
            React.createElement(Row, { className: "justify-content-md-center border-0 rounded shadow" },
                React.createElement(Col, { md: 6, className: "bg-form align-content-center px-5 rounded-start" },
                    React.createElement(Row, { className: "justify-content-md-center" },
                        React.createElement("h2", { className: "text-center text-white" }, "Ecosistema de Informaci\u00F3n"),
                        React.createElement("hr", { className: "text-light" }),
                        React.createElement(LogosUnp, { src: "https://live.staticflickr.com/65535/54064468237_fb5a3edea2_z.jpg", size: "7em", alt: "Escudo Institucional Logos", height: "106px" }),
                        React.createElement("p", { className: "text-center mt-4", style: { color: "#BFBFBF", fontWeight: "500" } }, "Integrar la gesti\u00F3n, potencializar los resultados"))),
                React.createElement(Col, { md: 6, className: "pt-4 pb-3 rounded-end bg-white" },
                    React.createElement(Row, { className: "justify-content-md-center text-center" },
                        React.createElement(LogosUnp, { size: "9em", src: "https://live.staticflickr.com/65535/54065780355_d6580531a4_q.jpg", alt: "Escudo Institucional UNP", height: "120px" }),
                        React.createElement("h4", { className: "mt-2" }, "Inicio de sesi\u00F3n")),
                    React.createElement(Row, { className: "justify-content-md-center mx-0" },
                        React.createElement("form", { method: "POST", noValidate: true, className: validated ? "was-validated" : "", onSubmit: function (e) {
                                return handleSubmit(e, usuarioRef, contrasegnaRef, recaptchaRef);
                            } },
                            React.createElement(Col, { xl: 12, md: 12, xs: 12, className: "justify-content-center" },
                                React.createElement(Usuario, { usuarioRef: usuarioRef }),
                                React.createElement(Contrasegna, { contrasegnaRef: contrasegnaRef })),
                            React.createElement(Col, { xl: 12, md: 12, xs: 12, className: "d-grid gap-2" },
                                React.createElement(Button, { variant: "secondary", disabled: isBlocked, type: "submit" }, isBlocked ? "Espera ".concat(timer, " segundos") : "Ingresar")),
                            React.createElement(Recaptcha, { onChange: handleRecaptchaChange, sitekey: "6LeC9F0qAAAAAJrKsyU-wpvYmDquDcAoqhH_oASk" }))))),
            React.createElement(Row, { className: "mt-2 d-flex justify-content-beetween" },
                React.createElement(Col, { className: "ms-0 d-flex justify-content-start" }),
                React.createElement(Col, { className: "me-0 d-flex justify-content-end align-items-center" },
                    React.createElement(RedesSociales, { IconoRedSocial: FaFileContract, color: "#365072", descripcion: "Pol\u00EDticas de datos de la UNP", enlace: "https://www.unp.gov.co/normativa/politicas-de-seguridad-de-la-informacion-y-proteccion-de-datos-personales/" }),
                    React.createElement(RedesSociales, { IconoRedSocial: FaKey, color: "#365072", descripcion: "Recuperar contrase\u00F1a", enlace: "#" })))),
        React.createElement("br", null),
        props.children));
};
// Definición del componente funcional IniciarSesion
var InicioSesion = function () {
    // -----> Renderizado
    return (React.createElement("div", { className: "main-container" },
        React.createElement(Login, null)));
};
// Exporta el componente IniciarSesion para su uso en otros archivos
export default InicioSesion;
//# sourceMappingURL=InicioSesion.js.map