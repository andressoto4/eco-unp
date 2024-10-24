import React from "react";
import { Col, FormGroup, FormLabel, FormControl, Row } from "react-bootstrap";

interface ContactoPersonaProps {
  method: string;
};

const ContactoPersona: React.FC<ContactoPersonaProps> = ({ method }) => {
  return (
    <Row>
      {/* Input de Celular uno */}
      <Col md={4} xs={12}>
        <FormGroup className="mb-3">
          <FormLabel>
            Celular uno <span className="text-danger">*</span>
          </FormLabel>
          <FormControl
            minLength={10}
            maxLength={10}
            placeholder={method === 'GET' ? '' : 'Ej: 300 200 2000'}
            disabled={method === 'GET' ? true : false}
            required
          />
        </FormGroup>
      </Col>

      {/* Input de Celular dos */}
      <Col md={4} xs={12}>
        <FormGroup className="mb-3">
          <FormLabel>Celular dos </FormLabel>
          <FormControl
            minLength={10}
            maxLength={10}
            placeholder={method === 'GET' ? '' : 'Ej: 300 200 2000'}
            disabled={method === 'GET' ? true : false}
          />
        </FormGroup>
      </Col>

      {/* Input de Teléfono o celular tres */}
      <Col md={4} xs={12}>
        <FormGroup className="mb-3">
          <FormLabel>Teléfono (o celular tres)</FormLabel>
          <FormControl
            minLength={10}
            maxLength={10}
            placeholder={method === 'GET' ? '' : 'Ej: 300 200 2000'}
            disabled={method === 'GET' ? true : false}
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
            maxLength={100}
            disabled={method === 'GET' ? true : false}
            required
          />
        </FormGroup>
      </Col>
    </Row>
  );
};

export default ContactoPersona;
