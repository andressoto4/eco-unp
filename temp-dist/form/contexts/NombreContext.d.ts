import React, { ReactNode } from "react";
import { IdPrimerNombreContextType, IdSegundoNombreContextType, IdPrimerApellidoContextType, IdSegundoApellidoContextType } from "../types/NombreTypes";
declare const IdPrimerNombreContext: React.Context<IdPrimerNombreContextType | undefined>;
declare const IdSegundoNombreContext: React.Context<IdSegundoNombreContextType | undefined>;
declare const IdPrimerApellidoContext: React.Context<IdPrimerApellidoContextType | undefined>;
declare const IdSegundoApellidoContext: React.Context<IdSegundoApellidoContextType | undefined>;
interface NombreProviderProps {
    children: ReactNode;
}
declare const NombreProvider: React.FC<NombreProviderProps>;
export { IdPrimerNombreContext, IdSegundoNombreContext, IdPrimerApellidoContext, IdSegundoApellidoContext, };
export { NombreProvider };
//# sourceMappingURL=NombreContext.d.ts.map