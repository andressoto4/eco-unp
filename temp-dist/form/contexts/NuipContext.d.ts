import React, { ReactNode } from "react";
import { IdTipoIdentificacionContextType, IdNumeroIdentificacionContextType, IdFechaExpedicionContextType } from "../types/NuipTypes";
declare const IdTipoIdentificacionContext: React.Context<IdTipoIdentificacionContextType | undefined>;
declare const IdNumeroIdentificacionContext: React.Context<IdNumeroIdentificacionContextType | undefined>;
declare const IdFechaExpedicionContext: React.Context<IdFechaExpedicionContextType | undefined>;
interface NuipProviderProps {
    children: ReactNode;
}
declare const NuipProvider: React.FC<NuipProviderProps>;
export { IdTipoIdentificacionContext, IdNumeroIdentificacionContext, IdFechaExpedicionContext, };
export { NuipProvider };
//# sourceMappingURL=NuipContext.d.ts.map