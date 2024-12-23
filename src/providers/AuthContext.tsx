import { useCryptoJS } from '@/hooks';
import React, { createContext, useState, ReactNode, useEffect } from 'react';

interface AuthContextType {
    login: () => void;
    logout: () => void;
    isAuthenticated: boolean;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const { decryptAES } = useCryptoJS();
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    const login = () => setIsAuthenticated(true);
    const logout = () => {
        setIsAuthenticated(false);
        sessionStorage.removeItem('token');
    }

    const getTokenData = () => {
        const storedEncryptedData = sessionStorage.getItem('token');
        if (!storedEncryptedData) return '';
        const decryptedData = decryptAES(storedEncryptedData);
        return decryptedData;
    }

    useEffect(() => {
        const token = sessionStorage.getItem('token');
        if (token) {
            const decryptedData = getTokenData();
            setIsAuthenticated(decryptedData === 'CinA5MJWDvBTvOJSvluE4g==');
        }
    }, []);

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
