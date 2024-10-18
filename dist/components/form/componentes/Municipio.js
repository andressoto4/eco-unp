var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import React, { useState, useEffect } from 'react';
import { FormGroup, FormLabel, FormSelect } from 'react-bootstrap';
const Municipio = ({ idDepartamento, onChange, municipioRef }) => {
    const [municipios, setMunicipios] = useState([]);
    const [municipioSeleccionado, setMunicipioSeleccionado] = useState('0');
    useEffect(() => {
        if (!idDepartamento) {
            return;
        }
        const obtenerMunicipio = () => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const url = `${process.env.REACT_APP_API_ENDPOINT}/municipio/?departamento=${idDepartamento}`;
                const response = yield fetch(url);
                if (response.ok) {
                    const data = yield response.json();
                    setMunicipios(data);
                }
                else {
                    console.error('Hubo un error al obtener los datos de los municipios:', response.status);
                }
            }
            catch (error) {
                console.error('Hubo un error al obtener los datos de los municipios:', error);
            }
        });
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
