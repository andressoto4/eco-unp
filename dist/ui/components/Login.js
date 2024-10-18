import React, { useState, useContext } from "react";
import { IdUsuarioContext, IdContrasegnaContext, } from "../contexts/IngresoContex";
import { validarTextoMayusculasYNumeros, validarTextoPuntoTexto, } from "../func/ValidacionInput";
import { FaUser, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { FaUnlockKeyhole } from "react-icons/fa6";
import { Col, FormGroup, FormLabel, FormControl, InputGroup, Button, } from "react-bootstrap";
// Componente del input de usuario
var Usuario = function (_a) {
    var usuarioRef = _a.usuarioRef;
    var usuarioContext = useContext(IdUsuarioContext);
    if (!usuarioContext) {
        throw new Error("usuarioContext debe estar dentro de un IdUsuarioProvider");
    }
    var setIdUsuario = usuarioContext.setIdUsuario;
    var _b = useState(""), usuario = _b[0], setUsuario = _b[1];
    var _c = useState(false), isValid = _c[0], setIsValid = _c[1];
    var _d = useState(""), pattern = _d[0], setPattern = _d[1];
    var handleUsuarioChange = function (e) {
        var value = e.target.value.replace(/\s/g, "");
        var validValue = false;
        var newValue = value;
        if (value.length > 0) {
            var primerCaracter = value[0];
            if (/[A-Z]/.test(primerCaracter)) {
                validValue = validarTextoMayusculasYNumeros(value);
                setPattern("^[A-Z][0-9]*$");
                newValue = value.replace(/[^A-Z0-9]/g, "");
            }
            else if (/[a-z]/.test(primerCaracter)) {
                validValue = validarTextoPuntoTexto(value);
                setPattern("^[a-z]+\\.[a-z]+$");
                newValue = value.replace(/[^a-z.]/g, "");
            }
        }
        setIsValid(validValue);
        setUsuario(newValue);
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(Col, { xl: 12, md: 12, xs: 12 },
            React.createElement(FormGroup, { className: "mb-3", controlId: "validacionUsuario" },
                React.createElement(FormLabel, null, "Usuario"),
                React.createElement(InputGroup, null,
                    React.createElement(InputGroup.Text, { id: "email-icon" },
                        React.createElement(FaUser, null)),
                    React.createElement(FormControl, { className: "rounded-end", type: "text", ref: usuarioRef, value: usuario, onChange: handleUsuarioChange, onInput: handleUsuarioChange, placeholder: "nombre.apellido", 
                        // pattern={pattern}
                        maxLength: 100, isValid: isValid, required: true }))))));
};
var Contrasegna = function (_a) {
    var contrasegnaRef = _a.contrasegnaRef;
    var contrasegnaContext = useContext(IdContrasegnaContext);
    if (!contrasegnaContext) {
        throw new Error("contrasegnaContext debe estar dentro de un IdContrasegnaProvider");
    }
    var setIdContrasegna = contrasegnaContext.setIdContrasegna;
    var _b = useState(""), contrasegna = _b[0], setContrasegna = _b[1];
    var _c = useState(false), showPassword = _c[0], setShowPassword = _c[1];
    var _d = useState(false), isValid = _d[0], setIsValid = _d[1];
    var handleContrasegnaChange = function (e) {
        var value = e.target.value.replace(/\s/g, "");
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
                        React.createElement(FaUnlockKeyhole, null)),
                    React.createElement(FormControl, { type: showPassword ? "text" : "password", ref: contrasegnaRef, value: contrasegna, onChange: handleContrasegnaChange, placeholder: "*****************", maxLength: 100, isValid: isValid, required: true }),
                    React.createElement(Button, { type: "button", className: "rounded-end", variant: "secondary", onClick: function () {
                            setShowPassword(function (prev) { return !prev; });
                        } }, showPassword ? (React.createElement(FaRegEye, { color: "#FFF" })) : (React.createElement(FaRegEyeSlash, { color: "#FFF" }))),
                    React.createElement(FormControl.Feedback, { type: "invalid" }, "Por favor ingresa una contrasegna"))))));
};
var RedesSociales = function (_a) {
    var color = _a.color, IconoRedSocial = _a.IconoRedSocial, descripcion = _a.descripcion, enlace = _a.enlace;
    var _b = useState(false), isHovered = _b[0], setIsHovered = _b[1];
    var style = {
        backgroundColor: isHovered ? "#365072" : color,
        width: "37px",
        height: "37px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "50%",
        marginTop: "2px",
        marginRight: "4px",
        marginLeft: "4px",
        position: "relative",
        cursor: "pointer",
    };
    var tooltipStyle = {
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
        React.createElement("div", { style: style, onMouseEnter: function () { return setIsHovered(true); }, onMouseLeave: function () { return setIsHovered(false); } },
            React.createElement(IconoRedSocial, { size: "1.2em", color: "#FFF" }),
            React.createElement("div", { style: tooltipStyle }, descripcion))));
};
export { Usuario, Contrasegna, RedesSociales };
//# sourceMappingURL=Login.js.map