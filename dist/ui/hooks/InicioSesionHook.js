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
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { InicioSesionRequest } from "../request/InicisoSesionRequest";
export var InicioSesionHook = function (maxAttempts, blockTime) {
    var _a = useState(null), recaptchaToken = _a[0], setRecaptchaToken = _a[1];
    var _b = useState(false), validated = _b[0], setValidated = _b[1];
    var _c = useState(0), attempts = _c[0], setAttempts = _c[1];
    var _d = useState(false), isBlocked = _d[0], setIsBlocked = _d[1];
    var _e = useState(0), timer = _e[0], setTimer = _e[1];
    useEffect(function () {
        var interval;
        // Si el usuario está bloqueado y el temporizador es mayor que 0
        if (isBlocked && timer > 0) {
            // Configura un intervalo que decrementa el temporizador en 1 cada segundo
            interval = setInterval(function () {
                setTimer(function (prevTimer) { return prevTimer - 1; });
            }, 1000);
        }
        // Si el temporizador llega a 0 y el usuario está bloqueado
        if (timer === 0 && isBlocked) {
            // Desbloquea al usuario y restablece los intentos
            setIsBlocked(false);
            setAttempts(0);
        }
        // Limpia el intervalo cuando el efecto se desmonta o se actualiza
        return function () {
            if (interval)
                clearInterval(interval);
        };
    }, [isBlocked, timer]);
    var handleRecaptchaChange = function (token) {
        setRecaptchaToken(token);
    };
    var handleSubmit = function (e, usuarioRef, contrasegnaRef, recaptchaRef) { return __awaiter(void 0, void 0, void 0, function () {
        var form, username, password, err_1;
        var _a, _b, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    e.preventDefault();
                    form = e.currentTarget;
                    if (!(attempts < maxAttempts)) return [3 /*break*/, 8];
                    if (!form.checkValidity()) {
                        console.log(form.checkValidity());
                        e.stopPropagation();
                        setValidated(false);
                        toast.error("Formulario no valido", {
                            position: "top-right",
                            className: "foo-bar",
                            hideProgressBar: true,
                        });
                        return [2 /*return*/];
                    }
                    if (!recaptchaToken) {
                        e.stopPropagation();
                        toast.error("Por favor, completa el reCAPTCHA", {
                            position: "top-right",
                            className: "foo-bar",
                            hideProgressBar: true,
                        });
                        return [2 /*return*/];
                    }
                    setValidated(true);
                    username = (_a = usuarioRef.current) === null || _a === void 0 ? void 0 : _a.value;
                    password = (_b = contrasegnaRef.current) === null || _b === void 0 ? void 0 : _b.value;
                    if (!(username && password)) return [3 /*break*/, 6];
                    _d.label = 1;
                case 1:
                    _d.trys.push([1, 3, 4, 5]);
                    return [4 /*yield*/, toast.promise(InicioSesionRequest(username, password, recaptchaToken), {
                            pending: "Ingresando...",
                            success: {
                                render: function (_a) {
                                    var data = _a.data;
                                    localStorage.setItem("access_token", data.access_token);
                                    setTimeout(function () {
                                        window.location.href = "./";
                                    }, 1000);
                                    return "¡Ingreso exitoso!";
                                },
                            },
                            error: {
                                render: function (_a) {
                                    var _b;
                                    var data = _a.data;
                                    setValidated(false);
                                    setAttempts(function (prevAttempts) { return prevAttempts + 1; });
                                    (_b = recaptchaRef.current) === null || _b === void 0 ? void 0 : _b.reset();
                                    // Typescript genera un error de tipos pero es por la libreria de toastify no esta hecha en ts
                                    return data.message;
                                },
                            },
                        }, {
                            position: "top-right",
                            className: "foo-bar",
                            hideProgressBar: true,
                        })];
                case 2:
                    _d.sent();
                    return [3 /*break*/, 5];
                case 3:
                    err_1 = _d.sent();
                    toast.error("Hubo un error", {
                        position: "top-right",
                        className: "foo-bar",
                        hideProgressBar: true,
                    });
                    (_c = recaptchaRef.current) === null || _c === void 0 ? void 0 : _c.reset();
                    return [3 /*break*/, 5];
                case 4:
                    if (attempts + 1 >= maxAttempts) {
                        setIsBlocked(true);
                        setTimer(blockTime);
                    }
                    return [7 /*endfinally*/];
                case 5: return [3 /*break*/, 7];
                case 6:
                    toast.error("Usuario o contraseña no pueden estar vacíos", {
                        position: "top-right",
                        className: "foo-bar",
                        hideProgressBar: true,
                    });
                    _d.label = 7;
                case 7: return [3 /*break*/, 9];
                case 8:
                    setIsBlocked(true);
                    setTimer(blockTime);
                    _d.label = 9;
                case 9: return [2 /*return*/];
            }
        });
    }); };
    return {
        recaptchaToken: recaptchaToken,
        validated: validated,
        attempts: attempts,
        isBlocked: isBlocked,
        timer: timer,
        handleRecaptchaChange: handleRecaptchaChange,
        handleSubmit: handleSubmit,
    };
};
//# sourceMappingURL=InicioSesionHook.js.map