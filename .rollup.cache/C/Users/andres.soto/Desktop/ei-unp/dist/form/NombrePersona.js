import React from "react";
import { Col, FormGroup, FormLabel, FormControl, Row } from "react-bootstrap";
const NombrePersona = () => {
    return (React.createElement(Row, null,
        React.createElement(Col, { lg: 3, md: 6, xs: 12 },
            React.createElement(FormGroup, { className: "mb-3" },
                React.createElement(FormLabel, null,
                    "Primer nombre ",
                    React.createElement("span", { className: "text-danger" }, "*")),
                React.createElement(FormControl, { type: "text", maxLength: 20, required: true }))),
        React.createElement(Col, { lg: 3, md: 6, xs: 12 },
            React.createElement(FormGroup, { className: "mb-3" },
                React.createElement(FormLabel, null, "Segundo nombre"),
                React.createElement(FormControl, { type: "text", maxLength: 50 }))),
        React.createElement(Col, { lg: 3, md: 6, xs: 12 },
            React.createElement(FormGroup, { className: "mb-3" },
                React.createElement(FormLabel, null,
                    "Primer apellido ",
                    React.createElement("span", { className: "text-danger" }, "*")),
                React.createElement(FormControl, { type: "text", maxLength: 50, required: true }))),
        React.createElement(Col, { lg: 3, md: 6, xs: 12 },
            React.createElement(FormGroup, { className: "mb-3" },
                React.createElement(FormLabel, null, "Segundo apellido"),
                React.createElement(FormControl, { type: "text", maxLength: 50 })))));
};
export default NombrePersona;
//# sourceMappingURL=NombrePersona.js.map