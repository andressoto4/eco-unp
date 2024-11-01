import React from "react";
import {
  Col,
  FormGroup,
  FormLabel,
  FormSelect,
  FormControl,
  Row,
} from "react-bootstrap";
import {
  useIdFechaExpedicion,
  useIdNumeroIdentificacion,
  useIdTipoIdentificaicon,
} from "./hooks/NuipHook";

interface NuipProps {
  method: string;
  attach?: boolean;
}

const Nuip: React.FC<NuipProps> = ({ method, attach = false }) => {
  // Importar los valores y las funciones de actualización de cada contexto
  const {
    idTipoIdentificacion: tipoIdentificacion,
    setIdTipoIdentificacion: setTipoIdentificacion,
  } = useIdTipoIdentificaicon();
  const {
    idNumeroIdentificacion: numeroIdentificacion,
    setIdNumeroIdentificacion: setNumeroIdentificacion,
  } = useIdNumeroIdentificacion();
  const {
    idFechaExpedicion: fechaExpedicion,
    setIdFechaExpedicion: setFechaExpedicion,
  } = useIdFechaExpedicion();

  return (
    <React.Fragment>
      <Row>
        {/* Select para el Tipo de identificación */}
        <Col md={4} xs={12}>
          <FormGroup className="mb-3">
            <FormLabel>
              Tipo de identificación <span className="text-danger">*</span>
            </FormLabel>
            {method === "GET" ? (
              <FormControl type="text" disabled />
            ) : (
              <FormSelect
                value={tipoIdentificacion}
                onChange={(e) => setTipoIdentificacion(e.target.value)}
              >
                <option value="0">Seleccione...</option>
                <option value="1">Tarjeta de identidad</option>
                <option value="2">Cédula de ciudadanía</option>
                <option value="3">Cédula de Extranjería</option>
                <option value="4">Pasaporte</option>
              </FormSelect>
            )}
          </FormGroup>
        </Col>

        {/* Input para el Número de identificación */}
        <Col md={4} xs={12}>
          <FormGroup className="mb-3">
            <FormLabel>
              Número de identificación <span className="text-danger">*</span>
            </FormLabel>
            <FormControl
              type="text"
              value={numeroIdentificacion}
              onChange={(e) => setNumeroIdentificacion(e.target.value)}
              minLength={6}
              maxLength={15}
              disabled={method === "GET" ? true : false}
              required
            />
          </FormGroup>
        </Col>

        {/* Input para la Fecha de expedición */}
        <Col md={4} xs={12}>
          <FormGroup className="mb-3">
            <FormLabel>
              Fecha de expedición <span className="text-danger">*</span>
            </FormLabel>
            <FormControl
              type="date"
              value={fechaExpedicion}
              onChange={(e) => setFechaExpedicion(e.target.value)}
              max={new Date().toISOString().split("T")[0]}
              disabled={method === "GET" ? true : false}
              required
            />
          </FormGroup>
        </Col>

        {/* Input para adjuntar fotocopia del documento de identidad */}
        <Col md={8} xs={12} style={{ display: attach ? "block" : "none" }}>
          <FormGroup controlId="formFile" className="mb-3">
            <FormLabel>
              Fotocopia del documento de identificación personal{" "}
              <span className="text-danger">*</span>
            </FormLabel>
            <FormControl type="file" required={attach} />
          </FormGroup>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Nuip;
