import React from "react";
import { Col, FormGroup, FormLabel, FormSelect, FormControl, Row, } from "react-bootstrap";
import { useIdFechaExpedicion, useIdNumeroIdentificacion, useIdTipoIdentificaicon, } from "./hooks/NuipHook";
var Nuip = function (_a) {
    var method = _a.method, _b = _a.attach, attach = _b === void 0 ? false : _b;
    // Importar los valores y las funciones de actualización de cada contexto
    var _c = useIdTipoIdentificaicon(), tipoIdentificacion = _c.idTipoIdentificacion, setTipoIdentificacion = _c.setIdTipoIdentificacion;
    var _d = useIdNumeroIdentificacion(), numeroIdentificacion = _d.idNumeroIdentificacion, setNumeroIdentificacion = _d.setIdNumeroIdentificacion;
    var _e = useIdFechaExpedicion(), fechaExpedicion = _e.idFechaExpedicion, setFechaExpedicion = _e.setIdFechaExpedicion;
    return (React.createElement(React.Fragment, null,
        React.createElement(Row, null,
            React.createElement(Col, { md: 4, xs: 12 },
                React.createElement(FormGroup, { className: "mb-3" },
                    React.createElement(FormLabel, null,
                        "Tipo de identificaci\u00F3n ",
                        React.createElement("span", { className: "text-danger" }, "*")),
                    method === "GET" ? (React.createElement(FormControl, { type: "text", disabled: true })) : (React.createElement(FormSelect, { value: tipoIdentificacion, onChange: function (e) { return setTipoIdentificacion(e.target.value); } },
                        React.createElement("option", { value: "0" }, "Seleccione..."),
                        React.createElement("option", { value: "1" }, "Tarjeta de identidad"),
                        React.createElement("option", { value: "2" }, "C\u00E9dula de ciudadan\u00EDa"),
                        React.createElement("option", { value: "3" }, "C\u00E9dula de Extranjer\u00EDa"),
                        React.createElement("option", { value: "4" }, "Pasaporte"))))),
            React.createElement(Col, { md: 4, xs: 12 },
                React.createElement(FormGroup, { className: "mb-3" },
                    React.createElement(FormLabel, null,
                        "N\u00FAmero de identificaci\u00F3n ",
                        React.createElement("span", { className: "text-danger" }, "*")),
                    React.createElement(FormControl, { type: "text", value: numeroIdentificacion, onChange: function (e) { return setNumeroIdentificacion(e.target.value); }, minLength: 6, maxLength: 15, disabled: method === "GET" ? true : false, required: true }))),
            React.createElement(Col, { md: 4, xs: 12 },
                React.createElement(FormGroup, { className: "mb-3" },
                    React.createElement(FormLabel, null,
                        "Fecha de expedici\u00F3n ",
                        React.createElement("span", { className: "text-danger" }, "*")),
                    React.createElement(FormControl, { type: "date", value: fechaExpedicion, onChange: function (e) { return setFechaExpedicion(e.target.value); }, max: new Date().toISOString().split("T")[0], disabled: method === "GET" ? true : false, required: true }))),
            React.createElement(Col, { md: 8, xs: 12, style: { display: attach ? "block" : "none" } },
                React.createElement(FormGroup, { controlId: "formFile", className: "mb-3" },
                    React.createElement(FormLabel, null,
                        "Fotocopia del documento de identificaci\u00F3n personal",
                        " ",
                        React.createElement("span", { className: "text-danger" }, "*")),
                    React.createElement(FormControl, { type: "file", required: attach }))))));
};
export default Nuip;
//# sourceMappingURL=Nuip.js.map