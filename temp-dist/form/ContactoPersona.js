import React from "react";
import { Col, FormGroup, FormLabel, FormControl, Row } from "react-bootstrap";
import { useIdCelularDos, useIdCelularUno, useIdCorreo, useIdTelefono, } from "./hooks/ContactoHook";
var ContactoPersona = function (_a) {
    var method = _a.method;
    // Importar los valores y las funciones de actualización de cada contexto
    var _b = useIdCelularUno(), celularUno = _b.idCelularUno, setCelularUno = _b.setIdCelularUno;
    var _c = useIdCelularDos(), celularDos = _c.idCelularDos, setCelularDos = _c.setIdCelularDos;
    var _d = useIdTelefono(), telefono = _d.idTelefono, setTelefono = _d.setIdTelefono;
    var _e = useIdCorreo(), correo = _e.idCorreo, setCorreo = _e.setIdCorreo;
    return (React.createElement(React.Fragment, null,
        React.createElement(Row, null,
            React.createElement(Col, { md: 4, xs: 12 },
                React.createElement(FormGroup, { className: "mb-3" },
                    React.createElement(FormLabel, null,
                        "Celular uno ",
                        React.createElement("span", { className: "text-danger" }, "*")),
                    React.createElement(FormControl, { value: celularUno, onChange: function (e) { return setCelularUno(e.target.value); }, minLength: 10, maxLength: 10, placeholder: method === "GET" ? "" : "Ej: 300 200 2000", disabled: method === "GET" ? true : false, required: true }))),
            React.createElement(Col, { md: 4, xs: 12 },
                React.createElement(FormGroup, { className: "mb-3" },
                    React.createElement(FormLabel, null, "Celular dos "),
                    React.createElement(FormControl, { value: celularDos, onChange: function (e) { return setCelularDos(e.target.value); }, minLength: 10, maxLength: 10, placeholder: method === "GET" ? "" : "Ej: 300 200 2000", disabled: method === "GET" ? true : false }))),
            React.createElement(Col, { md: 4, xs: 12 },
                React.createElement(FormGroup, { className: "mb-3" },
                    React.createElement(FormLabel, null, "Tel\u00E9fono (o celular tres)"),
                    React.createElement(FormControl, { value: telefono, onChange: function (e) { return setTelefono(e.target.value); }, minLength: 10, maxLength: 10, placeholder: method === "GET" ? "" : "Ej: 300 200 2000", disabled: method === "GET" ? true : false }))),
            React.createElement(Col, { xl: 6, md: 9, xs: 12 },
                React.createElement(FormGroup, { className: "mb-3" },
                    React.createElement(FormLabel, null,
                        "Correo electr\u00F3nico ",
                        React.createElement("span", { className: "text-danger" }, "*")),
                    React.createElement(FormControl, { type: "email", value: correo, onChange: function (e) { return setCorreo(e.target.value); }, maxLength: 100, disabled: method === "GET" ? true : false, required: true }))))));
};
export default ContactoPersona;
//# sourceMappingURL=ContactoPersona.js.map