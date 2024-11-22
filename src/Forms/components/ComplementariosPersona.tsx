import React, { useState, useEffect } from "react";
import {
  Col,
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
import {
  useIdEstadoCivil,
  useIdFondoPension,
  useIdEps,
  useIdRh,
  useIdTipoVinculacion,
} from "../hooks/ComplementariosHook";
import Contratista from "./Contratista";
import Funcionario from "./Funcionario";

interface EstadosCivilesData {
  id_ecivil: number;
  nombre_ecivil: string;
}
interface FondoPensionesData {
  id_fpensiones: number;
  nombre_fpensiones: string;
}
interface EpssData {
  id_eps: number;
  nombre_eps: string;
}
interface RhsData {
  id_grh: number;
  nombre_grh: string;
}
interface TVinculacionesData {
  id_tvinculacion: number;
  nombre_tvinculacion: string;
}

interface ComplementariosPersonaProps {
  method: string;
}

const ComplementariosPersona: React.FC<ComplementariosPersonaProps> = ({
  method,
}) => {
  const [estadosCiviles, setEstadosCiviles] = useState<EstadosCivilesData[]>(
    []
  );
  const [fondoPensiones, setFondoPensiones] = useState<FondoPensionesData[]>(
    []
  );
  const [epss, setEpss] = useState<EpssData[]>([]);
  const [rhs, setRhs] = useState<RhsData[]>([]);
  const [tVinculaciones, setTVinculaciones] = useState<TVinculacionesData[]>(
    []
  );

  useEffect(() => {
    const obtenerEstadosCiviles = async () => {
      try {
        const response = await fetch(
          `https://ecosistemapruebas.unp.gov.co/api-eiunp/sistema/tipoestadocivil/`
        );
        if (response.ok) {
          const data: EstadosCivilesData[] = await response.json();
          setEstadosCiviles(data);
        }
      } catch (error) {
        console.error(
          "Hubo un error al obtener los datos de los estados civiles:",
          error
        );
      }
    };

    const obtenerFondoPensiones = async () => {
      try {
        const response = await fetch(
          `https://ecosistemapruebas.unp.gov.co/api-eiunp/sistema/tipofondopensiones/`
        );
        if (response.ok) {
          const data: FondoPensionesData[] = await response.json();
          setFondoPensiones(data);
        }
      } catch (error) {
        console.error(
          "Hubo un error al obtener los datos de los fondos de pensiones:",
          error
        );
      }
    };

    const obtenerEpss = async () => {
      try {
        const response = await fetch(
          `https://ecosistemapruebas.unp.gov.co/api-eiunp/sistema/tipoeps/`
        );
        if (response.ok) {
          const data: EpssData[] = await response.json();
          setEpss(data);
        }
      } catch (error) {
        console.error("Hubo un error al obtener los datos de las eps:", error);
      }
    };

    const obtenerRhs = async () => {
      try {
        const response = await fetch(
          `https://ecosistemapruebas.unp.gov.co/api-eiunp/sistema/tipogprh/`
        );
        if (response.ok) {
          const data: RhsData[] = await response.json();
          setRhs(data);
        }
      } catch (error) {
        console.error("Hubo un error al obtener los datos de los Rhs:", error);
      }
    };

    const obtenerTVinculaciones = async () => {
      try {
        const response = await fetch(
          `https://ecosistemapruebas.unp.gov.co/api-eiunp/usuario/tipovinculacion/`
        );
        if (response.ok) {
          const data: TVinculacionesData[] = await response.json();
          setTVinculaciones(data);
        }
      } catch (error) {
        console.error(
          "Hubo un error al obtener los datos de los tipos de vinculaciones:",
          error
        );
      }
    };

    obtenerEstadosCiviles();
    obtenerFondoPensiones();
    obtenerEpss();
    obtenerRhs();
    obtenerTVinculaciones();
  }, []);

  // Importar los valores y las funciones de actualización de cada contexto
  const { idEstadoCivil: estadoCivil = "0", setIdEstadoCivil: setEstadoCivil } =
    useIdEstadoCivil();
  const {
    idFondoPension: fondoPension = "0",
    setIdFondoPension: setFondoPension,
  } = useIdFondoPension();
  const { idEps: eps = "0", setIdEps: setEps } = useIdEps();
  const { idRh: rh = "0", setIdRh: setRh } = useIdRh();
  const {
    idTipoVinculacion: tipoVinculacion = "0",
    setIdTipoVinculacion: setTipoVinculacion,
  } = useIdTipoVinculacion();

  return (
    <React.Fragment>
      <Row>
        {/* Input de Estado civil */}
        <Col lg={3} md={6} xs={12}>
          <FormGroup className="mb-3">
            <FormLabel>
              Estado civil <span className="text-danger">*</span>
            </FormLabel>
            {method === "GET" ? (
              <FormControl type="text" disabled />
            ) : (
              <FormSelect
                value={estadoCivil}
                onChange={(e) => setEstadoCivil(e.target.value)}
                disabled={method === "GET" ? true : false}
                required
              >
                <option value="0" disabled>
                  Seleccione...
                </option>
                {estadosCiviles.map((estadoCivil: any) => (
                  <option
                    key={estadoCivil.id_ecivil}
                    value={estadoCivil.id_ecivil}
                  >
                    {estadoCivil.nombre_ecivil}
                  </option>
                ))}
              </FormSelect>
            )}
          </FormGroup>
        </Col>

        {/* Input de Fondo pensiones */}
        <Col lg={3} md={6} xs={12}>
          <FormGroup className="mb-3">
            <FormLabel>
              Fondo de pensiones <span className="text-danger">*</span>
            </FormLabel>
            {method === "GET" ? (
              <FormControl type="text" disabled />
            ) : (
              <FormSelect
                value={fondoPension}
                onChange={(e) => setFondoPension(e.target.value)}
                disabled={method === "GET" ? true : false}
                required
              >
                <option value="0" disabled>
                  Seleccione...
                </option>
                {fondoPensiones.map((fondoPension: any) => (
                  <option
                    key={fondoPension.id_fpensiones}
                    value={fondoPension.id_fpensiones}
                  >
                    {fondoPension.nombre_fpensiones}
                  </option>
                ))}
              </FormSelect>
            )}
          </FormGroup>
        </Col>

        {/* Input de Eps */}
        <Col lg={3} md={6} xs={12}>
          <FormGroup className="mb-3">
            <FormLabel>
              Eps <span className="text-danger">*</span>
            </FormLabel>
            {method === "GET" ? (
              <FormControl type="text" disabled />
            ) : (
              <FormSelect
                value={eps}
                onChange={(e) => setEps(e.target.value)}
                disabled={method === "GET" ? true : false}
                required
              >
                <option value="0" disabled>
                  Seleccione...
                </option>
                {epss.map((eps: any) => (
                  <option key={eps.id_eps} value={eps.id_eps}>
                    {eps.nombre_eps}
                  </option>
                ))}
              </FormSelect>
            )}
          </FormGroup>
        </Col>

        {/* Input de Rh */}
        <Col lg={3} md={6} xs={12}>
          <FormGroup className="mb-3">
            <FormLabel>
              Rh <span className="text-danger">*</span>
            </FormLabel>
            {method === "GET" ? (
              <FormControl type="text" disabled />
            ) : (
              <FormSelect
                value={rh}
                onChange={(e) => setRh(e.target.value)}
                disabled={method === "GET" ? true : false}
                required
              >
                <option value="0" disabled>
                  Seleccione...
                </option>
                {rhs.map((rh: any) => (
                  <option key={rh.id_grh} value={rh.id_grh}>
                    {rh.nombre_grh}
                  </option>
                ))}
              </FormSelect>
            )}
          </FormGroup>
        </Col>

        {/* Input de Tipo vinculacion */}
        <Col lg={12} md={12} xs={12}>
          <FormGroup className="mb-3">
            <FormLabel>
              Tipo de vinculación <span className="text-danger">*</span>
            </FormLabel>
            {method === "GET" ? (
              <FormControl type="text" disabled />
            ) : (
              <FormSelect
                value={tipoVinculacion}
                onChange={(e) => setTipoVinculacion(e.target.value)}
                disabled={method === "GET" ? true : false}
                required
              >
                <option value="0" disabled>
                  Seleccione...
                </option>
                {tVinculaciones.map((tVinculacion: any) => (
                  <option
                    key={tVinculacion.id_tvinculacion}
                    value={tVinculacion.id_tvinculacion}
                  >
                    {tVinculacion.nombre_tvinculacion}
                  </option>
                ))}
              </FormSelect>
            )}
          </FormGroup>

          <Collapse in={tipoVinculacion === "1" || tipoVinculacion === "2"}>
            <Container className="pb-0 mb-0 bg-section ">
              <Card className="border-light-subtle rounded-3 my-3">
                <CardBody>
                  {tipoVinculacion === "1" ? <Contratista /> : <Funcionario />}
                </CardBody>
              </Card>
            </Container>
          </Collapse>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default ComplementariosPersona;
