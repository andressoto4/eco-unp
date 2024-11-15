import React from "react";
import { Col, FormControl, FormGroup, FormLabel, Row } from "react-bootstrap";
import { useIdFuncionario } from "../hooks/ComplementariosHook";

interface FuncionarioProps {
  method?: string;
}

const Funcionario: React.FC<FuncionarioProps> = ({ method }) => {
  const {
    idNumeroResolucion: numeroResolucion,
    setIdNumeroResolucion: setNumeroResolucion,
  } = useIdFuncionario();

  return (
    <Row>
      <Col lg={4} md={6} xs={12}>
        <FormGroup className="mb-3">
          <FormLabel>
            Número de resolución <span className="text-danger">*</span>
          </FormLabel>
          <FormControl
            type="text"
            value={numeroResolucion}
            onChange={(e) => setNumeroResolucion(e.target.value)}
            placeholder="Ej: 2315"
            disabled={method === "GET" ? true : false}
            required
          />
        </FormGroup>
      </Col>
    </Row>
  );
};

export default Funcionario;
