import React from "react";
import MenuLateral from "./components/MenuLateral";
import NotificacionUsuario from "./components/NotificacionUsuario";
import { Tabs } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
var VentanaUsuario = function (_a) {
    var children = _a.children;
    var _b = React.useState(false), menuOpen = _b[0], setMenuOpen = _b[1];
    var _c = React.useState(undefined), key = _c[0], setKey = _c[1];
    var handleToggle = function () {
        setMenuOpen(!menuOpen);
    };
    React.useEffect(function () {
        if (React.Children.count(children) > 0) {
            var firstTab = React.Children.toArray(children)[0];
            setKey(firstTab.props.eventKey);
        }
    }, [children]);
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "position-absolute top-0 end-0 m-3" },
            React.createElement(NotificacionUsuario, null)),
        React.createElement(MenuLateral, { onToggle: handleToggle, isOpen: menuOpen }),
        React.createElement("div", { className: "".concat(menuOpen ? 'menu-open' : '') },
            React.createElement("div", { className: "main-section" },
                React.createElement(Tabs, { id: "controlled-tab-example", activeKey: key, onSelect: function (k) { return setKey(k !== null ? k : undefined); } }, React.Children.map(children, function (child) {
                    if (React.isValidElement(child)) {
                        return child;
                    }
                    return null;
                }))))));
};
export default VentanaUsuario;
//# sourceMappingURL=VentanaUsuario.js.map