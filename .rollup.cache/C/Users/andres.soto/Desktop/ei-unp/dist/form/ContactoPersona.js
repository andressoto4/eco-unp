import React from "react";
import { Col, FormGroup, FormLabel, FormControl, Row } from "react-bootstrap";
const ContactoPersona = () => {
    return (React.createElement(Row, null,
        React.createElement(Col, { md: 4, xs: 12 },
            React.createElement(FormGroup, { className: "mb-3" },
                React.createElement(FormLabel, null,
                    "Celular uno ",
                    React.createElement("span", { className: "text-danger" }, "*")),
                React.createElement(FormControl, { minLength: 10, maxLength: 10, placeholder: "Ej: 300 200 2000", required: true }))),
        React.createElement(Col, { md: 4, xs: 12 },
            React.createElement(FormGroup, { className: "mb-3" },
                React.createElement(FormLabel, null, "Celular dos "),
                React.createElement(FormControl, { minLength: 10, maxLength: 10, placeholder: "Ej: 300 200 2000" }))),
        React.createElement(Col, { md: 4, xs: 12 },
            React.createElement(FormGroup, { className: "mb-3" },
                React.createElement(FormLabel, null, "Tel\u00E9fono (o celular tres)"),
                React.createElement(FormControl, { minLength: 10, maxLength: 10, placeholder: "Ej: 600 700 7000" }))),
        React.createElement(Col, { xl: 6, md: 9, xs: 12 },
            React.createElement(FormGroup, { className: "mb-3" },
                React.createElement(FormLabel, null,
                    "Correo electr\u00F3nico ",
                    React.createElement("span", { className: "text-danger" }, "*")),
                React.createElement(FormControl, { type: "email", maxLength: 100, required: true })))));
};
export default ContactoPersona;
//# sourceMappingURL=ContactoPersona.js.map