import React, { useState, useEffect, ChangeEvent } from "react";
import { FormControl, FormGroup, FormLabel, FormSelect } from "react-bootstrap";

interface PaisData {
  id_pais: number;
  nombre_pais: string;
}

interface PaisProps {
  idPaisUbicacion?: number;
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
  paisRef?: React.RefObject<HTMLSelectElement>;
  method?: string;
}

const Pais: React.FC<PaisProps> = ({
  idPaisUbicacion,
  onChange,
  paisRef,
  method,
}) => {
  const [paises, setPaises] = useState<PaisData[]>([]);
  const [paisSeleccionado, setPaisSeleccionado] = useState<string>("0");

  useEffect(() => {
    const obtenerPaises = async () => {
      try {
        const response = await fetch(
          `https://ecosistemapruebas.unp.gov.co/api-eiunp/sistema/pais/`
        );
        if (response.ok) {
          const data: PaisData[] = await response.json();
          if (idPaisUbicacion) {
            const paisFiltrado = data.find(
              (pais) => pais.id_pais === idPaisUbicacion
            );
            setPaises(paisFiltrado ? [paisFiltrado] : []);
          } else {
            setPaises(data);
          }
        } else {
          console.error(
            "Hubo un error al obtener los datos de los países:",
            response.status
          );
        }
      } catch (error) {
        console.error(
          "Hubo un error al obtener los datos de los países:",
          error
        );
      }
    };

    obtenerPaises();
  }, [idPaisUbicacion]);

  const handlePaisChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setPaisSeleccionado(event.target.value);
    if (onChange) {
      onChange(event);
    }
  };

  return (
    <FormGroup className="mb-3">
      <FormLabel>
        País <span className="text-danger">*</span>
      </FormLabel>
      {method === "GET" ? (
        <FormControl type="text" disabled />
      ) : (
        <FormSelect
          ref={paisRef}
          value={paisSeleccionado}
          onChange={handlePaisChange}
        >
          <option value="0" disabled>
            Seleccione...
          </option>
          {paises.map((pais) => (
            <option key={pais.id_pais} value={pais.id_pais}>
              {pais.nombre_pais}
            </option>
          ))}
        </FormSelect>
      )}
    </FormGroup>
  );
};

export default Pais;
