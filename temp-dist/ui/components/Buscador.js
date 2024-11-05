import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import { Form } from "react-bootstrap";
import '../styles/Buscador.css';
var BusquedaInput = function (_a) {
    var onSearch = _a.onSearch;
    var normalizeText = function (text) {
        return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    };
    var handleSearch = function (event) {
        var normalizedValue = normalizeText(event.target.value);
        onSearch(normalizedValue);
    };
    return (React.createElement("div", { className: "search-container" },
        React.createElement(Form.Group, { className: "d-flex align-items-center mx-1 position-relative" },
            React.createElement(Form.Control, { type: "text", className: "me-0 input-with-icon", placeholder: "Ingrese un criterio de b\u00FAsqueda...", onChange: handleSearch }),
            React.createElement(BiSearchAlt, { className: "input-icon" }))));
};
export default BusquedaInput;
//# sourceMappingURL=Buscador.js.map