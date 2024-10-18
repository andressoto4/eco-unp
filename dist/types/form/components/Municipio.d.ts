import React, { ChangeEvent } from "react";
interface MunicipioProps {
    idDepartamento: number;
    onChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
    municipioRef?: React.RefObject<HTMLSelectElement>;
}
declare const Municipio: React.FC<MunicipioProps>;
export default Municipio;
