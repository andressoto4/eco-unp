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
import { FormControl, FormGroup, FormLabel, FormSelect } from "react-bootstrap";
var Pais = function (_a) {
    var idPaisUbicacion = _a.idPaisUbicacion, onChange = _a.onChange, paisRef = _a.paisRef, method = _a.method;
    var _b = useState([]), paises = _b[0], setPaises = _b[1];
    var _c = useState("0"), paisSeleccionado = _c[0], setPaisSeleccionado = _c[1];
    useEffect(function () {
        var obtenerPaises = function () { return __awaiter(void 0, void 0, void 0, function () {
            var response, data, paisFiltrado, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, fetch("http://localhost:8000/sistema/pais/")];
                    case 1:
                        response = _a.sent();
                        if (!response.ok) return [3 /*break*/, 3];
                        return [4 /*yield*/, response.json()];
                    case 2:
                        data = _a.sent();
                        if (idPaisUbicacion) {
                            paisFiltrado = data.find(function (pais) { return pais.id_pais === idPaisUbicacion; });
                            setPaises(paisFiltrado ? [paisFiltrado] : []);
                        }
                        else {
                            setPaises(data);
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        console.error("Hubo un error al obtener los datos de los países:", response.status);
                        _a.label = 4;
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        error_1 = _a.sent();
                        console.error("Hubo un error al obtener los datos de los países:", error_1);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        }); };
        obtenerPaises();
    }, [idPaisUbicacion]);
    var handlePaisChange = function (event) {
        setPaisSeleccionado(event.target.value);
        if (onChange) {
            onChange(event);
        }
    };
    return (React.createElement(FormGroup, { className: "mb-3" },
        React.createElement(FormLabel, null,
            "Pa\u00EDs ",
            React.createElement("span", { className: "text-danger" }, "*")),
        method === "GET" ? (React.createElement(FormControl, { type: "text", disabled: true })) : (React.createElement(FormSelect, { ref: paisRef, value: paisSeleccionado, onChange: handlePaisChange },
            React.createElement("option", { value: "0", disabled: true }, "Seleccione..."),
            paises.map(function (pais) { return (React.createElement("option", { key: pais.id_pais, value: pais.id_pais }, pais.nombre_pais)); })))));
};
export default Pais;
//# sourceMappingURL=Pais.js.map