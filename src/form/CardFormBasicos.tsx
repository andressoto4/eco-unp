import React, { useState } from "react";
import { Row, Col, Container, CardBody } from "react-bootstrap";
import { toast } from "react-toastify";
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

import { BasicosService } from "./services/BasicosService";
import { NombreProvider } from "./contexts/NombreContext";
import { NuipProvider } from "./contexts/NuipContext";
import { SexoGeneroProvider } from "./contexts/SexoGeneroContext";
import { ContactoProvider } from "./contexts/ContactoContext";
import { UbicacionProvider } from "./contexts/UbicacionContext";

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
          // Grupo 1 de peticiones
          const firstGroup = [
            {
              url: "http://localhost:8000/usuario/tccusuario",
              datos: {
                celular_uno: celularUno,
                celular_dos: celularDos,
                celular_emergencia: telefono,
              },
            },
            {
              url: "http://localhost:8000/usuario/cceusuario",
              datos: {
                correo_electronico: correo,
              },
            },
          ];

          const firstGroupResponses = await BasicosService(firstGroup);
          const idTelefono = firstGroupResponses[0].data.idTelefono;
          const idCorreo = firstGroupResponses[1].data.idCorreo;

          // Petición adicional después del primer grupo
          const firstFinal = [
            {
              url: "http://localhost:8000/usuario/datoscontacto",
              datos: {
                id_ctelefono: idTelefono,
                id_ccelectronico: idCorreo,
              },
            },
          ];

          await BasicosService(firstFinal);

          // Grupo 2 de peticiones
          const secondGroup = [];

          if (zonaUbicacion === "1") {
            secondGroup.push({
              url: "http://localhost:8000/usuario/ubicacionrural",
              datos: {
                corregimiento: corregimiento,
                centro_poblado: centroPoblado,
                vereda: vereda,
              },
            });
          }

          if (zonaUbicacion === "2") {
            secondGroup.push({
              url: "http://localhost:8000/usuario/ubicacionurbana",
              datos: {
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
              },
            });
          }

          const secondGroupResponses = await BasicosService(secondGroup);

          const fields = [
            viaPrincipal,
            numeroViaPrincipal + letraPrincipal, // Concatenar número y letra principal
            esBis ? "Bis" : "",
            cuadrantePrincipal,
            numeroViaSecundaria
              ? "# " + numeroViaSecundaria + letraSecundaria
              : "", // Concatenar número y letra secundaria
            cuadranteSecundario,
            numeroPlaca ? "- " + numeroPlaca : "",
            " ",
            complemento,
          ];

          const direccion = fields
            .filter((field) => field.trim() !== "")
            .join(" ")
            .trim();

          // Petición adicional después del segundo grupo
          const secondFinal = [
            {
              url: "http://localhost:8000/usuario/datosubicacion",
              datos: {
                pais: paisUbicacion,
                departamento: departamentoUbicacion,
                municipio: municipioUbicacion,
                zona: zonaUbicacion,
                direccion: direccion,
                indicacion: indicacionDireccionR || indicacionDireccionU,
              },
            },
          ];

          await BasicosService(secondFinal);

          // Grupo 3 de peticiones
          const thirdGroup = [
            {
              url: "http://localhost:8000/usuario/identificacionusuario",
              datos: {
                numero_identificacion: numeroIdentificacion,
                fecha_expedicion: fechaExpedicion,
                tipo_identificacion: tipoIdentificacion,
              },
            },
            {
              url: "http://localhost:8000/usuario/nombreusuario",
              datos: {
                primer_nombre: primerNombre,
                segundo_nombre: segundoNombre,
                primer_apellido: primerApellido,
                segundo_apellido: segundoApellido,
              },
            },
          ];

          const thirdGroupResponses = await BasicosService(thirdGroup);
          
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
                <Formulario
                  method={method}
                  canEdit={canEdit}
                  hasHeader={hasHeader}
                  dependencia={dependencia}
                />
              </UbicacionProvider>
            </ContactoProvider>
          </SexoGeneroProvider>
        </NuipProvider>
      </NombreProvider>
    </>
  );
};

export default CardFormBasicos;
