import React, { useState, useRef, useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Col } from "react-bootstrap";
const Recaptcha = ({ onChange, sitekey }) => {
    const recaptchaRef = useRef(null);
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState(null);
    const [key, setKey] = useState(0);
    const handleCaptchaChange = (token) => {
        onChange(token);
    };
    const handleCaptchaLoad = () => {
        setLoaded(true);
        setError(null);
    };
    const handleCaptchaError = () => {
        setError("Error al cargar reCAPTCHA. Por favor, inténtalo de nuevo.");
        setKey(prevKey => prevKey + 1);
    };
    useEffect(() => {
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