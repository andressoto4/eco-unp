var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import React, { useState, useContext, useEffect, } from "react";
import Pais from "./components/Pais";
import Departamento from "./components/Departamento";
import Municipio from "./components/Municipio";
import { IdPaisUbicacionContext, IdDepartamentoUbicacionContext, IdMunicipioUbicacionContext, IdZonaUbicacionContext, } from "./contexts/UbicacionContext";
import { Col, FormCheck, FormControl, FormGroup, FormLabel, FormSelect, Row, Collapse, Container, Card, CardBody, } from "react-bootstrap";
import { FaTree, FaTreeCity } from "react-icons/fa6";
var subtituloStyle = {
    fontColor: "#303d50s",
    fontSize: "1.1rem",
    fontWeight: "800",
};
var iconStyle = {
    fontSize: "1.25rem",
};
var Ubicacion = function (_a) {
    var paisDomicilioRef = _a.paisDomicilioRef, departamentoDomicilioRef = _a.departamentoDomicilioRef, municipioDomicilioRef = _a.municipioDomicilioRef;
    var _b = useState("0"), idPaisUbicacion = _b[0], setIdPaisUbicacion = _b[1];
    var _c = useState("0"), idDepartamentoUbicacion = _c[0], setIdDepartamentoUbicacion = _c[1];
    var setIDPaisUbicacion = useContext(IdPaisUbicacionContext).setID;
    var setIDDepartamentoUbicacion = useContext(IdDepartamentoUbicacionContext).setID;
    var setIDMunicipioUbicacion = useContext(IdMunicipioUbicacionContext).setID;
    var setIdZonaUbicacion = useContext(IdZonaUbicacionContext).setID;
    var handlePaisChange = function (event) {
        setIdPaisUbicacion(event.target.value);
        setIDPaisUbicacion(event.target.value);
        setIdDepartamentoUbicacion("0");
    };
    var handleDepartamentoChange = function (event) {
        setIdDepartamentoUbicacion(event.target.value);
        setIDDepartamentoUbicacion(event.target.value);
        setIDMunicipioUbicacion("0");
    };
    var handleMunicipioGet = function (event) {
        setIDMunicipioUbicacion(event.target.value);
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(Col, { lg: 3, md: 6, xs: 12 },
            React.createElement(Pais, { paisRef: paisDomicilioRef, idPaisUbicacion: Number(idPaisUbicacion), onChange: handlePaisChange })),
        React.createElement(Col, { lg: 3, md: 6, xs: 12 },
            React.createElement(Departamento, { departamentoRef: departamentoDomicilioRef, idPais: Number(idPaisUbicacion), onChange: handleDepartamentoChange })),
        React.createElement(Col, { lg: 3, md: 6, xs: 12 },
            React.createElement(Municipio, { municipioRef: municipioDomicilioRef, idDepartamento: Number(idDepartamentoUbicacion), onChange: handleMunicipioGet }))));
};
var Zona = function (_a) {
    var onChange = _a.onChange, zonaDomicilioRef = _a.zonaDomicilioRef;
    var _b = useState([]), zonas = _b[0], setZonas = _b[1];
    var _c = useState("0"), zonaSeleccionada = _c[0], setZonaSeleccionada = _c[1];
    var setIdZonaUbicacion = useContext(IdZonaUbicacionContext).setID;
    useEffect(function () {
        var obtenerZonas = function () { return __awaiter(void 0, void 0, void 0, function () {
            var response, data, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, fetch("".concat(process.env.REACT_APP_API_ENDPOINT, "/zona/"))];
                    case 1:
                        response = _a.sent();
                        if (!response.ok) return [3 /*break*/, 3];
                        return [4 /*yield*/, response.json()];
                    case 2:
                        data = _a.sent();
                        setZonas(data);
                        return [3 /*break*/, 4];
                    case 3:
                        console.error("Hubo un error al obtener los datos de las zonas:", response.status);
                        _a.label = 4;
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        error_1 = _a.sent();
                        console.error("Hubo un error al obtener los datos de las zonas:", error_1);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        }); };
        obtenerZonas();
    }, []);
    useEffect(function () {
        setIdZonaUbicacion(zonaSeleccionada);
    }, [zonaSeleccionada, setIdZonaUbicacion]);
    var handleZonaChange = function (event) {
        setZonaSeleccionada(event.target.value);
        if (onChange) {
            onChange(event);
        }
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(Col, { md: 3, xs: 12, className: "mb-3" },
            React.createElement(FormLabel, null,
                "Zona ",
                React.createElement("span", { className: "text-danger" }, "*")),
            React.createElement(FormSelect, { ref: zonaDomicilioRef, value: zonaSeleccionada, onChange: handleZonaChange, required: true },
                React.createElement("option", { value: "0" }, "Seleccione una zona"),
                zonas.map(function (zona) { return (React.createElement("option", { key: zona.id_zubicacion, value: zona.id_zubicacion }, zona.nombre_zubicacion)); })))));
};
var DireccionUrbana = function (_a) {
    var contentType = _a.contentType, viaPrincipalRef = _a.viaPrincipalRef, numeroViaPrincipalRef = _a.numeroViaPrincipalRef, numeroViaSecundariaRef = _a.numeroViaSecundariaRef, numeroPlacaRef = _a.numeroPlacaRef, nombreBarrioRef = _a.nombreBarrioRef;
    var _b = useState(null), contentTypeId = _b[0], setContentTypeId = _b[1];
    var _c = useState(""), nombreBarrio = _c[0], setNombreBarrio = _c[1];
    var _d = useState(""), viaPrincipal = _d[0], setViaPrincipal = _d[1];
    var _e = useState(""), numeroViaPrincipal = _e[0], setNumeroViaPrincipal = _e[1];
    var _f = useState(""), letraPrincipal = _f[0], setLetraPrincipal = _f[1];
    var _g = useState(""), esBis = _g[0], setEsBis = _g[1];
    var _h = useState(""), cuadrantePrincipal = _h[0], setCuadrantePrincipal = _h[1];
    var _j = useState(""), numeroViaSecundaria = _j[0], setNumeroViaSecundaria = _j[1];
    var _k = useState(""), letraSecundaria = _k[0], setLetraSecundaria = _k[1];
    var _l = useState(""), cuadranteSecundario = _l[0], setCuadranteSecundario = _l[1];
    var _m = useState(""), numeroPlaca = _m[0], setNumeroPlaca = _m[1];
    var _o = useState(""), complemento = _o[0], setComplemento = _o[1];
    var _p = useState(""), resumenDireccion = _p[0], setResumenDireccion = _p[1];
    var _q = useState(""), indicacionDireccion = _q[0], setIndicacionDireccion = _q[1];
    var _r = useState(true), isFirstRender = _r[0], setIsFirstRender = _r[1];
    return (React.createElement(Row, null,
        React.createElement(Col, { md: 3, xs: 12 },
            React.createElement(FormGroup, { className: "mb-3" },
                React.createElement(FormLabel, null,
                    "V\u00EDa principal ",
                    React.createElement("span", { className: "text-danger" }, "*")),
                React.createElement(FormSelect, { ref: viaPrincipalRef, value: viaPrincipal, onChange: function (e) { return setViaPrincipal(e.target.value); }, required: true },
                    React.createElement("option", { value: "" }, "Seleccione una v\u00EDa"),
                    React.createElement("option", { value: "CL" }, "Calle"),
                    React.createElement("option", { value: "CR" }, "Carrera"),
                    React.createElement("option", { value: "AU" }, "Autopista"),
                    React.createElement("option", { value: "AV" }, "Avenida"),
                    React.createElement("option", { value: "AC" }, "Avenida calle"),
                    React.createElement("option", { value: "AK" }, "Avenida carrera"),
                    React.createElement("option", { value: "BL" }, "Bulevar"),
                    React.createElement("option", { value: "CT" }, "Carretera"),
                    React.createElement("option", { value: "CQ" }, "Circular"),
                    React.createElement("option", { value: "CV" }, "Circunvalar"),
                    React.createElement("option", { value: "CC" }, "Cuentas corridas"),
                    React.createElement("option", { value: "DG" }, "Diagonal"),
                    React.createElement("option", { value: "PJ" }, "Pasaje"),
                    React.createElement("option", { value: "PS" }, "Paseo"),
                    React.createElement("option", { value: "PT" }, "Peatonal"),
                    React.createElement("option", { value: "TV" }, "Transversal"),
                    React.createElement("option", { value: "TC" }, "Troncal"),
                    React.createElement("option", { value: "VT" }, "Variante"),
                    React.createElement("option", { value: "VI" }, "V\u00EDa")))),
        React.createElement(Col, { md: 2, xs: 12 },
            React.createElement(FormGroup, { className: "mb-3" },
                React.createElement(FormLabel, null,
                    "N\u00FAmero v\u00EDa ",
                    React.createElement("span", { className: "text-danger" }, "*")),
                React.createElement(FormControl, { ref: numeroViaPrincipalRef, type: "text", value: numeroViaPrincipal, placeholder: "Ej: 23", required: true }))),
        React.createElement(Col, { md: 2, xs: 12 },
            React.createElement(FormGroup, { className: "mb-3" },
                React.createElement(FormLabel, null,
                    "Letra ",
                    React.createElement("span", { className: "text-danger" })),
                React.createElement(FormControl, { type: "text", value: letraPrincipal, placeholder: "Ej: A" }))),
        React.createElement(Col, { md: 2, xs: 12, className: "align-self-end" },
            React.createElement(FormGroup, { className: "mb-4" },
                React.createElement(FormCheck, { type: "checkbox", label: "\u00BFEs bis?" }))),
        React.createElement(Col, { md: 3, xs: 12 },
            React.createElement(FormGroup, { className: "mb-3" },
                React.createElement(FormLabel, null,
                    "Cardinalidad ",
                    React.createElement("span", { className: "text-danger" })),
                React.createElement(FormSelect, { value: cuadrantePrincipal, onChange: function (e) { return setCuadrantePrincipal(e.target.value); } },
                    React.createElement("option", { value: "" }, "Seleccione la cardinalidad"),
                    React.createElement("option", { value: "Norte" }, "Norte"),
                    React.createElement("option", { value: "Sur" }, "Sur"),
                    React.createElement("option", { value: "Este" }, "Este"),
                    React.createElement("option", { value: "Oeste" }, "Oeste")))),
        React.createElement(Col, { xs: 12, className: "col-md-auto text-center align-self-center" },
            React.createElement("div", { className: "mt-3 p-1" },
                React.createElement("b", null, "#"))),
        React.createElement(Col, { md: 2, xs: 12 },
            React.createElement(FormGroup, { className: "mb-3" },
                React.createElement(FormLabel, null,
                    "N\u00FAmero uno ",
                    React.createElement("span", { className: "text-danger" }, "*")),
                React.createElement(FormControl, { ref: numeroViaSecundariaRef, type: "text", placeholder: "Ej: 13", required: true }))),
        React.createElement(Col, { md: 2, xs: 12 },
            React.createElement(FormGroup, { className: "mb-3" },
                React.createElement(FormLabel, null,
                    "Letra ",
                    React.createElement("span", { className: "text-danger" })),
                React.createElement(FormControl, { type: "text", value: letraSecundaria, placeholder: "Ej: C" }))),
        React.createElement(Col, { md: 2, xs: 12 },
            React.createElement(FormGroup, { className: "mb-3" },
                React.createElement(FormLabel, null,
                    "Cardinalidad ",
                    React.createElement("span", { className: "text-danger" })),
                React.createElement(FormSelect, { value: cuadranteSecundario, onChange: function (e) { return setCuadranteSecundario(e.target.value); } },
                    React.createElement("option", { value: "" }, "Seleccione la cardinalidad"),
                    React.createElement("option", { value: "Norte" }, "Norte"),
                    React.createElement("option", { value: "Sur" }, "Sur"),
                    React.createElement("option", { value: "Este" }, "Este"),
                    React.createElement("option", { value: "Oeste" }, "Oeste")))),
        React.createElement(Col, { xs: 12, className: "col-md-auto text-center align-self-center" },
            React.createElement("div", { className: "mt-3 p-1" },
                React.createElement("b", null, "-"))),
        React.createElement(Col, { md: 2, xs: 12 },
            React.createElement(FormGroup, { className: "mb-3" },
                React.createElement(FormLabel, null,
                    "N\u00FAmero dos ",
                    React.createElement("span", { className: "text-danger" }, "*")),
                React.createElement(FormControl, { ref: numeroPlacaRef, type: "text", value: numeroPlaca, placeholder: "Ej: 25", required: true }))),
        React.createElement(Col, { md: 3, xs: 12, style: { paddingRight: "7px" } },
            React.createElement(FormGroup, { className: "mb-3" },
                React.createElement(FormLabel, null,
                    "Complemento ",
                    React.createElement("span", { className: "text-danger" })),
                React.createElement(FormControl, { type: "text", value: complemento, placeholder: "Ej: Casa 3" }))),
        React.createElement(Col, { md: 4, xs: 12 },
            React.createElement(FormGroup, { className: "mb-3" },
                React.createElement(FormLabel, null,
                    "Barrio / Sector ",
                    React.createElement("span", { className: "text-danger" }, "*")),
                React.createElement(FormControl, { ref: nombreBarrioRef, type: "text", value: nombreBarrio, required: true }))),
        React.createElement(Col, { md: 8, xs: 12 },
            React.createElement(FormGroup, { className: "mb-2" },
                React.createElement(FormLabel, null,
                    "Resumen de direcci\u00F3n ",
                    React.createElement("span", { className: "text-danger" }, "**")),
                React.createElement(FormControl, { type: "text", className: "bg-body-secondary", value: resumenDireccion, disabled: true }))),
        React.createElement(Col, { md: 12, xs: 12 },
            React.createElement(FormGroup, { className: "mb-2" },
                React.createElement(FormLabel, null, "Indicaciones del lugar de domicilio"),
                React.createElement(FormControl, { type: "text", value: indicacionDireccion })))));
};
var DireccionRural = function (_a) {
    var contentType = _a.contentType, corregimientoRef = _a.corregimientoRef, veredaRef = _a.veredaRef, centroPobladoRef = _a.centroPobladoRef;
    var _b = useState(null), contentTypeId = _b[0], setContentTypeId = _b[1];
    var _c = useState(""), corregimiento = _c[0], setCorregimiento = _c[1];
    var _d = useState(""), vereda = _d[0], setVereda = _d[1];
    var _e = useState(""), centroPoblado = _e[0], setCentroPoblado = _e[1];
    var _f = useState(""), resumenDireccion = _f[0], setResumenDireccion = _f[1];
    var _g = useState(""), indicacionDireccion = _g[0], setIndicacionDireccion = _g[1];
    var handleTextChange = function (event, setter) {
        setter(event.target.value);
    };
    var handleAreaChange = function (event, setter) {
        setter(event.target.value);
    };
    return (React.createElement(Row, null,
        React.createElement(Col, { md: 4, xs: 12 },
            React.createElement(FormGroup, { className: "mb-3" },
                React.createElement(FormLabel, null,
                    "Corregimiento ",
                    React.createElement("span", { className: "text-danger" })),
                React.createElement(FormControl, { ref: corregimientoRef, type: "text", value: corregimiento, maxLength: 100 }))),
        React.createElement(Col, { md: 4, xs: 12 },
            React.createElement(FormGroup, { className: "mb-3" },
                React.createElement(FormLabel, null,
                    "Vereda ",
                    React.createElement("span", { className: "text-danger" }, "*")),
                React.createElement(FormControl, { ref: veredaRef, type: "text", value: vereda, maxLength: 100, required: true }))),
        React.createElement(Col, { md: 4, xs: 12 },
            React.createElement(FormGroup, { className: "mb-3" },
                React.createElement(FormLabel, null,
                    "Centro poblado ",
                    React.createElement("span", { className: "text-danger" })),
                React.createElement(FormControl, { ref: centroPobladoRef, type: "text", value: centroPoblado, maxLength: 100 }))),
        React.createElement(Col, { md: 12, xs: 12 },
            React.createElement(FormGroup, { className: "mb-2" },
                React.createElement(FormLabel, null, "Indicaciones del lugar de domicilio"),
                React.createElement(FormControl, { type: "text", value: indicacionDireccion })))));
};
var UbicacionPersona = function () {
    var _a = useState(""), zona = _a[0], setZona = _a[1];
    var handleZonaChange = function (e) {
        setZona(e.target.value);
    };
    return (React.createElement(Row, null,
        React.createElement(Ubicacion, null),
        React.createElement(Zona, { onChange: handleZonaChange }),
        React.createElement(Collapse, { in: zona === "1" },
            React.createElement(Container, { className: "pb-0 mb-0 bg-section" },
                React.createElement(Card, { className: "border-light-subtle rounded-3" },
                    React.createElement(CardBody, null,
                        React.createElement(Row, { className: "mb-1 mt-1" },
                            React.createElement(Col, { className: "col-auto pe-1" },
                                React.createElement(FaTreeCity, { style: iconStyle })),
                            React.createElement(Col, { className: "ps-1 col-auto align-self-center" },
                                React.createElement("p", { style: subtituloStyle }, "Direcci\u00F3n urbana"))),
                        React.createElement(DireccionUrbana, null))))),
        React.createElement(Collapse, { in: zona === "2" },
            React.createElement(Container, { className: "pb-0 mb-0 bg-section" },
                React.createElement(Card, { className: "border-light-subtle rounded-3" },
                    React.createElement(CardBody, null,
                        React.createElement(Row, { className: "mb-1 mt-1" },
                            React.createElement(Col, { className: "col-auto pe-1" },
                                React.createElement(FaTree, { style: iconStyle })),
                            React.createElement(Col, { className: "ps-1 col-auto align-self-center" },
                                React.createElement("p", { style: subtituloStyle }, "Direcci\u00F3n Rural"))),
                        React.createElement(DireccionRural, null)))))));
};
export default UbicacionPersona;
//# sourceMappingURL=UbicacionPersona.js.map