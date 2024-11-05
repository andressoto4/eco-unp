import React from "react";
import { Col, FormGroup, FormLabel, FormSelect, FormControl, Row, } from "react-bootstrap";
import { useIdGenero, useIdOrientacionSexual, useIdSexo, } from "./hooks/SexoGeneroHook";
var SexoGeneroPersona = function (_a) {
    var method = _a.method;
    // Importar los valores y las funciones de actualización de cada contexto
    var _b = useIdSexo(), sexo = _b.idSexo, setSexo = _b.setIdSexo;
    var _c = useIdGenero(), genero = _c.idGenero, setGenero = _c.setIdGenero;
    var _d = useIdOrientacionSexual(), orientacionSexual = _d.idOrientacionSexual, setOrientacionSexual = _d.setIdOrientacionSexual;
    return (React.createElement(React.Fragment, null,
        React.createElement(Row, null,
            React.createElement(Col, { md: 4, xs: 12 },
                React.createElement(FormGroup, { className: "mb-3" },
                    React.createElement(FormLabel, null,
                        "Sexo ",
                        React.createElement("span", { className: "text-danger" }, "*")),
                    method === "GET" ? (React.createElement(FormControl, { type: "text", disabled: true })) : (React.createElement(FormSelect, { value: sexo, onChange: function (e) { return setSexo(e.target.value); } },
                        React.createElement("option", { value: "0" }, "Seleccione..."),
                        React.createElement("option", { value: "1" }, "Hombre"),
                        React.createElement("option", { value: "2" }, "Mujer"),
                        React.createElement("option", { value: "3" }, "Intersexual"))))),
            React.createElement(Col, { md: 4, xs: 12 },
                React.createElement(FormGroup, { className: "mb-3" },
                    React.createElement(FormLabel, null,
                        "G\u00E9nero ",
                        React.createElement("span", { className: "text-danger" }, "*")),
                    method === "GET" ? (React.createElement(FormControl, { type: "text", disabled: true })) : (React.createElement(FormSelect, { value: genero, onChange: function (e) { return setGenero(e.target.value); } },
                        React.createElement("option", { value: "0" }, "Seleccione..."),
                        React.createElement("option", { value: "1" }, "Femenino"),
                        React.createElement("option", { value: "2" }, "Masculino"),
                        React.createElement("option", { value: "3" }, "No binario"))))),
            React.createElement(Col, { md: 4, xs: 12 },
                React.createElement(FormGroup, { className: "mb-3" },
                    React.createElement(FormLabel, null,
                        "Orientaci\u00F3n Sexual ",
                        React.createElement("span", { className: "text-danger" }, "*")),
                    method === "GET" ? (React.createElement(FormControl, { type: "text", disabled: true })) : (React.createElement(FormSelect, { value: orientacionSexual, onChange: function (e) { return setOrientacionSexual(e.target.value); } },
                        React.createElement("option", { value: "0" }, "Seleccione..."),
                        React.createElement("option", { value: "1" }, "Heterosexual"),
                        React.createElement("option", { value: "2" }, "Homosexual"),
                        React.createElement("option", { value: "3" }, "Bisexual"))))))));
};
export default SexoGeneroPersona;
//# sourceMappingURL=SexoGeneroPersona.js.map