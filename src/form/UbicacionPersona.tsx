import React, { useState, ChangeEvent, useEffect, RefObject } from "react";
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

import Pais from "./components/Pais";
import Departamento from "./components/Departamento";
import Municipio from "./components/Municipio";

import {
  useIdPais,
  useIdDepartamento,
  useIdMunicipio,
  useIdZona,
  useIdDireccionUrbana,
  useIdDireccionRural,
} from "./hooks/UbicacionHook";

interface ZonaData {
  id_zubicacion: number;
  nombre_zubicacion: string;
}

interface ZonaProps {
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
  zonaDomicilioRef?: React.RefObject<HTMLSelectElement>;
  method: string;
}

interface UbicacionProps {
  paisDomicilioRef?: React.RefObject<HTMLSelectElement>;
  departamentoDomicilioRef?: React.RefObject<HTMLSelectElement>;
  municipioDomicilioRef?: React.RefObject<HTMLSelectElement>;
  method: string;
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

interface UbicacionPersonaProps {
  method: string;
}

const subtituloStyle = {
  fontColor: "#303d50s",
  fontSize: "1.1rem",
  fontWeight: "800",
};

const iconStyle = {
  fontSize: "1.25rem",
};

const Ubicacion: React.FC<UbicacionProps> = ({ method }) => {
  const { idPais: pais, setIdPais: setPais } = useIdPais();
  const { idDepartamento: departamento, setIdDepartamento: setDepartamento } =
    useIdDepartamento();
  const { idMunicipio: municipio, setIdMunicipio: setMunicipio } =
    useIdMunicipio();

  const handlePaisChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setPais(event.target.value);
    setDepartamento("0");
  };

  const handleDepartamentoChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setDepartamento(event.target.value);
    setMunicipio("0");
  };

  const handleMunicipioGet = (event: ChangeEvent<HTMLSelectElement>) => {
    setMunicipio(event.target.value);
  };

  return (
    <React.Fragment>
      <Col lg={3} md={6} xs={12}>
        <Pais
          idPaisUbicacion={Number(pais)}
          onChange={handlePaisChange}
          method={method}
        />
      </Col>
      <Col lg={3} md={6} xs={12}>
        <Departamento
          idPais={Number(pais)}
          onChange={handleDepartamentoChange}
          method={method}
        />
      </Col>
      <Col lg={3} md={6} xs={12}>
        <Municipio
          idDepartamento={Number(departamento)}
          onChange={handleMunicipioGet}
          method={method}
        />
      </Col>
    </React.Fragment>
  );
};

const Zona: React.FC<ZonaProps> = ({ method }) => {
  const [zonas, setZonas] = useState<ZonaData[]>([]);
  const { idZona: zona, setIdZona: setZona } = useIdZona();

  useEffect(() => {
    const obtenerZonas = async () => {
      try {
        const response = await fetch(
          `https://ecosistemapruebas.unp.gov.co/api-eiunp/sistema/zona/`
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
    setZona(zona);
  }, [zona, setZona]);

  return (
    <React.Fragment>
      <Col lg={3} md={6} xs={12} className="mb-3">
        <FormLabel>
          Zona <span className="text-danger">*</span>
        </FormLabel>
        {method === "GET" ? (
          <FormControl type="text" disabled />
        ) : (
          <FormSelect
            value={zona}
            onChange={(e) => setZona(e.target.value)}
            required
          >
            <option value="0">Seleccione una zona</option>
            {zonas.map((zona) => (
              <option key={zona.id_zubicacion} value={zona.id_zubicacion}>
                {zona.nombre_zubicacion}
              </option>
            ))}
          </FormSelect>
        )}
      </Col>
    </React.Fragment>
  );
};

const DireccionUrbana: React.FC<DireccionUrbanaProps> = ({}) => {
  const {
    idNombreBarrio: nombreBarrio,
    idViaPrincipal: viaPrincipal,
    idNumeroViaPrincipal: numeroViaPrincipal,
    idLetraPrincipal: letraPrincipal,
    idEsBis: esBis,
    idCuadrantePrincipal: cuadrantePrincipal,
    idNumeroViaSecundaria: numeroViaSecundaria,
    idLetraSecundaria: letraSecundaria,
    idCuadranteSecundario: cuadranteSecundario,
    idNumeroPlaca: numeroPlaca,
    idComplemento: complemento,
    idIndicacionDireccionU: indicacionDireccionU,
    idResumenDireccionU: resumenDireccionU,
    setIdNombreBarrio: setNombreBarrio,
    setIdViaPrincipal: setViaPrincipal,
    setIdNumeroViaPrincipal: setNumeroViaPrincipal,
    setIdLetraPrincipal: setLetraPrincipal,
    setIdEsBis: setEsBis,
    setIdCuadrantePrincipal: setCuadrantePrincipal,
    setIdNumeroViaSecundaria: setNumeroViaSecundaria,
    setIdLetraSecundaria: setLetraSecundaria,
    setIdCuadranteSecundario: setCuadranteSecundario,
    setIdNumeroPlaca: setNumeroPlaca,
    setIdComplemento: setComplemento,
    setIdIndicacionDireccionU: setIndicacionDireccionU,
    setIdResumenDireccionU: setResumenDireccionU,
  } = useIdDireccionUrbana();

  const [resumenDireccion, setResumenDireccion] = useState<string>("");

  useEffect(() => {
    const fields = [
      viaPrincipal,
      numeroViaPrincipal + letraPrincipal,
      esBis ? "Bis" : "",
      cuadrantePrincipal,
      numeroViaSecundaria ? "# " + numeroViaSecundaria + letraSecundaria : "",
      cuadranteSecundario,
      numeroPlaca ? "- " + numeroPlaca : "",
      complemento,
    ];
    setResumenDireccion(fields.filter(Boolean).join(" ").trim());
  }, [
    viaPrincipal,
    numeroViaPrincipal,
    letraPrincipal,
    esBis,
    cuadrantePrincipal,
    numeroViaSecundaria,
    letraSecundaria,
    cuadranteSecundario,
    numeroPlaca,
    complemento,
  ]);

  return (
    <Row>
      <Col md={3} xs={12}>
        <FormGroup className="mb-3">
          <FormLabel>
            Vía principal <span className="text-danger">*</span>
          </FormLabel>
          <FormSelect
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
            type="text"
            value={numeroViaPrincipal}
            onChange={(e) => setNumeroViaPrincipal(e.target.value)}
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
          <FormControl
            type="text"
            value={letraPrincipal}
            onChange={(e) => setLetraPrincipal(e.target.value)}
            placeholder="Ej: A"
          />
        </FormGroup>
      </Col>

      <Col md={2} xs={12} className="align-self-end">
        <FormGroup className="mb-4">
          <FormCheck
            type="checkbox"
            label="¿Es bis?"
            checked={esBis}
            onChange={(e) => setEsBis(e.target.checked)}
          />
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
          <FormControl type="text" placeholder="Ej: 13" required />
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
            onChange={(e) => setLetraSecundaria(e.target.value)}
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
            type="text"
            value={numeroPlaca}
            onChange={(e) => setNumeroPlaca(e.target.value)}
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
            onChange={(e) => setComplemento(e.target.value)}
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
            type="text"
            value={nombreBarrio}
            onChange={(e) => setNombreBarrio(e.target.value)}
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
          <FormControl
            type="text"
            value={indicacionDireccionU}
            onChange={(e) => setIndicacionDireccionU(e.target.value)}
          />
        </FormGroup>
      </Col>
    </Row>
  );
};

const DireccionRural: React.FC<DireccionRuralProps> = ({}) => {
  const {
    idCorregimiento: corregimiento,
    idVereda: vereda,
    idCentroPoblado: centroPoblado,
    idIndicacionDireccionR: indicacionDireccionR,
    setIdCorregimiento: setCorregimiento,
    setIdVereda: setVereda,
    setIdCentroPoblado: setCentroPoblado,
    setIdIndicacionDireccionR: setIndicacionDireccionR,
  } = useIdDireccionRural();

  const [resumenDireccion, setResumenDireccion] = useState<string>("");

  useEffect(() => {
    const fields = [corregimiento, vereda, centroPoblado];
    setResumenDireccion(fields.filter(Boolean).join(" ").trim());
  }, [corregimiento, vereda, centroPoblado]);

  return (
    <Row>
      <Col md={4} xs={12}>
        <FormGroup className="mb-3">
          <FormLabel>
            Corregimiento <span className="text-danger"></span>
          </FormLabel>
          <FormControl
            type="text"
            value={corregimiento}
            onChange={(e) => setCorregimiento(e.target.value)}
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
            type="text"
            value={vereda}
            onChange={(e) => setVereda(e.target.value)}
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
            type="text"
            value={centroPoblado}
            onChange={(e) => setCentroPoblado(e.target.value)}
            maxLength={100}
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
          <FormControl
            type="text"
            value={indicacionDireccionR}
            onChange={(e) => setIndicacionDireccionR(e.target.value)}
          />
        </FormGroup>
      </Col>
    </Row>
  );
};

const UbicacionPersona: React.FC<UbicacionPersonaProps> = ({ method }) => {
  const { idZona: zona, setIdZona: setZona } = useIdZona();

  return (
    <Row>
      <Ubicacion method={method} />
      <Zona method={method} />

      {method === "GET" ? (
        <>
          <Col lg={5} xs={12}>
            <FormGroup className="mb-3">
              <FormLabel>Dirección / Ubicación</FormLabel>
              <FormControl
                type="text"
                disabled={method === "GET" ? true : false}
              />
            </FormGroup>
          </Col>
          <Col lg={7} xs={12}>
            <FormGroup className="mb-3">
              <FormLabel>Indicaciones</FormLabel>
              <FormControl
                type="text"
                disabled={method === "GET" ? true : false}
              />
            </FormGroup>
          </Col>
        </>
      ) : (
        <>
          <Collapse in={zona === "1" || zona === "2"}>
            <Container className="pb-0 mb-0 bg-section ">
              <Card className="border-light-subtle rounded-3 my-3">
                <CardBody>
                  <Row className="mb-1 mt-1">
                    <Col className="col-auto pe-1">
                      <FaTreeCity style={iconStyle} />
                    </Col>
                    <Col className="ps-1 col-auto align-self-center">
                      <p style={subtituloStyle}>Dirección</p>
                    </Col>
                  </Row>
                  {zona === "1" ? <DireccionUrbana /> : <DireccionRural />}
                </CardBody>
              </Card>
            </Container>
          </Collapse>

          {/* <Collapse in={zona === "2"}>
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
          </Collapse> */}
        </>
      )}
    </Row>
  );
};

export default UbicacionPersona;
