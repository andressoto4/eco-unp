import React from "react";
import { Row, Button, Col, Container, Card, CardHeader, CardTitle, CardBody } from 'react-bootstrap';
;
const bgUnpStyle = {
    backgroundColor: '#303d50',
};
const borderUnpStyle = {
    borderColor: '#365072',
};
const btnSendStyle = {
    color: '#f3f3f3',
    backgroundColor: '#38a729',
    borderColor: '#33a024',
    marginTop: '20px',
    marginBottom: '15px',
    width: '100px'
};
const handleEnviarClick = () => {
    alert('Estamos trabajando... paciencia :)');
};
const CardForm = ({ children, method, titulo }) => {
    return (React.createElement(Container, { className: "py-5" },
        React.createElement(Row, { className: "justify-content-center" },
            React.createElement(Col, { xl: 10, md: 11, xs: 12 },
                React.createElement(Card, { style: borderUnpStyle, className: "border-0 rounded-3 shadow" },
                    React.createElement(CardHeader, { style: bgUnpStyle, className: "text-center text-light rounded-3 rounded-bottom-0 py-4" },
                        React.createElement(CardTitle, { className: "px-xs-0 px-md-1 pd-lg-2" },
                            React.createElement("h4", null, titulo))),
                    React.createElement(CardBody, { className: "px-4" },
                        React.createElement("form", { method: method },
                            children,
                            React.createElement(Row, { className: "d-flex justify-content-end me-0" },
                                React.createElement(Button, { style: btnSendStyle, onClick: handleEnviarClick }, "Enviar")))))))));
};
export default CardForm;
