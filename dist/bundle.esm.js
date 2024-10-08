import React from 'react';

var DefaultContext = {
  color: undefined,
  size: undefined,
  className: undefined,
  style: undefined,
  attr: undefined
};
var IconContext = React.createContext && /*#__PURE__*/React.createContext(DefaultContext);

var _excluded = ["attr", "size", "title"];
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } } return target; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function Tree2Element(tree) {
  return tree && tree.map((node, i) => /*#__PURE__*/React.createElement(node.tag, _objectSpread({
    key: i
  }, node.attr), Tree2Element(node.child)));
}
function GenIcon(data) {
  return props => /*#__PURE__*/React.createElement(IconBase, _extends({
    attr: _objectSpread({}, data.attr)
  }, props), Tree2Element(data.child));
}
function IconBase(props) {
  var elem = conf => {
    var {
        attr,
        size,
        title
      } = props,
      svgProps = _objectWithoutProperties(props, _excluded);
    var computedSize = size || conf.size || "1em";
    var className;
    if (conf.className) className = conf.className;
    if (props.className) className = (className ? className + " " : "") + props.className;
    return /*#__PURE__*/React.createElement("svg", _extends({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr, svgProps, {
      className: className,
      style: _objectSpread(_objectSpread({
        color: props.color || conf.color
      }, conf.style), props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), title && /*#__PURE__*/React.createElement("title", null, title), props.children);
  };
  return IconContext !== undefined ? /*#__PURE__*/React.createElement(IconContext.Consumer, null, conf => elem(conf)) : elem(DefaultContext);
}

// THIS FILE IS AUTO GENERATED
function BiAnalyse (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M2 12h2a7.986 7.986 0 0 1 2.337-5.663 7.91 7.91 0 0 1 2.542-1.71 8.12 8.12 0 0 1 6.13-.041A2.488 2.488 0 0 0 17.5 7C18.886 7 20 5.886 20 4.5S18.886 2 17.5 2c-.689 0-1.312.276-1.763.725-2.431-.973-5.223-.958-7.635.059a9.928 9.928 0 0 0-3.18 2.139 9.92 9.92 0 0 0-2.14 3.179A10.005 10.005 0 0 0 2 12zm17.373 3.122c-.401.952-.977 1.808-1.71 2.541s-1.589 1.309-2.542 1.71a8.12 8.12 0 0 1-6.13.041A2.488 2.488 0 0 0 6.5 17C5.114 17 4 18.114 4 19.5S5.114 22 6.5 22c.689 0 1.312-.276 1.763-.725A9.965 9.965 0 0 0 12 22a9.983 9.983 0 0 0 9.217-6.102A9.992 9.992 0 0 0 22 12h-2a7.993 7.993 0 0 1-.627 3.122z"},"child":[]},{"tag":"path","attr":{"d":"M12 7.462c-2.502 0-4.538 2.036-4.538 4.538S9.498 16.538 12 16.538s4.538-2.036 4.538-4.538S14.502 7.462 12 7.462zm0 7.076c-1.399 0-2.538-1.139-2.538-2.538S10.601 9.462 12 9.462s2.538 1.139 2.538 2.538-1.139 2.538-2.538 2.538z"},"child":[]}]})(props);
}function BiBookAlt (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M19 2H6c-1.206 0-3 .799-3 3v14c0 2.201 1.794 3 3 3h15v-2H6.012C5.55 19.988 5 19.806 5 19s.55-.988 1.012-1H21V4c0-1.103-.897-2-2-2zm0 14H5V5c0-.806.55-.988 1-1h13v12z"},"child":[]}]})(props);
}function BiEnvelope (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z"},"child":[]}]})(props);
}function BiErrorCircle (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M11.953 2C6.465 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.493 2 11.953 2zM12 20c-4.411 0-8-3.589-8-8s3.567-8 7.953-8C16.391 4 20 7.589 20 12s-3.589 8-8 8z"},"child":[]},{"tag":"path","attr":{"d":"M11 7h2v7h-2zm0 8h2v2h-2z"},"child":[]}]})(props);
}function BiHome (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 0 0 .707-1.707l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13zm7 7v-5h4v5h-4zm2-15.586 6 6V15l.001 5H16v-5c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v5H6v-9.586l6-6z"},"child":[]}]})(props);
}function BiLinkAlt (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M4.222 19.778a4.983 4.983 0 0 0 3.535 1.462 4.986 4.986 0 0 0 3.536-1.462l2.828-2.829-1.414-1.414-2.828 2.829a3.007 3.007 0 0 1-4.243 0 3.005 3.005 0 0 1 0-4.243l2.829-2.828-1.414-1.414-2.829 2.828a5.006 5.006 0 0 0 0 7.071zm15.556-8.485a5.008 5.008 0 0 0 0-7.071 5.006 5.006 0 0 0-7.071 0L9.879 7.051l1.414 1.414 2.828-2.829a3.007 3.007 0 0 1 4.243 0 3.005 3.005 0 0 1 0 4.243l-2.829 2.828 1.414 1.414 2.829-2.828z"},"child":[]},{"tag":"path","attr":{"d":"m8.464 16.95-1.415-1.414 8.487-8.486 1.414 1.415z"},"child":[]}]})(props);
}function BiLogOut (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M16 13v-2H7V8l-5 4 5 4v-3z"},"child":[]},{"tag":"path","attr":{"d":"M20 3h-9c-1.103 0-2 .897-2 2v4h2V5h9v14h-9v-4H9v4c0 1.103.897 2 2 2h9c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2z"},"child":[]}]})(props);
}function BiMapPin (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"m12 17 1-2V9.858c1.721-.447 3-2 3-3.858 0-2.206-1.794-4-4-4S8 3.794 8 6c0 1.858 1.279 3.411 3 3.858V15l1 2zM10 6c0-1.103.897-2 2-2s2 .897 2 2-.897 2-2 2-2-.897-2-2z"},"child":[]},{"tag":"path","attr":{"d":"m16.267 10.563-.533 1.928C18.325 13.207 20 14.584 20 16c0 1.892-3.285 4-8 4s-8-2.108-8-4c0-1.416 1.675-2.793 4.267-3.51l-.533-1.928C4.197 11.54 2 13.623 2 16c0 3.364 4.393 6 10 6s10-2.636 10-6c0-2.377-2.197-4.46-5.733-5.437z"},"child":[]}]})(props);
}function BiMenuAltRight (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M4 6h16v2H4zm4 5h12v2H8zm5 5h7v2h-7z"},"child":[]}]})(props);
}function BiMenu (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"},"child":[]}]})(props);
}function BiShieldPlus (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M11.63 21.91A.9.9 0 0 0 12 22a1 1 0 0 0 .41-.09C22 17.67 21 7 21 6.9a1 1 0 0 0-.55-.79l-8-4a1 1 0 0 0-.9 0l-8 4A1 1 0 0 0 3 6.9c0 .1-.92 10.77 8.63 15.01zM5 7.63l7-3.51 7 3.51c.05 2-.27 9-7 12.27C5.26 16.63 4.94 9.64 5 7.63z"},"child":[]},{"tag":"path","attr":{"d":"M11.06 16h2v-3h3.01v-2h-3.01V8h-2v3h-3v2h3v3z"},"child":[]}]})(props);
}function BiSolidPlaneAlt (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M3.414 13.778 2 15.192l4.949 2.121 2.122 4.95 1.414-1.414-.707-3.536L13.091 14l3.61 7.704 1.339-1.339-1.19-10.123 2.828-2.829a2 2 0 1 0-2.828-2.828l-2.903 2.903L3.824 6.297 2.559 7.563l7.644 3.67-3.253 3.253-3.536-.708z"},"child":[]}]})(props);
}function BiLogoRedux (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M15.661 15.549a1.315 1.315 0 0 0 1.185-1.386 1.363 1.363 0 0 0-1.35-1.302h-.048a1.352 1.352 0 0 0-1.303 1.397c.024.379.179.687.391.911-.827 1.609-2.07 2.794-3.954 3.788-1.266.663-2.604.912-3.905.734-1.089-.153-1.94-.64-2.463-1.421-.78-1.185-.852-2.462-.201-3.74a5.597 5.597 0 0 1 1.658-1.931 7.88 7.88 0 0 1-.331-1.218c-3.506 2.51-3.148 5.942-2.084 7.564.794 1.184 2.415 1.941 4.19 1.941.474 0 .972-.035 1.457-.154 3.077-.592 5.409-2.438 6.747-5.16l.011-.023z"},"child":[]},{"tag":"path","attr":{"d":"M19.887 12.589c-1.834-2.154-4.533-3.337-7.611-3.337h-.403c-.2-.438-.661-.711-1.183-.711h-.036c-.744 0-1.325.64-1.301 1.385.023.71.627 1.302 1.35 1.302h.059a1.332 1.332 0 0 0 1.183-.828h.439c1.824 0 3.551.532 5.126 1.574 1.206.792 2.072 1.834 2.557 3.077.425 1.019.402 2.013-.035 2.843-.675 1.302-1.812 1.988-3.314 1.988-.947 0-1.871-.296-2.345-.509-.283.235-.758.626-1.102.863 1.042.473 2.096.746 3.113.746 2.309 0 4.023-1.302 4.676-2.557.709-1.422.651-3.813-1.161-5.859l-.012.023z"},"child":[]},{"tag":"path","attr":{"d":"M7.647 15.975c.023.71.626 1.302 1.35 1.302h.048a1.334 1.334 0 0 0 1.302-1.397c0-.71-.616-1.301-1.338-1.301h-.048c-.048 0-.118 0-.178.022-.982-1.657-1.397-3.434-1.242-5.349.094-1.445.567-2.7 1.42-3.742.71-.888 2.048-1.326 2.96-1.35 2.556-.048 3.622 3.138 3.704 4.404l1.184.354C16.536 5.036 14.122 3 11.813 3 9.647 3 7.647 4.574 6.842 6.884c-1.102 3.077-.379 6.036.971 8.404-.118.154-.189.426-.166.687z"},"child":[]}]})(props);
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "@import url('https://fonts.googleapis.com/css2?family=Domine:wght@400;500;600;700&family=Noto+Sans:wght@300;600&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300;1,400;1,500&display=swap');\n\n:root {\n  --color-default: #303d50;\n  --color-white: #fff;\n  --color-body: #ffffff;\n  --color-light: #e0e0e0;\n  --Color-complementario: #2e465f;\n}\n\n\n* {\n  padding: 0%;\n  margin: 0%;\n  box-sizing: border-box;\n  font-family: 'roboto', sans-serif;\n}\n\nbody {\n  min-height: calc(100vh - 8px);\n}\n\n/* sidebar-bar-panel */\n\n.sidebar-bar-panel {\n  min-height: 100vh;\n  width: 78px;\n  padding: 6px 14px;\n  background-color: var(--color-default);\n  transition: all 0.5s ease;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 0;\n}\n\n.sidebar-bar-panel.open {\n  width: 280px;\n  z-index: 0;\n}\n\n.sidebar-bar-panel .logo_details {\n  height: 60px;\n  display: flex;\n  align-items: center;\n  position: relative;\n}\n\n.logo-image {\n  height: 30px;\n  width: 30px;\n  object-fit: cover;\n  border-radius: 50%;\n  margin-right: 10px;\n  margin-left: 4px;\n}\n\n.sidebar-bar-panel .logo_details .icon {\n  opacity: 0;\n  transition: all 0.5s ease;\n}\n\n.sidebar-bar-panel .logo_details .logo-name {\n  color: var(--color-white);\n  font-size: 18px;\n  font-weight: 600;\n  padding-left: 0px;\n  max-width: 180px;\n  min-width: 0px;\n  opacity: 0;\n  transition: all .5s ease;\n  z-index: 0;\n}\n\n.sidebar-bar-panel.open .logo_details .icon,\n.sidebar-bar-panel.open .logo_details .logo-name {\n  opacity: 1;\n}\n\n.sidebar-bar-panel .logo_details #btn {\n  position: absolute;\n  top: 50%;\n  right: 0;\n  transform: translateY(-50%);\n  font-size: 23px;\n  text-align: center;\n  cursor: pointer;\n  transition: all .5s ease;\n}\n\n.sidebar-bar-panel.open .logo_details #btn {\n  text-align: right;\n  left: 84.5%;\n}\n\n.sidebar-bar-panel .i {\n  color: var(--color-white);\n  height: 30px;\n  line-height: 60px;\n  min-width: 50px;\n  font-size: 25px;\n  text-align: center;\n  font-weight: 400;\n}\n\n.sidebar-bar-panel .i2 {\n  color: var(--color-white);\n  height: 20px;\n  line-height: 60px;\n  min-width: 50px;\n  font-size: 25px;\n  text-align: center;\n  font-weight: 300;\n}\n\n.sidebar-bar-panel .nav-list-panel {\n  margin-top: 20px;\n  height: 100%;\n  padding: 0px;\n}\n\n.sidebar-bar-panel li {\n  position: relative;\n  margin: 20px 0;\n  list-style: none;\n}\n\n.sidebar-bar-panel li .tooltip {\n  position: absolute;\n  top: -20px;\n  left: calc(100% + 15px);\n  z-index: 3;\n  background-color: var(--color-white);\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);\n  padding: 6px 14px;\n  font-size: 15px;\n  font-weight: 500;\n  border-radius: 5px;\n  white-space: nowrap;\n  opacity: 0;\n  pointer-events: none;\n}\n\n.sidebar-bar-panel li:hover .tooltip {\n  opacity: 1;\n  pointer-events: auto;\n  transition: all 0.4s ease;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n.sidebar-bar-panel.open li .tooltip {\n  display: none;\n}\n\n.sidebar-bar-panel li a {\n  display: flex;\n  height: 100%;\n  width: 100%;\n  align-items: center;\n  text-decoration: none;\n  background-color: var(--color-default);\n  position: relative;\n  transition: all .5s ease;\n  z-index: 12;\n}\n\n.sidebar-bar-panel li a::after {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 35px;\n  transform: scaleX(0);\n  background-color: var(--color-white);\n  border-radius: 5px;\n  transition: transform 0.3s ease-in-out;\n  transform-origin: left;\n  z-index: -2;\n}\n\n.sidebar-bar-panel li a:hover::after {\n  transform: scaleX(1);\n  color: var(--color-default);\n  height: 35px;\n}\n\n.sidebar-bar-panel li a .link_name {\n  color: var(--color-white);\n  font-size: 15px;\n  font-weight: 500;\n  white-space: nowrap;\n  pointer-events: auto;\n  transition: all 0.4s ease;\n  pointer-events: none;\n  opacity: 0;\n}\n\n.sidebar-bar-panel li a:hover .link_name,\n.sidebar-bar-panel li a:hover .i {\n  transition: all 0.5s ease;\n  color: var(--color-default)\n}\n\n.sidebar-bar-panel li a:hover .bx {\n  color: var(--color-default);\n}\n\n.sidebar-bar-panel.open li a .link_name {\n  opacity: 1;\n  pointer-events: auto;\n}\n\n/* Diseño de la parte baja con inforamción de la persona logueada */\n\n.sidebar-bar-panel .profile-content {\n  position: absolute;\n  color: var(--color-white);\n  bottom: 0;\n  left: 0;\n  width: 100%;\n}\n\n.sidebar-bar-panel .profile-content .profile {\n  position: relative;\n  padding: 18px 18px;\n  height: 75px;\n  background: none;\n  transition: all 0.5s ease;\n\n}\n\n.sidebar-bar-panel .profile-content .profile a {\n  text-decoration: none;\n  color: var(--color-white);\n}\n\n.sidebar-bar-panel.open .profile-content .profile {\n  background-color: var(--Color-complementario);\n}\n\n\n.profile-content .profile .profile-detail {\n  display: flex;\n  align-items: center;\n  opacity: 0;\n  pointer-events: auto;\n  white-space: nowrap;\n}\n\n.sidebar-bar-panel.open .profile .profile-detail {\n  opacity: 1;\n  pointer-events: auto;\n}\n\n.sidebar-bar-panel.open .profile .icon {\n  left: 90%;\n  background: none;\n}\n\n.sidebar-bar-panel .profile .icon:hover {\n  cursor: pointer;\n}\n\n/* profile */\n\n.profile .profile-detail img {\n  height: 40px;\n  width: 40px;\n  object-fit: cover;\n  border-radius: 7px;\n}\n\n.profile .profile-detail .name-job {\n  margin-left: 10px;\n}\n\n.profile .profile-detail .name {\n  font-size: 15px;\n  font-weight: 600;\n}\n\n.profile .profile-detail .job {\n  font-size: 12px;\n  font-weight: 400;\n}\n\n.profile .icon {\n  position: absolute;\n  left: 50%;\n  bottom: 23%;\n  transform: translateX(-50%);\n  min-width: 40px;\n  line-height: 60px;\n  height: 38px;\n  text-align: center;\n  transition: all 0.5s ease;\n  background: var(--Color-complementario);\n  padding: 7px;\n  border-radius: 7px;\n}\n\n/* main-section */\n\n.main-section {\n  margin-left: 78px;\n  transition: margin-left .5s ease;\n  z-index: 1;\n  height: calc(100vh - 17px);\n}\n\n.menu-open .main-section {\n  margin-left: 280px;\n  z-index: 1;\n}\n\n\n/*  */\n\n.bg-custom {\n  background-color: #303D50;\n  border: #ffffff;\n}\n\n.bg-custom:hover {\n  background-color: #2e465f;\n\n}\n\n\n.custom-collapse {\n  animation: slideFromRight 0.5s ease forwards;\n}\n\n.custom-collapse-reverse {\n  animation: slideToRight 0.5s ease forwards;\n}\n\n@keyframes slideFromRight {\n  from {\n      transform: translateX(100%);\n  }\n  to {\n      transform: translateX(0);\n  }\n}\n\n/* Deslizamiento hacia la izquierda */\n@keyframes slideToRight {\n  from {\n      transform: translateX(0);\n  }\n  to {\n      transform: translateX(100%);\n  }\n}";
styleInject(css_248z);

var MenuLateral = function (_a) {
    var onToggle = _a.onToggle, isOpen = _a.isOpen;
    var sidebarClass = isOpen ? "sidebar-bar-panel open" : "sidebar-bar-panel";
    return (React.createElement("div", { className: "container-fluid ".concat(isOpen ? "menu-open" : "") },
        React.createElement("div", { className: sidebarClass },
            React.createElement("div", { className: "logo_details" },
                React.createElement("img", { src: "../img/logo-unp-gris-fblanco.png", alt: "Logo", className: "icon logo-image" }),
                React.createElement("div", { className: "logo-name" }, "ECOSISTEMA UNP"),
                isOpen ? React.createElement(BiMenuAltRight, { className: "bx bx-menu i", id: "btn", onClick: onToggle }) : React.createElement(BiMenu, { className: "bx bx-menu i", id: "btn", onClick: onToggle })),
            React.createElement("ul", { className: "nav-list-panel" },
                React.createElement("li", null,
                    React.createElement("a", { href: "" },
                        React.createElement(BiHome, { className: 'bx bx-home i2' }),
                        React.createElement("span", { className: "link_name" }, "Inicio")),
                    React.createElement("span", { className: "tooltip" }, "Inicio")),
                React.createElement("li", null,
                    React.createElement("a", { href: "" },
                        React.createElement(BiMapPin, { className: 'bx bx-map-pin i2' }),
                        React.createElement("span", { className: "link_name" }, "Mapa del proceso")),
                    React.createElement("span", { className: "tooltip" }, "Mapa del proceso")),
                React.createElement("li", null,
                    React.createElement("a", { href: "" },
                        React.createElement(BiBookAlt, { className: 'bx bx-book-alt i2' }),
                        React.createElement("span", { className: "link_name" }, "Manuales de usuario")),
                    React.createElement("span", { className: "tooltip" }, "Manual de usuario")),
                React.createElement("div", { style: { paddingLeft: "15px", paddingRight: "15px" } },
                    React.createElement("hr", { style: { borderTop: "1px solid white" } })),
                React.createElement("li", null,
                    React.createElement("a", { href: "https://www.unp.gov.co/" },
                        React.createElement(BiLinkAlt, { className: 'bx bx-link-alt i2' }),
                        React.createElement("span", { className: "link_name" }, "Portal UNP")),
                    React.createElement("span", { className: "tooltip" }, "Portal UNP")),
                React.createElement("li", null,
                    React.createElement("a", { href: "https://login.microsoftonline.com/common/oauth2/authorize?client_id=00000002-0000-0ff1-ce00-000000000000&redirect_uri=https%3a%2f%2foutlook.office365.com%2fowa%2f&resource=00000002-0000-0ff1-ce00-000000000000&response_mode=form_post&response_type=code+id_token&scope=openid&msafed=1&msaredir=1&client-request-id=f8488f2f-33b7-d769-3dc8-fe71d263f531&protectedtoken=true&claims=%7b%22id_token%22%3a%7b%22xms_cc%22%3a%7b%22values%22%3a%5b%22CP1%22%5d%7d%7d%7d&nonce=638372347486593361.36439678-d731-49f6-a49f-cc0594f2abb0&state=Dcs7EoAgDEVR0HE5kc8LCVkO4NBaun1T3NPdGEI4vcOL2Qkq6NAKVu7SDJByQxgm2ulRFGLbQsOltXIz3nXMmaO_V3q_kX4" },
                        React.createElement(BiEnvelope, { className: 'bx bx-envelope i2' }),
                        React.createElement("span", { className: "link_name" }, "Correo institucional")),
                    React.createElement("span", { className: "tooltip" }, "Correo institucional")),
                React.createElement("li", null,
                    React.createElement("a", { href: "http://intranet.unp.gov.co/" },
                        React.createElement(BiLogoRedux, { className: 'bx bxl-redux i2' }),
                        React.createElement("span", { className: "link_name" }, "Acceso directo a Intranet")),
                    React.createElement("span", { className: "tooltip" }, "Acceso directo a Intranet")),
                React.createElement("li", null,
                    React.createElement("a", { href: "https://mesadeservicios.unp.gov.co/HEAT/" },
                        React.createElement(BiErrorCircle, { className: 'bx bx-error-circle i2' }),
                        React.createElement("span", { className: "link_name" }, "Mesa de servicios")),
                    React.createElement("span", { className: "tooltip" }, "Mesa de servicios")),
                React.createElement("div", { style: { paddingLeft: "15px", paddingRight: "15px" } },
                    React.createElement("hr", { style: { borderTop: "1px solid white" } })),
                React.createElement("li", null,
                    React.createElement("a", { href: "" },
                        React.createElement(BiShieldPlus, { className: 'bx i2' }),
                        React.createElement("span", { className: "link_name" }, "Medida de emergencia")),
                    React.createElement("span", { className: "tooltip" }, "Medida de emergencia")),
                React.createElement("li", null,
                    React.createElement("a", { href: "" },
                        React.createElement(BiAnalyse, { className: 'bx i2' }),
                        React.createElement("span", { className: "link_name" }, "Acta de reuni\u00F3n")),
                    React.createElement("span", { className: "tooltip" }, "Acta de reuni\u00F3n")),
                React.createElement("li", null,
                    React.createElement("a", { href: "" },
                        React.createElement(BiSolidPlaneAlt, { className: 'bx i2' }),
                        React.createElement("span", { className: "link_name" }, "Solicitud de vi\u00E1ticos")),
                    React.createElement("span", { className: "tooltip" }, "Solicitud de vi\u00E1ticos"))),
            React.createElement("div", { className: "profile-content" },
                React.createElement("div", { className: "profile" },
                    React.createElement("a", { href: "" },
                        React.createElement("div", { className: "profile-detail" },
                            React.createElement("img", { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE-bIhXf-nPctSOXtLp1haeLK6dZuu-NERXQ&usqp=CAU", alt: "" }),
                            React.createElement("div", { className: "name-job" },
                                React.createElement("div", { className: "name" }, "Nombre de la Persona"),
                                React.createElement("div", { className: "job" }, "Rol en el EI-UNP")))),
                    React.createElement(BiLogOut, { className: 'icon' }))))));
};

var index$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  MenuLateral: MenuLateral
});

var Ensayo = function (_a) {
    var label = _a.label;
    return React.createElement("button", null, label);
};

var index = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Ensayo: Ensayo
});

export { index as datosbasicos, index$1 as ui };
//# sourceMappingURL=bundle.esm.js.map
