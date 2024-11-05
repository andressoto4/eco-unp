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
import React, { useState, useEffect } from "react";
import { Col, FormCheck, FormControl, FormGroup, FormLabel, FormSelect, Row, Collapse, Container, Card, CardBody, } from "react-bootstrap";
import { FaTreeCity } from "react-icons/fa6";
import Pais from "./components/Pais";
import Departamento from "./components/Departamento";
import Municipio from "./components/Municipio";
import { useIdPais, useIdDepartamento, useIdMunicipio, useIdZona, useIdDireccionUrbana, useIdDireccionRural, } from "./hooks/UbicacionHook";
var subtituloStyle = {
    fontColor: "#303d50s",
    fontSize: "1.1rem",
    fontWeight: "800",
};
var iconStyle = {
    fontSize: "1.25rem",
};
var Ubicacion = function (_a) {
    var method = _a.method;
    var _b = useIdPais(), pais = _b.idPais, setPais = _b.setIdPais;
    var _c = useIdDepartamento(), departamento = _c.idDepartamento, setDepartamento = _c.setIdDepartamento;
    var _d = useIdMunicipio(), municipio = _d.idMunicipio, setMunicipio = _d.setIdMunicipio;
    var handlePaisChange = function (event) {
        setPais(event.target.value);
        setDepartamento("0");
    };
    var handleDepartamentoChange = function (event) {
        setDepartamento(event.target.value);
        setMunicipio("0");
    };
    var handleMunicipioGet = function (event) {
        setMunicipio(event.target.value);
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(Col, { lg: 3, md: 6, xs: 12 },
            React.createElement(Pais, { idPaisUbicacion: Number(pais), onChange: handlePaisChange, method: method })),
        React.createElement(Col, { lg: 3, md: 6, xs: 12 },
            React.createElement(Departamento, { idPais: Number(pais), onChange: handleDepartamentoChange, method: method })),
        React.createElement(Col, { lg: 3, md: 6, xs: 12 },
            React.createElement(Municipio, { idDepartamento: Number(departamento), onChange: handleMunicipioGet, method: method }))));
};
var Zona = function (_a) {
    var method = _a.method;
    var _b = useState([]), zonas = _b[0], setZonas = _b[1];
    var _c = useIdZona(), zona = _c.idZona, setZona = _c.setIdZona;
    useEffect(function () {
        var obtenerZonas = function () { return __awaiter(void 0, void 0, void 0, function () {
            var response, data, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, fetch("http://localhost:8000/sistema/zona/")];
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
        setZona(zona);
    }, [zona, setZona]);
    return (React.createElement(React.Fragment, null,
        React.createElement(Col, { lg: 3, md: 6, xs: 12, className: "mb-3" },
            React.createElement(FormLabel, null,
                "Zona ",
                React.createElement("span", { className: "text-danger" }, "*")),
            method === "GET" ? (React.createElement(FormControl, { type: "text", disabled: true })) : (React.createElement(FormSelect, { value: zona, onChange: function (e) { return setZona(e.target.value); }, required: true },
                React.createElement("option", { value: "0" }, "Seleccione una zona"),
                zonas.map(function (zona) { return (React.createElement("option", { key: zona.id_zubicacion, value: zona.id_zubicacion }, zona.nombre_zubicacion)); }))))));
};
var DireccionUrbana = function (_a) {
    var _b = useIdDireccionUrbana(), nombreBarrio = _b.idNombreBarrio, viaPrincipal = _b.idViaPrincipal, numeroViaPrincipal = _b.idNumeroViaPrincipal, letraPrincipal = _b.idLetraPrincipal, esBis = _b.idEsBis, cuadrantePrincipal = _b.idCuadrantePrincipal, numeroViaSecundaria = _b.idNumeroViaSecundaria, letraSecundaria = _b.idLetraSecundaria, cuadranteSecundario = _b.idCuadranteSecundario, numeroPlaca = _b.idNumeroPlaca, complemento = _b.idComplemento, indicacionDireccionU = _b.idIndicacionDireccionU, resumenDireccionU = _b.idResumenDireccionU, setNombreBarrio = _b.setIdNombreBarrio, setViaPrincipal = _b.setIdViaPrincipal, setNumeroViaPrincipal = _b.setIdNumeroViaPrincipal, setLetraPrincipal = _b.setIdLetraPrincipal, setEsBis = _b.setIdEsBis, setCuadrantePrincipal = _b.setIdCuadrantePrincipal, setNumeroViaSecundaria = _b.setIdNumeroViaSecundaria, setLetraSecundaria = _b.setIdLetraSecundaria, setCuadranteSecundario = _b.setIdCuadranteSecundario, setNumeroPlaca = _b.setIdNumeroPlaca, setComplemento = _b.setIdComplemento, setIndicacionDireccionU = _b.setIdIndicacionDireccionU, setResumenDireccionU = _b.setIdResumenDireccionU;
    var _c = useState(""), resumenDireccion = _c[0], setResumenDireccion = _c[1];
    useEffect(function () {
        var fields = [
            viaPrincipal,
            numeroViaPrincipal + letraPrincipal,
            esBis ? "Bis" : "",
            cuadrantePrincipal,
            numeroViaSecundaria ? "# " + numeroViaSecundaria + letraSecundaria : "",
            cuadranteSecundario,
            numeroPlaca ? "- " + numeroPlaca : "",
            complemento,
        ];
        setResumenDireccion(fields.filter(Boolean).join(" ").trim());
    }, [
        viaPrincipal,
        numeroViaPrincipal,
        letraPrincipal,
        esBis,
        cuadrantePrincipal,
        numeroViaSecundaria,
        letraSecundaria,
        cuadranteSecundario,
        numeroPlaca,
        complemento,
    ]);
    return (React.createElement(Row, null,
        React.createElement(Col, { md: 3, xs: 12 },
            React.createElement(FormGroup, { className: "mb-3" },
                React.createElement(FormLabel, null,
                    "V\u00EDa principal ",
                    React.createElement("span", { className: "text-danger" }, "*")),
                React.createElement(FormSelect, { value: viaPrincipal, onChange: function (e) { return setViaPrincipal(e.target.value); }, required: true },
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
                React.createElement(FormControl, { type: "text", value: numeroViaPrincipal, onChange: function (e) { return setNumeroViaPrincipal(e.target.value); }, placeholder: "Ej: 23", required: true }))),
        React.createElement(Col, { md: 2, xs: 12 },
            React.createElement(FormGroup, { className: "mb-3" },
                React.createElement(FormLabel, null,
                    "Letra ",
                    React.createElement("span", { className: "text-danger" })),
                React.createElement(FormControl, { type: "text", value: letraPrincipal, onChange: function (e) { return setLetraPrincipal(e.target.value); }, placeholder: "Ej: A" }))),
        React.createElement(Col, { md: 2, xs: 12, className: "align-self-end" },
            React.createElement(FormGroup, { className: "mb-4" },
                React.createElement(FormCheck, { type: "checkbox", label: "\u00BFEs bis?", checked: esBis, onChange: function (e) { return setEsBis(e.target.checked); } }))),
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
                React.createElement(FormControl, { type: "text", placeholder: "Ej: 13", required: true }))),
        React.createElement(Col, { md: 2, xs: 12 },
            React.createElement(FormGroup, { className: "mb-3" },
                React.createElement(FormLabel, null,
                    "Letra ",
                    React.createElement("span", { className: "text-danger" })),
                React.createElement(FormControl, { type: "text", value: letraSecundaria, onChange: function (e) { return setLetraSecundaria(e.target.value); }, placeholder: "Ej: C" }))),
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
                React.createElement(FormControl, { type: "text", value: numeroPlaca, onChange: function (e) { return setNumeroPlaca(e.target.value); }, placeholder: "Ej: 25", required: true }))),
        React.createElement(Col, { md: 3, xs: 12, style: { paddingRight: "7px" } },
            React.createElement(FormGroup, { className: "mb-3" },
                React.createElement(FormLabel, null,
                    "Complemento ",
                    React.createElement("span", { className: "text-danger" })),
                React.createElement(FormControl, { type: "text", value: complemento, onChange: function (e) { return setComplemento(e.target.value); }, placeholder: "Ej: Casa 3" }))),
        React.createElement(Col, { md: 4, xs: 12 },
            React.createElement(FormGroup, { className: "mb-3" },
                React.createElement(FormLabel, null,
                    "Barrio / Sector ",
                    React.createElement("span", { className: "text-danger" }, "*")),
                React.createElement(FormControl, { type: "text", value: nombreBarrio, onChange: function (e) { return setNombreBarrio(e.target.value); }, required: true }))),
        React.createElement(Col, { md: 8, xs: 12 },
            React.createElement(FormGroup, { className: "mb-2" },
                React.createElement(FormLabel, null,
                    "Resumen de direcci\u00F3n ",
                    React.createElement("span", { className: "text-danger" }, "**")),
                React.createElement(FormControl, { type: "text", className: "bg-body-secondary", value: resumenDireccion, disabled: true }))),
        React.createElement(Col, { md: 12, xs: 12 },
            React.createElement(FormGroup, { className: "mb-2" },
                React.createElement(FormLabel, null, "Indicaciones del lugar de domicilio"),
                React.createElement(FormControl, { type: "text", value: indicacionDireccionU, onChange: function (e) { return setIndicacionDireccionU(e.target.value); } })))));
};
var DireccionRural = function (_a) {
    var _b = useIdDireccionRural(), corregimiento = _b.idCorregimiento, vereda = _b.idVereda, centroPoblado = _b.idCentroPoblado, indicacionDireccionR = _b.idIndicacionDireccionR, setCorregimiento = _b.setIdCorregimiento, setVereda = _b.setIdVereda, setCentroPoblado = _b.setIdCentroPoblado, setIndicacionDireccionR = _b.setIdIndicacionDireccionR;
    var _c = useState(""), resumenDireccion = _c[0], setResumenDireccion = _c[1];
    useEffect(function () {
        var fields = [corregimiento, vereda, centroPoblado];
        setResumenDireccion(fields.filter(Boolean).join(" ").trim());
    }, [corregimiento, vereda, centroPoblado]);
    return (React.createElement(Row, null,
        React.createElement(Col, { md: 4, xs: 12 },
            React.createElement(FormGroup, { className: "mb-3" },
                React.createElement(FormLabel, null,
                    "Corregimiento ",
                    React.createElement("span", { className: "text-danger" })),
                React.createElement(FormControl, { type: "text", value: corregimiento, onChange: function (e) { return setCorregimiento(e.target.value); }, maxLength: 100 }))),
        React.createElement(Col, { md: 4, xs: 12 },
            React.createElement(FormGroup, { className: "mb-3" },
                React.createElement(FormLabel, null,
                    "Vereda ",
                    React.createElement("span", { className: "text-danger" }, "*")),
                React.createElement(FormControl, { type: "text", value: vereda, onChange: function (e) { return setVereda(e.target.value); }, maxLength: 100, required: true }))),
        React.createElement(Col, { md: 4, xs: 12 },
            React.createElement(FormGroup, { className: "mb-3" },
                React.createElement(FormLabel, null,
                    "Centro poblado ",
                    React.createElement("span", { className: "text-danger" })),
                React.createElement(FormControl, { type: "text", value: centroPoblado, onChange: function (e) { return setCentroPoblado(e.target.value); }, maxLength: 100 }))),
        React.createElement(Col, { md: 8, xs: 12 },
            React.createElement(FormGroup, { className: "mb-2" },
                React.createElement(FormLabel, null,
                    "Resumen de direcci\u00F3n ",
                    React.createElement("span", { className: "text-danger" }, "**")),
                React.createElement(FormControl, { type: "text", className: "bg-body-secondary", value: resumenDireccion, disabled: true }))),
        React.createElement(Col, { md: 12, xs: 12 },
            React.createElement(FormGroup, { className: "mb-2" },
                React.createElement(FormLabel, null, "Indicaciones del lugar de domicilio"),
                React.createElement(FormControl, { type: "text", value: indicacionDireccionR, onChange: function (e) { return setIndicacionDireccionR(e.target.value); } })))));
};
var UbicacionPersona = function (_a) {
    var method = _a.method;
    var _b = useIdZona(), zona = _b.idZona, setZona = _b.setIdZona;
    return (React.createElement(Row, null,
        React.createElement(Ubicacion, { method: method }),
        React.createElement(Zona, { method: method }),
        method === "GET" ? (React.createElement(React.Fragment, null,
            React.createElement(Col, { lg: 5, xs: 12 },
                React.createElement(FormGroup, { className: "mb-3" },
                    React.createElement(FormLabel, null, "Direcci\u00F3n / Ubicaci\u00F3n"),
                    React.createElement(FormControl, { type: "text", disabled: method === "GET" ? true : false }))),
            React.createElement(Col, { lg: 7, xs: 12 },
                React.createElement(FormGroup, { className: "mb-3" },
                    React.createElement(FormLabel, null, "Indicaciones"),
                    React.createElement(FormControl, { type: "text", disabled: method === "GET" ? true : false }))))) : (React.createElement(React.Fragment, null,
            React.createElement(Collapse, { in: zona === "1" || zona === "2" },
                React.createElement(Container, { className: "pb-0 mb-0 bg-section " },
                    React.createElement(Card, { className: "border-light-subtle rounded-3 my-3" },
                        React.createElement(CardBody, null,
                            React.createElement(Row, { className: "mb-1 mt-1" },
                                React.createElement(Col, { className: "col-auto pe-1" },
                                    React.createElement(FaTreeCity, { style: iconStyle })),
                                React.createElement(Col, { className: "ps-1 col-auto align-self-center" },
                                    React.createElement("p", { style: subtituloStyle }, "Direcci\u00F3n"))),
                            zona === "1" ? React.createElement(DireccionUrbana, null) : React.createElement(DireccionRural, null)))))))));
};
export default UbicacionPersona;
//# sourceMappingURL=UbicacionPersona.js.map