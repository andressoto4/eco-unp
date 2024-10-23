import React from "react";
import { Row, Button, Col, Container, Card, CardHeader, CardTitle, CardBody } from 'react-bootstrap';
import { FaPen } from "react-icons/fa6";

interface CardFormProps {
    children?: React.ReactElement | React.ReactElement[];
    titulo: string;
    method: string;
    canEdit?: boolean;
};

const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#303d50',
    alignItems: 'center'
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

const btnEditStyle = {
  fontSize: '1.5rem',
  cursor: 'pointer'
}

const handleEnviarClick = () => {
    alert('Estamos trabajando... paciencia :)')
};

const CardForm: React.FC<CardFormProps> = ({ children, method, titulo, canEdit = false }) => {
    return (
        <Container>

            <Row className="justify-content-center">

                <Col>

                    <Card style={borderUnpStyle} className="border-0 rounded-3 shadow my-3">

                        <CardHeader style={headerStyle} className="text-center text-light rounded-3 rounded-bottom-0">
                            <h5 className="my-3">{titulo}</h5>
                            {canEdit && 
                            <div style={{ border: '1px solid', borderRadius: '50%', padding: '10px' }}>
                                <FaPen style={btnEditStyle} />
                            </div>}
                        </CardHeader>

                        <CardBody className="px-4">
                            <form method={method}>

                                {children}

                                {method !== 'GET' &&
                                    <Row className="d-flex justify-content-end me-0">
                                        <Button style={btnSendStyle} onClick={handleEnviarClick}>
                                            Enviar
                                        </Button>
                                    </Row>
                                }

                            </form>
                        </CardBody>

                    </Card>

                </Col>

            </Row>

        </Container>
    );
};

export default CardForm;