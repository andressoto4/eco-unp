import React, { useState } from "react";
import { Row, Col, Container, CardBody } from "react-bootstrap";
import {
  FaAddressCard,
  FaLocationDot,
  FaMarsAndVenus,
  FaPen,
  FaPhone,
  FaUser,
} from "react-icons/fa6";
import { CardForm, Encabezado, SubtituloForm } from "../ui/index";
import NombrePersona from "./NombrePersona";
import Nuip from "./Nuip";
import SexoGeneroPersona from "./SexoGeneroPersona";
import ContactoPersona from "./ContactoPersona";
import UbicacionPersona from "./UbicacionPersona";

interface CardFormBasicosProps {
  method: string;
  canEdit: boolean;
  hasHeader?: boolean;
  dependencia?: string;
}

const cardBodyStyle = {
  backgroundColor: "#f7f7f7",
};

const CardFormBasicos: React.FC<CardFormBasicosProps> = ({
  method,
  canEdit = false,
  hasHeader = false,
  dependencia = "Ecosistema de Información",
}) => {
  const [methodBasicos, setMethodBasicos] = useState(method);

  return (
    <>
      {hasHeader ? (
        <Container className="my-3">
          <Row className="justify-content-center">
            <Col xl={9} lg={11}>
              <Encabezado dependencia={dependencia} />
            </Col>
          </Row>
        </Container>
      ) : (
        <></>
      )}

      <CardForm
        method={methodBasicos}
        changeMethod={setMethodBasicos}
        titulo="Datos básicos de la persona"
        canEdit={canEdit}
        hasBody={false}
      >
        <CardBody>
          <SubtituloForm subtitulo={"Nombre(s) y Apellido(s)"} icon={FaUser} />
          <NombrePersona method={methodBasicos} />
        </CardBody>
        <CardBody style={cardBodyStyle}>
          <SubtituloForm
            subtitulo={"Número único de identificación personal"}
            icon={FaAddressCard}
          />
          <Nuip method={methodBasicos} />
        </CardBody>
        <CardBody>
          <SubtituloForm
            subtitulo={"Género y orientación sexual"}
            icon={FaMarsAndVenus}
          />
          <SexoGeneroPersona method={methodBasicos} />
        </CardBody>
        <CardBody style={cardBodyStyle}>
          <SubtituloForm subtitulo={"Contacto"} icon={FaPhone} />
          <ContactoPersona method={methodBasicos} />
        </CardBody>
        <CardBody>
          <SubtituloForm subtitulo={"Ubicación"} icon={FaLocationDot} />
          <UbicacionPersona method={methodBasicos} />
        </CardBody>
      </CardForm>
    </>
  );
};

export default CardFormBasicos;
