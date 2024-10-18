import React, { useState } from "react";
// Declaración del componente Unp que acepta las propiedades definidas en UnpProps
const LogosUnp = ({ size, src, alt, height }) => {
    // Estado que controla si la imagen ha cargado o no
    const [loaded, setLoaded] = useState(false);
    // Maneja el evento de carga de la imagen, estableciendo el estado de loaded a true
    const handleLoad = () => {
        setLoaded(true);
    };
    // Definición de los estilos para el contenedor de la imagen
    const containerStyle = {
        width: size,
        height: height,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };
    // Definición de los estilos para el Placeholder
    const placeholderStyle = {
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