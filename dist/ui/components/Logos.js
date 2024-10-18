import React, { useState } from "react";
// Declaración del componente Unp que acepta las propiedades definidas en UnpProps
var LogosUnp = function (_a) {
    var size = _a.size, src = _a.src, alt = _a.alt, height = _a.height;
    // Estado que controla si la imagen ha cargado o no
    var _b = useState(false), loaded = _b[0], setLoaded = _b[1];
    // Maneja el evento de carga de la imagen, estableciendo el estado de loaded a true
    var handleLoad = function () {
        setLoaded(true);
    };
    // Definición de los estilos para el contenedor de la imagen
    var containerStyle = {
        width: size,
        height: height,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };
    // Definición de los estilos para el Placeholder
    var placeholderStyle = {
        width: size,
        height: height,
        backgroundColor: 'transparent'
    };
    // ----> Renderizado
    return (React.createElement("div", { style: containerStyle },
        !loaded && React.createElement("div", { style: placeholderStyle }),
        React.createElement("img", { src: src, alt: alt, style: { display: loaded ? 'block' : 'none', maxWidth: '100%', maxHeight: '100%' }, onLoad: handleLoad })));
};
// Exporta el componente Unp para su uso en otros archivos
export { LogosUnp };
//# sourceMappingURL=Logos.js.map