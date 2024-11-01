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
  useIdGenero,
  useIdOrientacionSexual,
  useIdSexo,
} from "./hooks/SexoGeneroHook";

interface SexoGeneroPersonaProps {
  method: string;
}

const SexoGeneroPersona: React.FC<SexoGeneroPersonaProps> = ({ method }) => {
  // Importar los valores y las funciones de actualización de cada contexto
  const { idSexo: sexo, setIdSexo: setSexo } = useIdSexo();
  const { idGenero: genero, setIdGenero: setGenero } = useIdGenero();
  const {
    idOrientacionSexual: orientacionSexual,
    setIdOrientacionSexual: setOrientacionSexual,
  } = useIdOrientacionSexual();

  return (
    <React.Fragment>
      <Row>
        {/* Select para el Sexo */}
        <Col md={4} xs={12}>
          <FormGroup className="mb-3">
            <FormLabel>
              Sexo <span className="text-danger">*</span>
            </FormLabel>
            {method === "GET" ? (
              <FormControl type="text" disabled />
            ) : (
              <FormSelect
                value={sexo}
                onChange={(e) => setSexo(e.target.value)}
              >
                <option value="0">Seleccione...</option>
                <option value="1">Hombre</option>
                <option value="2">Mujer</option>
                <option value="3">Intersexual</option>
              </FormSelect>
            )}
          </FormGroup>
        </Col>

        {/* Select para el Género */}
        <Col md={4} xs={12}>
          <FormGroup className="mb-3">
            <FormLabel>
              Género <span className="text-danger">*</span>
            </FormLabel>
            {method === "GET" ? (
              <FormControl type="text" disabled />
            ) : (
              <FormSelect
                value={genero}
                onChange={(e) => setGenero(e.target.value)}
              >
                <option value="0">Seleccione...</option>
                <option value="1">Femenino</option>
                <option value="2">Masculino</option>
                <option value="3">No binario</option>
              </FormSelect>
            )}
          </FormGroup>
        </Col>

        {/* Select para la Orientación sexual */}
        <Col md={4} xs={12}>
          <FormGroup className="mb-3">
            <FormLabel>
              Orientación Sexual <span className="text-danger">*</span>
            </FormLabel>
            {method === "GET" ? (
              <FormControl type="text" disabled />
            ) : (
              <FormSelect
                value={orientacionSexual}
                onChange={(e) => setOrientacionSexual(e.target.value)}
              >
                <option value="0">Seleccione...</option>
                <option value="1">Heterosexual</option>
                <option value="2">Homosexual</option>
                <option value="3">Bisexual</option>
              </FormSelect>
            )}
          </FormGroup>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default SexoGeneroPersona;
