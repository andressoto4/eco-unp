import React, { ReactNode } from "react";
import { IdSexoContextType, IdGeneroContextType, IdOrientacionSexualContextType } from "../types/SexoGeneroTypes";
declare const IdSexoContext: React.Context<IdSexoContextType | undefined>;
declare const IdGeneroContext: React.Context<IdGeneroContextType | undefined>;
declare const IdOrientacionSexualContext: React.Context<IdOrientacionSexualContextType | undefined>;
interface SexoGeneroProviderProps {
    children: ReactNode;
}
declare const SexoGeneroProvider: React.FC<SexoGeneroProviderProps>;
export { IdSexoContext, IdGeneroContext, IdOrientacionSexualContext };
export { SexoGeneroProvider };
//# sourceMappingURL=SexoGeneroContext.d.ts.map