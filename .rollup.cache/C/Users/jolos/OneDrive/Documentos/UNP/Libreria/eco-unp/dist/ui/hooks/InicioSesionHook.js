import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { InicioSesionRequest } from "../request/InicisoSesionRequest";
export const InicioSesionHook = (maxAttempts, blockTime) => {
    const [recaptchaToken, setRecaptchaToken] = useState(null);
    const [validated, setValidated] = useState(false);
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
    const handleSubmit = async (e, usuarioRef, contrasegnaRef, recaptchaRef) => {
        var _a, _b, _c;
        e.preventDefault();
        const form = e.currentTarget;
        if (attempts < maxAttempts) {
            if (!form.checkValidity()) {
                console.log(form.checkValidity());
                e.stopPropagation();
                setValidated(false);
                toast.error("Formulario no valido", {
                    position: "top-right",
                    className: "foo-bar",
                    hideProgressBar: true,
                });
                return;
            }
            if (!recaptchaToken) {
                e.stopPropagation();
                toast.error("Por favor, completa el reCAPTCHA", {
                    position: "top-right",
                    className: "foo-bar",
                    hideProgressBar: true,
                });
                return;
            }
            setValidated(true);
            const username = (_a = usuarioRef.current) === null || _a === void 0 ? void 0 : _a.value;
            const password = (_b = contrasegnaRef.current) === null || _b === void 0 ? void 0 : _b.value;
            if (username && password) {
                try {
                    await toast.promise(InicioSesionRequest(username, password, recaptchaToken), {
                        pending: "Ingresando...",
                        success: {
                            render({ data }) {
                                localStorage.setItem("access_token", data.access_token);
                                setTimeout(() => {
                                    window.location.href = "./";
                                }, 1000);
                                return "¡Ingreso exitoso!";
                            },
                        },
                        error: {
                            render({ data }) {
                                var _a;
                                setValidated(false);
                                setAttempts((prevAttempts) => prevAttempts + 1);
                                (_a = recaptchaRef.current) === null || _a === void 0 ? void 0 : _a.reset();
                                // Typescript genera un error de tipos pero es por la libreria de toastify no esta hecha en ts
                                return data.message;
                            },
                        },
                    }, {
                        position: "top-right",
                        className: "foo-bar",
                        hideProgressBar: true,
                    });
                }
                catch (err) {
                    toast.error("Hubo un error", {
                        position: "top-right",
                        className: "foo-bar",
                        hideProgressBar: true,
                    });
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
                toast.error("Usuario o contraseña no pueden estar vacíos", {
                    position: "top-right",
                    className: "foo-bar",
                    hideProgressBar: true,
                });
            }
        }
        else {
            setIsBlocked(true);
            setTimer(blockTime);
        }
    };
    return {
        recaptchaToken,
        validated,
        attempts,
        isBlocked,
        timer,
        handleRecaptchaChange,
        handleSubmit,
    };
};
//# sourceMappingURL=InicioSesionHook.js.map