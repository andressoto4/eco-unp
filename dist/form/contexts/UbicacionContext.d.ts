import React, { ReactNode } from "react";
interface IdContextType {
    id: string;
    setID: (value: string) => void;
}
declare const IdPaisUbicacionContext: React.Context<IdContextType>;
declare const IdDepartamentoUbicacionContext: React.Context<IdContextType>;
declare const IdMunicipioUbicacionContext: React.Context<IdContextType>;
declare const IdZonaUbicacionContext: React.Context<IdContextType>;
interface UbicacionProviderProps {
    children: ReactNode;
}
declare const UbicacionProvider: React.FC<UbicacionProviderProps>;
declare const useIdPaisUbicacion: () => IdContextType;
declare const useIdDepartamentoUbicacion: () => IdContextType;
declare const useIdMunicipioUbicacion: () => IdContextType;
declare const useIdZonaUbicacion: () => IdContextType;
export { UbicacionProvider };
export { useIdPaisUbicacion, useIdDepartamentoUbicacion, useIdMunicipioUbicacion, useIdZonaUbicacion, };
export { IdPaisUbicacionContext, IdDepartamentoUbicacionContext, IdMunicipioUbicacionContext, IdZonaUbicacionContext, };
//# sourceMappingURL=UbicacionContext.d.ts.map