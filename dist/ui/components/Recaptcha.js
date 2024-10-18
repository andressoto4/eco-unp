import React, { useState, useRef, useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Col } from "react-bootstrap";
var Recaptcha = function (_a) {
    var onChange = _a.onChange, sitekey = _a.sitekey;
    var recaptchaRef = useRef(null);
    var _b = useState(false), loaded = _b[0], setLoaded = _b[1];
    var _c = useState(null), error = _c[0], setError = _c[1];
    var _d = useState(0), key = _d[0], setKey = _d[1];
    var handleCaptchaChange = function (token) {
        onChange(token);
    };
    var handleCaptchaLoad = function () {
        setLoaded(true);
        setError(null);
    };
    var handleCaptchaError = function () {
        setError("Error al cargar reCAPTCHA. Por favor, inténtalo de nuevo.");
        setKey(function (prevKey) { return prevKey + 1; });
    };
    useEffect(function () {
        if (recaptchaRef.current) {
            recaptchaRef.current.reset();
            setLoaded(true);
        }
    }, [key]);
    return (React.createElement(Col, { xl: 12, md: 9, xs: 12, className: "d-flex justify-content-center mt-4 mb-2", style: { width: '308px', height: '80px' } },
        !loaded && React.createElement("div", { style: { width: '305px', height: '80px', backgroundColor: 'transparent' } }),
        error && React.createElement("div", { style: { color: 'red' } }, error),
        React.createElement(ReCAPTCHA, { key: key, ref: recaptchaRef, className: "mb-3", sitekey: sitekey, onChange: handleCaptchaChange, onLoad: handleCaptchaLoad, onErrored: handleCaptchaError })));
};
export { Recaptcha };
//# sourceMappingURL=Recaptcha.js.map