var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { InicioSesionRequest } from '../request/InicisoSesionRequest';
export const InicioSesionHook = (maxAttempts, blockTime) => {
    const [recaptchaToken, setRecaptchaToken] = useState(null);
    const [validated, setValidated] = useState(false);
    const [error, setError] = useState(null);
    const [attempts, setAttempts] = useState(0);
    const [isBlocked, setIsBlocked] = useState(false);
    const [timer, setTimer] = useState(0);
    useEffect(() => {
        let interval;
        // Si el usuario está bloqueado y el temporizador es mayor que 0
        if (isBlocked && timer > 0) {
            // Configura un intervalo que decrementa el temporizador en 1 cada segundo
            interval = setInterval(() => {
                setTimer((prevTimer) => prevTimer - 1);
            }, 1000);
        }
        // Si el temporizador llega a 0 y el usuario está bloqueado
        if (timer === 0 && isBlocked) {
            // Desbloquea al usuario y restablece los intentos
            setIsBlocked(false);
            setAttempts(0);
        }
        // Limpia el intervalo cuando el efecto se desmonta o se actualiza
        return () => {
            if (interval)
                clearInterval(interval);
        };
    }, [isBlocked, timer]);
    const handleRecaptchaChange = (token) => {
        setRecaptchaToken(token);
    };
    const handleSubmit = (e, usuarioRef, contrasegnaRef, recaptchaRef) => __awaiter(void 0, void 0, void 0, function* () {
        var _a, _b, _c;
        e.preventDefault();
        const form = e.currentTarget;
        if (attempts < maxAttempts) {
            if (!form.checkValidity()) {
                e.stopPropagation();
                setValidated(false);
                return;
            }
            if (!recaptchaToken) {
                e.stopPropagation();
                setError("Por favor, completa el reCAPTCHA");
                return;
            }
            setError(null);
            setValidated(true);
            const username = (_a = usuarioRef.current) === null || _a === void 0 ? void 0 : _a.value;
            const password = (_b = contrasegnaRef.current) === null || _b === void 0 ? void 0 : _b.value;
            if (username && password) {
                try {
                    const data = yield toast.promise(InicioSesionRequest(username, password, recaptchaToken), {
                        pending: "Ingresando...",
                        success: {
                            render({ data }) {
                                alert('estoy aquí');
                                if (data.status === 200) {
                                    setTimeout(() => {
                                        window.location.href = "./";
                                    }, 1000);
                                    return "¡Ingreso exitoso!";
                                }
                                throw new Error("Error en la respuesta del servidor");
                            },
                        },
                        error: {
                            render() {
                                setValidated(false);
                                setError("Error durante el ingreso");
                                return "Error durante el ingreso.";
                            },
                        },
                    }, {
                        position: "bottom-right",
                        className: "foo-bar",
                        hideProgressBar: true,
                    });
                    if (data.access_token) {
                        localStorage.setItem("access_token", data.access_token);
                    }
                    else {
                        setAttempts((prevAttempts) => prevAttempts + 1);
                        setError("Credenciales incorrectas");
                    }
                }
                catch (err) {
                    if (err instanceof Error) {
                        setError(err.message);
                    }
                    else {
                        setError("Error desconocido");
                    }
                    (_c = recaptchaRef.current) === null || _c === void 0 ? void 0 : _c.reset();
                }
                finally {
                    if (attempts + 1 >= maxAttempts) {
                        setIsBlocked(true);
                        setTimer(blockTime);
                    }
                }
            }
            else {
                setError("Usuario o contraseña no pueden estar vacíos");
            }
        }
        else {
            setIsBlocked(true);
            setTimer(blockTime);
        }
    });
    return { recaptchaToken, validated, error, attempts, isBlocked, timer, handleRecaptchaChange, handleSubmit };
};
