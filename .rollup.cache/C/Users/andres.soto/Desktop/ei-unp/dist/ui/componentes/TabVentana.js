import React from 'react';
import { Tab } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const TabVentana = ({ eventKey, title, children }) => {
    return (React.createElement(Tab, { eventKey: eventKey, title: title }, children));
};
export default TabVentana;
//# sourceMappingURL=TabVentana.js.map