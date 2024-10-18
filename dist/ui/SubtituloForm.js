import React from "react";
import { Col, Row } from 'react-bootstrap';
;
var subtituloStyle = {
    fontColor: '#303d50s',
    fontSize: '1.1rem',
    fontWeight: '800',
};
var iconStyle = {
    fontSize: '1.25rem'
};
var SubtituloForm = function (_a) {
    var subtitulo = _a.subtitulo, Icon = _a.icon;
    return (React.createElement(Row, { className: 'mb-1 mt-3' },
        React.createElement(Col, { className: "col-auto pe-1" },
            React.createElement(Icon, { style: iconStyle })),
        React.createElement(Col, { className: "ps-1 col-auto align-self-center" },
            React.createElement("p", { style: subtituloStyle }, subtitulo))));
};
export default SubtituloForm;
//# sourceMappingURL=SubtituloForm.js.map