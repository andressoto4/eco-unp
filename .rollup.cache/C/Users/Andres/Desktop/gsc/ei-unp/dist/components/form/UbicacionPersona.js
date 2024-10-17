import React, { useState, useContext, useEffect } from 'react';
import Pais from './componentes/Pais';
import Departamento from './componentes/Departamento';
import Municipio from './componentes/Municipio';
import { IdPaisUbicacionContext, IdDepartamentoUbicacionContext, IdMunicipioUbicacionContext, IdZonaUbicacionContext } from './contextos/UbicacionContext';
import { Col, FormCheck, FormControl, FormGroup, FormLabel, FormSelect, Row, Collapse, Container, Card, CardBody } from 'react-bootstrap';
import { FaTree, FaTreeCity } from 'react-icons/fa6';
const subtituloStyle = {
    fontColor: '#303d50s',
    fontSize: '1.1rem',
    fontWeight: '800',
};
const iconStyle = {
    fontSize: '1.25rem'
};
const Ubicacion = ({ paisDomicilioRef, departamentoDomicilioRef, municipioDomicilioRef }) => {
    const [idPaisUbicacion, setIdPaisUbicacion] = useState('0');
    const [idDepartamentoUbicacion, setIdDepartamentoUbicacion] = useState('0');
    const { setID: setIDPaisUbicacion } = useContext(IdPaisUbicacionContext);
    const { setID: setIDDepartamentoUbicacion } = useContext(IdDepartamentoUbicacionContext);
    const { setID: setIDMunicipioUbicacion } = useContext(IdMunicipioUbicacionContext);
    const { setID: setIdZonaUbicacion } = useContext(IdZonaUbicacionContext);
    const handlePaisChange = (event) => {
        setIdPaisUbicacion(event.target.value);
        setIDPaisUbicacion(event.target.value);
        setIdDepartamentoUbicacion('0');
    };
    const handleDepartamentoChange = (event) => {
        setIdDepartamentoUbicacion(event.target.value);
        setIDDepartamentoUbicacion(event.target.value);
        setIDMunicipioUbicacion('0');
    };
    const handleMunicipioGet = (event) => {
        setIDMunicipioUbicacion(event.target.value);
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(Col, { lg: 3, md: 6, xs: 12 },
            React.createElement(Pais, { paisRef: paisDomicilioRef, idPaisUbicacion: Number(idPaisUbicacion), onChange: handlePaisChange })),
        React.createElement(Col, { lg: 3, md: 6, xs: 12 },
            React.createElement(Departamento, { departamentoRef: departamentoDomicilioRef, idPais: Number(idPaisUbicacion), onChange: handleDepartamentoChange })),
        React.createElement(Col, { lg: 3, md: 6, xs: 12 },
            React.createElement(Municipio, { municipioRef: municipioDomicilioRef, idDepartamento: Number(idDepartamentoUbicacion), onChange: handleMunicipioGet }))));
};
const Zona = ({ onChange, zonaDomicilioRef }) => {
    const [zonas, setZonas] = useState([]);
    const [zonaSeleccionada, setZonaSeleccionada] = useState('0');
    const { setID: setIdZonaUbicacion } = useContext(IdZonaUbicacionContext);
    useEffect(() => {
        const obtenerZonas = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/zona/`);
                if (response.ok) {
                    const data = await response.json();
                    setZonas(data);
                }
                else {
                    console.error('Hubo un error al obtener los datos de las zonas:', response.status);
                }
            }
            catch (error) {
                console.error('Hubo un error al obtener los datos de las zonas:', error);
            }
        };
        obtenerZonas();
    }, []);
    useEffect(() => {
        setIdZonaUbicacion(zonaSeleccionada);
    }, [zonaSeleccionada, setIdZonaUbicacion]);
    const handleZonaChange = (event) => {
        setZonaSeleccionada(event.target.value);
        if (onChange) {
            onChange(event);
        }
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(Col, { md: 3, xs: 12, className: 'mb-3' },
            React.createElement(FormLabel, null,
                "Zona ",
                React.createElement("span", { className: "text-danger" }, "*")),
            React.createElement(FormSelect, { ref: zonaDomicilioRef, value: zonaSeleccionada, onChange: handleZonaChange, required: true },
                React.createElement("option", { value: "0" }, "Seleccione una zona"),
                zonas.map((zona) => (React.createElement("option", { key: zona.id_zubicacion, value: zona.id_zubicacion }, zona.nombre_zubicacion)))))));
};
const DireccionUrbana = ({ contentType, viaPrincipalRef, numeroViaPrincipalRef, numeroViaSecundariaRef, numeroPlacaRef, nombreBarrioRef }) => {
    const [contentTypeId, setContentTypeId] = useState(null);
    const [nombreBarrio, setNombreBarrio] = useState('');
    const [viaPrincipal, setViaPrincipal] = useState('');
    const [numeroViaPrincipal, setNumeroViaPrincipal] = useState('');
    const [letraPrincipal, setLetraPrincipal] = useState('');
    const [esBis, setEsBis] = useState('');
    const [cuadrantePrincipal, setCuadrantePrincipal] = useState('');
    const [numeroViaSecundaria, setNumeroViaSecundaria] = useState('');
    const [letraSecundaria, setLetraSecundaria] = useState('');
    const [cuadranteSecundario, setCuadranteSecundario] = useState('');
    const [numeroPlaca, setNumeroPlaca] = useState('');
    const [complemento, setComplemento] = useState('');
    const [resumenDireccion, setResumenDireccion] = useState('');
    const [indicacionDireccion, setIndicacionDireccion] = useState('');
    const [isFirstRender, setIsFirstRender] = useState(true);
    return (React.createElement(Row, null,
        React.createElement(Col, { md: 3, xs: 12 },
            React.createElement(FormGroup, { className: "mb-3" },
                React.createElement(FormLabel, null,
                    "V\u00EDa principal ",
                    React.createElement("span", { className: "text-danger" }, "*")),
                React.createElement(FormSelect, { ref: viaPrincipalRef, value: viaPrincipal, onChange: (e) => setViaPrincipal(e.target.value), required: true },
                    React.createElement("option", { value: "" }, "Seleccione una v\u00EDa"),
                    React.createElement("option", { value: "CL" }, "Calle"),
                    React.createElement("option", { value: "CR" }, "Carrera"),
                    React.createElement("option", { value: "AU" }, "Autopista"),
                    React.createElement("option", { value: "AV" }, "Avenida"),
                    React.createElement("option", { value: "AC" }, "Avenida calle"),
                    React.createElement("option", { value: "AK" }, "Avenida carrera"),
                    React.createElement("option", { value: "BL" }, "Bulevar"),
                    React.createElement("option", { value: "CT" }, "Carretera"),
                    React.createElement("option", { value: "CQ" }, "Circular"),
                    React.createElement("option", { value: "CV" }, "Circunvalar"),
                    React.createElement("option", { value: "CC" }, "Cuentas corridas"),
                    React.createElement("option", { value: "DG" }, "Diagonal"),
                    React.createElement("option", { value: "PJ" }, "Pasaje"),
                    React.createElement("option", { value: "PS" }, "Paseo"),
                    React.createElement("option", { value: "PT" }, "Peatonal"),
                    React.createElement("option", { value: "TV" }, "Transversal"),
                    React.createElement("option", { value: "TC" }, "Troncal"),
                    React.createElement("option", { value: "VT" }, "Variante"),
                    React.createElement("option", { value: "VI" }, "V\u00EDa")))),
        React.createElement(Col, { md: 2, xs: 12 },
            React.createElement(FormGroup, { className: "mb-3" },
                React.createElement(FormLabel, null,
                    "N\u00FAmero v\u00EDa ",
                    React.createElement("span", { className: "text-danger" }, "*")),
                React.createElement(FormControl, { ref: numeroViaPrincipalRef, type: "text", value: numeroViaPrincipal, placeholder: 'Ej: 23', required: true }))),
        React.createElement(Col, { md: 2, xs: 12 },
            React.createElement(FormGroup, { className: "mb-3" },
                React.createElement(FormLabel, null,
                    "Letra ",
                    React.createElement("span", { className: "text-danger" })),
                React.createElement(FormControl, { type: "text", value: letraPrincipal, placeholder: 'Ej: A' }))),
        React.createElement(Col, { md: 2, xs: 12, className: 'align-self-end' },
            React.createElement(FormGroup, { className: 'mb-4' },
                React.createElement(FormCheck, { type: "checkbox", label: "\u00BFEs bis?" }))),
        React.createElement(Col, { md: 3, xs: 12 },
            React.createElement(FormGroup, { className: "mb-3" },
                React.createElement(FormLabel, null,
                    "Cardinalidad ",
                    React.createElement("span", { className: "text-danger" })),
                React.createElement(FormSelect, { value: cuadrantePrincipal, onChange: (e) => setCuadrantePrincipal(e.target.value) },
                    React.createElement("option", { value: "" }, "Seleccione la cardinalidad"),
                    React.createElement("option", { value: "Norte" }, "Norte"),
                    React.createElement("option", { value: "Sur" }, "Sur"),
                    React.createElement("option", { value: "Este" }, "Este"),
                    React.createElement("option", { value: "Oeste" }, "Oeste")))),
        React.createElement(Col, { xs: 12, className: 'col-md-auto text-center align-self-center' },
            React.createElement("div", { className: 'mt-3 p-1' },
                React.createElement("b", null, "#"))),
        React.createElement(Col, { md: 2, xs: 12 },
            React.createElement(FormGroup, { className: "mb-3" },
                React.createElement(FormLabel, null,
                    "N\u00FAmero uno ",
                    React.createElement("span", { className: "text-danger" }, "*")),
                React.createElement(FormControl, { ref: numeroViaSecundariaRef, type: "text", placeholder: 'Ej: 13', required: true }))),
        React.createElement(Col, { md: 2, xs: 12 },
            React.createElement(FormGroup, { className: "mb-3" },
                React.createElement(FormLabel, null,
                    "Letra ",
                    React.createElement("span", { className: "text-danger" })),
                React.createElement(FormControl, { type: "text", value: letraSecundaria, placeholder: 'Ej: C' }))),
        React.createElement(Col, { md: 2, xs: 12 },
            React.createElement(FormGroup, { className: "mb-3" },
                React.createElement(FormLabel, null,
                    "Cardinalidad ",
                    React.createElement("span", { className: "text-danger" })),
                React.createElement(FormSelect, { value: cuadranteSecundario, onChange: (e) => setCuadranteSecundario(e.target.value) },
                    React.createElement("option", { value: "" }, "Seleccione la cardinalidad"),
                    React.createElement("option", { value: "Norte" }, "Norte"),
                    React.createElement("option", { value: "Sur" }, "Sur"),
                    React.createElement("option", { value: "Este" }, "Este"),
                    React.createElement("option", { value: "Oeste" }, "Oeste")))),
        React.createElement(Col, { xs: 12, className: 'col-md-auto text-center align-self-center' },
            React.createElement("div", { className: 'mt-3 p-1' },
                React.createElement("b", null, "-"))),
        React.createElement(Col, { md: 2, xs: 12 },
            React.createElement(FormGroup, { className: "mb-3" },
                React.createElement(FormLabel, null,
                    "N\u00FAmero dos ",
                    React.createElement("span", { className: "text-danger" }, "*")),
                React.createElement(FormControl, { ref: numeroPlacaRef, type: "text", value: numeroPlaca, placeholder: 'Ej: 25', required: true }))),
        React.createElement(Col, { md: 3, xs: 12, style: { paddingRight: '7px' } },
            React.createElement(FormGroup, { className: "mb-3" },
                React.createElement(FormLabel, null,
                    "Complemento ",
                    React.createElement("span", { className: "text-danger" })),
                React.createElement(FormControl, { type: "text", value: complemento, placeholder: 'Ej: Casa 3' }))),
        React.createElement(Col, { md: 4, xs: 12 },
            React.createElement(FormGroup, { className: "mb-3" },
                React.createElement(FormLabel, null,
                    "Barrio / Sector ",
                    React.createElement("span", { className: "text-danger" }, "*")),
                React.createElement(FormControl, { ref: nombreBarrioRef, type: "text", value: nombreBarrio, required: true }))),
        React.createElement(Col, { md: 8, xs: 12 },
            React.createElement(FormGroup, { className: "mb-2" },
                React.createElement(FormLabel, null,
                    "Resumen de direcci\u00F3n ",
                    React.createElement("span", { className: "text-danger" }, "**")),
                React.createElement(FormControl, { type: "text", className: 'bg-body-secondary', value: resumenDireccion, disabled: true }))),
        React.createElement(Col, { md: 12, xs: 12 },
            React.createElement(FormGroup, { className: "mb-2" },
                React.createElement(FormLabel, null, "Indicaciones del lugar de domicilio"),
                React.createElement(FormControl, { type: "text", value: indicacionDireccion })))));
};
const DireccionRural = ({ contentType, corregimientoRef, veredaRef, centroPobladoRef }) => {
    const [contentTypeId, setContentTypeId] = useState(null);
    const [corregimiento, setCorregimiento] = useState('');
    const [vereda, setVereda] = useState('');
    const [centroPoblado, setCentroPoblado] = useState('');
    const [resumenDireccion, setResumenDireccion] = useState('');
    const [indicacionDireccion, setIndicacionDireccion] = useState('');
    const handleTextChange = (event, setter) => {
        setter(event.target.value);
    };
    const handleAreaChange = (event, setter) => {
        setter(event.target.value);
    };
    return (React.createElement(Row, null,
        React.createElement(Col, { md: 4, xs: 12 },
            React.createElement(FormGroup, { className: "mb-3" },
                React.createElement(FormLabel, null,
                    "Corregimiento ",
                    React.createElement("span", { className: "text-danger" })),
                React.createElement(FormControl, { ref: corregimientoRef, type: "text", value: corregimiento, maxLength: 100 }))),
        React.createElement(Col, { md: 4, xs: 12 },
            React.createElement(FormGroup, { className: "mb-3" },
                React.createElement(FormLabel, null,
                    "Vereda ",
                    React.createElement("span", { className: "text-danger" }, "*")),
                React.createElement(FormControl, { ref: veredaRef, type: "text", value: vereda, maxLength: 100, required: true }))),
        React.createElement(Col, { md: 4, xs: 12 },
            React.createElement(FormGroup, { className: "mb-3" },
                React.createElement(FormLabel, null,
                    "Centro poblado ",
                    React.createElement("span", { className: "text-danger" })),
                React.createElement(FormControl, { ref: centroPobladoRef, type: "text", value: centroPoblado, maxLength: 100 }))),
        React.createElement(Col, { md: 12, xs: 12 },
            React.createElement(FormGroup, { className: "mb-2" },
                React.createElement(FormLabel, null, "Indicaciones del lugar de domicilio"),
                React.createElement(FormControl, { type: "text", value: indicacionDireccion })))));
};
const UbicacionPersona = () => {
    const [zona, setZona] = useState('');
    const handleZonaChange = (e) => {
        setZona(e.target.value);
    };
    return (React.createElement(Row, null,
        React.createElement(Ubicacion, null),
        React.createElement(Zona, { onChange: handleZonaChange }),
        React.createElement(Collapse, { in: zona === '1' },
            React.createElement(Container, { className: "pb-0 mb-0 bg-section" },
                React.createElement(Card, { className: "border-light-subtle rounded-3" },
                    React.createElement(CardBody, null,
                        React.createElement(Row, { className: 'mb-1 mt-1' },
                            React.createElement(Col, { className: "col-auto pe-1" },
                                React.createElement(FaTreeCity, { style: iconStyle })),
                            React.createElement(Col, { className: "ps-1 col-auto align-self-center" },
                                React.createElement("p", { style: subtituloStyle }, "Direcci\u00F3n urbana"))),
                        React.createElement(DireccionUrbana, null))))),
        React.createElement(Collapse, { in: zona === '2' },
            React.createElement(Container, { className: "pb-0 mb-0 bg-section" },
                React.createElement(Card, { className: "border-light-subtle rounded-3" },
                    React.createElement(CardBody, null,
                        React.createElement(Row, { className: 'mb-1 mt-1' },
                            React.createElement(Col, { className: "col-auto pe-1" },
                                React.createElement(FaTree, { style: iconStyle })),
                            React.createElement(Col, { className: "ps-1 col-auto align-self-center" },
                                React.createElement("p", { style: subtituloStyle }, "Direcci\u00F3n Rural"))),
                        React.createElement(DireccionRural, null)))))));
};
export default UbicacionPersona;
//# sourceMappingURL=UbicacionPersona.js.map