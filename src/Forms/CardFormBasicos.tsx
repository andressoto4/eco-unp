import React, { useState } from "react";
import { Row, Col, Container, CardBody, Form } from "react-bootstrap";
import { toast } from "react-toastify";
import {
  FaAddressCard,
  FaLocationDot,
  FaMarsAndVenus,
  FaPen,
  FaPhone,
  FaUser,
  FaPuzzlePiece,
} from "react-icons/fa6";
import { CardForm, Encabezado, SubtituloForm } from "../Ui/index";
import NombrePersona from "./components/NombrePersona";
import Nuip from "./components/Nuip";
import SexoGeneroPersona from "./components/SexoGeneroPersona";
import ContactoPersona from "./components/ContactoPersona";
import UbicacionPersona from "./components/UbicacionPersona";
import ComplementariosPersona from "./components/ComplementariosPersona";

import {
  useIdPrimerNombre,
  useIdSegundoNombre,
  useIdPrimerApellido,
  useIdSegundoApellido,
} from "./hooks/NombreHook";

import {
  useIdCelularUno,
  useIdCelularDos,
  useIdTelefono,
  useIdCorreo,
} from "./hooks/ContactoHook";

import {
  useIdTipoIdentificaicon,
  useIdNumeroIdentificacion,
  useIdFechaExpedicion,
} from "./hooks/NuipHook";

import {
  useIdSexo,
  useIdGenero,
  useIdOrientacionSexual,
} from "./hooks/SexoGeneroHook";

import {
  useIdPais,
  useIdDepartamento,
  useIdMunicipio,
  useIdZona,
  useIdDireccionUrbana,
  useIdDireccionRural,
} from "./hooks/UbicacionHook";

import {
  useIdEstadoCivil,
  useIdFondoPension,
  useIdEps,
  useIdRh,
  useIdTipoVinculacion,
  useIdContratista,
  useIdFuncionario,
} from "./hooks/ComplementariosHook";

import { BasicosService } from "./services/BasicosService";
import { NombreProvider } from "./contexts/NombreContext";
import { NuipProvider } from "./contexts/NuipContext";
import { SexoGeneroProvider } from "./contexts/SexoGeneroContext";
import { ContactoProvider } from "./contexts/ContactoContext";
import { UbicacionProvider } from "./contexts/UbicacionContext";
import { ComplementariosProvider } from "./contexts/ComplementariosContext";

interface CardFormBasicosProps {
  method: string;
  canEdit: boolean;
  hasHeader?: boolean;
  dependencia?: string;
}

const cardBodyStyle = {
  backgroundColor: "#f7f7f7",
};

const Formulario: React.FC<CardFormBasicosProps> = ({
  method,
  canEdit = false,
  hasHeader = false,
  dependencia = "Ecosistema de Información",
}) => {
  const [methodBasicos, setMethodBasicos] = useState(method);

  // Obtener los valores del contexto de Contacto
  const { idCelularUno: celularUno } = useIdCelularUno();
  const { idCelularDos: celularDos } = useIdCelularDos();
  const { idTelefono: telefono } = useIdTelefono();
  const { idCorreo: correo } = useIdCorreo();

  // Obtener los valores del contexto de Ubicacion
  const { idPais: paisUbicacion } = useIdPais();
  const { idDepartamento: departamentoUbicacion } = useIdDepartamento();
  const { idMunicipio: municipioUbicacion } = useIdMunicipio();
  const { idZona: zonaUbicacion } = useIdZona();
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
  } = useIdDireccionUrbana();
  const {
    idCorregimiento: corregimiento,
    idVereda: vereda,
    idCentroPoblado: centroPoblado,
    idIndicacionDireccionR: indicacionDireccionR,
  } = useIdDireccionRural();

  // Obtener los valores del contexto de Nuip
  const { idTipoIdentificacion: tipoIdentificacion } =
    useIdTipoIdentificaicon();
  const { idNumeroIdentificacion: numeroIdentificacion } =
    useIdNumeroIdentificacion();
  const { idFechaExpedicion: fechaExpedicion } = useIdFechaExpedicion();

  // Obtener los valores del contexto de NombrePersona
  const { idPrimerNombre: primerNombre } = useIdPrimerNombre();
  const { idSegundoNombre: segundoNombre } = useIdSegundoNombre();
  const { idPrimerApellido: primerApellido } = useIdPrimerApellido();
  const { idSegundoApellido: segundoApellido } = useIdSegundoApellido();

  // Obtener los valores del contexto de SexoGenero
  const { idSexo: sexo } = useIdSexo();
  const { idGenero: genero } = useIdGenero();
  const { idOrientacionSexual: orientacionSexual } = useIdOrientacionSexual();

  // Obtener los valores del contexto de Complementarios
  const { idEstadoCivil: estadoCivil } = useIdEstadoCivil();
  const { idFondoPension: fondoPension } = useIdFondoPension();
  const { idEps: eps } = useIdEps();
  const { idRh: rh } = useIdRh();
  const { idTipoVinculacion: tipoVinculacion } = useIdTipoVinculacion();
  const {
    idNumeroContrato: numeroContrato,
    idFechaInicioContrato: fechaInicioContrato,
    idFechaFinContrato: fechaFinContrato,
  } = useIdContratista();
  const { idNumeroResolucion: numeroResolucion } = useIdFuncionario();

  // Obtener valor del checkbox tratamiento de datos
  const [idTratamiento, setIdTratamiento] = useState<boolean>(false);

  const [validated, setValidated] = useState<boolean>(false);

  // Función para manejar el envío de formulario
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (!form.checkValidity()) {
      e.stopPropagation();
      setValidated(false);
      toast.error("Por favor, rellene los campos.", {
        position: "top-right",
        className: "foo-bar",
        hideProgressBar: true,
      });
      return;
    }

    setValidated(true);

    try {
      await toast.promise(
        (async () => {
          // Construir el objeto con todos los datos necesarios
          const datos = {
            // Primer grupo de datos
            celular_uno: celularUno,
            celular_dos: celularDos,
            celular_emergencia: telefono,
            correo_electronico: correo,

            // Datos de contacto dependientes
            id_ctelefono: undefined, // este será completado en el backend
            id_ccelectronico: undefined, // este será completado en el backend

            // Segundo grupo de datos (ubicación)
            pais: paisUbicacion,
            departamento: departamentoUbicacion,
            municipio: municipioUbicacion,
            zona: zonaUbicacion,
            indicacion:
              zonaUbicacion === "1"
                ? indicacionDireccionR
                : indicacionDireccionU,

            // Dependiendo de `zonaUbicacion`, agregar detalles rurales o urbanos
            ...(zonaUbicacion === "1"
              ? {
                  corregimiento,
                  centro_poblado: centroPoblado,
                  vereda,
                }
              : {
                  nombre_barrio: nombreBarrio,
                  tipo_viaprincipal: viaPrincipal,
                  numero_viaprincipal: numeroViaPrincipal,
                  letra_principal: letraPrincipal,
                  es_bis: esBis,
                  cuadrante_principal: cuadrantePrincipal,
                  numero_viasecundaria: numeroViaSecundaria,
                  letra_secundaria: letraSecundaria,
                  cuadrante_secundario: cuadranteSecundario,
                  numero_placa: numeroPlaca,
                  complemento: complemento,
                }),

            // Tercer grupo de datos (identificación y nombre)
            numero_identificacion: numeroIdentificacion,
            fecha_expedicion: fechaExpedicion,
            tipo_identificacion: tipoIdentificacion,
            primer_nombre: primerNombre,
            segundo_nombre: segundoNombre,
            primer_apellido: primerApellido,
            segundo_apellido: segundoApellido,
            sexo_persona: sexo,
            genero_persona: genero,
            orientacion_persona: orientacionSexual,

            // Cuarto grupo de datos (complementarios)
            estado_civil: estadoCivil,
            fondo_pensiones: fondoPension,
            eps: eps,
            gp_rh: rh,
            tipo_vinculacion: tipoVinculacion,
            acepto_politicas: idTratamiento,

            ...(tipoVinculacion === "1"
              ? {
                  numero_contrato: numeroContrato,
                  fecha_iniciocontrato: fechaInicioContrato,
                  fecha_fincontrato: fechaFinContrato,
                  id_cusuario: undefined, // este será completado en el backend
                }
              : {
                  numero_resolucion: numeroResolucion,
                  id_cusuario: undefined, // este será completado en el backend
                }),
          };

          // Ejecutar la solicitud de envío con `BasicosService`
          await BasicosService(datos);

          return "Finalizado exitosamente";
        })(),
        {
          pending: "Enviando...",
          success: "¡Envío exitoso!",
          error: "¡Hubo un error al enviar!",
        },
        {
          position: "top-right",
          className: "foo-bar",
          hideProgressBar: true,
        }
      );
    } catch (error) {
      console.error("Error al enviar los datos:", error);
    }
  };

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
        onSubmit={handleSubmit}
        validated={validated}
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
        <CardBody style={cardBodyStyle}>
          <SubtituloForm
            subtitulo={"Datos complementarios"}
            icon={FaPuzzlePiece}
          />
          <ComplementariosPersona method={methodBasicos} />
        </CardBody>
        <CardBody>
          <Form.Check>
            <Form.Check.Input
              type="checkbox"
              checked={idTratamiento}
              onChange={(e) => setIdTratamiento(!idTratamiento)}
              required
            />
            <Form.Check.Label>
              {"Acepto las "}
              <a
                href="https://www.unp.gov.co/normativa/politicas-de-seguridad-de-la-informacion-y-proteccion-de-datos-personales/"
                target="_blank"
              >
                Políticas de seguridad de la información y protección de datos
                personales
              </a>
            </Form.Check.Label>
          </Form.Check>
        </CardBody>
      </CardForm>
    </>
  );
};

const CardFormBasicos: React.FC<CardFormBasicosProps> = ({
  method,
  canEdit = false,
  hasHeader = false,
  dependencia = "Ecosistema de Información",
}) => {
  return (
    <>
      <NombreProvider>
        <NuipProvider>
          <SexoGeneroProvider>
            <ContactoProvider>
              <UbicacionProvider>
                <ComplementariosProvider>
                  <Formulario
                    method={method}
                    canEdit={canEdit}
                    hasHeader={hasHeader}
                    dependencia={dependencia}
                  />
                </ComplementariosProvider>
              </UbicacionProvider>
            </ContactoProvider>
          </SexoGeneroProvider>
        </NuipProvider>
      </NombreProvider>
    </>
  );
};

export default CardFormBasicos;
