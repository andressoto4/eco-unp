import React, { ReactNode } from "react";
import { AutenticacionContextType } from "../types/AutenticacionType";
interface AuthProviderProps {
    children: ReactNode;
}
declare const AutenticacionProvider: React.FC<AuthProviderProps>;
declare const useAuth: () => AutenticacionContextType;
export { AutenticacionProvider, useAuth };
