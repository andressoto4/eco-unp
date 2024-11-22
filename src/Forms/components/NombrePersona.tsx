import React from "react";
import { Col, FormGroup, FormLabel, FormControl, Row } from "react-bootstrap";
import {
  useIdPrimerNombre,
  useIdSegundoNombre,
  useIdPrimerApellido,
  useIdSegundoApellido,
} from "../hooks/NombreHook";

interface NombrePersonaProps {
  method: string;
}

const NombrePersona: React.FC<NombrePersonaProps> = ({ method }) => {
  // Importar los valores y las funciones de actualización de cada contexto
  const { idPrimerNombre: primerNombre, setIdPrimerNombre: setPrimerNombre } =
    useIdPrimerNombre();
  const {
    idSegundoNombre: segundoNombre,
    setIdSegundoNombre: setSegundoNombre,
  } = useIdSegundoNombre();
  const {
    idPrimerApellido: primerApellido,
    setIdPrimerApellido: setPrimerApellido,
  } = useIdPrimerApellido();
  const {
    idSegundoApellido: segundoApellido,
    setIdSegundoApellido: setSegundoApellido,
  } = useIdSegundoApellido();

  return (
    <React.Fragment>
      <Row>
        {/* Input de Primer nombre */}
        <Col lg={3} md={6} xs={12}>
          <FormGroup className="mb-3">
            <FormLabel>
              Primer nombre <span className="text-danger">*</span>
            </FormLabel>
            <FormControl
              type="text"
              value={primerNombre}
              onChange={(e) => setPrimerNombre(e.target.value)}
              maxLength={20}
              disabled={method === "GET" ? true : false}
              required
            />
          </FormGroup>
        </Col>

        {/* Input de Segundo nombre */}
        <Col lg={3} md={6} xs={12}>
          <FormGroup className="mb-3">
            <FormLabel>Segundo nombre</FormLabel>
            <FormControl
              type="text"
              value={segundoNombre}
              onChange={(e) => setSegundoNombre(e.target.value)}
              maxLength={50}
              disabled={method === "GET" ? true : false}
            />
          </FormGroup>
        </Col>

        {/* Input de Primer apellido */}
        <Col lg={3} md={6} xs={12}>
          <FormGroup className="mb-3">
            <FormLabel>
              Primer apellido <span className="text-danger">*</span>
            </FormLabel>
            <FormControl
              type="text"
              value={primerApellido}
              onChange={(e) => setPrimerApellido(e.target.value)}
              maxLength={50}
              disabled={method === "GET" ? true : false}
              required
            />
          </FormGroup>
        </Col>

        {/* Input de Segundo apellido */}
        <Col lg={3} md={6} xs={12}>
          <FormGroup className="mb-3">
            <FormLabel>Segundo apellido</FormLabel>
            <FormControl
              type="text"
              value={segundoApellido}
              onChange={(e) => setSegundoApellido(e.target.value)}
              maxLength={50}
              disabled={method === "GET" ? true : false}
            />
          </FormGroup>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default NombrePersona;
