// Importación de React y otros módulos necesarios
import React from "react";
import { FaFileContract, FaKey } from "react-icons/fa6";
import ReCAPTCHA from "react-google-recaptcha";
import { Row, Col, Container, Button } from "react-bootstrap";

// Importaciones de componentes propios
import { InicioSesionHook } from "./hooks/InicioSesionHook";
import { LogosUnp } from "./components/Logos";
import { Recaptcha } from "./components/Recaptcha";
import { Usuario, Contrasegna, RedesSociales } from "./components/Login";

// Importación de archivos de estilos CSS
import "./styles/Bootstrap.css";
import "./styles/InicioSesion.css";

// Definición de tipos para las propiedades del formulario de ingreso
interface FormIngresoProps {
  children?: React.ReactNode; // Propiedad opcional que permite pasar nodos React como hijos
}

// Definición del componente funcional Login que acepta las propiedades definidas en FormIngresoProps
const Login: React.FC<FormIngresoProps> = (props) => {
  // Referencias para usuario, contraseña y reCAPTCHA
  const usuarioRef = React.useRef<HTMLInputElement>(null);
  const contrasegnaRef = React.useRef<HTMLInputElement>(null);
  const recaptchaRef = React.useRef<ReCAPTCHA>(null);

  const maxAttempts = 3; // Número máximo de intentos permitidos
  const blockTime = 10; // Tiempo de bloqueo en segundos

  // Uso del hook personalizado InicioSesionHook para manejar el estado del formulario de inicio de sesión
  const { recaptchaToken, validated, attempts, isBlocked, timer, handleRecaptchaChange, handleSubmit  } = InicioSesionHook(maxAttempts, blockTime);

  // ------ > Renderizado
  return (
    // Div que permite al login a ubicarse en el centro
    <div className="login-container">
      {/* Contenedor principal con sombra y ancho máximo de 720px */}
      <Container style={{ maxWidth: "720px", maxHeight: "600px" }}>
        {/* Fila para la presentación y los inputs de inicio de sesión */}
        <Row className="justify-content-md-center border-0 rounded shadow">
          {/* Columna izquierda con fondo de formulario y borde redondeado */}
          <Col
            md={6}
            className="bg-form align-content-center px-5 rounded-start"
          >
            <Row className="justify-content-md-center">
              <h2 className="text-center text-white">
                Ecosistema de Información
              </h2>
              <hr className="text-light"></hr>
              <LogosUnp
                src={
                  "https://live.staticflickr.com/65535/54064468237_fb5a3edea2_z.jpg"
                }
                size={"7em"}
                alt={"Escudo Institucional Logos"}
                height={"106px"}
              />
              <p
                className="text-center mt-4"
                style={{ color: "#BFBFBF", fontWeight: "500" }}
              >
                Integrar la gestión, potencializar los resultados
              </p>
            </Row>
          </Col>

          {/* Columna derecha con fondo blanco y borde redondeado */}
          <Col md={6} className="pt-4 pb-3 rounded-end bg-white">
            {/* Fila que contiene logos e imágenes institucionales */}
            <Row className="justify-content-md-center text-center">
              <LogosUnp
                size={"9em"}
                src={
                  "https://live.staticflickr.com/65535/54065780355_d6580531a4_q.jpg"
                }
                alt={"Escudo Institucional UNP"}
                height={"120px"}
              />
              <h4 className="mt-2">Inicio de sesión</h4>
            </Row>

            {/* Formulario de inicio de sesión */}
            <Row className="justify-content-md-center mx-0">
              <form
                method="POST"
                noValidate
                className={validated ? "was-validated" : ""}
                onSubmit={(e) =>
                  handleSubmit(e, usuarioRef, contrasegnaRef, recaptchaRef)
                }
              >
                {/* Campos de usuario y contraseña */}
                <Col xl={12} md={12} xs={12} className="justify-content-center">
                  <Usuario usuarioRef={usuarioRef} />
                  <Contrasegna contrasegnaRef={contrasegnaRef} />
                </Col>

                {/* Botón de enviar */}
                <Col xl={12} md={12} xs={12} className="d-grid gap-2">
                  <Button
                    variant="secondary"
                    disabled={isBlocked}
                    type="submit"
                  >
                    {isBlocked ? `Espera ${timer} segundos` : "Ingresar"}
                  </Button>
                </Col>

                {/* reCAPTCHA  */}
                <Recaptcha
                  onChange={handleRecaptchaChange}
                  sitekey="6LeC9F0qAAAAAJrKsyU-wpvYmDquDcAoqhH_oASk"
                />
              </form>
            </Row>
            
          </Col>
        </Row>

        {/* Fila para incluir las redes sociales de la entidad y la política de datos */}
        <Row className="mt-2 d-flex justify-content-beetween">
          {/* Columna para los iconos botones de redes sociales */}
          <Col className="ms-0 d-flex justify-content-start">
                {/* Por si se decide incluir redes sociales */}
          </Col>

          {/* Enlace a la política de seguridad de la información y protección de datos personales */}
          <Col className="me-0 d-flex justify-content-end align-items-center">
            <RedesSociales
              IconoRedSocial={FaFileContract}
              color="#365072"
              descripcion="Políticas de datos de la UNP"
              enlace="https://www.unp.gov.co/normativa/politicas-de-seguridad-de-la-informacion-y-proteccion-de-datos-personales/"
            />
            <RedesSociales
              IconoRedSocial={FaKey}
              color="#365072"
              descripcion="Recuperar contraseña"
              enlace="#"
            />
          </Col>
        </Row>
      </Container>

      <br />
      {props.children}
    </div>
  );
};

// Definición del componente funcional IniciarSesion
const InicioSesion: React.FC = () => {
  // -----> Renderizado
  return (
    <div className="main-container">
        <Login />
    </div>
  );
};
 
// Exporta el componente IniciarSesion para su uso en otros archivos
export default InicioSesion;
