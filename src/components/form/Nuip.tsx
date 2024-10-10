import React from "react";
import { Col, FormGroup, FormLabel, FormSelect, FormControl, Row } from "react-bootstrap";

interface NuipProps {
    attach?: boolean;
}

const Nuip: React.FC<NuipProps> = ({ attach = false }) => {
    
    return (
        <React.Fragment>

            <Row>

                {/* Select para el Tipo de identificación */}
                <Col md={4} xs={12}>
                    <FormGroup className="mb-3">
                        <FormLabel>
                            Tipo de identificación <span className="text-danger">*</span>
                        </FormLabel>
                        <FormSelect>
                            <option value="0">Seleccione...</option>
                            <option value="1">Tarjeta de identidad</option>
                            <option value="2">Cédula de ciudadanía</option>
                            <option value="3">Cédula de Extranjería</option>
                            <option value="4">Pasaporte</option>
                        </FormSelect>
                    </FormGroup>
                </Col>

                {/* Input para el Número de identificación */}
                <Col md={4} xs={12}>
                    <FormGroup className="mb-3">
                        <FormLabel>
                            Número de identificación <span className="text-danger">*</span>
                        </FormLabel>
                        <FormControl type="text" minLength={6} maxLength={15} required />
                    </FormGroup>
                </Col>

                {/* Input para la Fecha de expedición */}
                <Col md={4} xs={12}>
                    <FormGroup className="mb-3">
                        <FormLabel>
                            Fecha de expedición <span className="text-danger">*</span>
                        </FormLabel>
                        <FormControl type="date" max={new Date().toISOString().split("T")[0]} required />
                    </FormGroup>
                </Col>

                {/* Input para adjuntar fotocopia del documento de identidad */}
                <Col md={8} xs={12} style={{ display: attach ? 'block' : 'none' }}>
                    <FormGroup controlId="formFile" className="mb-3">
                        <FormLabel>
                            Fotocopia del documento de identificación personal <span className="text-danger">*</span>
                        </FormLabel>
                        <FormControl type="file" required={attach} />
                    </FormGroup>
                </Col>

            </Row>
        </React.Fragment>
    );
};

export default Nuip;