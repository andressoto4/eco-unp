import React from "react";
import { Col, FormGroup, FormLabel, FormControl, Row } from "react-bootstrap";

const NombrePersona = () => {

    return (

        <Row>

            {/* Input de Primer nombre */}
            <Col lg={3} md={6} xs={12}>
                <FormGroup className="mb-3">
                    <FormLabel>Primer nombre <span className="text-danger">*</span></FormLabel>
                    <FormControl
                        type="text"
                        maxLength={20}
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
                        maxLength={50}
                    />
                </FormGroup>
            </Col>

            {/* Input de Primer apellido */}
            <Col lg={3} md={6} xs={12}>
                <FormGroup className="mb-3">
                    <FormLabel>Primer apellido <span className="text-danger">*</span></FormLabel>
                    <FormControl
                        type="text"
                        maxLength={50}
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
                        maxLength={50}
                    />
                </FormGroup>
            </Col>

        </Row>
    );
};

export default NombrePersona;