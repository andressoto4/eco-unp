import React, { ReactNode } from "react";
import { IdPaisContextType, IdDepartamentoContextType, IdMunicipioContextType, IdZonaContextType, IdDireccionUrbanaContextType, IdDireccionRuralContextType } from "../types/UbicacionTypes";
declare const IdPaisContext: React.Context<IdPaisContextType | undefined>;
declare const IdDepartamentoContext: React.Context<IdDepartamentoContextType | undefined>;
declare const IdMunicipioContext: React.Context<IdMunicipioContextType | undefined>;
declare const IdZonaContext: React.Context<IdZonaContextType | undefined>;
declare const IdDireccionUrbanaContext: React.Context<IdDireccionUrbanaContextType | undefined>;
declare const IdDireccionRuralContext: React.Context<IdDireccionRuralContextType | undefined>;
interface UbicacionProviderProps {
    children: ReactNode;
}
declare const UbicacionProvider: React.FC<UbicacionProviderProps>;
export { IdPaisContext, IdDepartamentoContext, IdMunicipioContext, IdZonaContext, IdDireccionUrbanaContext, IdDireccionRuralContext, };
export { UbicacionProvider };
//# sourceMappingURL=UbicacionContext.d.ts.map