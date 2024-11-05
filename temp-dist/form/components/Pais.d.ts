import React, { ChangeEvent } from "react";
interface PaisProps {
    idPaisUbicacion?: number;
    onChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
    paisRef?: React.RefObject<HTMLSelectElement>;
    method?: string;
}
declare const Pais: React.FC<PaisProps>;
export default Pais;
//# sourceMappingURL=Pais.d.ts.map