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
import React, { useState } from "react";
import { Row, Col, Container, CardBody } from "react-bootstrap";
import { toast } from "react-toastify";
import { FaAddressCard, FaLocationDot, FaMarsAndVenus, FaPhone, FaUser, } from "react-icons/fa6";
import { CardForm, Encabezado, SubtituloForm } from "../ui/index";
import NombrePersona from "./NombrePersona";
import Nuip from "./Nuip";
import SexoGeneroPersona from "./SexoGeneroPersona";
import ContactoPersona from "./ContactoPersona";
import UbicacionPersona from "./UbicacionPersona";
import { useIdPrimerNombre, useIdSegundoNombre, useIdPrimerApellido, useIdSegundoApellido, } from "./hooks/NombreHook";
import { useIdCelularUno, useIdCelularDos, useIdTelefono, useIdCorreo, } from "./hooks/ContactoHook";
import { useIdTipoIdentificaicon, useIdNumeroIdentificacion, useIdFechaExpedicion, } from "./hooks/NuipHook";
import { useIdSexo, useIdGenero, useIdOrientacionSexual, } from "./hooks/SexoGeneroHook";
import { useIdPais, useIdDepartamento, useIdMunicipio, useIdZona, useIdDireccionUrbana, useIdDireccionRural, } from "./hooks/UbicacionHook";
import { BasicosService } from "./services/BasicosService";
import { NombreProvider } from "./contexts/NombreContext";
import { NuipProvider } from "./contexts/NuipContext";
import { SexoGeneroProvider } from "./contexts/SexoGeneroContext";
import { ContactoProvider } from "./contexts/ContactoContext";
import { UbicacionProvider } from "./contexts/UbicacionContext";
var cardBodyStyle = {
    backgroundColor: "#f7f7f7",
};
var Formulario = function (_a) {
    var method = _a.method, _b = _a.canEdit, canEdit = _b === void 0 ? false : _b, _c = _a.hasHeader, hasHeader = _c === void 0 ? false : _c, _d = _a.dependencia, dependencia = _d === void 0 ? "Ecosistema de Información" : _d;
    var _e = useState(method), methodBasicos = _e[0], setMethodBasicos = _e[1];
    // Obtener los valores del contexto de Contacto
    var celularUno = useIdCelularUno().idCelularUno;
    var celularDos = useIdCelularDos().idCelularDos;
    var telefono = useIdTelefono().idTelefono;
    var correo = useIdCorreo().idCorreo;
    // Obtener los valores del contexto de Ubicacion
    var paisUbicacion = useIdPais().idPais;
    var departamentoUbicacion = useIdDepartamento().idDepartamento;
    var municipioUbicacion = useIdMunicipio().idMunicipio;
    var zonaUbicacion = useIdZona().idZona;
    var _f = useIdDireccionUrbana(), nombreBarrio = _f.idNombreBarrio, viaPrincipal = _f.idViaPrincipal, numeroViaPrincipal = _f.idNumeroViaPrincipal, letraPrincipal = _f.idLetraPrincipal, esBis = _f.idEsBis, cuadrantePrincipal = _f.idCuadrantePrincipal, numeroViaSecundaria = _f.idNumeroViaSecundaria, letraSecundaria = _f.idLetraSecundaria, cuadranteSecundario = _f.idCuadranteSecundario, numeroPlaca = _f.idNumeroPlaca, complemento = _f.idComplemento, indicacionDireccionU = _f.idIndicacionDireccionU;
    var _g = useIdDireccionRural(), corregimiento = _g.idCorregimiento, vereda = _g.idVereda, centroPoblado = _g.idCentroPoblado, indicacionDireccionR = _g.idIndicacionDireccionR;
    // Obtener los valores del contexto de Nuip
    var tipoIdentificacion = useIdTipoIdentificaicon().idTipoIdentificacion;
    var numeroIdentificacion = useIdNumeroIdentificacion().idNumeroIdentificacion;
    var fechaExpedicion = useIdFechaExpedicion().idFechaExpedicion;
    // Obtener los valores del contexto de NombrePersona
    var primerNombre = useIdPrimerNombre().idPrimerNombre;
    var segundoNombre = useIdSegundoNombre().idSegundoNombre;
    var primerApellido = useIdPrimerApellido().idPrimerApellido;
    var segundoApellido = useIdSegundoApellido().idSegundoApellido;
    // Obtener los valores del contexto de SexoGenero
    var sexo = useIdSexo().idSexo;
    var genero = useIdGenero().idGenero;
    var orientacionSexual = useIdOrientacionSexual().idOrientacionSexual;
    var _h = useState(false), validated = _h[0], setValidated = _h[1];
    // Función para manejar el envío de formulario
    var handleSubmit = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var form, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    form = e.currentTarget;
                    if (!form.checkValidity()) {
                        e.stopPropagation();
                        setValidated(false);
                        toast.error("Por favor, rellene los campos.", {
                            position: "top-right",
                            className: "foo-bar",
                            hideProgressBar: true,
                        });
                        return [2 /*return*/];
                    }
                    setValidated(true);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, toast.promise((function () { return __awaiter(void 0, void 0, void 0, function () {
                            var firstGroup, firstGroupResponses, idTelefono, idCorreo, firstFinal, secondGroup, secondGroupResponses, fields, direccion, secondFinal, thirdGroup, thirdGroupResponses;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        firstGroup = [
                                            {
                                                url: "http://localhost:8000/usuario/tccusuario",
                                                datos: {
                                                    celular_uno: celularUno,
                                                    celular_dos: celularDos,
                                                    celular_emergencia: telefono,
                                                },
                                            },
                                            {
                                                url: "http://localhost:8000/usuario/cceusuario",
                                                datos: {
                                                    correo_electronico: correo,
                                                },
                                            },
                                        ];
                                        return [4 /*yield*/, BasicosService(firstGroup)];
                                    case 1:
                                        firstGroupResponses = _a.sent();
                                        idTelefono = firstGroupResponses[0].data.idTelefono;
                                        idCorreo = firstGroupResponses[1].data.idCorreo;
                                        firstFinal = [
                                            {
                                                url: "http://localhost:8000/usuario/datoscontacto",
                                                datos: {
                                                    id_ctelefono: idTelefono,
                                                    id_ccelectronico: idCorreo,
                                                },
                                            },
                                        ];
                                        return [4 /*yield*/, BasicosService(firstFinal)];
                                    case 2:
                                        _a.sent();
                                        secondGroup = [];
                                        if (zonaUbicacion === "1") {
                                            secondGroup.push({
                                                url: "http://localhost:8000/usuario/ubicacionrural",
                                                datos: {
                                                    corregimiento: corregimiento,
                                                    centro_poblado: centroPoblado,
                                                    vereda: vereda,
                                                },
                                            });
                                        }
                                        if (zonaUbicacion === "2") {
                                            secondGroup.push({
                                                url: "http://localhost:8000/usuario/ubicacionurbana",
                                                datos: {
                                                    nombre_barrio: nombreBarrio,
                                                    tipo_viaprincipal: viaPrincipal,
                                                    numero_viaprincipal: numeroViaPrincipal,
                                                    letra_principal: letraPrincipal,
                                                    es_bis: esBis,
                                                    cuadrante_principal: cuadrantePrincipal,
                                                    numero_viasecundaria: numeroViaSecundaria,
                                                    letra_secundaria: letraSecundaria,
                                                    cuadrante_secundario: cuadranteSecundario,
                                                    numero_placa: numeroPlaca,
                                                    complemento: complemento,
                                                },
                                            });
                                        }
                                        return [4 /*yield*/, BasicosService(secondGroup)];
                                    case 3:
                                        secondGroupResponses = _a.sent();
                                        fields = [
                                            viaPrincipal,
                                            numeroViaPrincipal + letraPrincipal, // Concatenar número y letra principal
                                            esBis ? "Bis" : "",
                                            cuadrantePrincipal,
                                            numeroViaSecundaria
                                                ? "# " + numeroViaSecundaria + letraSecundaria
                                                : "", // Concatenar número y letra secundaria
                                            cuadranteSecundario,
                                            numeroPlaca ? "- " + numeroPlaca : "",
                                            " ",
                                            complemento,
                                        ];
                                        direccion = fields
                                            .filter(function (field) { return field.trim() !== ""; })
                                            .join(" ")
                                            .trim();
                                        secondFinal = [
                                            {
                                                url: "http://localhost:8000/usuario/datosubicacion",
                                                datos: {
                                                    pais: paisUbicacion,
                                                    departamento: departamentoUbicacion,
                                                    municipio: municipioUbicacion,
                                                    zona: zonaUbicacion,
                                                    direccion: direccion,
                                                    indicacion: indicacionDireccionR || indicacionDireccionU,
                                                },
                                            },
                                        ];
                                        return [4 /*yield*/, BasicosService(secondFinal)];
                                    case 4:
                                        _a.sent();
                                        thirdGroup = [
                                            {
                                                url: "http://localhost:8000/usuario/identificacionusuario",
                                                datos: {
                                                    numero_identificacion: numeroIdentificacion,
                                                    fecha_expedicion: fechaExpedicion,
                                                    tipo_identificacion: tipoIdentificacion,
                                                },
                                            },
                                            {
                                                url: "http://localhost:8000/usuario/nombreusuario",
                                                datos: {
                                                    primer_nombre: primerNombre,
                                                    segundo_nombre: segundoNombre,
                                                    primer_apellido: primerApellido,
                                                    segundo_apellido: segundoApellido,
                                                },
                                            },
                                        ];
                                        return [4 /*yield*/, BasicosService(thirdGroup)];
                                    case 5:
                                        thirdGroupResponses = _a.sent();
                                        return [2 /*return*/, "Finalizado exitosamente"];
                                }
                            });
                        }); })(), {
                            pending: "Enviando...",
                            success: "¡Envío exitoso!",
                            error: "¡Hubo un error al enviar!",
                        }, {
                            position: "top-right",
                            className: "foo-bar",
                            hideProgressBar: true,
                        })];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.error("Error al enviar los datos:", error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    return (React.createElement(React.Fragment, null,
        hasHeader ? (React.createElement(Container, { className: "my-3" },
            React.createElement(Row, { className: "justify-content-center" },
                React.createElement(Col, { xl: 9, lg: 11 },
                    React.createElement(Encabezado, { dependencia: dependencia }))))) : (React.createElement(React.Fragment, null)),
        React.createElement(CardForm, { method: methodBasicos, changeMethod: setMethodBasicos, titulo: "Datos b\u00E1sicos de la persona", canEdit: canEdit, hasBody: false, onSubmit: handleSubmit, validated: validated },
            React.createElement(CardBody, null,
                React.createElement(SubtituloForm, { subtitulo: "Nombre(s) y Apellido(s)", icon: FaUser }),
                React.createElement(NombrePersona, { method: methodBasicos })),
            React.createElement(CardBody, { style: cardBodyStyle },
                React.createElement(SubtituloForm, { subtitulo: "Número único de identificación personal", icon: FaAddressCard }),
                React.createElement(Nuip, { method: methodBasicos })),
            React.createElement(CardBody, null,
                React.createElement(SubtituloForm, { subtitulo: "Género y orientación sexual", icon: FaMarsAndVenus }),
                React.createElement(SexoGeneroPersona, { method: methodBasicos })),
            React.createElement(CardBody, { style: cardBodyStyle },
                React.createElement(SubtituloForm, { subtitulo: "Contacto", icon: FaPhone }),
                React.createElement(ContactoPersona, { method: methodBasicos })),
            React.createElement(CardBody, null,
                React.createElement(SubtituloForm, { subtitulo: "Ubicación", icon: FaLocationDot }),
                React.createElement(UbicacionPersona, { method: methodBasicos })))));
};
var CardFormBasicos = function (_a) {
    var method = _a.method, _b = _a.canEdit, canEdit = _b === void 0 ? false : _b, _c = _a.hasHeader, hasHeader = _c === void 0 ? false : _c, _d = _a.dependencia, dependencia = _d === void 0 ? "Ecosistema de Información" : _d;
    return (React.createElement(React.Fragment, null,
        React.createElement(NombreProvider, null,
            React.createElement(NuipProvider, null,
                React.createElement(SexoGeneroProvider, null,
                    React.createElement(ContactoProvider, null,
                        React.createElement(UbicacionProvider, null,
                            React.createElement(Formulario, { method: method, canEdit: canEdit, hasHeader: hasHeader, dependencia: dependencia }))))))));
};
export default CardFormBasicos;
//# sourceMappingURL=CardFormBasicos.js.map