import React, { useState, useEffect, ChangeEvent } from 'react';
import { FormGroup, FormLabel, FormSelect } from 'react-bootstrap';

interface DepartamentoData {
  id_departamento: number;
  nombre_departamento: string;
}

interface DepartamentoProps {
  idPais: number;
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
  departamentoRef?: React.RefObject<HTMLSelectElement>;
}

const Departamento: React.FC<DepartamentoProps> = ({ idPais, onChange, departamentoRef }) => {

  const [departamentos, setDepartamentos] = useState<DepartamentoData[]>([]);
  const [departamentoSeleccionado, setDepartamentoSeleccionado] = useState<string>('0');

  useEffect(() => {
    const obtenerDepartamentos = async () => {
      try {
        const url = `${process.env.REACT_APP_API_ENDPOINT}/departamento/?pais=${idPais}`;
        const response = await fetch(url);
        if (response.ok) {
          const data: DepartamentoData[] = await response.json();
          setDepartamentos(data);
        } else {
          console.error('Hubo un error al obtener los datos de los departamentos:', response.status);
        }
      } catch (error) {
        console.error('Hubo un error al obtener los datos de los departamentos:', error);
      }
    };

    obtenerDepartamentos();

  }, [idPais]);

  const handleDepartamentoChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setDepartamentoSeleccionado(event.target.value);
    if (onChange) {
      onChange(event);
    }
  };

  const selectDisabledStyle = {
    backgroundColor: 'white',
    color: 'black',
  };

  return (
    <FormGroup className="mb-3">
      <FormLabel>Departamento <span className="text-danger">*</span></FormLabel>
      <FormSelect
        ref={departamentoRef}
        value={departamentoSeleccionado}
        onChange={handleDepartamentoChange}
        disabled={idPais === 0}
        style={idPais === 0 ? selectDisabledStyle : {}}
      >
        <option value="0" style={{ color: 'darkgray' }}>Seleccione...</option>
        {departamentos.map((departamento) => (
          <option key={departamento.id_departamento} value={departamento.id_departamento}>
            {departamento.nombre_departamento}
          </option>
        ))}
      </FormSelect>
    </FormGroup>
  );
};

export default Departamento;