import React from "react";
import { Col, FormGroup, FormLabel, FormSelect, FormControl, Row, } from "react-bootstrap";
const Nuip = ({ attach = false }) => {
    return (React.createElement(React.Fragment, null,
        React.createElement(Row, null,
            React.createElement(Col, { md: 4, xs: 12 },
                React.createElement(FormGroup, { className: "mb-3" },
                    React.createElement(FormLabel, null,
                        "Tipo de identificaci\u00F3n ",
                        React.createElement("span", { className: "text-danger" }, "*")),
                    React.createElement(FormSelect, null,
                        React.createElement("option", { value: "0" }, "Seleccione..."),
                        React.createElement("option", { value: "1" }, "Tarjeta de identidad"),
                        React.createElement("option", { value: "2" }, "C\u00E9dula de ciudadan\u00EDa"),
                        React.createElement("option", { value: "3" }, "C\u00E9dula de Extranjer\u00EDa"),
                        React.createElement("option", { value: "4" }, "Pasaporte")))),
            React.createElement(Col, { md: 4, xs: 12 },
                React.createElement(FormGroup, { className: "mb-3" },
                    React.createElement(FormLabel, null,
                        "N\u00FAmero de identificaci\u00F3n ",
                        React.createElement("span", { className: "text-danger" }, "*")),
                    React.createElement(FormControl, { type: "text", minLength: 6, maxLength: 15, required: true }))),
            React.createElement(Col, { md: 4, xs: 12 },
                React.createElement(FormGroup, { className: "mb-3" },
                    React.createElement(FormLabel, null,
                        "Fecha de expedici\u00F3n ",
                        React.createElement("span", { className: "text-danger" }, "*")),
                    React.createElement(FormControl, { type: "date", max: new Date().toISOString().split("T")[0], required: true }))),
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