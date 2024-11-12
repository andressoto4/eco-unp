import React from "react";
import {
  Row,
  Button,
  Col,
  Container,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
} from "react-bootstrap";
import { FaPen } from "react-icons/fa6";

interface CardFormProps {
  children?: React.ReactElement | React.ReactElement[];
  titulo: string;
  method: string;
  changeMethod?: React.Dispatch<React.SetStateAction<string>>;
  canEdit?: boolean;
  hasBody?: boolean;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  validated: boolean;
}

const headerStyle = {
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: "#303d50",
  alignItems: "center",
};

const borderUnpStyle = {
  borderColor: "#365072",
};

const btnSendStyle = {
  color: "#f3f3f3",
  backgroundColor: "#38a729",
  borderColor: "#33a024",
  marginTop: "20px",
  marginBottom: "15px",
  width: "100px",
};

const divBtnEditStyle = {
  border: "1px solid",
  borderRadius: "50%",
  padding: "10px",
  cursor: "pointer",
};

const btnEditStyle = {
  fontSize: "1.5rem",
};

const handleEditClick = (
  method: string,
  changeMethod: React.Dispatch<React.SetStateAction<string>>
) => {
  if (changeMethod) {
    changeMethod(method == "GET" ? "PUT" : "GET");
  }
};

const CardForm: React.FC<CardFormProps> = ({
  children,
  method,
  changeMethod = () => {},
  titulo,
  canEdit = false,
  hasBody = true,
  onSubmit,
  validated,
}) => {
  return (
    <Container className="my-3">
      <Row className="justify-content-center">
        <Col xl={9} lg={11}>
          <Card
            style={borderUnpStyle}
            className="border-0 rounded-3 shadow my-3"
          >
            <CardHeader
              style={headerStyle}
              className="text-start text-light rounded-3 rounded-bottom-0"
            >
              <h5 className="my-3">{titulo}</h5>
              {canEdit && (
                <div
                  style={divBtnEditStyle}
                  onClick={() => handleEditClick(method, changeMethod)}
                >
                  <FaPen style={btnEditStyle} />
                </div>
              )}
            </CardHeader>

            {hasBody ? (
              <CardBody>
                <form
                  method={method}
                  onSubmit={onSubmit}
                  noValidate
                  className={validated ? "was-validated" : ""}
                >
                  {children}

                  {method !== "GET" && (
                    <Row className="d-flex justify-content-end me-0">
                      <Button style={btnSendStyle} type="submit">
                        Enviar
                      </Button>
                    </Row>
                  )}
                </form>
              </CardBody>
            ) : (
              <form
                method={method}
                onSubmit={onSubmit}
                noValidate
                className={validated ? "was-validated" : ""}
              >
                {children}

                <CardBody>
                  {method !== "GET" && (
                    <Row className="d-flex justify-content-end me-0">
                      <Button style={btnSendStyle} type="submit">
                        Enviar
                      </Button>
                    </Row>
                  )}
                </CardBody>
              </form>
            )}
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CardForm;
