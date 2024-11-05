import React, { ChangeEvent } from "react";
interface DepartamentoProps {
    idPais: number;
    onChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
    departamentoRef?: React.RefObject<HTMLSelectElement>;
    method?: string;
}
declare const Departamento: React.FC<DepartamentoProps>;
export default Departamento;
//# sourceMappingURL=Departamento.d.ts.map