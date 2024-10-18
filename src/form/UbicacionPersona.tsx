import React, {
  useState,
  useContext,
  ChangeEvent,
  useEffect,
  RefObject,
} from "react";

import Pais from "./components/Pais";
import Departamento from "./components/Departamento";
import Municipio from "./components/Municipio";
import {
  IdPaisUbicacionContext,
  IdDepartamentoUbicacionContext,
  IdMunicipioUbicacionContext,
  IdZonaUbicacionContext,
} from "./contexts/UbicacionContext";
import {
  Col,
  FormCheck,
  FormControl,
  FormGroup,
  FormLabel,
  FormSelect,
  Row,
  Collapse,
  Container,
  Card,
  CardBody,
} from "react-bootstrap";
import { FaTree, FaTreeCity } from "react-icons/fa6";

interface ZonaData {
  id_zubicacion: number;
  nombre_zubicacion: string;
}

interface ZonaProps {
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
  zonaDomicilioRef?: React.RefObject<HTMLSelectElement>;
}

interface UbicacionProps {
  paisDomicilioRef?: React.RefObject<HTMLSelectElement>;
  departamentoDomicilioRef?: React.RefObject<HTMLSelectElement>;
  municipioDomicilioRef?: React.RefObject<HTMLSelectElement>;
}

interface DireccionUrbanaProps {
  contentType?: string;
  viaPrincipalRef?: RefObject<HTMLSelectElement>;
  numeroViaPrincipalRef?: RefObject<HTMLInputElement>;
  numeroViaSecundariaRef?: RefObject<HTMLInputElement>;
  numeroPlacaRef?: RefObject<HTMLInputElement>;
  nombreBarrioRef?: RefObject<HTMLInputElement>;
}

interface DireccionRuralProps {
  contentType?: string;
  corregimientoRef?: RefObject<HTMLInputElement>;
  veredaRef?: RefObject<HTMLInputElement>;
  centroPobladoRef?: RefObject<HTMLInputElement>;
}

const subtituloStyle = {
  fontColor: "#303d50s",
  fontSize: "1.1rem",
  fontWeight: "800",
};

const iconStyle = {
  fontSize: "1.25rem",
};

const Ubicacion: React.FC<UbicacionProps> = ({
  paisDomicilioRef,
  departamentoDomicilioRef,
  municipioDomicilioRef,
}) => {
  const [idPaisUbicacion, setIdPaisUbicacion] = useState<string>("0");
  const [idDepartamentoUbicacion, setIdDepartamentoUbicacion] =
    useState<string>("0");

  const { setID: setIDPaisUbicacion } = useContext(IdPaisUbicacionContext);
  const { setID: setIDDepartamentoUbicacion } = useContext(
    IdDepartamentoUbicacionContext
  );
  const { setID: setIDMunicipioUbicacion } = useContext(
    IdMunicipioUbicacionContext
  );
  const { setID: setIdZonaUbicacion } = useContext(IdZonaUbicacionContext);

  const handlePaisChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setIdPaisUbicacion(event.target.value);
    setIDPaisUbicacion(event.target.value);
    setIdDepartamentoUbicacion("0");
  };

  const handleDepartamentoChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setIdDepartamentoUbicacion(event.target.value);
    setIDDepartamentoUbicacion(event.target.value);
    setIDMunicipioUbicacion("0");
  };

  const handleMunicipioGet = (event: ChangeEvent<HTMLSelectElement>) => {
    setIDMunicipioUbicacion(event.target.value);
  };

  return (
    <React.Fragment>
      <Col lg={3} md={6} xs={12}>
        <Pais
          paisRef={paisDomicilioRef}
          idPaisUbicacion={Number(idPaisUbicacion)}
          onChange={handlePaisChange}
        />
      </Col>
      <Col lg={3} md={6} xs={12}>
        <Departamento
          departamentoRef={departamentoDomicilioRef}
          idPais={Number(idPaisUbicacion)}
          onChange={handleDepartamentoChange}
        />
      </Col>
      <Col lg={3} md={6} xs={12}>
        <Municipio
          municipioRef={municipioDomicilioRef}
          idDepartamento={Number(idDepartamentoUbicacion)}
          onChange={handleMunicipioGet}
        />
      </Col>
    </React.Fragment>
  );
};

const Zona: React.FC<ZonaProps> = ({ onChange, zonaDomicilioRef }) => {
  const [zonas, setZonas] = useState<ZonaData[]>([]);
  const [zonaSeleccionada, setZonaSeleccionada] = useState<string>("0");
  const { setID: setIdZonaUbicacion } = useContext(IdZonaUbicacionContext);

  useEffect(() => {
    const obtenerZonas = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_ENDPOINT}/zona/`
        );
        if (response.ok) {
          const data: ZonaData[] = await response.json();
          setZonas(data);
        } else {
          console.error(
            "Hubo un error al obtener los datos de las zonas:",
            response.status
          );
        }
      } catch (error) {
        console.error(
          "Hubo un error al obtener los datos de las zonas:",
          error
        );
      }
    };
    obtenerZonas();
  }, []);

  useEffect(() => {
    setIdZonaUbicacion(zonaSeleccionada);
  }, [zonaSeleccionada, setIdZonaUbicacion]);

  const handleZonaChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setZonaSeleccionada(event.target.value);
    if (onChange) {
      onChange(event);
    }
  };

  return (
    <React.Fragment>
      <Col md={3} xs={12} className="mb-3">
        <FormLabel>
          Zona <span className="text-danger">*</span>
        </FormLabel>
        <FormSelect
          ref={zonaDomicilioRef}
          value={zonaSeleccionada}
          onChange={handleZonaChange}
          required
        >
          <option value="0">Seleccione una zona</option>
          {zonas.map((zona) => (
            <option key={zona.id_zubicacion} value={zona.id_zubicacion}>
              {zona.nombre_zubicacion}
            </option>
          ))}
        </FormSelect>
      </Col>
    </React.Fragment>
  );
};

const DireccionUrbana: React.FC<DireccionUrbanaProps> = ({
  contentType,
  viaPrincipalRef,
  numeroViaPrincipalRef,
  numeroViaSecundariaRef,
  numeroPlacaRef,
  nombreBarrioRef,
}) => {
  const [contentTypeId, setContentTypeId] = useState<string | null>(null);
  const [nombreBarrio, setNombreBarrio] = useState<string>("");
  const [viaPrincipal, setViaPrincipal] = useState<string>("");
  const [numeroViaPrincipal, setNumeroViaPrincipal] = useState<string>("");
  const [letraPrincipal, setLetraPrincipal] = useState<string>("");
  const [esBis, setEsBis] = useState<string>("");
  const [cuadrantePrincipal, setCuadrantePrincipal] = useState<string>("");
  const [numeroViaSecundaria, setNumeroViaSecundaria] = useState<string>("");
  const [letraSecundaria, setLetraSecundaria] = useState<string>("");
  const [cuadranteSecundario, setCuadranteSecundario] = useState<string>("");
  const [numeroPlaca, setNumeroPlaca] = useState<string>("");
  const [complemento, setComplemento] = useState<string>("");
  const [resumenDireccion, setResumenDireccion] = useState<string>("");
  const [indicacionDireccion, setIndicacionDireccion] = useState<string>("");
  const [isFirstRender, setIsFirstRender] = useState<boolean>(true);

  return (
    <Row>
      <Col md={3} xs={12}>
        <FormGroup className="mb-3">
          <FormLabel>
            Vía principal <span className="text-danger">*</span>
          </FormLabel>
          <FormSelect
            ref={viaPrincipalRef}
            value={viaPrincipal}
            onChange={(e) => setViaPrincipal(e.target.value)}
            required
          >
            <option value="">Seleccione una vía</option>
            <option value="CL">Calle</option>
            <option value="CR">Carrera</option>
            <option value="AU">Autopista</option>
            <option value="AV">Avenida</option>
            <option value="AC">Avenida calle</option>
            <option value="AK">Avenida carrera</option>
            <option value="BL">Bulevar</option>
            <option value="CT">Carretera</option>
            <option value="CQ">Circular</option>
            <option value="CV">Circunvalar</option>
            <option value="CC">Cuentas corridas</option>
            <option value="DG">Diagonal</option>
            <option value="PJ">Pasaje</option>
            <option value="PS">Paseo</option>
            <option value="PT">Peatonal</option>
            <option value="TV">Transversal</option>
            <option value="TC">Troncal</option>
            <option value="VT">Variante</option>
            <option value="VI">Vía</option>
          </FormSelect>
        </FormGroup>
      </Col>

      <Col md={2} xs={12}>
        <FormGroup className="mb-3">
          <FormLabel>
            Número vía <span className="text-danger">*</span>
          </FormLabel>
          <FormControl
            ref={numeroViaPrincipalRef}
            type="text"
            value={numeroViaPrincipal}
            placeholder="Ej: 23"
            required
          />
        </FormGroup>
      </Col>

      <Col md={2} xs={12}>
        <FormGroup className="mb-3">
          <FormLabel>
            Letra <span className="text-danger"></span>
          </FormLabel>
          <FormControl type="text" value={letraPrincipal} placeholder="Ej: A" />
        </FormGroup>
      </Col>

      <Col md={2} xs={12} className="align-self-end">
        <FormGroup className="mb-4">
          <FormCheck type="checkbox" label="¿Es bis?" />
        </FormGroup>
      </Col>

      <Col md={3} xs={12}>
        <FormGroup className="mb-3">
          <FormLabel>
            Cardinalidad <span className="text-danger"></span>
          </FormLabel>
          <FormSelect
            value={cuadrantePrincipal}
            onChange={(e) => setCuadrantePrincipal(e.target.value)}
          >
            <option value="">Seleccione la cardinalidad</option>
            <option value="Norte">Norte</option>
            <option value="Sur">Sur</option>
            <option value="Este">Este</option>
            <option value="Oeste">Oeste</option>
          </FormSelect>
        </FormGroup>
      </Col>

      <Col xs={12} className="col-md-auto text-center align-self-center">
        <div className="mt-3 p-1">
          <b>#</b>
        </div>
      </Col>

      <Col md={2} xs={12}>
        <FormGroup className="mb-3">
          <FormLabel>
            Número uno <span className="text-danger">*</span>
          </FormLabel>
          <FormControl
            ref={numeroViaSecundariaRef}
            type="text"
            placeholder="Ej: 13"
            required
          />
        </FormGroup>
      </Col>

      <Col md={2} xs={12}>
        <FormGroup className="mb-3">
          <FormLabel>
            Letra <span className="text-danger"></span>
          </FormLabel>
          <FormControl
            type="text"
            value={letraSecundaria}
            placeholder="Ej: C"
          />
        </FormGroup>
      </Col>

      <Col md={2} xs={12}>
        <FormGroup className="mb-3">
          <FormLabel>
            Cardinalidad <span className="text-danger"></span>
          </FormLabel>
          <FormSelect
            value={cuadranteSecundario}
            onChange={(e) => setCuadranteSecundario(e.target.value)}
          >
            <option value="">Seleccione la cardinalidad</option>
            <option value="Norte">Norte</option>
            <option value="Sur">Sur</option>
            <option value="Este">Este</option>
            <option value="Oeste">Oeste</option>
          </FormSelect>
        </FormGroup>
      </Col>

      <Col xs={12} className="col-md-auto text-center align-self-center">
        <div className="mt-3 p-1">
          <b>-</b>
        </div>
      </Col>

      <Col md={2} xs={12}>
        <FormGroup className="mb-3">
          <FormLabel>
            Número dos <span className="text-danger">*</span>
          </FormLabel>
          <FormControl
            ref={numeroPlacaRef}
            type="text"
            value={numeroPlaca}
            placeholder="Ej: 25"
            required
          />
        </FormGroup>
      </Col>

      <Col md={3} xs={12} style={{ paddingRight: "7px" }}>
        <FormGroup className="mb-3">
          <FormLabel>
            Complemento <span className="text-danger"></span>
          </FormLabel>
          <FormControl
            type="text"
            value={complemento}
            placeholder="Ej: Casa 3"
          />
        </FormGroup>
      </Col>

      <Col md={4} xs={12}>
        <FormGroup className="mb-3">
          <FormLabel>
            Barrio / Sector <span className="text-danger">*</span>
          </FormLabel>
          <FormControl
            ref={nombreBarrioRef}
            type="text"
            value={nombreBarrio}
            required
          />
        </FormGroup>
      </Col>

      <Col md={8} xs={12}>
        <FormGroup className="mb-2">
          <FormLabel>
            Resumen de dirección <span className="text-danger">**</span>
          </FormLabel>
          <FormControl
            type="text"
            className="bg-body-secondary"
            value={resumenDireccion}
            disabled
          />
        </FormGroup>
      </Col>

      <Col md={12} xs={12}>
        <FormGroup className="mb-2">
          <FormLabel>Indicaciones del lugar de domicilio</FormLabel>
          <FormControl type="text" value={indicacionDireccion} />
        </FormGroup>
      </Col>
    </Row>
  );
};

const DireccionRural: React.FC<DireccionRuralProps> = ({
  contentType,
  corregimientoRef,
  veredaRef,
  centroPobladoRef,
}) => {
  const [contentTypeId, setContentTypeId] = useState<string | null>(null);
  const [corregimiento, setCorregimiento] = useState<string>("");
  const [vereda, setVereda] = useState<string>("");
  const [centroPoblado, setCentroPoblado] = useState<string>("");
  const [resumenDireccion, setResumenDireccion] = useState<string>("");
  const [indicacionDireccion, setIndicacionDireccion] = useState<string>("");

  const handleTextChange = (
    event: ChangeEvent<HTMLInputElement>,
    setter: React.Dispatch<React.SetStateAction<string>>
  ) => {
    setter(event.target.value);
  };

  const handleAreaChange = (
    event: ChangeEvent<HTMLInputElement>,
    setter: React.Dispatch<React.SetStateAction<string>>
  ) => {
    setter(event.target.value);
  };

  return (
    <Row>
      <Col md={4} xs={12}>
        <FormGroup className="mb-3">
          <FormLabel>
            Corregimiento <span className="text-danger"></span>
          </FormLabel>
          <FormControl
            ref={corregimientoRef}
            type="text"
            value={corregimiento}
            maxLength={100}
          />
        </FormGroup>
      </Col>

      <Col md={4} xs={12}>
        <FormGroup className="mb-3">
          <FormLabel>
            Vereda <span className="text-danger">*</span>
          </FormLabel>
          <FormControl
            ref={veredaRef}
            type="text"
            value={vereda}
            maxLength={100}
            required
          />
        </FormGroup>
      </Col>

      <Col md={4} xs={12}>
        <FormGroup className="mb-3">
          <FormLabel>
            Centro poblado <span className="text-danger"></span>
          </FormLabel>
          <FormControl
            ref={centroPobladoRef}
            type="text"
            value={centroPoblado}
            maxLength={100}
          />
        </FormGroup>
      </Col>

      <Col md={12} xs={12}>
        <FormGroup className="mb-2">
          <FormLabel>Indicaciones del lugar de domicilio</FormLabel>
          <FormControl type="text" value={indicacionDireccion} />
        </FormGroup>
      </Col>
    </Row>
  );
};

const UbicacionPersona = () => {
  const [zona, setZona] = useState("");

  const handleZonaChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setZona(e.target.value);
  };

  return (
    <Row>
      <Ubicacion />
      <Zona onChange={handleZonaChange} />

      <Collapse in={zona === "1"}>
        <Container className="pb-0 mb-0 bg-section">
          <Card className="border-light-subtle rounded-3">
            <CardBody>
              <Row className="mb-1 mt-1">
                <Col className="col-auto pe-1">
                  <FaTreeCity style={iconStyle} />
                </Col>
                <Col className="ps-1 col-auto align-self-center">
                  <p style={subtituloStyle}>Dirección urbana</p>
                </Col>
              </Row>
              <DireccionUrbana />
            </CardBody>
          </Card>
        </Container>
      </Collapse>

      <Collapse in={zona === "2"}>
        <Container className="pb-0 mb-0 bg-section">
          <Card className="border-light-subtle rounded-3">
            <CardBody>
              <Row className="mb-1 mt-1">
                <Col className="col-auto pe-1">
                  <FaTree style={iconStyle} />
                </Col>
                <Col className="ps-1 col-auto align-self-center">
                  <p style={subtituloStyle}>Dirección Rural</p>
                </Col>
              </Row>
              <DireccionRural />
            </CardBody>
          </Card>
        </Container>
      </Collapse>
    </Row>
  );
};

export default UbicacionPersona;
