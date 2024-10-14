import React from "react";
import { IconBaseProps } from 'react-icons/lib';
interface UsuarioProps {
    usuarioRef: React.RefObject<HTMLInputElement>;
}
interface ContrasegnaProps {
    contrasegnaRef: React.RefObject<HTMLInputElement>;
}
interface SocialIconProps {
    color: string;
    IconComponent: React.ComponentType<IconBaseProps>;
}
declare const Usuario: React.FC<UsuarioProps>;
declare const Contrasegna: React.FC<ContrasegnaProps>;
declare const RedesSocialesICon: React.FC<SocialIconProps>;
export { Usuario, Contrasegna, RedesSocialesICon };
