import React, { useState, useEffect } from "react";
import { FinSesionHook } from "../hooks/FinSesionHook";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { BiMenu, BiMenuAltRight, BiHome, BiLinkAlt, BiEnvelope, BiLogoRedux, BiErrorCircle, BiLogOut, BiAnalyse, BiBookAlt, BiMapPin, BiShieldPlus, BiSolidPlaneAlt } from "react-icons/bi";
import '../styles/MenuLateral.css';
var MenuLateral = function (_a) {
    var onToggle = _a.onToggle, isOpen = _a.isOpen;
    var _b = useState(true), loading = _b[0], setLoading = _b[1];
    var _c = useState(null), decodedToken = _c[0], setDecodedToken = _c[1];
    var sidebarClass = isOpen ? "sidebar-bar-panel open" : "sidebar-bar-panel";
    var navigate = useNavigate();
    var FinSesion = FinSesionHook().FinSesion;
    useEffect(function () {
        var storedUserToken = localStorage.getItem('user_token');
        if (storedUserToken) {
            var token = jwtDecode(storedUserToken);
            setDecodedToken(token);
        }
        setLoading(false);
    }, []);
    useEffect(function () {
        var timer = setTimeout(function () {
            var storedUserToken = localStorage.getItem('user_token');
            if (storedUserToken) {
                var token = jwtDecode(storedUserToken);
                setDecodedToken(token);
            }
        }, 2000);
        return function () { return clearTimeout(timer); };
    }, []);
    if (loading) {
        return React.createElement(React.Fragment, null);
    }
    var handleNavigate = function () {
        navigate("/sistema/usuario");
    };
    return (React.createElement("div", { className: "container-fluid ".concat(isOpen ? "menu-open" : "") },
        React.createElement("div", { className: sidebarClass },
            React.createElement("div", { className: "logo_details" },
                React.createElement("img", { src: "/logo-unp-gris.png", alt: "Logo", className: "icon logo-image" }),
                React.createElement("div", { className: "logo-name" }, "ECOSISTEMA UNP"),
                isOpen ? React.createElement(BiMenuAltRight, { className: "bx bx-menu i", id: "btn", onClick: onToggle }) : React.createElement(BiMenu, { className: "bx bx-menu i", id: "btn", onClick: onToggle })),
            React.createElement("ul", { className: "nav-list-panel" },
                React.createElement("li", null,
                    React.createElement("a", { href: "" },
                        React.createElement(BiHome, { className: 'bx bx-home i2' }),
                        React.createElement("span", { className: "link_name" }, "Inicio")),
                    React.createElement("span", { className: "tooltip" }, "Inicio")),
                React.createElement("li", null,
                    React.createElement("a", { href: "" },
                        React.createElement(BiMapPin, { className: 'bx bx-map-pin i2' }),
                        React.createElement("span", { className: "link_name" }, "Mapa del proceso")),
                    React.createElement("span", { className: "tooltip" }, "Mapa del proceso")),
                React.createElement("li", null,
                    React.createElement("a", { href: "" },
                        React.createElement(BiBookAlt, { className: 'bx bx-book-alt i2' }),
                        React.createElement("span", { className: "link_name" }, "Manuales de usuario")),
                    React.createElement("span", { className: "tooltip" }, "Manual de usuario")),
                React.createElement("div", { style: { paddingLeft: "15px", paddingRight: "15px" } },
                    React.createElement("hr", { style: { borderTop: "1px solid white" } })),
                React.createElement("li", null,
                    React.createElement("a", { href: "https://www.unp.gov.co/", target: "_blank" },
                        React.createElement(BiLinkAlt, { className: 'bx bx-link-alt i2' }),
                        React.createElement("span", { className: "link_name" }, "Portal UNP")),
                    React.createElement("span", { className: "tooltip" }, "Portal UNP")),
                React.createElement("li", null,
                    React.createElement("a", { href: "https://login.microsoftonline.com/common/oauth2/authorize?client_id=00000002-0000-0ff1-ce00-000000000000&redirect_uri=https%3a%2f%2foutlook.office365.com%2fowa%2f&resource=00000002-0000-0ff1-ce00-000000000000&response_mode=form_post&response_type=code+id_token&scope=openid&msafed=1&msaredir=1&client-request-id=f8488f2f-33b7-d769-3dc8-fe71d263f531&protectedtoken=true&claims=%7b%22id_token%22%3a%7b%22xms_cc%22%3a%7b%22values%22%3a%5b%22CP1%22%5d%7d%7d%7d&nonce=638372347486593361.36439678-d731-49f6-a49f-cc0594f2abb0&state=Dcs7EoAgDEVR0HE5kc8LCVkO4NBaun1T3NPdGEI4vcOL2Qkq6NAKVu7SDJByQxgm2ulRFGLbQsOltXIz3nXMmaO_V3q_kX4", target: "_blank" },
                        React.createElement(BiEnvelope, { className: 'bx bx-envelope i2' }),
                        React.createElement("span", { className: "link_name" }, "Correo institucional")),
                    React.createElement("span", { className: "tooltip" }, "Correo institucional")),
                React.createElement("li", null,
                    React.createElement("a", { href: "http://intranet.unp.gov.co/", target: "_blank" },
                        React.createElement(BiLogoRedux, { className: 'bx bxl-redux i2' }),
                        React.createElement("span", { className: "link_name" }, "Acceso directo a Intranet")),
                    React.createElement("span", { className: "tooltip" }, "Acceso directo a Intranet")),
                React.createElement("li", null,
                    React.createElement("a", { href: "https://mesadeservicios.unp.gov.co/HEAT/", target: "_blank" },
                        React.createElement(BiErrorCircle, { className: 'bx bx-error-circle i2' }),
                        React.createElement("span", { className: "link_name" }, "Mesa de servicios")),
                    React.createElement("span", { className: "tooltip" }, "Mesa de servicios")),
                React.createElement("div", { style: { paddingLeft: "15px", paddingRight: "15px" } },
                    React.createElement("hr", { style: { borderTop: "1px solid white" } })),
                React.createElement("li", null,
                    React.createElement("a", { href: "" },
                        React.createElement(BiShieldPlus, { className: 'bx i2' }),
                        React.createElement("span", { className: "link_name" }, "Medida de emergencia")),
                    React.createElement("span", { className: "tooltip" }, "Medida de emergencia")),
                React.createElement("li", null,
                    React.createElement("a", { href: "" },
                        React.createElement(BiAnalyse, { className: 'bx i2' }),
                        React.createElement("span", { className: "link_name" }, "Acta de reuni\u00F3n")),
                    React.createElement("span", { className: "tooltip" }, "Acta de reuni\u00F3n")),
                React.createElement("li", null,
                    React.createElement("a", { href: "" },
                        React.createElement(BiSolidPlaneAlt, { className: 'bx i2' }),
                        React.createElement("span", { className: "link_name" }, "Solicitud de vi\u00E1ticos")),
                    React.createElement("span", { className: "tooltip" }, "Solicitud de vi\u00E1ticos"))),
            React.createElement("div", { className: "profile-content" },
                React.createElement("div", { className: "profile" },
                    React.createElement("div", { className: "profile-detail", onClick: handleNavigate, style: { cursor: "pointer" } }, decodedToken && (React.createElement("div", { className: "name-job" },
                        React.createElement("div", { className: "name" }, decodedToken.access_nuser),
                        React.createElement("div", { className: "job" }, decodedToken.acces_linker)))),
                    React.createElement(BiLogOut, { className: 'icon', onClick: FinSesion }))))));
};
export default MenuLateral;
//# sourceMappingURL=MenuLateral.js.map