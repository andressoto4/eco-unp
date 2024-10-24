import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import { Form } from "react-bootstrap";
import "../styles/Buscador.css";

interface BusquedaInputProps {
  onSearch: (value: string) => void;
}

const Buscador: React.FC<BusquedaInputProps> = ({ onSearch }) => {
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
  };

  return (
    <div className="search-container">
      <Form.Group className="d-flex align-items-center mx-1 position-relative">
        <Form.Control
          type="text"
          className="me-0 input-with-icon"
          placeholder="Ingrese un criterio de búsqueda..."
          onChange={handleSearch}
        />
        <BiSearchAlt className="input-icon" />
      </Form.Group>
    </div>
  );
};

export default Buscador;
