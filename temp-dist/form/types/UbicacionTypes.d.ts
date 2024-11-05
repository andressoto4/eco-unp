export interface IdPaisContextType {
    idPais: string;
    setIdPais: (id: string) => void;
}
export interface IdDepartamentoContextType {
    idDepartamento: string;
    setIdDepartamento: (id: string) => void;
}
export interface IdMunicipioContextType {
    idMunicipio: string;
    setIdMunicipio: (id: string) => void;
}
export interface IdZonaContextType {
    idZona: string;
    setIdZona: (id: string) => void;
}
export interface IdDireccionUrbanaContextType {
    idNombreBarrio: string;
    idViaPrincipal: string;
    idNumeroViaPrincipal: string;
    idLetraPrincipal: string;
    idEsBis: boolean;
    idCuadrantePrincipal: string;
    idNumeroViaSecundaria: string;
    idLetraSecundaria: string;
    idCuadranteSecundario: string;
    idNumeroPlaca: string;
    idComplemento: string;
    idIndicacionDireccionU: string;
    idResumenDireccionU: string;
    setIdNombreBarrio: (id: string) => void;
    setIdViaPrincipal: (id: string) => void;
    setIdNumeroViaPrincipal: (id: string) => void;
    setIdLetraPrincipal: (id: string) => void;
    setIdEsBis: (id: boolean) => void;
    setIdCuadrantePrincipal: (id: string) => void;
    setIdNumeroViaSecundaria: (id: string) => void;
    setIdLetraSecundaria: (id: string) => void;
    setIdCuadranteSecundario: (id: string) => void;
    setIdNumeroPlaca: (id: string) => void;
    setIdComplemento: (id: string) => void;
    setIdIndicacionDireccionU: (id: string) => void;
    setIdResumenDireccionU: (id: string) => void;
}
export interface IdDireccionRuralContextType {
    idCorregimiento: string;
    idVereda: string;
    idCentroPoblado: string;
    idIndicacionDireccionR: string;
    idResumenDireccionR: string;
    setIdCorregimiento: (id: string) => void;
    setIdVereda: (id: string) => void;
    setIdCentroPoblado: (id: string) => void;
    setIdIndicacionDireccionR: (id: string) => void;
    setIdResumenDireccionR: (id: string) => void;
}
//# sourceMappingURL=UbicacionTypes.d.ts.map