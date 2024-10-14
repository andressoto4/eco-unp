import * as React from 'react';
import React__default, { useMemo, useContext, useState, useEffect, createContext } from 'react';
import { j as jsxRuntimeExports, T as TransitionWrapper, t as transitionEndListener, c as classNames, s as style, E as EXITED, a as EXITING, b as ENTERING, d as ENTERED, e as triggerBrowserReflow, F as FormContext, u as useBootstrapPrefix, f as FormCheckInput, h as hasChildOfType, g as Feedback, R as Row, C as Col, i as FormGroup, k as FormLabel, l as FormControl, _ as __awaiter, m as __generator, n as Container, o as Card, p as CardBody, q as FaTreeCity, r as FaTree } from './index-DzkrM1Rw.js';

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

var ContactoPersona = function () {
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

var NombrePersona = function () {
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

var Nuip = function (_a) {
    var _b = _a.attach, attach = _b === void 0 ? false : _b;
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
            React__default.createElement(Col, { md: 8, xs: 12, style: { display: attach ? 'block' : 'none' } },
                React__default.createElement(FormGroup, { controlId: "formFile", className: "mb-3" },
                    React__default.createElement(FormLabel, null,
                        "Fotocopia del documento de identificaci\u00F3n personal ",
                        React__default.createElement("span", { className: "text-danger" }, "*")),
                    React__default.createElement(FormControl, { type: "file", required: attach }))))));
};

var Pais = function (_a) {
    var idPaisUbicacion = _a.idPaisUbicacion, onChange = _a.onChange, paisRef = _a.paisRef;
    var _b = useState([]), paises = _b[0], setPaises = _b[1];
    var _c = useState('0'), paisSeleccionado = _c[0], setPaisSeleccionado = _c[1];
    useEffect(function () {
        var obtenerPaises = function () { return __awaiter(void 0, void 0, void 0, function () {
            var response, data, paisFiltrado, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, fetch("".concat(process.env.REACT_APP_API_ENDPOINT, "/pais/"))];
                    case 1:
                        response = _a.sent();
                        if (!response.ok) return [3 /*break*/, 3];
                        return [4 /*yield*/, response.json()];
                    case 2:
                        data = _a.sent();
                        if (idPaisUbicacion) {
                            paisFiltrado = data.find(function (pais) { return pais.id_pais === idPaisUbicacion; });
                            setPaises(paisFiltrado ? [paisFiltrado] : []);
                        }
                        else {
                            setPaises(data);
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        console.error('Hubo un error al obtener los datos de los países:', response.status);
                        _a.label = 4;
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        error_1 = _a.sent();
                        console.error('Hubo un error al obtener los datos de los países:', error_1);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        }); };
        obtenerPaises();
    }, [idPaisUbicacion]);
    var handlePaisChange = function (event) {
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
            paises.map(function (pais) { return (React__default.createElement("option", { key: pais.id_pais, value: pais.id_pais }, pais.nombre_pais)); }))));
};

var Departamento = function (_a) {
    var idPais = _a.idPais, onChange = _a.onChange, departamentoRef = _a.departamentoRef;
    var _b = useState([]), departamentos = _b[0], setDepartamentos = _b[1];
    var _c = useState('0'), departamentoSeleccionado = _c[0], setDepartamentoSeleccionado = _c[1];
    useEffect(function () {
        var obtenerDepartamentos = function () { return __awaiter(void 0, void 0, void 0, function () {
            var url, response, data, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        url = "".concat(process.env.REACT_APP_API_ENDPOINT, "/departamento/?pais=").concat(idPais);
                        return [4 /*yield*/, fetch(url)];
                    case 1:
                        response = _a.sent();
                        if (!response.ok) return [3 /*break*/, 3];
                        return [4 /*yield*/, response.json()];
                    case 2:
                        data = _a.sent();
                        setDepartamentos(data);
                        return [3 /*break*/, 4];
                    case 3:
                        console.error('Hubo un error al obtener los datos de los departamentos:', response.status);
                        _a.label = 4;
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        error_1 = _a.sent();
                        console.error('Hubo un error al obtener los datos de los departamentos:', error_1);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        }); };
        obtenerDepartamentos();
    }, [idPais]);
    var handleDepartamentoChange = function (event) {
        setDepartamentoSeleccionado(event.target.value);
        if (onChange) {
            onChange(event);
        }
    };
    var selectDisabledStyle = {
        backgroundColor: 'white',
        color: 'black',
    };
    return (React__default.createElement(FormGroup, { className: "mb-3" },
        React__default.createElement(FormLabel, null,
            "Departamento ",
            React__default.createElement("span", { className: "text-danger" }, "*")),
        React__default.createElement(FormSelect, { ref: departamentoRef, value: departamentoSeleccionado, onChange: handleDepartamentoChange, disabled: idPais === 0, style: idPais === 0 ? selectDisabledStyle : {} },
            React__default.createElement("option", { value: "0", style: { color: 'darkgray' } }, "Seleccione..."),
            departamentos.map(function (departamento) { return (React__default.createElement("option", { key: departamento.id_departamento, value: departamento.id_departamento }, departamento.nombre_departamento)); }))));
};

var Municipio = function (_a) {
    var idDepartamento = _a.idDepartamento, onChange = _a.onChange, municipioRef = _a.municipioRef;
    var _b = useState([]), municipios = _b[0], setMunicipios = _b[1];
    var _c = useState('0'), municipioSeleccionado = _c[0], setMunicipioSeleccionado = _c[1];
    useEffect(function () {
        if (!idDepartamento) {
            return;
        }
        var obtenerMunicipio = function () { return __awaiter(void 0, void 0, void 0, function () {
            var url, response, data, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        url = "".concat(process.env.REACT_APP_API_ENDPOINT, "/municipio/?departamento=").concat(idDepartamento);
                        return [4 /*yield*/, fetch(url)];
                    case 1:
                        response = _a.sent();
                        if (!response.ok) return [3 /*break*/, 3];
                        return [4 /*yield*/, response.json()];
                    case 2:
                        data = _a.sent();
                        setMunicipios(data);
                        return [3 /*break*/, 4];
                    case 3:
                        console.error('Hubo un error al obtener los datos de los municipios:', response.status);
                        _a.label = 4;
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        error_1 = _a.sent();
                        console.error('Hubo un error al obtener los datos de los municipios:', error_1);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        }); };
        obtenerMunicipio();
    }, [idDepartamento]);
    var handleMunicipioChange = function (event) {
        setMunicipioSeleccionado(event.target.value);
        if (onChange) {
            onChange(event);
        }
    };
    var selectDisabledStyle = {
        backgroundColor: 'white',
        color: 'black',
    };
    return (React__default.createElement(FormGroup, { className: "mb-3" },
        React__default.createElement(FormLabel, null,
            "Municipio / Ciudad ",
            React__default.createElement("span", { className: "text-danger" }, "*")),
        React__default.createElement(FormSelect, { ref: municipioRef, value: municipioSeleccionado, onChange: handleMunicipioChange, disabled: idDepartamento === 0, style: idDepartamento === 0 ? selectDisabledStyle : {} },
            React__default.createElement("option", { value: "0", disabled: true }, "Seleccione..."),
            municipios.map(function (municipio) { return (React__default.createElement("option", { key: municipio.id_municipio, value: municipio.id_municipio }, municipio.nombre_municipio)); }))));
};

// Crear contextos individuales con valores por defecto
var IdPaisUbicacionContext = createContext({
    id: '0',
    setID: function () { },
});
var IdDepartamentoUbicacionContext = createContext({
    id: '0',
    setID: function () { },
});
var IdMunicipioUbicacionContext = createContext({
    id: '0',
    setID: function () { },
});
var IdZonaUbicacionContext = createContext({
    id: '0',
    setID: function () { },
});

var subtituloStyle = {
    fontColor: '#303d50s',
    fontSize: '1.1rem',
    fontWeight: '800',
};
var iconStyle = {
    fontSize: '1.25rem'
};
var Ubicacion = function (_a) {
    var paisDomicilioRef = _a.paisDomicilioRef, departamentoDomicilioRef = _a.departamentoDomicilioRef, municipioDomicilioRef = _a.municipioDomicilioRef;
    var _b = useState('0'), idPaisUbicacion = _b[0], setIdPaisUbicacion = _b[1];
    var _c = useState('0'), idDepartamentoUbicacion = _c[0], setIdDepartamentoUbicacion = _c[1];
    var setIDPaisUbicacion = useContext(IdPaisUbicacionContext).setID;
    var setIDDepartamentoUbicacion = useContext(IdDepartamentoUbicacionContext).setID;
    var setIDMunicipioUbicacion = useContext(IdMunicipioUbicacionContext).setID;
    useContext(IdZonaUbicacionContext).setID;
    var handlePaisChange = function (event) {
        setIdPaisUbicacion(event.target.value);
        setIDPaisUbicacion(event.target.value);
        setIdDepartamentoUbicacion('0');
    };
    var handleDepartamentoChange = function (event) {
        setIdDepartamentoUbicacion(event.target.value);
        setIDDepartamentoUbicacion(event.target.value);
        setIDMunicipioUbicacion('0');
    };
    var handleMunicipioGet = function (event) {
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
var Zona = function (_a) {
    var onChange = _a.onChange, zonaDomicilioRef = _a.zonaDomicilioRef;
    var _b = useState([]), zonas = _b[0], setZonas = _b[1];
    var _c = useState('0'), zonaSeleccionada = _c[0], setZonaSeleccionada = _c[1];
    var setIdZonaUbicacion = useContext(IdZonaUbicacionContext).setID;
    useEffect(function () {
        var obtenerZonas = function () { return __awaiter(void 0, void 0, void 0, function () {
            var response, data, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, fetch("".concat(process.env.REACT_APP_API_ENDPOINT, "/zona/"))];
                    case 1:
                        response = _a.sent();
                        if (!response.ok) return [3 /*break*/, 3];
                        return [4 /*yield*/, response.json()];
                    case 2:
                        data = _a.sent();
                        setZonas(data);
                        return [3 /*break*/, 4];
                    case 3:
                        console.error('Hubo un error al obtener los datos de las zonas:', response.status);
                        _a.label = 4;
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        error_1 = _a.sent();
                        console.error('Hubo un error al obtener los datos de las zonas:', error_1);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        }); };
        obtenerZonas();
    }, []);
    useEffect(function () {
        setIdZonaUbicacion(zonaSeleccionada);
    }, [zonaSeleccionada, setIdZonaUbicacion]);
    var handleZonaChange = function (event) {
        setZonaSeleccionada(event.target.value);
        if (onChange) {
            onChange(event);
        }
    };
    return (React__default.createElement(React__default.Fragment, null,
        React__default.createElement(Col, { md: 3, xs: 12, className: 'mb-3' },
            React__default.createElement(FormLabel, null,
                "Zona ",
                React__default.createElement("span", { className: "text-danger" }, "*")),
            React__default.createElement(FormSelect, { ref: zonaDomicilioRef, value: zonaSeleccionada, onChange: handleZonaChange, required: true },
                React__default.createElement("option", { value: "0" }, "Seleccione una zona"),
                zonas.map(function (zona) { return (React__default.createElement("option", { key: zona.id_zubicacion, value: zona.id_zubicacion }, zona.nombre_zubicacion)); })))));
};
var DireccionUrbana = function (_a) {
    _a.contentType; var viaPrincipalRef = _a.viaPrincipalRef, numeroViaPrincipalRef = _a.numeroViaPrincipalRef, numeroViaSecundariaRef = _a.numeroViaSecundariaRef, numeroPlacaRef = _a.numeroPlacaRef, nombreBarrioRef = _a.nombreBarrioRef;
    var _b = useState(null); _b[0]; _b[1];
    var _c = useState(''), nombreBarrio = _c[0]; _c[1];
    var _d = useState(''), viaPrincipal = _d[0], setViaPrincipal = _d[1];
    var _e = useState(''), numeroViaPrincipal = _e[0]; _e[1];
    var _f = useState(''), letraPrincipal = _f[0]; _f[1];
    var _g = useState(''); _g[0]; _g[1];
    var _h = useState(''), cuadrantePrincipal = _h[0], setCuadrantePrincipal = _h[1];
    var _j = useState(''); _j[0]; _j[1];
    var _k = useState(''), letraSecundaria = _k[0]; _k[1];
    var _l = useState(''), cuadranteSecundario = _l[0], setCuadranteSecundario = _l[1];
    var _m = useState(''), numeroPlaca = _m[0]; _m[1];
    var _o = useState(''), complemento = _o[0]; _o[1];
    var _p = useState(''), resumenDireccion = _p[0]; _p[1];
    var _q = useState(''), indicacionDireccion = _q[0]; _q[1];
    var _r = useState(true); _r[0]; _r[1];
    return (React__default.createElement(Row, null,
        React__default.createElement(Col, { md: 3, xs: 12 },
            React__default.createElement(FormGroup, { className: "mb-3" },
                React__default.createElement(FormLabel, null,
                    "V\u00EDa principal ",
                    React__default.createElement("span", { className: "text-danger" }, "*")),
                React__default.createElement(FormSelect, { ref: viaPrincipalRef, value: viaPrincipal, onChange: function (e) { return setViaPrincipal(e.target.value); }, required: true },
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
                React__default.createElement(FormControl, { ref: numeroViaPrincipalRef, type: "text", value: numeroViaPrincipal, placeholder: 'Ej: 23', required: true }))),
        React__default.createElement(Col, { md: 2, xs: 12 },
            React__default.createElement(FormGroup, { className: "mb-3" },
                React__default.createElement(FormLabel, null,
                    "Letra ",
                    React__default.createElement("span", { className: "text-danger" })),
                React__default.createElement(FormControl, { type: "text", value: letraPrincipal, placeholder: 'Ej: A' }))),
        React__default.createElement(Col, { md: 2, xs: 12, className: 'align-self-end' },
            React__default.createElement(FormGroup, { className: 'mb-4' },
                React__default.createElement(FormCheck$1, { type: "checkbox", label: "\u00BFEs bis?" }))),
        React__default.createElement(Col, { md: 3, xs: 12 },
            React__default.createElement(FormGroup, { className: "mb-3" },
                React__default.createElement(FormLabel, null,
                    "Cardinalidad ",
                    React__default.createElement("span", { className: "text-danger" })),
                React__default.createElement(FormSelect, { value: cuadrantePrincipal, onChange: function (e) { return setCuadrantePrincipal(e.target.value); } },
                    React__default.createElement("option", { value: "" }, "Seleccione la cardinalidad"),
                    React__default.createElement("option", { value: "Norte" }, "Norte"),
                    React__default.createElement("option", { value: "Sur" }, "Sur"),
                    React__default.createElement("option", { value: "Este" }, "Este"),
                    React__default.createElement("option", { value: "Oeste" }, "Oeste")))),
        React__default.createElement(Col, { xs: 12, className: 'col-md-auto text-center align-self-center' },
            React__default.createElement("div", { className: 'mt-3 p-1' },
                React__default.createElement("b", null, "#"))),
        React__default.createElement(Col, { md: 2, xs: 12 },
            React__default.createElement(FormGroup, { className: "mb-3" },
                React__default.createElement(FormLabel, null,
                    "N\u00FAmero uno ",
                    React__default.createElement("span", { className: "text-danger" }, "*")),
                React__default.createElement(FormControl, { ref: numeroViaSecundariaRef, type: "text", placeholder: 'Ej: 13', required: true }))),
        React__default.createElement(Col, { md: 2, xs: 12 },
            React__default.createElement(FormGroup, { className: "mb-3" },
                React__default.createElement(FormLabel, null,
                    "Letra ",
                    React__default.createElement("span", { className: "text-danger" })),
                React__default.createElement(FormControl, { type: "text", value: letraSecundaria, placeholder: 'Ej: C' }))),
        React__default.createElement(Col, { md: 2, xs: 12 },
            React__default.createElement(FormGroup, { className: "mb-3" },
                React__default.createElement(FormLabel, null,
                    "Cardinalidad ",
                    React__default.createElement("span", { className: "text-danger" })),
                React__default.createElement(FormSelect, { value: cuadranteSecundario, onChange: function (e) { return setCuadranteSecundario(e.target.value); } },
                    React__default.createElement("option", { value: "" }, "Seleccione la cardinalidad"),
                    React__default.createElement("option", { value: "Norte" }, "Norte"),
                    React__default.createElement("option", { value: "Sur" }, "Sur"),
                    React__default.createElement("option", { value: "Este" }, "Este"),
                    React__default.createElement("option", { value: "Oeste" }, "Oeste")))),
        React__default.createElement(Col, { xs: 12, className: 'col-md-auto text-center align-self-center' },
            React__default.createElement("div", { className: 'mt-3 p-1' },
                React__default.createElement("b", null, "-"))),
        React__default.createElement(Col, { md: 2, xs: 12 },
            React__default.createElement(FormGroup, { className: "mb-3" },
                React__default.createElement(FormLabel, null,
                    "N\u00FAmero dos ",
                    React__default.createElement("span", { className: "text-danger" }, "*")),
                React__default.createElement(FormControl, { ref: numeroPlacaRef, type: "text", value: numeroPlaca, placeholder: 'Ej: 25', required: true }))),
        React__default.createElement(Col, { md: 3, xs: 12, style: { paddingRight: '7px' } },
            React__default.createElement(FormGroup, { className: "mb-3" },
                React__default.createElement(FormLabel, null,
                    "Complemento ",
                    React__default.createElement("span", { className: "text-danger" })),
                React__default.createElement(FormControl, { type: "text", value: complemento, placeholder: 'Ej: Casa 3' }))),
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
                React__default.createElement(FormControl, { type: "text", className: 'bg-body-secondary', value: resumenDireccion, disabled: true }))),
        React__default.createElement(Col, { md: 12, xs: 12 },
            React__default.createElement(FormGroup, { className: "mb-2" },
                React__default.createElement(FormLabel, null, "Indicaciones del lugar de domicilio"),
                React__default.createElement(FormControl, { type: "text", value: indicacionDireccion })))));
};
var DireccionRural = function (_a) {
    _a.contentType; var corregimientoRef = _a.corregimientoRef, veredaRef = _a.veredaRef, centroPobladoRef = _a.centroPobladoRef;
    var _b = useState(null); _b[0]; _b[1];
    var _c = useState(''), corregimiento = _c[0]; _c[1];
    var _d = useState(''), vereda = _d[0]; _d[1];
    var _e = useState(''), centroPoblado = _e[0]; _e[1];
    var _f = useState(''); _f[0]; _f[1];
    var _g = useState(''), indicacionDireccion = _g[0]; _g[1];
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
var UbicacionPersona = function () {
    var _a = useState(''), zona = _a[0], setZona = _a[1];
    var handleZonaChange = function (e) {
        setZona(e.target.value);
    };
    return (React__default.createElement(Row, null,
        React__default.createElement(Ubicacion, null),
        React__default.createElement(Zona, { onChange: handleZonaChange }),
        React__default.createElement(Collapse, { in: zona === '1' },
            React__default.createElement(Container, { className: "pb-0 mb-0 bg-section" },
                React__default.createElement(Card, { className: "border-light-subtle rounded-3" },
                    React__default.createElement(CardBody, null,
                        React__default.createElement(Row, { className: 'mb-1 mt-1' },
                            React__default.createElement(Col, { className: "col-auto pe-1" },
                                React__default.createElement(FaTreeCity, { style: iconStyle })),
                            React__default.createElement(Col, { className: "ps-1 col-auto align-self-center" },
                                React__default.createElement("p", { style: subtituloStyle }, "Direcci\u00F3n urbana"))),
                        React__default.createElement(DireccionUrbana, null))))),
        React__default.createElement(Collapse, { in: zona === '2' },
            React__default.createElement(Container, { className: "pb-0 mb-0 bg-section" },
                React__default.createElement(Card, { className: "border-light-subtle rounded-3" },
                    React__default.createElement(CardBody, null,
                        React__default.createElement(Row, { className: 'mb-1 mt-1' },
                            React__default.createElement(Col, { className: "col-auto pe-1" },
                                React__default.createElement(FaTree, { style: iconStyle })),
                            React__default.createElement(Col, { className: "ps-1 col-auto align-self-center" },
                                React__default.createElement("p", { style: subtituloStyle }, "Direcci\u00F3n Rural"))),
                        React__default.createElement(DireccionRural, null)))))));
};

export { ContactoPersona as C, NombrePersona as N, UbicacionPersona as U, Nuip as a };
//# sourceMappingURL=UbicacionPersona-CvsEgnDq.js.map
