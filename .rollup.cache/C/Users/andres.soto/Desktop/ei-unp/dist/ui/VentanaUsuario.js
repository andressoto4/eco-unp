import React from "react";
import MenuLateral from "./componentes/MenuLateral";
import NotificacionUsuario from "./componentes/NotificacionUsuario";
import { Tabs } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
const VentanaUsuario = ({ children }) => {
    const [menuOpen, setMenuOpen] = React.useState(false);
    const [key, setKey] = React.useState(undefined);
    const handleToggle = () => {
        setMenuOpen(!menuOpen);
    };
    React.useEffect(() => {
        if (React.Children.count(children) > 0) {
            const firstTab = React.Children.toArray(children)[0];
            setKey(firstTab.props.eventKey);
        }
    }, [children]);
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "position-absolute top-0 end-0 m-3" },
            React.createElement(NotificacionUsuario, null)),
        React.createElement(MenuLateral, { onToggle: handleToggle, isOpen: menuOpen }),
        React.createElement("div", { className: `${menuOpen ? 'menu-open' : ''}` },
            React.createElement("div", { className: `main-section` },
                React.createElement(Tabs, { id: "controlled-tab-example", activeKey: key, onSelect: (k) => setKey(k !== null ? k : undefined) }, React.Children.map(children, (child) => {
                    if (React.isValidElement(child)) {
                        return child;
                    }
                    return null;
                }))))));
};
export default VentanaUsuario;
//# sourceMappingURL=VentanaUsuario.js.map