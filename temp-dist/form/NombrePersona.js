import React from "react";
import { Col, FormGroup, FormLabel, FormControl, Row } from "react-bootstrap";
import { useIdPrimerNombre, useIdSegundoNombre, useIdPrimerApellido, useIdSegundoApellido, } from "./hooks/NombreHook";
var NombrePersona = function (_a) {
    var method = _a.method;
    // Importar los valores y las funciones de actualización de cada contexto
    var _b = useIdPrimerNombre(), primerNombre = _b.idPrimerNombre, setPrimerNombre = _b.setIdPrimerNombre;
    var _c = useIdSegundoNombre(), segundoNombre = _c.idSegundoNombre, setSegundoNombre = _c.setIdSegundoNombre;
    var _d = useIdPrimerApellido(), primerApellido = _d.idPrimerApellido, setPrimerApellido = _d.setIdPrimerApellido;
    var _e = useIdSegundoApellido(), segundoApellido = _e.idSegundoApellido, setSegundoApellido = _e.setIdSegundoApellido;
    return (React.createElement(React.Fragment, null,
        React.createElement(Row, null,
            React.createElement(Col, { lg: 3, md: 6, xs: 12 },
                React.createElement(FormGroup, { className: "mb-3" },
                    React.createElement(FormLabel, null,
                        "Primer nombre ",
                        React.createElement("span", { className: "text-danger" }, "*")),
                    React.createElement(FormControl, { type: "text", value: primerNombre, onChange: function (e) { return setPrimerNombre(e.target.value); }, maxLength: 20, disabled: method === "GET" ? true : false, required: true }))),
            React.createElement(Col, { lg: 3, md: 6, xs: 12 },
                React.createElement(FormGroup, { className: "mb-3" },
                    React.createElement(FormLabel, null, "Segundo nombre"),
                    React.createElement(FormControl, { type: "text", value: segundoNombre, onChange: function (e) { return setSegundoNombre(e.target.value); }, maxLength: 50, disabled: method === "GET" ? true : false }))),
            React.createElement(Col, { lg: 3, md: 6, xs: 12 },
                React.createElement(FormGroup, { className: "mb-3" },
                    React.createElement(FormLabel, null,
                        "Primer apellido ",
                        React.createElement("span", { className: "text-danger" }, "*")),
                    React.createElement(FormControl, { type: "text", value: primerApellido, onChange: function (e) { return setPrimerApellido(e.target.value); }, maxLength: 50, disabled: method === "GET" ? true : false, required: true }))),
            React.createElement(Col, { lg: 3, md: 6, xs: 12 },
                React.createElement(FormGroup, { className: "mb-3" },
                    React.createElement(FormLabel, null, "Segundo apellido"),
                    React.createElement(FormControl, { type: "text", value: segundoApellido, onChange: function (e) { return setSegundoApellido(e.target.value); }, maxLength: 50, disabled: method === "GET" ? true : false }))))));
};
export default NombrePersona;
//# sourceMappingURL=NombrePersona.js.map