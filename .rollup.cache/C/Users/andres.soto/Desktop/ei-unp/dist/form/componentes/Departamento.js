import React, { useState, useEffect } from 'react';
import { FormGroup, FormLabel, FormSelect } from 'react-bootstrap';
const Departamento = ({ idPais, onChange, departamentoRef }) => {
    const [departamentos, setDepartamentos] = useState([]);
    const [departamentoSeleccionado, setDepartamentoSeleccionado] = useState('0');
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
                    console.error('Hubo un error al obtener los datos de los departamentos:', response.status);
                }
            }
            catch (error) {
                console.error('Hubo un error al obtener los datos de los departamentos:', error);
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
        backgroundColor: 'white',
        color: 'black',
    };
    return (React.createElement(FormGroup, { className: "mb-3" },
        React.createElement(FormLabel, null,
            "Departamento ",
            React.createElement("span", { className: "text-danger" }, "*")),
        React.createElement(FormSelect, { ref: departamentoRef, value: departamentoSeleccionado, onChange: handleDepartamentoChange, disabled: idPais === 0, style: idPais === 0 ? selectDisabledStyle : {} },
            React.createElement("option", { value: "0", style: { color: 'darkgray' } }, "Seleccione..."),
            departamentos.map((departamento) => (React.createElement("option", { key: departamento.id_departamento, value: departamento.id_departamento }, departamento.nombre_departamento))))));
};
export default Departamento;
//# sourceMappingURL=Departamento.js.map