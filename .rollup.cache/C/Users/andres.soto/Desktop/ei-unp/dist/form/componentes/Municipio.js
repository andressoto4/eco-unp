import React, { useState, useEffect } from 'react';
import { FormGroup, FormLabel, FormSelect } from 'react-bootstrap';
const Municipio = ({ idDepartamento, onChange, municipioRef }) => {
    const [municipios, setMunicipios] = useState([]);
    const [municipioSeleccionado, setMunicipioSeleccionado] = useState('0');
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
                    console.error('Hubo un error al obtener los datos de los municipios:', response.status);
                }
            }
            catch (error) {
                console.error('Hubo un error al obtener los datos de los municipios:', error);
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
        backgroundColor: 'white',
        color: 'black',
    };
    return (React.createElement(FormGroup, { className: "mb-3" },
        React.createElement(FormLabel, null,
            "Municipio / Ciudad ",
            React.createElement("span", { className: "text-danger" }, "*")),
        React.createElement(FormSelect, { ref: municipioRef, value: municipioSeleccionado, onChange: handleMunicipioChange, disabled: idDepartamento === 0, style: idDepartamento === 0 ? selectDisabledStyle : {} },
            React.createElement("option", { value: "0", disabled: true }, "Seleccione..."),
            municipios.map((municipio) => (React.createElement("option", { key: municipio.id_municipio, value: municipio.id_municipio }, municipio.nombre_municipio))))));
};
export default Municipio;
//# sourceMappingURL=Municipio.js.map