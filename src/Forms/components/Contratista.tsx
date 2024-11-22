import React from "react";
import { Col, FormControl, FormGroup, FormLabel, Row } from "react-bootstrap";
import { useIdContratista } from "../hooks/ComplementariosHook";

interface ContratistaProps {
  method?: string;
}

const Contratista: React.FC<ContratistaProps> = ({ method }) => {
  const {
    idNumeroContrato: numeroContrato,
    idFechaInicioContrato: fechaInicioContrato,
    idFechaFinContrato: fechaFinContrato,
    setIdNumeroContrato: setNumeroContrato,
    setIdFechaInicioContrato: setFechaInicioContrato,
    setIdFechaFinContrato: setFechaFinContrato,
  } = useIdContratista();

  return (
    <Row>
      <Col lg={4} md={6} xs={12}>
        <FormGroup className="mb-3">
          <FormLabel>
            Número de contrato <span className="text-danger">*</span>
          </FormLabel>
          <FormControl
            type="text"
            value={numeroContrato}
            onChange={(e) => setNumeroContrato(e.target.value)}
            placeholder="Ej: 2315"
            required
          />
        </FormGroup>
      </Col>

      <Col lg={4} md={6} xs={12}>
        <FormGroup className="mb-3">
          <FormLabel>
            Fecha inicio de contrato <span className="text-danger">*</span>
          </FormLabel>
          <FormControl
            type="date"
            value={fechaInicioContrato}
            onChange={(e) => setFechaInicioContrato(e.target.value)}
            max={new Date().toISOString().split("T")[0]}
            disabled={method === "GET" ? true : false}
            required
          />
        </FormGroup>
      </Col>

      <Col lg={4} md={6} xs={12} className="align-self-end">
        <FormGroup className="mb-4">
          <FormLabel>
            Fecha fin de contrato <span className="text-danger">*</span>
          </FormLabel>
          <FormControl
            type="date"
            value={fechaFinContrato}
            onChange={(e) => setFechaFinContrato(e.target.value)}
            max={new Date().toISOString().split("T")[0]}
            disabled={method === "GET" ? true : false}
            required
          />
        </FormGroup>
      </Col>
    </Row>
  );
};

export default Contratista;
