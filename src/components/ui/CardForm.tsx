import React from "react";
import { Row, Button, Col, Container, Card, CardHeader, CardTitle, CardBody } from 'react-bootstrap';

interface CardFormProps {
    children?: React.ReactElement | React.ReactElement[];
    titulo: string;
    method: string;
};

const bgUnpStyle = {
    backgroundColor: '#303d50',
};

const borderUnpStyle = {
    borderColor: '#365072',
};

const btnSendStyle = {
    color: '#f3f3f3',
    backgroundColor: '#38a729',
    borderColor: '#33a024',
    marginTop: '20px',
    marginBottom: '15px',
    width: '100px'
}

const handleEnviarClick = () => {
    alert('Estamos trabajando... paciencia :)')
};

const CardForm: React.FC<CardFormProps> = ({ children, method, titulo }) => {
    return (
        <Container className="py-5">
            <Row className="justify-content-center">
                <Col xl={10} md={11} xs={12}>

                    <Card style={borderUnpStyle} className="border-0 rounded-3 shadow">

                        <CardHeader style={bgUnpStyle} className="text-center text-light rounded-3 rounded-bottom-0 py-4">
                            <CardTitle className="px-xs-0 px-md-1 pd-lg-2">
                                <h4>{titulo}</h4>
                            </CardTitle>
                        </CardHeader>

                        <CardBody className="px-4">
                            <form method={method}>

                                {children}

                                <Row className="d-flex justify-content-end me-0">
                                    <Button style={btnSendStyle} onClick={handleEnviarClick}>
                                        Enviar
                                    </Button>
                                </Row>

                            </form>
                        </CardBody>

                    </Card>

                </Col>
            </Row>
        </Container>
    );
};

export default CardForm;