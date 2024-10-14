'use strict';

var React = require('react');
var index = require('./index-vOWaKo8E.js');

function _interopNamespaceDefault(e) {
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n.default = e;
  return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespaceDefault(React);

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
  parseInt(index.style(elem, margins[0]), 10) +
  // @ts-ignore
  parseInt(index.style(elem, margins[1]), 10);
}
const collapseStyles = {
  [index.EXITED]: 'collapse',
  [index.EXITING]: 'collapsing',
  [index.ENTERING]: 'collapsing',
  [index.ENTERED]: 'collapse show'
};
const Collapse = /*#__PURE__*/React.forwardRef(({
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
  const handleEnter = React.useMemo(() => createChainedFunction(elem => {
    elem.style[computedDimension] = '0';
  }, onEnter), [computedDimension, onEnter]);
  const handleEntering = React.useMemo(() => createChainedFunction(elem => {
    const scroll = `scroll${computedDimension[0].toUpperCase()}${computedDimension.slice(1)}`;
    elem.style[computedDimension] = `${elem[scroll]}px`;
  }, onEntering), [computedDimension, onEntering]);
  const handleEntered = React.useMemo(() => createChainedFunction(elem => {
    elem.style[computedDimension] = null;
  }, onEntered), [computedDimension, onEntered]);

  /* -- Collapsing -- */
  const handleExit = React.useMemo(() => createChainedFunction(elem => {
    elem.style[computedDimension] = `${getDimensionValue(computedDimension, elem)}px`;
    index.triggerBrowserReflow(elem);
  }, onExit), [onExit, getDimensionValue, computedDimension]);
  const handleExiting = React.useMemo(() => createChainedFunction(elem => {
    elem.style[computedDimension] = null;
  }, onExiting), [computedDimension, onExiting]);
  return /*#__PURE__*/index.jsxRuntimeExports.jsx(index.TransitionWrapper, {
    ref: ref,
    addEndListener: index.transitionEndListener,
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
    children: (state, innerProps) => /*#__PURE__*/React.cloneElement(children, {
      ...innerProps,
      className: index.classNames(className, children.props.className, collapseStyles[state], computedDimension === 'width' && 'collapse-horizontal')
    })
  });
});

const FormCheckLabel = /*#__PURE__*/React__namespace.forwardRef(({
  bsPrefix,
  className,
  htmlFor,
  ...props
}, ref) => {
  const {
    controlId
  } = React.useContext(index.FormContext);
  bsPrefix = index.useBootstrapPrefix(bsPrefix, 'form-check-label');
  return /*#__PURE__*/index.jsxRuntimeExports.jsx("label", {
    ...props,
    ref: ref,
    htmlFor: htmlFor || controlId,
    className: index.classNames(className, bsPrefix)
  });
});
FormCheckLabel.displayName = 'FormCheckLabel';

const FormCheck = /*#__PURE__*/React__namespace.forwardRef(({
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
  bsPrefix = index.useBootstrapPrefix(bsPrefix, 'form-check');
  bsSwitchPrefix = index.useBootstrapPrefix(bsSwitchPrefix, 'form-switch');
  const {
    controlId
  } = React.useContext(index.FormContext);
  const innerFormContext = React.useMemo(() => ({
    controlId: id || controlId
  }), [controlId, id]);
  const hasLabel = !children && label != null && label !== false || index.hasChildOfType(children, FormCheckLabel);
  const input = /*#__PURE__*/index.jsxRuntimeExports.jsx(index.FormCheckInput, {
    ...props,
    type: type === 'switch' ? 'checkbox' : type,
    ref: ref,
    isValid: isValid,
    isInvalid: isInvalid,
    disabled: disabled,
    as: as
  });
  return /*#__PURE__*/index.jsxRuntimeExports.jsx(index.FormContext.Provider, {
    value: innerFormContext,
    children: /*#__PURE__*/index.jsxRuntimeExports.jsx("div", {
      style: style,
      className: index.classNames(className, hasLabel && bsPrefix, inline && `${bsPrefix}-inline`, reverse && `${bsPrefix}-reverse`, type === 'switch' && bsSwitchPrefix),
      children: children || /*#__PURE__*/index.jsxRuntimeExports.jsxs(index.jsxRuntimeExports.Fragment, {
        children: [input, hasLabel && /*#__PURE__*/index.jsxRuntimeExports.jsx(FormCheckLabel, {
          title: title,
          children: label
        }), feedback && /*#__PURE__*/index.jsxRuntimeExports.jsx(index.Feedback, {
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
  Input: index.FormCheckInput,
  Label: FormCheckLabel
});

const FormSelect = /*#__PURE__*/React__namespace.forwardRef(({
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
  } = React.useContext(index.FormContext);
  bsPrefix = index.useBootstrapPrefix(bsPrefix, 'form-select');
  return /*#__PURE__*/index.jsxRuntimeExports.jsx("select", {
    ...props,
    size: htmlSize,
    ref: ref,
    className: index.classNames(className, bsPrefix, size && `${bsPrefix}-${size}`, isValid && `is-valid`, isInvalid && `is-invalid`),
    id: id || controlId
  });
});
FormSelect.displayName = 'FormSelect';

var ContactoPersona = function () {
    return (React.createElement(index.Row, null,
        React.createElement(index.Col, { md: 4, xs: 12 },
            React.createElement(index.FormGroup, { className: "mb-3" },
                React.createElement(index.FormLabel, null,
                    "Celular uno ",
                    React.createElement("span", { className: "text-danger" }, "*")),
                React.createElement(index.FormControl, { minLength: 10, maxLength: 10, placeholder: "Ej: 300 200 2000", required: true }))),
        React.createElement(index.Col, { md: 4, xs: 12 },
            React.createElement(index.FormGroup, { className: "mb-3" },
                React.createElement(index.FormLabel, null, "Celular dos "),
                React.createElement(index.FormControl, { minLength: 10, maxLength: 10, placeholder: "Ej: 300 200 2000" }))),
        React.createElement(index.Col, { md: 4, xs: 12 },
            React.createElement(index.FormGroup, { className: "mb-3" },
                React.createElement(index.FormLabel, null, "Tel\u00E9fono (o celular tres)"),
                React.createElement(index.FormControl, { minLength: 10, maxLength: 10, placeholder: "Ej: 600 700 7000" }))),
        React.createElement(index.Col, { xl: 6, md: 9, xs: 12 },
            React.createElement(index.FormGroup, { className: "mb-3" },
                React.createElement(index.FormLabel, null,
                    "Correo electr\u00F3nico ",
                    React.createElement("span", { className: "text-danger" }, "*")),
                React.createElement(index.FormControl, { type: "email", maxLength: 100, required: true })))));
};

var NombrePersona = function () {
    return (React.createElement(index.Row, null,
        React.createElement(index.Col, { lg: 3, md: 6, xs: 12 },
            React.createElement(index.FormGroup, { className: "mb-3" },
                React.createElement(index.FormLabel, null,
                    "Primer nombre ",
                    React.createElement("span", { className: "text-danger" }, "*")),
                React.createElement(index.FormControl, { type: "text", maxLength: 20, required: true }))),
        React.createElement(index.Col, { lg: 3, md: 6, xs: 12 },
            React.createElement(index.FormGroup, { className: "mb-3" },
                React.createElement(index.FormLabel, null, "Segundo nombre"),
                React.createElement(index.FormControl, { type: "text", maxLength: 50 }))),
        React.createElement(index.Col, { lg: 3, md: 6, xs: 12 },
            React.createElement(index.FormGroup, { className: "mb-3" },
                React.createElement(index.FormLabel, null,
                    "Primer apellido ",
                    React.createElement("span", { className: "text-danger" }, "*")),
                React.createElement(index.FormControl, { type: "text", maxLength: 50, required: true }))),
        React.createElement(index.Col, { lg: 3, md: 6, xs: 12 },
            React.createElement(index.FormGroup, { className: "mb-3" },
                React.createElement(index.FormLabel, null, "Segundo apellido"),
                React.createElement(index.FormControl, { type: "text", maxLength: 50 })))));
};

var Nuip = function (_a) {
    var _b = _a.attach, attach = _b === void 0 ? false : _b;
    return (React.createElement(React.Fragment, null,
        React.createElement(index.Row, null,
            React.createElement(index.Col, { md: 4, xs: 12 },
                React.createElement(index.FormGroup, { className: "mb-3" },
                    React.createElement(index.FormLabel, null,
                        "Tipo de identificaci\u00F3n ",
                        React.createElement("span", { className: "text-danger" }, "*")),
                    React.createElement(FormSelect, null,
                        React.createElement("option", { value: "0" }, "Seleccione..."),
                        React.createElement("option", { value: "1" }, "Tarjeta de identidad"),
                        React.createElement("option", { value: "2" }, "C\u00E9dula de ciudadan\u00EDa"),
                        React.createElement("option", { value: "3" }, "C\u00E9dula de Extranjer\u00EDa"),
                        React.createElement("option", { value: "4" }, "Pasaporte")))),
            React.createElement(index.Col, { md: 4, xs: 12 },
                React.createElement(index.FormGroup, { className: "mb-3" },
                    React.createElement(index.FormLabel, null,
                        "N\u00FAmero de identificaci\u00F3n ",
                        React.createElement("span", { className: "text-danger" }, "*")),
                    React.createElement(index.FormControl, { type: "text", minLength: 6, maxLength: 15, required: true }))),
            React.createElement(index.Col, { md: 4, xs: 12 },
                React.createElement(index.FormGroup, { className: "mb-3" },
                    React.createElement(index.FormLabel, null,
                        "Fecha de expedici\u00F3n ",
                        React.createElement("span", { className: "text-danger" }, "*")),
                    React.createElement(index.FormControl, { type: "date", max: new Date().toISOString().split("T")[0], required: true }))),
            React.createElement(index.Col, { md: 8, xs: 12, style: { display: attach ? 'block' : 'none' } },
                React.createElement(index.FormGroup, { controlId: "formFile", className: "mb-3" },
                    React.createElement(index.FormLabel, null,
                        "Fotocopia del documento de identificaci\u00F3n personal ",
                        React.createElement("span", { className: "text-danger" }, "*")),
                    React.createElement(index.FormControl, { type: "file", required: attach }))))));
};

var Pais = function (_a) {
    var idPaisUbicacion = _a.idPaisUbicacion, onChange = _a.onChange, paisRef = _a.paisRef;
    var _b = React.useState([]), paises = _b[0], setPaises = _b[1];
    var _c = React.useState('0'), paisSeleccionado = _c[0], setPaisSeleccionado = _c[1];
    React.useEffect(function () {
        var obtenerPaises = function () { return index.__awaiter(void 0, void 0, void 0, function () {
            var response, data, paisFiltrado, error_1;
            return index.__generator(this, function (_a) {
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
    return (React.createElement(index.FormGroup, { className: "mb-3" },
        React.createElement(index.FormLabel, null,
            "Pa\u00EDs ",
            React.createElement("span", { className: "text-danger" }, "*")),
        React.createElement(FormSelect, { ref: paisRef, value: paisSeleccionado, onChange: handlePaisChange },
            React.createElement("option", { value: "0", disabled: true }, "Seleccione..."),
            paises.map(function (pais) { return (React.createElement("option", { key: pais.id_pais, value: pais.id_pais }, pais.nombre_pais)); }))));
};

var Departamento = function (_a) {
    var idPais = _a.idPais, onChange = _a.onChange, departamentoRef = _a.departamentoRef;
    var _b = React.useState([]), departamentos = _b[0], setDepartamentos = _b[1];
    var _c = React.useState('0'), departamentoSeleccionado = _c[0], setDepartamentoSeleccionado = _c[1];
    React.useEffect(function () {
        var obtenerDepartamentos = function () { return index.__awaiter(void 0, void 0, void 0, function () {
            var url, response, data, error_1;
            return index.__generator(this, function (_a) {
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
    return (React.createElement(index.FormGroup, { className: "mb-3" },
        React.createElement(index.FormLabel, null,
            "Departamento ",
            React.createElement("span", { className: "text-danger" }, "*")),
        React.createElement(FormSelect, { ref: departamentoRef, value: departamentoSeleccionado, onChange: handleDepartamentoChange, disabled: idPais === 0, style: idPais === 0 ? selectDisabledStyle : {} },
            React.createElement("option", { value: "0", style: { color: 'darkgray' } }, "Seleccione..."),
            departamentos.map(function (departamento) { return (React.createElement("option", { key: departamento.id_departamento, value: departamento.id_departamento }, departamento.nombre_departamento)); }))));
};

var Municipio = function (_a) {
    var idDepartamento = _a.idDepartamento, onChange = _a.onChange, municipioRef = _a.municipioRef;
    var _b = React.useState([]), municipios = _b[0], setMunicipios = _b[1];
    var _c = React.useState('0'), municipioSeleccionado = _c[0], setMunicipioSeleccionado = _c[1];
    React.useEffect(function () {
        if (!idDepartamento) {
            return;
        }
        var obtenerMunicipio = function () { return index.__awaiter(void 0, void 0, void 0, function () {
            var url, response, data, error_1;
            return index.__generator(this, function (_a) {
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
    return (React.createElement(index.FormGroup, { className: "mb-3" },
        React.createElement(index.FormLabel, null,
            "Municipio / Ciudad ",
            React.createElement("span", { className: "text-danger" }, "*")),
        React.createElement(FormSelect, { ref: municipioRef, value: municipioSeleccionado, onChange: handleMunicipioChange, disabled: idDepartamento === 0, style: idDepartamento === 0 ? selectDisabledStyle : {} },
            React.createElement("option", { value: "0", disabled: true }, "Seleccione..."),
            municipios.map(function (municipio) { return (React.createElement("option", { key: municipio.id_municipio, value: municipio.id_municipio }, municipio.nombre_municipio)); }))));
};

// Crear contextos individuales con valores por defecto
var IdPaisUbicacionContext = React.createContext({
    id: '0',
    setID: function () { },
});
var IdDepartamentoUbicacionContext = React.createContext({
    id: '0',
    setID: function () { },
});
var IdMunicipioUbicacionContext = React.createContext({
    id: '0',
    setID: function () { },
});
var IdZonaUbicacionContext = React.createContext({
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
    var _b = React.useState('0'), idPaisUbicacion = _b[0], setIdPaisUbicacion = _b[1];
    var _c = React.useState('0'), idDepartamentoUbicacion = _c[0], setIdDepartamentoUbicacion = _c[1];
    var setIDPaisUbicacion = React.useContext(IdPaisUbicacionContext).setID;
    var setIDDepartamentoUbicacion = React.useContext(IdDepartamentoUbicacionContext).setID;
    var setIDMunicipioUbicacion = React.useContext(IdMunicipioUbicacionContext).setID;
    React.useContext(IdZonaUbicacionContext).setID;
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
    return (React.createElement(React.Fragment, null,
        React.createElement(index.Col, { lg: 3, md: 6, xs: 12 },
            React.createElement(Pais, { paisRef: paisDomicilioRef, idPaisUbicacion: Number(idPaisUbicacion), onChange: handlePaisChange })),
        React.createElement(index.Col, { lg: 3, md: 6, xs: 12 },
            React.createElement(Departamento, { departamentoRef: departamentoDomicilioRef, idPais: Number(idPaisUbicacion), onChange: handleDepartamentoChange })),
        React.createElement(index.Col, { lg: 3, md: 6, xs: 12 },
            React.createElement(Municipio, { municipioRef: municipioDomicilioRef, idDepartamento: Number(idDepartamentoUbicacion), onChange: handleMunicipioGet }))));
};
var Zona = function (_a) {
    var onChange = _a.onChange, zonaDomicilioRef = _a.zonaDomicilioRef;
    var _b = React.useState([]), zonas = _b[0], setZonas = _b[1];
    var _c = React.useState('0'), zonaSeleccionada = _c[0], setZonaSeleccionada = _c[1];
    var setIdZonaUbicacion = React.useContext(IdZonaUbicacionContext).setID;
    React.useEffect(function () {
        var obtenerZonas = function () { return index.__awaiter(void 0, void 0, void 0, function () {
            var response, data, error_1;
            return index.__generator(this, function (_a) {
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
    React.useEffect(function () {
        setIdZonaUbicacion(zonaSeleccionada);
    }, [zonaSeleccionada, setIdZonaUbicacion]);
    var handleZonaChange = function (event) {
        setZonaSeleccionada(event.target.value);
        if (onChange) {
            onChange(event);
        }
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(index.Col, { md: 3, xs: 12, className: 'mb-3' },
            React.createElement(index.FormLabel, null,
                "Zona ",
                React.createElement("span", { className: "text-danger" }, "*")),
            React.createElement(FormSelect, { ref: zonaDomicilioRef, value: zonaSeleccionada, onChange: handleZonaChange, required: true },
                React.createElement("option", { value: "0" }, "Seleccione una zona"),
                zonas.map(function (zona) { return (React.createElement("option", { key: zona.id_zubicacion, value: zona.id_zubicacion }, zona.nombre_zubicacion)); })))));
};
var DireccionUrbana = function (_a) {
    _a.contentType; var viaPrincipalRef = _a.viaPrincipalRef, numeroViaPrincipalRef = _a.numeroViaPrincipalRef, numeroViaSecundariaRef = _a.numeroViaSecundariaRef, numeroPlacaRef = _a.numeroPlacaRef, nombreBarrioRef = _a.nombreBarrioRef;
    var _b = React.useState(null); _b[0]; _b[1];
    var _c = React.useState(''), nombreBarrio = _c[0]; _c[1];
    var _d = React.useState(''), viaPrincipal = _d[0], setViaPrincipal = _d[1];
    var _e = React.useState(''), numeroViaPrincipal = _e[0]; _e[1];
    var _f = React.useState(''), letraPrincipal = _f[0]; _f[1];
    var _g = React.useState(''); _g[0]; _g[1];
    var _h = React.useState(''), cuadrantePrincipal = _h[0], setCuadrantePrincipal = _h[1];
    var _j = React.useState(''); _j[0]; _j[1];
    var _k = React.useState(''), letraSecundaria = _k[0]; _k[1];
    var _l = React.useState(''), cuadranteSecundario = _l[0], setCuadranteSecundario = _l[1];
    var _m = React.useState(''), numeroPlaca = _m[0]; _m[1];
    var _o = React.useState(''), complemento = _o[0]; _o[1];
    var _p = React.useState(''), resumenDireccion = _p[0]; _p[1];
    var _q = React.useState(''), indicacionDireccion = _q[0]; _q[1];
    var _r = React.useState(true); _r[0]; _r[1];
    return (React.createElement(index.Row, null,
        React.createElement(index.Col, { md: 3, xs: 12 },
            React.createElement(index.FormGroup, { className: "mb-3" },
                React.createElement(index.FormLabel, null,
                    "V\u00EDa principal ",
                    React.createElement("span", { className: "text-danger" }, "*")),
                React.createElement(FormSelect, { ref: viaPrincipalRef, value: viaPrincipal, onChange: function (e) { return setViaPrincipal(e.target.value); }, required: true },
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
        React.createElement(index.Col, { md: 2, xs: 12 },
            React.createElement(index.FormGroup, { className: "mb-3" },
                React.createElement(index.FormLabel, null,
                    "N\u00FAmero v\u00EDa ",
                    React.createElement("span", { className: "text-danger" }, "*")),
                React.createElement(index.FormControl, { ref: numeroViaPrincipalRef, type: "text", value: numeroViaPrincipal, placeholder: 'Ej: 23', required: true }))),
        React.createElement(index.Col, { md: 2, xs: 12 },
            React.createElement(index.FormGroup, { className: "mb-3" },
                React.createElement(index.FormLabel, null,
                    "Letra ",
                    React.createElement("span", { className: "text-danger" })),
                React.createElement(index.FormControl, { type: "text", value: letraPrincipal, placeholder: 'Ej: A' }))),
        React.createElement(index.Col, { md: 2, xs: 12, className: 'align-self-end' },
            React.createElement(index.FormGroup, { className: 'mb-4' },
                React.createElement(FormCheck$1, { type: "checkbox", label: "\u00BFEs bis?" }))),
        React.createElement(index.Col, { md: 3, xs: 12 },
            React.createElement(index.FormGroup, { className: "mb-3" },
                React.createElement(index.FormLabel, null,
                    "Cardinalidad ",
                    React.createElement("span", { className: "text-danger" })),
                React.createElement(FormSelect, { value: cuadrantePrincipal, onChange: function (e) { return setCuadrantePrincipal(e.target.value); } },
                    React.createElement("option", { value: "" }, "Seleccione la cardinalidad"),
                    React.createElement("option", { value: "Norte" }, "Norte"),
                    React.createElement("option", { value: "Sur" }, "Sur"),
                    React.createElement("option", { value: "Este" }, "Este"),
                    React.createElement("option", { value: "Oeste" }, "Oeste")))),
        React.createElement(index.Col, { xs: 12, className: 'col-md-auto text-center align-self-center' },
            React.createElement("div", { className: 'mt-3 p-1' },
                React.createElement("b", null, "#"))),
        React.createElement(index.Col, { md: 2, xs: 12 },
            React.createElement(index.FormGroup, { className: "mb-3" },
                React.createElement(index.FormLabel, null,
                    "N\u00FAmero uno ",
                    React.createElement("span", { className: "text-danger" }, "*")),
                React.createElement(index.FormControl, { ref: numeroViaSecundariaRef, type: "text", placeholder: 'Ej: 13', required: true }))),
        React.createElement(index.Col, { md: 2, xs: 12 },
            React.createElement(index.FormGroup, { className: "mb-3" },
                React.createElement(index.FormLabel, null,
                    "Letra ",
                    React.createElement("span", { className: "text-danger" })),
                React.createElement(index.FormControl, { type: "text", value: letraSecundaria, placeholder: 'Ej: C' }))),
        React.createElement(index.Col, { md: 2, xs: 12 },
            React.createElement(index.FormGroup, { className: "mb-3" },
                React.createElement(index.FormLabel, null,
                    "Cardinalidad ",
                    React.createElement("span", { className: "text-danger" })),
                React.createElement(FormSelect, { value: cuadranteSecundario, onChange: function (e) { return setCuadranteSecundario(e.target.value); } },
                    React.createElement("option", { value: "" }, "Seleccione la cardinalidad"),
                    React.createElement("option", { value: "Norte" }, "Norte"),
                    React.createElement("option", { value: "Sur" }, "Sur"),
                    React.createElement("option", { value: "Este" }, "Este"),
                    React.createElement("option", { value: "Oeste" }, "Oeste")))),
        React.createElement(index.Col, { xs: 12, className: 'col-md-auto text-center align-self-center' },
            React.createElement("div", { className: 'mt-3 p-1' },
                React.createElement("b", null, "-"))),
        React.createElement(index.Col, { md: 2, xs: 12 },
            React.createElement(index.FormGroup, { className: "mb-3" },
                React.createElement(index.FormLabel, null,
                    "N\u00FAmero dos ",
                    React.createElement("span", { className: "text-danger" }, "*")),
                React.createElement(index.FormControl, { ref: numeroPlacaRef, type: "text", value: numeroPlaca, placeholder: 'Ej: 25', required: true }))),
        React.createElement(index.Col, { md: 3, xs: 12, style: { paddingRight: '7px' } },
            React.createElement(index.FormGroup, { className: "mb-3" },
                React.createElement(index.FormLabel, null,
                    "Complemento ",
                    React.createElement("span", { className: "text-danger" })),
                React.createElement(index.FormControl, { type: "text", value: complemento, placeholder: 'Ej: Casa 3' }))),
        React.createElement(index.Col, { md: 4, xs: 12 },
            React.createElement(index.FormGroup, { className: "mb-3" },
                React.createElement(index.FormLabel, null,
                    "Barrio / Sector ",
                    React.createElement("span", { className: "text-danger" }, "*")),
                React.createElement(index.FormControl, { ref: nombreBarrioRef, type: "text", value: nombreBarrio, required: true }))),
        React.createElement(index.Col, { md: 8, xs: 12 },
            React.createElement(index.FormGroup, { className: "mb-2" },
                React.createElement(index.FormLabel, null,
                    "Resumen de direcci\u00F3n ",
                    React.createElement("span", { className: "text-danger" }, "**")),
                React.createElement(index.FormControl, { type: "text", className: 'bg-body-secondary', value: resumenDireccion, disabled: true }))),
        React.createElement(index.Col, { md: 12, xs: 12 },
            React.createElement(index.FormGroup, { className: "mb-2" },
                React.createElement(index.FormLabel, null, "Indicaciones del lugar de domicilio"),
                React.createElement(index.FormControl, { type: "text", value: indicacionDireccion })))));
};
var DireccionRural = function (_a) {
    _a.contentType; var corregimientoRef = _a.corregimientoRef, veredaRef = _a.veredaRef, centroPobladoRef = _a.centroPobladoRef;
    var _b = React.useState(null); _b[0]; _b[1];
    var _c = React.useState(''), corregimiento = _c[0]; _c[1];
    var _d = React.useState(''), vereda = _d[0]; _d[1];
    var _e = React.useState(''), centroPoblado = _e[0]; _e[1];
    var _f = React.useState(''); _f[0]; _f[1];
    var _g = React.useState(''), indicacionDireccion = _g[0]; _g[1];
    return (React.createElement(index.Row, null,
        React.createElement(index.Col, { md: 4, xs: 12 },
            React.createElement(index.FormGroup, { className: "mb-3" },
                React.createElement(index.FormLabel, null,
                    "Corregimiento ",
                    React.createElement("span", { className: "text-danger" })),
                React.createElement(index.FormControl, { ref: corregimientoRef, type: "text", value: corregimiento, maxLength: 100 }))),
        React.createElement(index.Col, { md: 4, xs: 12 },
            React.createElement(index.FormGroup, { className: "mb-3" },
                React.createElement(index.FormLabel, null,
                    "Vereda ",
                    React.createElement("span", { className: "text-danger" }, "*")),
                React.createElement(index.FormControl, { ref: veredaRef, type: "text", value: vereda, maxLength: 100, required: true }))),
        React.createElement(index.Col, { md: 4, xs: 12 },
            React.createElement(index.FormGroup, { className: "mb-3" },
                React.createElement(index.FormLabel, null,
                    "Centro poblado ",
                    React.createElement("span", { className: "text-danger" })),
                React.createElement(index.FormControl, { ref: centroPobladoRef, type: "text", value: centroPoblado, maxLength: 100 }))),
        React.createElement(index.Col, { md: 12, xs: 12 },
            React.createElement(index.FormGroup, { className: "mb-2" },
                React.createElement(index.FormLabel, null, "Indicaciones del lugar de domicilio"),
                React.createElement(index.FormControl, { type: "text", value: indicacionDireccion })))));
};
var UbicacionPersona = function () {
    var _a = React.useState(''), zona = _a[0], setZona = _a[1];
    var handleZonaChange = function (e) {
        setZona(e.target.value);
    };
    return (React.createElement(index.Row, null,
        React.createElement(Ubicacion, null),
        React.createElement(Zona, { onChange: handleZonaChange }),
        React.createElement(Collapse, { in: zona === '1' },
            React.createElement(index.Container, { className: "pb-0 mb-0 bg-section" },
                React.createElement(index.Card, { className: "border-light-subtle rounded-3" },
                    React.createElement(index.CardBody, null,
                        React.createElement(index.Row, { className: 'mb-1 mt-1' },
                            React.createElement(index.Col, { className: "col-auto pe-1" },
                                React.createElement(index.FaTreeCity, { style: iconStyle })),
                            React.createElement(index.Col, { className: "ps-1 col-auto align-self-center" },
                                React.createElement("p", { style: subtituloStyle }, "Direcci\u00F3n urbana"))),
                        React.createElement(DireccionUrbana, null))))),
        React.createElement(Collapse, { in: zona === '2' },
            React.createElement(index.Container, { className: "pb-0 mb-0 bg-section" },
                React.createElement(index.Card, { className: "border-light-subtle rounded-3" },
                    React.createElement(index.CardBody, null,
                        React.createElement(index.Row, { className: 'mb-1 mt-1' },
                            React.createElement(index.Col, { className: "col-auto pe-1" },
                                React.createElement(index.FaTree, { style: iconStyle })),
                            React.createElement(index.Col, { className: "ps-1 col-auto align-self-center" },
                                React.createElement("p", { style: subtituloStyle }, "Direcci\u00F3n Rural"))),
                        React.createElement(DireccionRural, null)))))));
};

exports.ContactoPersona = ContactoPersona;
exports.NombrePersona = NombrePersona;
exports.Nuip = Nuip;
exports.UbicacionPersona = UbicacionPersona;
//# sourceMappingURL=UbicacionPersona-CiBqPzez.js.map
