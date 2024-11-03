import React, { createContext, useState, useEffect, ReactNode } from 'react';

interface AuthContextType {
    authToken: string | null;
    userToken: string | null;
    setAuthToken: React.Dispatch<React.SetStateAction<string | null>>;
    setUserToken: React.Dispatch<React.SetStateAction<string | null>>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {

    const [authToken, setAuthToken] = useState<string | null>(localStorage.getItem('access_token'));
    const [userToken, setUserToken] = useState<string | null>(localStorage.getItem('user_token'))

    useEffect(() => {
        if (authToken && userToken) {
            localStorage.setItem('access_token', authToken);
            localStorage.setItem('user_token', userToken)
        } else {
            localStorage.removeItem('access_token');
            localStorage.removeItem('user_token');
        }
    }, [authToken, userToken]);

    return (
        <AuthContext.Provider value={{ authToken, setAuthToken, userToken, setUserToken }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = React.useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};