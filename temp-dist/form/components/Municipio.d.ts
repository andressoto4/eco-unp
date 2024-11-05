import React, { ChangeEvent } from "react";
interface MunicipioProps {
    idDepartamento: number;
    onChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
    municipioRef?: React.RefObject<HTMLSelectElement>;
    method?: string;
}
declare const Municipio: React.FC<MunicipioProps>;
export default Municipio;
//# sourceMappingURL=Municipio.d.ts.map