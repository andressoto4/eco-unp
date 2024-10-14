import React, { useEffect, useRef, useState } from "react";

import { FaFacebook, FaInstagram, FaXTwitter, FaYoutube } from 'react-icons/fa6';
import { MdError } from "react-icons/md";
import ReCAPTCHA from "react-google-recaptcha";
import { Row, Col, Container, Button, Alert } from "react-bootstrap";
import { toast } from "react-toastify";

import { IngresoProvider } from './providers/IngresoProvider'
import { LogosUnp } from "./componentes/Logos";
import { Recaptcha } from "./componentes/Recaptcha";
import { Usuario, Contrasegna, RedesSocialesICon } from "./componentes/Login";

import './styles/Bootstrap.css'

interface FormIngresoProps {
    children?: React.ReactNode;
}

const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#E0E0E0'
  };

const Login: React.FC<FormIngresoProps> = (props) => {

    const usuarioRef = useRef<HTMLInputElement>(null);
    const contrasegnaRef = useRef<HTMLInputElement>(null);

    const recaptchaRef = useRef<ReCAPTCHA>(null);
    const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);

    const [validated, setValidated] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const [attempts, setAttempts] = useState<number>(0);
    const [isBlocked, setIsBlocked] = useState<boolean>(false);
    const [timer, setTimer] = useState<number>(0);
    const maxAttempts = 3;
    const blockTime = 10;

    const handleRecaptchaChange = (token: string | null) => {
        setRecaptchaToken(token);
    };

    useEffect(() => {
        let interval: NodeJS.Timeout | undefined;

        if (isBlocked && timer > 0) {
            interval = setInterval(() => {
                setTimer((prevTimer) => prevTimer - 1);
            }, 1000);
        }

        if (timer === 0 && isBlocked) {
            setIsBlocked(false);
            setAttempts(0);
        }

        return () => {
            if (interval) clearInterval(interval);
        };
    }, [isBlocked, timer]);


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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

            const username = usuarioRef.current?.value;
            const password = contrasegnaRef.current?.value;

            try {
                const response = await toast.promise(
                    fetch("http://localhost:8000/login/", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({ username, password, recaptchaToken }),
                    }),
                    {
                        pending: "Ingresando...",
                        success: {
                            render({ data }) {
                                if (data.status === 200) {
                                    setTimeout(() => {
                                        window.location.href = "./";
                                    }, 1000);
                                    return "Ingreso exitoso!";
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
                    },
                    {
                        position: "bottom-right",
                        className: "foo-bar",
                        hideProgressBar: true,
                    }
                );

                if (response.ok) {
                    const data = await response.json();
                    if (data.access_token) {
                        localStorage.setItem("access_token", data.access_token);
                    } else {
                        setAttempts((prevAttempts) => prevAttempts + 1);
                        setError("Credenciales incorrectas");
                    }
                } else {
                    const errorData = await response.json();
                    setError(errorData.error || "Error en el servidor");
                    recaptchaRef.current?.reset();
                }
            } catch (error) {
                setError("Error de conexión");
                recaptchaRef.current?.reset();
            } finally {
                if (attempts + 1 >= maxAttempts) {
                    setIsBlocked(true);
                    setTimer(blockTime);
                }
            }
        } else {
            setIsBlocked(true);
            setTimer(blockTime);
        }
    };

    return (

        // Div que permite al login a ubicarse en el centro
        <div style={containerStyle}>

            {/* Contenedor principal con sombra y ancho máximo de 720px */}
            <Container style={{ maxWidth: "720px" }}>

                {/* Fila para la presentación y los inputs de inicio de sesión */}
                <Row className="justify-content-md-center border-0 rounded shadow">

                    {/* Columna izquierda con fondo de formulario y borde redondeado */}
                    <Col md={6} className="bg-form align-content-center px-5 rounded-start">
                        <Row className="justify-content-md-center">
                            <h2 className="text-center text-white">Ecosistema de Información</h2>
                            <hr className="text-light"></hr>
                            <LogosUnp src={"https://live.staticflickr.com/65535/54064468237_fb5a3edea2_z.jpg"} size={"7em"} alt={"Escudo Institucional Logos"} height={"106px"} />
                        </Row>
                    </Col>

                    {/* Columna derecha con fondo blanco y borde redondeado */}
                    <Col md={6} className="pt-4 pb-3 rounded-end bg-white">

                        {/* Fila que contiene logos e imágenes institucionales */}
                        <Row className="justify-content-md-center text-center">
                            <LogosUnp size={"9em"} src={"https://live.staticflickr.com/65535/54065780355_d6580531a4_q.jpg"} alt={"Escudo Institucional UNP"} height={"120px"} />
                            <h4 className="mt-2">Inicio de sesión</h4>
                        </Row>

                        {/* Formulario de inicio de sesión */}
                        <Row className="justify-content-md-center mx-0">
                            <form method="POST" noValidate className={validated ? "was-validated" : ""} onSubmit={handleSubmit}>

                                {/* Campos de usuario y contraseña */}
                                <Col xl={12} md={9} xs={12} className="justify-content-center">
                                    <Usuario usuarioRef={usuarioRef} />
                                    <Contrasegna contrasegnaRef={contrasegnaRef} />
                                </Col>

                                {/* Botón de enviar */}
                                <Col xl={12} md={9} xs={12} className="d-grid gap-2">
                                    <Button variant="secondary" disabled={isBlocked} type="submit">
                                        {isBlocked ? `Espera ${timer} segundos` : "Ingresar"}
                                    </Button>
                                </Col>

                                {/* reCAPTCHA  */}
                                <Recaptcha onChange={handleRecaptchaChange} sitekey="6LeC9F0qAAAAAJrKsyU-wpvYmDquDcAoqhH_oASk"  />

                            </form>
                        </Row>

                        {/* Mensaje de error */}
                        {error && (
                            <Alert className="mt-3" key={"danger"} variant={"danger"}>
                                <MdError /> {error}
                            </Alert>
                        )}

                    </Col>
                </Row>

                {/* Fila para incluir las redes sociales de la entidad y la política de datos */}
                <Row className="mt-2 d-flex justify-content-beetween">

                    {/* Columna para los iconos botones de redes sociales */}
                    <Col className="ms-0 d-flex justify-content-start">
                        <RedesSocialesICon color="#000" IconComponent={FaXTwitter} />
                        <RedesSocialesICon color="#F00075" IconComponent={FaInstagram} />
                        <RedesSocialesICon color="#1778F2" IconComponent={FaFacebook} />
                        <RedesSocialesICon color="#FF0000" IconComponent={FaYoutube} />
                    </Col>

                    {/* Enlace a la política de seguridad de la información y protección de datos personales */}
                    <Col className="me-0 d-flex justify-content-end align-items-center">
                        <a
                            href="https://www.unp.gov.co/normativa/politicas-de-seguridad-de-la-informacion-y-proteccion-de-datos-personales/"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ textDecoration: 'none' }}
                        >
                            <p style={{ margin: '0px', color: '#365072', fontWeight: '700', fontSize: '0.75em', textAlign: 'center', minWidth: '235px', maxWidth: '235px' }}>
                                Políticas de seguridad de la información y protección de datos personales
                            </p>
                        </a>
                    </Col>

                </Row>

            </Container>

            <br />
            {props.children}
        </div>
    );
};

const IniciarSesion: React.FC = () => {
    return (
        <IngresoProvider>
            <Login />
        </IngresoProvider>
    );
};

export default IniciarSesion