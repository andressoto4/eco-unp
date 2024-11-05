import React, { ReactNode } from 'react';
interface AuthContextType {
    authToken: string | null;
    userToken: string | null;
    setAuthToken: React.Dispatch<React.SetStateAction<string | null>>;
    setUserToken: React.Dispatch<React.SetStateAction<string | null>>;
}
interface AuthProviderProps {
    children: ReactNode;
}
export declare const AuthProvider: React.FC<AuthProviderProps>;
export declare const useAuth: () => AuthContextType;
export {};
//# sourceMappingURL=AuthContex.d.ts.map