import React from "react";
interface UsuarioProps {
    usuarioRef: React.RefObject<HTMLInputElement>;
}
interface ContrasegnaProps {
    contrasegnaRef: React.RefObject<HTMLInputElement>;
}
interface SocialIconProps {
    color: string;
    IconoRedSocial: React.ComponentType<{
        size: string;
        color: string;
    }>;
    descripcion: string;
    enlace: string;
}
declare const Usuario: React.FC<UsuarioProps>;
declare const Contrasegna: React.FC<ContrasegnaProps>;
declare const RedesSociales: React.FC<SocialIconProps>;
export { Usuario, Contrasegna, RedesSociales };
//# sourceMappingURL=Login.d.ts.map