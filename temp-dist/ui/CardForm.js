import React from "react";
import { Row, Button, Col, Container, Card, CardHeader, CardBody, } from "react-bootstrap";
import { FaPen } from "react-icons/fa6";
var headerStyle = {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#303d50",
    alignItems: "center",
};
var borderUnpStyle = {
    borderColor: "#365072",
};
var btnSendStyle = {
    color: "#f3f3f3",
    backgroundColor: "#38a729",
    borderColor: "#33a024",
    marginTop: "20px",
    marginBottom: "15px",
    width: "100px",
};
var divBtnEditStyle = {
    border: "1px solid",
    borderRadius: "50%",
    padding: "10px",
    cursor: "pointer",
};
var btnEditStyle = {
    fontSize: "1.5rem",
};
var handleEditClick = function (method, changeMethod) {
    if (changeMethod) {
        changeMethod(method == "GET" ? "PUT" : "GET");
    }
};
var CardForm = function (_a) {
    var children = _a.children, method = _a.method, _b = _a.changeMethod, changeMethod = _b === void 0 ? function () { } : _b, titulo = _a.titulo, _c = _a.canEdit, canEdit = _c === void 0 ? false : _c, _d = _a.hasBody, hasBody = _d === void 0 ? true : _d, onSubmit = _a.onSubmit, validated = _a.validated;
    return (React.createElement(Container, { className: "my-3" },
        React.createElement(Row, { className: "justify-content-center" },
            React.createElement(Col, { xl: 9, lg: 11 },
                React.createElement(Card, { style: borderUnpStyle, className: "border-0 rounded-3 shadow my-3" },
                    React.createElement(CardHeader, { style: headerStyle, className: "text-start text-light rounded-3 rounded-bottom-0" },
                        React.createElement("h5", { className: "my-3" }, titulo),
                        canEdit && (React.createElement("div", { style: divBtnEditStyle, onClick: function () { return handleEditClick(method, changeMethod); } },
                            React.createElement(FaPen, { style: btnEditStyle })))),
                    hasBody ? (React.createElement(CardBody, null,
                        React.createElement("form", { method: method, onSubmit: onSubmit, noValidate: true, className: validated ? "was-validated" : "" },
                            children,
                            method !== "GET" && (React.createElement(Row, { className: "d-flex justify-content-end me-0" },
                                React.createElement(Button, { style: btnSendStyle, type: "submit" }, "Enviar")))))) : (React.createElement("form", { method: method, onSubmit: onSubmit, noValidate: true, className: validated ? "was-validated" : "" },
                        children,
                        React.createElement(CardBody, null, method !== "GET" && (React.createElement(Row, { className: "d-flex justify-content-end me-0" },
                            React.createElement(Button, { style: btnSendStyle, type: "submit" }, "Enviar")))))))))));
};
export default CardForm;
//# sourceMappingURL=CardForm.js.map