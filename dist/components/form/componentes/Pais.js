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
const Pais = ({ idPaisUbicacion, onChange, paisRef }) => {
    const [paises, setPaises] = useState([]);
    const [paisSeleccionado, setPaisSeleccionado] = useState('0');
    useEffect(() => {
        const obtenerPaises = () => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const response = yield fetch(`${process.env.REACT_APP_API_ENDPOINT}/pais/`);
                if (response.ok) {
                    const data = yield response.json();
                    if (idPaisUbicacion) {
                        const paisFiltrado = data.find(pais => pais.id_pais === idPaisUbicacion);
                        setPaises(paisFiltrado ? [paisFiltrado] : []);
                    }
                    else {
                        setPaises(data);
                    }
                }
                else {
                    console.error('Hubo un error al obtener los datos de los países:', response.status);
                }
            }
            catch (error) {
                console.error('Hubo un error al obtener los datos de los países:', error);
            }
        });
        obtenerPaises();
    }, [idPaisUbicacion]);
    const handlePaisChange = (event) => {
        setPaisSeleccionado(event.target.value);
        if (onChange) {
            onChange(event);
        }
    };
    return (React.createElement(FormGroup, { className: "mb-3" },
        React.createElement(FormLabel, null,
            "Pa\u00EDs ",
            React.createElement("span", { className: "text-danger" }, "*")),
        React.createElement(FormSelect, { ref: paisRef, value: paisSeleccionado, onChange: handlePaisChange },
            React.createElement("option", { value: "0", disabled: true }, "Seleccione..."),
            paises.map((pais) => (React.createElement("option", { key: pais.id_pais, value: pais.id_pais }, pais.nombre_pais))))));
};
export default Pais;
