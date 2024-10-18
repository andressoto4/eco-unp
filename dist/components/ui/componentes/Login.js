import React, { useState, useContext } from "react";
import { IdUsuarioContext, IdContrasegnaContext, } from "../contexs/IngresoContex";
import { validarInputUsuario } from "../../../funciones/ValidacionInput";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaUser, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Col, FormGroup, FormLabel, FormControl, InputGroup, Button, } from "react-bootstrap";
// Componente del input de usuario
const Usuario = ({ usuarioRef }) => {
    const usuarioContext = useContext(IdUsuarioContext);
    if (!usuarioContext) {
        throw new Error("usuarioContext debe estar dentro de un IdUsuarioProvider");
    }
    const { setIdUsuario } = usuarioContext;
    const [usuario, setUsuario] = useState("");
    const [isValid, setIsValid] = useState(true);
    const handleUsuarioChange = (e) => {
        const value = e.target.value.replace(/\s/g, "");
        const validValue = validarInputUsuario(value);
        setUsuario(validValue);
        setIsValid(validValue === value);
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(Col, { xl: 12, md: 12, xs: 12 },
            React.createElement(FormGroup, { className: "mb-3", controlId: "validacionUsuario" },
                React.createElement(FormLabel, null, "Usuario"),
                React.createElement(InputGroup, null,
                    React.createElement(InputGroup.Text, { id: "email-icon" },
                        React.createElement(FaUser, null)),
                    React.createElement(FormControl, { className: "rounded-end", type: "text", ref: usuarioRef, value: usuario, onChange: handleUsuarioChange, onInput: handleUsuarioChange, placeholder: "nombre.apellido", pattern: "^[a-z]+\\.[a-z]+$", maxLength: 100, isInvalid: !isValid, required: true }))))));
};
const Contrasegna = ({ contrasegnaRef }) => {
    const contrasegnaContext = useContext(IdContrasegnaContext);
    if (!contrasegnaContext) {
        throw new Error("contrasegnaContext debe estar dentro de un IdContrasegnaProvider");
    }
    const { setIdContrasegna } = contrasegnaContext;
    const [contrasegna, setContrasegna] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [isValid, setIsValid] = useState(false);
    const handleContrasegnaChange = (e) => {
        const value = e.target.value.replace(/\s/g, "");
        setContrasegna(value);
        if (value) {
            setIsValid(true);
            setIdContrasegna(value);
        }
        else {
            setIsValid(false);
        }
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(Col, { xl: 12, md: 12, xs: 12 },
            React.createElement(FormGroup, { className: "mb-3", controlId: "validacionContrasegna" },
                React.createElement(FormLabel, null, "Contrase\u00F1a"),
                React.createElement(InputGroup, null,
                    React.createElement(InputGroup.Text, { id: "password-icon" },
                        React.createElement(RiLockPasswordFill, null)),
                    React.createElement(FormControl, { type: showPassword ? "text" : "password", ref: contrasegnaRef, value: contrasegna, onChange: handleContrasegnaChange, placeholder: "*****************", maxLength: 100, isValid: isValid, required: true }),
                    React.createElement(Button, { type: "button", className: "rounded-end", variant: "secondary", onClick: () => {
                            setShowPassword((prev) => !prev);
                        } }, showPassword ? (React.createElement(FaRegEye, { color: "#FFF" })) : (React.createElement(FaRegEyeSlash, { color: "#FFF" }))),
                    React.createElement(FormControl.Feedback, { type: "invalid" }, "Por favor ingresa una contrasegna"))))));
};
const RedesSociales = ({ color, IconoRedSocial, descripcion, enlace, }) => {
    const [isHovered, setIsHovered] = useState(false);
    const style = {
        backgroundColor: isHovered ? "#365072" : color,
        width: "37px",
        height: "37px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "50%",
        marginTop: "2px",
        marginRight: "8px",
        position: "relative",
        cursor: "pointer",
    };
    const tooltipStyle = {
        visibility: isHovered ? "visible" : "hidden",
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        color: "#365072",
        textAlign: "center",
        borderRadius: "6px",
        padding: "5px",
        position: "absolute",
        zIndex: 1,
        top: "120%",
        left: "50%",
        marginLeft: "-75px",
        width: "150px",
        fontWeight: "600",
    };
    return (React.createElement("a", { href: enlace, target: "_blank", rel: "noopener noreferrer", style: { textDecoration: "none" } },
        React.createElement("div", { style: style, onMouseEnter: () => setIsHovered(true), onMouseLeave: () => setIsHovered(false) },
            React.createElement(IconoRedSocial, { size: "1.2em", color: "#FFF" }),
            React.createElement("div", { style: tooltipStyle }, descripcion))));
};
export { Usuario, Contrasegna, RedesSociales };
