import React from "react";
import {
  Col,
  FormGroup,
  FormLabel,
  FormSelect,
  FormControl,
  Row,
} from "react-bootstrap";

interface SexoGeneroPersonaProps {
  method: string;
}

const SexoGeneroPersona: React.FC<SexoGeneroPersonaProps> = ({ method }) => {
  return (
    <React.Fragment>
      <Row>
        {/* Select para el Sexo */}
        <Col md={4} xs={12}>
          <FormGroup className="mb-3">
            <FormLabel>
              Sexo <span className="text-danger">*</span>
            </FormLabel>
            {method === 'GET' ?
              <FormControl type="text" disabled />
              :
              <FormSelect>
                <option value="0">Seleccione...</option>
                <option value="1">Hombre</option>
                <option value="2">Mujer</option>
                <option value="3">Intersexual</option>
              </FormSelect>
            }
          </FormGroup>
        </Col>

        {/* Select para el Género */}
        <Col md={4} xs={12}>
          <FormGroup className="mb-3">
            <FormLabel>
              Género <span className="text-danger">*</span>
            </FormLabel>
            {method === 'GET' ?
              <FormControl type="text" disabled />
              :
              <FormSelect>
                <option value="0">Seleccione...</option>
                <option value="1">Femenino</option>
                <option value="2">Masculino</option>
                <option value="3">No binario</option>
              </FormSelect>
            }
          </FormGroup>
        </Col>

        {/* Select para la Orientación sexual */}
        <Col md={4} xs={12}>
          <FormGroup className="mb-3">
            <FormLabel>
              Orientación Sexual <span className="text-danger">*</span>
            </FormLabel>
            {method === 'GET' ?
              <FormControl type="text" disabled />
              :
              <FormSelect>
                <option value="0">Seleccione...</option>
                <option value="1">Heterosexual</option>
                <option value="2">Homosexual</option>
                <option value="3">Bisexual</option>
              </FormSelect>
            }
          </FormGroup>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default SexoGeneroPersona;
