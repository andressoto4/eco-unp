// VentanaLienzo-V.0.1 --> desarrollador: andres.soto
import React from "react";
import MenuLateral from "./components/MenuLateral";
var VentanaLienzo = function (_a) {
    var children = _a.children;
    var _b = React.useState(false), menuOpen = _b[0], setMenuOpen = _b[1];
    var handleToggle = function () {
        setMenuOpen(!menuOpen);
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(MenuLateral, { onToggle: handleToggle, isOpen: menuOpen }),
        React.createElement("div", { className: "".concat(menuOpen ? 'menu-open' : '') },
            React.createElement("div", { className: "main-section" }, children))));
};
export default VentanaLienzo;
//# sourceMappingURL=VentanaLienzo.js.map