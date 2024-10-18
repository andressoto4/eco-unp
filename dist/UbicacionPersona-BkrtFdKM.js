import * as React from 'react';
import React__default, { useMemo, useContext, useState, useEffect, createContext } from 'react';
import { j as jsxRuntimeExports, T as TransitionWrapper, t as transitionEndListener, c as classNames, s as style, E as EXITED, a as EXITING, b as ENTERING, d as ENTERED, e as triggerBrowserReflow, F as FormContext, u as useBootstrapPrefix, f as FormCheckInput, h as hasChildOfType, g as Feedback, R as Row, C as Col, i as FormGroup, k as FormLabel, l as FormControl, m as Container, n as Card, o as CardBody, p as FaTreeCity, q as FaTree } from './index-BGgWzTHb.js';

/**
 * Safe chained function
 *
 * Will only create a new function if needed,
 * otherwise will pass back existing functions or null.
 *
 * @param {function} functions to chain
 * @returns {function|null}
 */
function createChainedFunction(...funcs) {
  return funcs.filter(f => f != null).reduce((acc, f) => {
    if (typeof f !== 'function') {
      throw new Error('Invalid Argument Type, must only provide functions, undefined, or null.');
    }
    if (acc === null) return f;
    return function chainedFunction(...args) {
      // @ts-ignore
      acc.apply(this, args);
      // @ts-ignore
      f.apply(this, args);
    };
  }, null);
}

const MARGINS = {
  height: ['marginTop', 'marginBottom'],
  width: ['marginLeft', 'marginRight']
};
function getDefaultDimensionValue(dimension, elem) {
  const offset = `offset${dimension[0].toUpperCase()}${dimension.slice(1)}`;
  const value = elem[offset];
  const margins = MARGINS[dimension];
  return value +
  // @ts-ignore
  parseInt(style(elem, margins[0]), 10) +
  // @ts-ignore
  parseInt(style(elem, margins[1]), 10);
}
const collapseStyles = {
  [EXITED]: 'collapse',
  [EXITING]: 'collapsing',
  [ENTERING]: 'collapsing',
  [ENTERED]: 'collapse show'
};
const Collapse = /*#__PURE__*/React__default.forwardRef(({
  onEnter,
  onEntering,
  onEntered,
  onExit,
  onExiting,
  className,
  children,
  dimension = 'height',
  in: inProp = false,
  timeout = 300,
  mountOnEnter = false,
  unmountOnExit = false,
  appear = false,
  getDimensionValue = getDefaultDimensionValue,
  ...props
}, ref) => {
  /* Compute dimension */
  const computedDimension = typeof dimension === 'function' ? dimension() : dimension;

  /* -- Expanding -- */
  const handleEnter = useMemo(() => createChainedFunction(elem => {
    elem.style[computedDimension] = '0';
  }, onEnter), [computedDimension, onEnter]);
  const handleEntering = useMemo(() => createChainedFunction(elem => {
    const scroll = `scroll${computedDimension[0].toUpperCase()}${computedDimension.slice(1)}`;
    elem.style[computedDimension] = `${elem[scroll]}px`;
  }, onEntering), [computedDimension, onEntering]);
  const handleEntered = useMemo(() => createChainedFunction(elem => {
    elem.style[computedDimension] = null;
  }, onEntered), [computedDimension, onEntered]);

  /* -- Collapsing -- */
  const handleExit = useMemo(() => createChainedFunction(elem => {
    elem.style[computedDimension] = `${getDimensionValue(computedDimension, elem)}px`;
    triggerBrowserReflow(elem);
  }, onExit), [onExit, getDimensionValue, computedDimension]);
  const handleExiting = useMemo(() => createChainedFunction(elem => {
    elem.style[computedDimension] = null;
  }, onExiting), [computedDimension, onExiting]);
  return /*#__PURE__*/jsxRuntimeExports.jsx(TransitionWrapper, {
    ref: ref,
    addEndListener: transitionEndListener,
    ...props,
    "aria-expanded": props.role ? inProp : null,
    onEnter: handleEnter,
    onEntering: handleEntering,
    onEntered: handleEntered,
    onExit: handleExit,
    onExiting: handleExiting,
    childRef: children.ref,
    in: inProp,
    timeout: timeout,
    mountOnEnter: mountOnEnter,
    unmountOnExit: unmountOnExit,
    appear: appear,
    children: (state, innerProps) => /*#__PURE__*/React__default.cloneElement(children, {
      ...innerProps,
      className: classNames(className, children.props.className, collapseStyles[state], computedDimension === 'width' && 'collapse-horizontal')
    })
  });
});

const FormCheckLabel = /*#__PURE__*/React.forwardRef(({
  bsPrefix,
  className,
  htmlFor,
  ...props
}, ref) => {
  const {
    controlId
  } = useContext(FormContext);
  bsPrefix = useBootstrapPrefix(bsPrefix, 'form-check-label');
  return /*#__PURE__*/jsxRuntimeExports.jsx("label", {
    ...props,
    ref: ref,
    htmlFor: htmlFor || controlId,
    className: classNames(className, bsPrefix)
  });
});
FormCheckLabel.displayName = 'FormCheckLabel';

const FormCheck = /*#__PURE__*/React.forwardRef(({
  id,
  bsPrefix,
  bsSwitchPrefix,
  inline = false,
  reverse = false,
  disabled = false,
  isValid = false,
  isInvalid = false,
  feedbackTooltip = false,
  feedback,
  feedbackType,
  className,
  style,
  title = '',
  type = 'checkbox',
  label,
  children,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as = 'input',
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, 'form-check');
  bsSwitchPrefix = useBootstrapPrefix(bsSwitchPrefix, 'form-switch');
  const {
    controlId
  } = useContext(FormContext);
  const innerFormContext = useMemo(() => ({
    controlId: id || controlId
  }), [controlId, id]);
  const hasLabel = !children && label != null && label !== false || hasChildOfType(children, FormCheckLabel);
  const input = /*#__PURE__*/jsxRuntimeExports.jsx(FormCheckInput, {
    ...props,
    type: type === 'switch' ? 'checkbox' : type,
    ref: ref,
    isValid: isValid,
    isInvalid: isInvalid,
    disabled: disabled,
    as: as
  });
  return /*#__PURE__*/jsxRuntimeExports.jsx(FormContext.Provider, {
    value: innerFormContext,
    children: /*#__PURE__*/jsxRuntimeExports.jsx("div", {
      style: style,
      className: classNames(className, hasLabel && bsPrefix, inline && `${bsPrefix}-inline`, reverse && `${bsPrefix}-reverse`, type === 'switch' && bsSwitchPrefix),
      children: children || /*#__PURE__*/jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
        children: [input, hasLabel && /*#__PURE__*/jsxRuntimeExports.jsx(FormCheckLabel, {
          title: title,
          children: label
        }), feedback && /*#__PURE__*/jsxRuntimeExports.jsx(Feedback, {
          type: feedbackType,
          tooltip: feedbackTooltip,
          children: feedback
        })]
      })
    })
  });
});
FormCheck.displayName = 'FormCheck';
var FormCheck$1 = Object.assign(FormCheck, {
  Input: FormCheckInput,
  Label: FormCheckLabel
});

const FormSelect = /*#__PURE__*/React.forwardRef(({
  bsPrefix,
  size,
  htmlSize,
  className,
  isValid = false,
  isInvalid = false,
  id,
  ...props
}, ref) => {
  const {
    controlId
  } = useContext(FormContext);
  bsPrefix = useBootstrapPrefix(bsPrefix, 'form-select');
  return /*#__PURE__*/jsxRuntimeExports.jsx("select", {
    ...props,
    size: htmlSize,
    ref: ref,
    className: classNames(className, bsPrefix, size && `${bsPrefix}-${size}`, isValid && `is-valid`, isInvalid && `is-invalid`),
    id: id || controlId
  });
});
FormSelect.displayName = 'FormSelect';

const ContactoPersona = () => {
    return (React__default.createElement(Row, null,
        React__default.createElement(Col, { md: 4, xs: 12 },
            React__default.createElement(FormGroup, { className: "mb-3" },
                React__default.createElement(FormLabel, null,
                    "Celular uno ",
                    React__default.createElement("span", { className: "text-danger" }, "*")),
                React__default.createElement(FormControl, { minLength: 10, maxLength: 10, placeholder: "Ej: 300 200 2000", required: true }))),
        React__default.createElement(Col, { md: 4, xs: 12 },
            React__default.createElement(FormGroup, { className: "mb-3" },
                React__default.createElement(FormLabel, null, "Celular dos "),
                React__default.createElement(FormControl, { minLength: 10, maxLength: 10, placeholder: "Ej: 300 200 2000" }))),
        React__default.createElement(Col, { md: 4, xs: 12 },
            React__default.createElement(FormGroup, { className: "mb-3" },
                React__default.createElement(FormLabel, null, "Tel\u00E9fono (o celular tres)"),
                React__default.createElement(FormControl, { minLength: 10, maxLength: 10, placeholder: "Ej: 600 700 7000" }))),
        React__default.createElement(Col, { xl: 6, md: 9, xs: 12 },
            React__default.createElement(FormGroup, { className: "mb-3" },
                React__default.createElement(FormLabel, null,
                    "Correo electr\u00F3nico ",
                    React__default.createElement("span", { className: "text-danger" }, "*")),
                React__default.createElement(FormControl, { type: "email", maxLength: 100, required: true })))));
};

const NombrePersona = () => {
    return (React__default.createElement(Row, null,
        React__default.createElement(Col, { lg: 3, md: 6, xs: 12 },
            React__default.createElement(FormGroup, { className: "mb-3" },
                React__default.createElement(FormLabel, null,
                    "Primer nombre ",
                    React__default.createElement("span", { className: "text-danger" }, "*")),
                React__default.createElement(FormControl, { type: "text", maxLength: 20, required: true }))),
        React__default.createElement(Col, { lg: 3, md: 6, xs: 12 },
            React__default.createElement(FormGroup, { className: "mb-3" },
                React__default.createElement(FormLabel, null, "Segundo nombre"),
                React__default.createElement(FormControl, { type: "text", maxLength: 50 }))),
        React__default.createElement(Col, { lg: 3, md: 6, xs: 12 },
            React__default.createElement(FormGroup, { className: "mb-3" },
                React__default.createElement(FormLabel, null,
                    "Primer apellido ",
                    React__default.createElement("span", { className: "text-danger" }, "*")),
                React__default.createElement(FormControl, { type: "text", maxLength: 50, required: true }))),
        React__default.createElement(Col, { lg: 3, md: 6, xs: 12 },
            React__default.createElement(FormGroup, { className: "mb-3" },
                React__default.createElement(FormLabel, null, "Segundo apellido"),
                React__default.createElement(FormControl, { type: "text", maxLength: 50 })))));
};

const Nuip = ({ attach = false }) => {
    return (React__default.createElement(React__default.Fragment, null,
        React__default.createElement(Row, null,
            React__default.createElement(Col, { md: 4, xs: 12 },
                React__default.createElement(FormGroup, { className: "mb-3" },
                    React__default.createElement(FormLabel, null,
                        "Tipo de identificaci\u00F3n ",
                        React__default.createElement("span", { className: "text-danger" }, "*")),
                    React__default.createElement(FormSelect, null,
                        React__default.createElement("option", { value: "0" }, "Seleccione..."),
                        React__default.createElement("option", { value: "1" }, "Tarjeta de identidad"),
                        React__default.createElement("option", { value: "2" }, "C\u00E9dula de ciudadan\u00EDa"),
                        React__default.createElement("option", { value: "3" }, "C\u00E9dula de Extranjer\u00EDa"),
                        React__default.createElement("option", { value: "4" }, "Pasaporte")))),
            React__default.createElement(Col, { md: 4, xs: 12 },
                React__default.createElement(FormGroup, { className: "mb-3" },
                    React__default.createElement(FormLabel, null,
                        "N\u00FAmero de identificaci\u00F3n ",
                        React__default.createElement("span", { className: "text-danger" }, "*")),
                    React__default.createElement(FormControl, { type: "text", minLength: 6, maxLength: 15, required: true }))),
            React__default.createElement(Col, { md: 4, xs: 12 },
                React__default.createElement(FormGroup, { className: "mb-3" },
                    React__default.createElement(FormLabel, null,
                        "Fecha de expedici\u00F3n ",
                        React__default.createElement("span", { className: "text-danger" }, "*")),
                    React__default.createElement(FormControl, { type: "date", max: new Date().toISOString().split("T")[0], required: true }))),
            React__default.createElement(Col, { md: 8, xs: 12, style: { display: attach ? "block" : "none" } },
                React__default.createElement(FormGroup, { controlId: "formFile", className: "mb-3" },
                    React__default.createElement(FormLabel, null,
                        "Fotocopia del documento de identificaci\u00F3n personal",
                        " ",
                        React__default.createElement("span", { className: "text-danger" }, "*")),
                    React__default.createElement(FormControl, { type: "file", required: attach }))))));
};

const Pais = ({ idPaisUbicacion, onChange, paisRef }) => {
    const [paises, setPaises] = useState([]);
    const [paisSeleccionado, setPaisSeleccionado] = useState("0");
    useEffect(() => {
        const obtenerPaises = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/pais/`);
                if (response.ok) {
                    const data = await response.json();
                    if (idPaisUbicacion) {
                        const paisFiltrado = data.find((pais) => pais.id_pais === idPaisUbicacion);
                        setPaises(paisFiltrado ? [paisFiltrado] : []);
                    }
                    else {
                        setPaises(data);
                    }
                }
                else {
                    console.error("Hubo un error al obtener los datos de los países:", response.status);
                }
            }
            catch (error) {
                console.error("Hubo un error al obtener los datos de los países:", error);
            }
        };
        obtenerPaises();
    }, [idPaisUbicacion]);
    const handlePaisChange = (event) => {
        setPaisSeleccionado(event.target.value);
        if (onChange) {
            onChange(event);
        }
    };
    return (React__default.createElement(FormGroup, { className: "mb-3" },
        React__default.createElement(FormLabel, null,
            "Pa\u00EDs ",
            React__default.createElement("span", { className: "text-danger" }, "*")),
        React__default.createElement(FormSelect, { ref: paisRef, value: paisSeleccionado, onChange: handlePaisChange },
            React__default.createElement("option", { value: "0", disabled: true }, "Seleccione..."),
            paises.map((pais) => (React__default.createElement("option", { key: pais.id_pais, value: pais.id_pais }, pais.nombre_pais))))));
};

const Departamento = ({ idPais, onChange, departamentoRef, }) => {
    const [departamentos, setDepartamentos] = useState([]);
    const [departamentoSeleccionado, setDepartamentoSeleccionado] = useState("0");
    useEffect(() => {
        const obtenerDepartamentos = async () => {
            try {
                const url = `${process.env.REACT_APP_API_ENDPOINT}/departamento/?pais=${idPais}`;
                const response = await fetch(url);
                if (response.ok) {
                    const data = await response.json();
                    setDepartamentos(data);
                }
                else {
                    console.error("Hubo un error al obtener los datos de los departamentos:", response.status);
                }
            }
            catch (error) {
                console.error("Hubo un error al obtener los datos de los departamentos:", error);
            }
        };
        obtenerDepartamentos();
    }, [idPais]);
    const handleDepartamentoChange = (event) => {
        setDepartamentoSeleccionado(event.target.value);
        if (onChange) {
            onChange(event);
        }
    };
    const selectDisabledStyle = {
        backgroundColor: "white",
        color: "black",
    };
    return (React__default.createElement(FormGroup, { className: "mb-3" },
        React__default.createElement(FormLabel, null,
            "Departamento ",
            React__default.createElement("span", { className: "text-danger" }, "*")),
        React__default.createElement(FormSelect, { ref: departamentoRef, value: departamentoSeleccionado, onChange: handleDepartamentoChange, disabled: idPais === 0, style: idPais === 0 ? selectDisabledStyle : {} },
            React__default.createElement("option", { value: "0", style: { color: "darkgray" } }, "Seleccione..."),
            departamentos.map((departamento) => (React__default.createElement("option", { key: departamento.id_departamento, value: departamento.id_departamento }, departamento.nombre_departamento))))));
};

const Municipio = ({ idDepartamento, onChange, municipioRef, }) => {
    const [municipios, setMunicipios] = useState([]);
    const [municipioSeleccionado, setMunicipioSeleccionado] = useState("0");
    useEffect(() => {
        if (!idDepartamento) {
            return;
        }
        const obtenerMunicipio = async () => {
            try {
                const url = `${process.env.REACT_APP_API_ENDPOINT}/municipio/?departamento=${idDepartamento}`;
                const response = await fetch(url);
                if (response.ok) {
                    const data = await response.json();
                    setMunicipios(data);
                }
                else {
                    console.error("Hubo un error al obtener los datos de los municipios:", response.status);
                }
            }
            catch (error) {
                console.error("Hubo un error al obtener los datos de los municipios:", error);
            }
        };
        obtenerMunicipio();
    }, [idDepartamento]);
    const handleMunicipioChange = (event) => {
        setMunicipioSeleccionado(event.target.value);
        if (onChange) {
            onChange(event);
        }
    };
    const selectDisabledStyle = {
        backgroundColor: "white",
        color: "black",
    };
    return (React__default.createElement(FormGroup, { className: "mb-3" },
        React__default.createElement(FormLabel, null,
            "Municipio / Ciudad ",
            React__default.createElement("span", { className: "text-danger" }, "*")),
        React__default.createElement(FormSelect, { ref: municipioRef, value: municipioSeleccionado, onChange: handleMunicipioChange, disabled: idDepartamento === 0, style: idDepartamento === 0 ? selectDisabledStyle : {} },
            React__default.createElement("option", { value: "0", disabled: true }, "Seleccione..."),
            municipios.map((municipio) => (React__default.createElement("option", { key: municipio.id_municipio, value: municipio.id_municipio }, municipio.nombre_municipio))))));
};

// Crear contextos individuales con valores por defecto
const IdPaisUbicacionContext = createContext({
    id: "0",
    setID: () => { },
});
const IdDepartamentoUbicacionContext = createContext({
    id: "0",
    setID: () => { },
});
const IdMunicipioUbicacionContext = createContext({
    id: "0",
    setID: () => { },
});
const IdZonaUbicacionContext = createContext({
    id: "0",
    setID: () => { },
});

const subtituloStyle = {
    fontColor: "#303d50s",
    fontSize: "1.1rem",
    fontWeight: "800",
};
const iconStyle = {
    fontSize: "1.25rem",
};
const Ubicacion = ({ paisDomicilioRef, departamentoDomicilioRef, municipioDomicilioRef, }) => {
    const [idPaisUbicacion, setIdPaisUbicacion] = useState("0");
    const [idDepartamentoUbicacion, setIdDepartamentoUbicacion] = useState("0");
    const { setID: setIDPaisUbicacion } = useContext(IdPaisUbicacionContext);
    const { setID: setIDDepartamentoUbicacion } = useContext(IdDepartamentoUbicacionContext);
    const { setID: setIDMunicipioUbicacion } = useContext(IdMunicipioUbicacionContext);
    useContext(IdZonaUbicacionContext);
    const handlePaisChange = (event) => {
        setIdPaisUbicacion(event.target.value);
        setIDPaisUbicacion(event.target.value);
        setIdDepartamentoUbicacion("0");
    };
    const handleDepartamentoChange = (event) => {
        setIdDepartamentoUbicacion(event.target.value);
        setIDDepartamentoUbicacion(event.target.value);
        setIDMunicipioUbicacion("0");
    };
    const handleMunicipioGet = (event) => {
        setIDMunicipioUbicacion(event.target.value);
    };
    return (React__default.createElement(React__default.Fragment, null,
        React__default.createElement(Col, { lg: 3, md: 6, xs: 12 },
            React__default.createElement(Pais, { paisRef: paisDomicilioRef, idPaisUbicacion: Number(idPaisUbicacion), onChange: handlePaisChange })),
        React__default.createElement(Col, { lg: 3, md: 6, xs: 12 },
            React__default.createElement(Departamento, { departamentoRef: departamentoDomicilioRef, idPais: Number(idPaisUbicacion), onChange: handleDepartamentoChange })),
        React__default.createElement(Col, { lg: 3, md: 6, xs: 12 },
            React__default.createElement(Municipio, { municipioRef: municipioDomicilioRef, idDepartamento: Number(idDepartamentoUbicacion), onChange: handleMunicipioGet }))));
};
const Zona = ({ onChange, zonaDomicilioRef }) => {
    const [zonas, setZonas] = useState([]);
    const [zonaSeleccionada, setZonaSeleccionada] = useState("0");
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
                    console.error("Hubo un error al obtener los datos de las zonas:", response.status);
                }
            }
            catch (error) {
                console.error("Hubo un error al obtener los datos de las zonas:", error);
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
    return (React__default.createElement(React__default.Fragment, null,
        React__default.createElement(Col, { md: 3, xs: 12, className: "mb-3" },
            React__default.createElement(FormLabel, null,
                "Zona ",
                React__default.createElement("span", { className: "text-danger" }, "*")),
            React__default.createElement(FormSelect, { ref: zonaDomicilioRef, value: zonaSeleccionada, onChange: handleZonaChange, required: true },
                React__default.createElement("option", { value: "0" }, "Seleccione una zona"),
                zonas.map((zona) => (React__default.createElement("option", { key: zona.id_zubicacion, value: zona.id_zubicacion }, zona.nombre_zubicacion)))))));
};
const DireccionUrbana = ({ contentType, viaPrincipalRef, numeroViaPrincipalRef, numeroViaSecundariaRef, numeroPlacaRef, nombreBarrioRef, }) => {
    useState(null);
    const [nombreBarrio, setNombreBarrio] = useState("");
    const [viaPrincipal, setViaPrincipal] = useState("");
    const [numeroViaPrincipal, setNumeroViaPrincipal] = useState("");
    const [letraPrincipal, setLetraPrincipal] = useState("");
    useState("");
    const [cuadrantePrincipal, setCuadrantePrincipal] = useState("");
    useState("");
    const [letraSecundaria, setLetraSecundaria] = useState("");
    const [cuadranteSecundario, setCuadranteSecundario] = useState("");
    const [numeroPlaca, setNumeroPlaca] = useState("");
    const [complemento, setComplemento] = useState("");
    const [resumenDireccion, setResumenDireccion] = useState("");
    const [indicacionDireccion, setIndicacionDireccion] = useState("");
    useState(true);
    return (React__default.createElement(Row, null,
        React__default.createElement(Col, { md: 3, xs: 12 },
            React__default.createElement(FormGroup, { className: "mb-3" },
                React__default.createElement(FormLabel, null,
                    "V\u00EDa principal ",
                    React__default.createElement("span", { className: "text-danger" }, "*")),
                React__default.createElement(FormSelect, { ref: viaPrincipalRef, value: viaPrincipal, onChange: (e) => setViaPrincipal(e.target.value), required: true },
                    React__default.createElement("option", { value: "" }, "Seleccione una v\u00EDa"),
                    React__default.createElement("option", { value: "CL" }, "Calle"),
                    React__default.createElement("option", { value: "CR" }, "Carrera"),
                    React__default.createElement("option", { value: "AU" }, "Autopista"),
                    React__default.createElement("option", { value: "AV" }, "Avenida"),
                    React__default.createElement("option", { value: "AC" }, "Avenida calle"),
                    React__default.createElement("option", { value: "AK" }, "Avenida carrera"),
                    React__default.createElement("option", { value: "BL" }, "Bulevar"),
                    React__default.createElement("option", { value: "CT" }, "Carretera"),
                    React__default.createElement("option", { value: "CQ" }, "Circular"),
                    React__default.createElement("option", { value: "CV" }, "Circunvalar"),
                    React__default.createElement("option", { value: "CC" }, "Cuentas corridas"),
                    React__default.createElement("option", { value: "DG" }, "Diagonal"),
                    React__default.createElement("option", { value: "PJ" }, "Pasaje"),
                    React__default.createElement("option", { value: "PS" }, "Paseo"),
                    React__default.createElement("option", { value: "PT" }, "Peatonal"),
                    React__default.createElement("option", { value: "TV" }, "Transversal"),
                    React__default.createElement("option", { value: "TC" }, "Troncal"),
                    React__default.createElement("option", { value: "VT" }, "Variante"),
                    React__default.createElement("option", { value: "VI" }, "V\u00EDa")))),
        React__default.createElement(Col, { md: 2, xs: 12 },
            React__default.createElement(FormGroup, { className: "mb-3" },
                React__default.createElement(FormLabel, null,
                    "N\u00FAmero v\u00EDa ",
                    React__default.createElement("span", { className: "text-danger" }, "*")),
                React__default.createElement(FormControl, { ref: numeroViaPrincipalRef, type: "text", value: numeroViaPrincipal, placeholder: "Ej: 23", required: true }))),
        React__default.createElement(Col, { md: 2, xs: 12 },
            React__default.createElement(FormGroup, { className: "mb-3" },
                React__default.createElement(FormLabel, null,
                    "Letra ",
                    React__default.createElement("span", { className: "text-danger" })),
                React__default.createElement(FormControl, { type: "text", value: letraPrincipal, placeholder: "Ej: A" }))),
        React__default.createElement(Col, { md: 2, xs: 12, className: "align-self-end" },
            React__default.createElement(FormGroup, { className: "mb-4" },
                React__default.createElement(FormCheck$1, { type: "checkbox", label: "\u00BFEs bis?" }))),
        React__default.createElement(Col, { md: 3, xs: 12 },
            React__default.createElement(FormGroup, { className: "mb-3" },
                React__default.createElement(FormLabel, null,
                    "Cardinalidad ",
                    React__default.createElement("span", { className: "text-danger" })),
                React__default.createElement(FormSelect, { value: cuadrantePrincipal, onChange: (e) => setCuadrantePrincipal(e.target.value) },
                    React__default.createElement("option", { value: "" }, "Seleccione la cardinalidad"),
                    React__default.createElement("option", { value: "Norte" }, "Norte"),
                    React__default.createElement("option", { value: "Sur" }, "Sur"),
                    React__default.createElement("option", { value: "Este" }, "Este"),
                    React__default.createElement("option", { value: "Oeste" }, "Oeste")))),
        React__default.createElement(Col, { xs: 12, className: "col-md-auto text-center align-self-center" },
            React__default.createElement("div", { className: "mt-3 p-1" },
                React__default.createElement("b", null, "#"))),
        React__default.createElement(Col, { md: 2, xs: 12 },
            React__default.createElement(FormGroup, { className: "mb-3" },
                React__default.createElement(FormLabel, null,
                    "N\u00FAmero uno ",
                    React__default.createElement("span", { className: "text-danger" }, "*")),
                React__default.createElement(FormControl, { ref: numeroViaSecundariaRef, type: "text", placeholder: "Ej: 13", required: true }))),
        React__default.createElement(Col, { md: 2, xs: 12 },
            React__default.createElement(FormGroup, { className: "mb-3" },
                React__default.createElement(FormLabel, null,
                    "Letra ",
                    React__default.createElement("span", { className: "text-danger" })),
                React__default.createElement(FormControl, { type: "text", value: letraSecundaria, placeholder: "Ej: C" }))),
        React__default.createElement(Col, { md: 2, xs: 12 },
            React__default.createElement(FormGroup, { className: "mb-3" },
                React__default.createElement(FormLabel, null,
                    "Cardinalidad ",
                    React__default.createElement("span", { className: "text-danger" })),
                React__default.createElement(FormSelect, { value: cuadranteSecundario, onChange: (e) => setCuadranteSecundario(e.target.value) },
                    React__default.createElement("option", { value: "" }, "Seleccione la cardinalidad"),
                    React__default.createElement("option", { value: "Norte" }, "Norte"),
                    React__default.createElement("option", { value: "Sur" }, "Sur"),
                    React__default.createElement("option", { value: "Este" }, "Este"),
                    React__default.createElement("option", { value: "Oeste" }, "Oeste")))),
        React__default.createElement(Col, { xs: 12, className: "col-md-auto text-center align-self-center" },
            React__default.createElement("div", { className: "mt-3 p-1" },
                React__default.createElement("b", null, "-"))),
        React__default.createElement(Col, { md: 2, xs: 12 },
            React__default.createElement(FormGroup, { className: "mb-3" },
                React__default.createElement(FormLabel, null,
                    "N\u00FAmero dos ",
                    React__default.createElement("span", { className: "text-danger" }, "*")),
                React__default.createElement(FormControl, { ref: numeroPlacaRef, type: "text", value: numeroPlaca, placeholder: "Ej: 25", required: true }))),
        React__default.createElement(Col, { md: 3, xs: 12, style: { paddingRight: "7px" } },
            React__default.createElement(FormGroup, { className: "mb-3" },
                React__default.createElement(FormLabel, null,
                    "Complemento ",
                    React__default.createElement("span", { className: "text-danger" })),
                React__default.createElement(FormControl, { type: "text", value: complemento, placeholder: "Ej: Casa 3" }))),
        React__default.createElement(Col, { md: 4, xs: 12 },
            React__default.createElement(FormGroup, { className: "mb-3" },
                React__default.createElement(FormLabel, null,
                    "Barrio / Sector ",
                    React__default.createElement("span", { className: "text-danger" }, "*")),
                React__default.createElement(FormControl, { ref: nombreBarrioRef, type: "text", value: nombreBarrio, required: true }))),
        React__default.createElement(Col, { md: 8, xs: 12 },
            React__default.createElement(FormGroup, { className: "mb-2" },
                React__default.createElement(FormLabel, null,
                    "Resumen de direcci\u00F3n ",
                    React__default.createElement("span", { className: "text-danger" }, "**")),
                React__default.createElement(FormControl, { type: "text", className: "bg-body-secondary", value: resumenDireccion, disabled: true }))),
        React__default.createElement(Col, { md: 12, xs: 12 },
            React__default.createElement(FormGroup, { className: "mb-2" },
                React__default.createElement(FormLabel, null, "Indicaciones del lugar de domicilio"),
                React__default.createElement(FormControl, { type: "text", value: indicacionDireccion })))));
};
const DireccionRural = ({ contentType, corregimientoRef, veredaRef, centroPobladoRef, }) => {
    useState(null);
    const [corregimiento, setCorregimiento] = useState("");
    const [vereda, setVereda] = useState("");
    const [centroPoblado, setCentroPoblado] = useState("");
    useState("");
    const [indicacionDireccion, setIndicacionDireccion] = useState("");
    return (React__default.createElement(Row, null,
        React__default.createElement(Col, { md: 4, xs: 12 },
            React__default.createElement(FormGroup, { className: "mb-3" },
                React__default.createElement(FormLabel, null,
                    "Corregimiento ",
                    React__default.createElement("span", { className: "text-danger" })),
                React__default.createElement(FormControl, { ref: corregimientoRef, type: "text", value: corregimiento, maxLength: 100 }))),
        React__default.createElement(Col, { md: 4, xs: 12 },
            React__default.createElement(FormGroup, { className: "mb-3" },
                React__default.createElement(FormLabel, null,
                    "Vereda ",
                    React__default.createElement("span", { className: "text-danger" }, "*")),
                React__default.createElement(FormControl, { ref: veredaRef, type: "text", value: vereda, maxLength: 100, required: true }))),
        React__default.createElement(Col, { md: 4, xs: 12 },
            React__default.createElement(FormGroup, { className: "mb-3" },
                React__default.createElement(FormLabel, null,
                    "Centro poblado ",
                    React__default.createElement("span", { className: "text-danger" })),
                React__default.createElement(FormControl, { ref: centroPobladoRef, type: "text", value: centroPoblado, maxLength: 100 }))),
        React__default.createElement(Col, { md: 12, xs: 12 },
            React__default.createElement(FormGroup, { className: "mb-2" },
                React__default.createElement(FormLabel, null, "Indicaciones del lugar de domicilio"),
                React__default.createElement(FormControl, { type: "text", value: indicacionDireccion })))));
};
const UbicacionPersona = () => {
    const [zona, setZona] = useState("");
    const handleZonaChange = (e) => {
        setZona(e.target.value);
    };
    return (React__default.createElement(Row, null,
        React__default.createElement(Ubicacion, null),
        React__default.createElement(Zona, { onChange: handleZonaChange }),
        React__default.createElement(Collapse, { in: zona === "1" },
            React__default.createElement(Container, { className: "pb-0 mb-0 bg-section" },
                React__default.createElement(Card, { className: "border-light-subtle rounded-3" },
                    React__default.createElement(CardBody, null,
                        React__default.createElement(Row, { className: "mb-1 mt-1" },
                            React__default.createElement(Col, { className: "col-auto pe-1" },
                                React__default.createElement(FaTreeCity, { style: iconStyle })),
                            React__default.createElement(Col, { className: "ps-1 col-auto align-self-center" },
                                React__default.createElement("p", { style: subtituloStyle }, "Direcci\u00F3n urbana"))),
                        React__default.createElement(DireccionUrbana, null))))),
        React__default.createElement(Collapse, { in: zona === "2" },
            React__default.createElement(Container, { className: "pb-0 mb-0 bg-section" },
                React__default.createElement(Card, { className: "border-light-subtle rounded-3" },
                    React__default.createElement(CardBody, null,
                        React__default.createElement(Row, { className: "mb-1 mt-1" },
                            React__default.createElement(Col, { className: "col-auto pe-1" },
                                React__default.createElement(FaTree, { style: iconStyle })),
                            React__default.createElement(Col, { className: "ps-1 col-auto align-self-center" },
                                React__default.createElement("p", { style: subtituloStyle }, "Direcci\u00F3n Rural"))),
                        React__default.createElement(DireccionRural, null)))))));
};

export { ContactoPersona as C, NombrePersona as N, UbicacionPersona as U, Nuip as a };
//# sourceMappingURL=UbicacionPersona-BkrtFdKM.js.map
