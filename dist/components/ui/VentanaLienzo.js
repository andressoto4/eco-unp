// VentanaLienzo-V.0.1 --> desarrollador: andres.soto
import React from "react";
import MenuLateral from "./componentes/MenuLateral";
const VentanaLienzo = ({ children }) => {
    const [menuOpen, setMenuOpen] = React.useState(false);
    const handleToggle = () => {
        setMenuOpen(!menuOpen);
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(MenuLateral, { onToggle: handleToggle, isOpen: menuOpen }),
        React.createElement("div", { className: `${menuOpen ? 'menu-open' : ''}` },
            React.createElement("div", { className: `main-section` }, children))));
};
export default VentanaLienzo;
