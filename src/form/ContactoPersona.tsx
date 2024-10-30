import React from "react";
import { Col, FormGroup, FormLabel, FormControl, Row } from "react-bootstrap";
import {
  useIdCelularDos,
  useIdCelularUno,
  useIdCorreo,
  useIdTelefono,
} from "./hooks/ContactoHook";

interface ContactoPersonaProps {
  method: string;
}

const ContactoPersona: React.FC<ContactoPersonaProps> = ({ method }) => {
  // Importar los valores y las funciones de actualización de cada contexto
  const { idCelularUno: celularUno, setIdCelularUno: setCelularUno } =
    useIdCelularUno();
  const { idCelularDos: celularDos, setIdCelularDos: setCelularDos } =
    useIdCelularDos();
  const { idTelefono: telefono, setIdTelefono: setTelefono } = useIdTelefono();
  const { idCorreo: correo, setIdCorreo: setCorreo } = useIdCorreo();

  return (
    <React.Fragment>
      <Row>
        {/* Input de Celular uno */}
        <Col md={4} xs={12}>
          <FormGroup className="mb-3">
            <FormLabel>
              Celular uno <span className="text-danger">*</span>
            </FormLabel>
            <FormControl
              value={celularUno}
              onChange={(e) => setCelularUno(e.target.value)}
              minLength={10}
              maxLength={10}
              placeholder={method === "GET" ? "" : "Ej: 300 200 2000"}
              disabled={method === "GET" ? true : false}
              required
            />
          </FormGroup>
        </Col>

        {/* Input de Celular dos */}
        <Col md={4} xs={12}>
          <FormGroup className="mb-3">
            <FormLabel>Celular dos </FormLabel>
            <FormControl
              value={celularDos}
              onChange={(e) => setCelularDos(e.target.value)}
              minLength={10}
              maxLength={10}
              placeholder={method === "GET" ? "" : "Ej: 300 200 2000"}
              disabled={method === "GET" ? true : false}
            />
          </FormGroup>
        </Col>

        {/* Input de Teléfono o celular tres */}
        <Col md={4} xs={12}>
          <FormGroup className="mb-3">
            <FormLabel>Teléfono (o celular tres)</FormLabel>
            <FormControl
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              minLength={10}
              maxLength={10}
              placeholder={method === "GET" ? "" : "Ej: 300 200 2000"}
              disabled={method === "GET" ? true : false}
            />
          </FormGroup>
        </Col>

        {/* Input de Correo electrónico */}
        <Col xl={6} md={9} xs={12}>
          <FormGroup className="mb-3">
            <FormLabel>
              Correo electrónico <span className="text-danger">*</span>
            </FormLabel>
            <FormControl
              type="email"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              maxLength={100}
              disabled={method === "GET" ? true : false}
              required
            />
          </FormGroup>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default ContactoPersona;
