import React from "react";

import { Col, Row } from 'react-bootstrap';
import { IconType } from "react-icons";

interface SubtituloFormProps {
    titulo: String;
    icon: IconType
};

const subtituloStyle = {
    fontColor: '#303d50s',
    fontSize: '1.1rem',
    fontWeight: '800',
}

const iconStyle = {
    fontSize: '1.25rem'
}

const SubtituloForm: React.FC<SubtituloFormProps> = ({titulo, icon: Icon }) => {

    return(
        <Row className='mb-1 mt-3'>
            <Col className="col-auto pe-1">
                <Icon style={iconStyle} />
            </Col>
            <Col className="ps-1 col-auto align-self-center">
                <p style={subtituloStyle}>{titulo}</p>
            </Col>
        </Row>
    );

};

export default SubtituloForm;