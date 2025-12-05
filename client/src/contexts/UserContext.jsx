import { createContext, useContext, useState } from "react";
import { login, register, logout } from "../services/auth";
import { useNavigate } from "react-router";

const UserContext = createContext();

export function UserProvider({ children }) {
    const navigate = useNavigate();

    const [user, setUser] = useState(() => {
        const saved = localStorage.getItem('user');
        return saved ? JSON.parse(saved) : null;
    });

    const [token, setToken] = useState(() => localStorage.getItem('token') || null);

    const saveSession = (userData) => {
        setUser(userData);
        setToken(userData.accessToken);
        localStorage.setItem('user', JSON.stringify(userData));
        localStorage.setItem('token', userData.accessToken);
    };

    const clearSession = () => {
        setUser(null);
        setToken(null);
        localStorage.removeItem('user');
        localStorage.removeItem('token');
    };

    const registerHandler = async (formData) => {
        try {
            const result = await register(formData);
            saveSession(result);
        } catch (err) {
            console.error(err);
        }
    };

    const loginHandler = async (formData) => {
        try {
            const result = await login(formData);
            saveSession(result);
            navigate(-1);
        } catch (err) {
            console.error(err);
        }
    };

    const logoutHandler = async () => {
        const currentToken = token || localStorage.getItem('token');
        if (!currentToken) return;
        try {
            await logout(currentToken);
            clearSession();
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <UserContext.Provider value={{
            user,
            token,
            registerHandler,
            loginHandler,
            logoutHandler
        }}>
            {children}
        </UserContext.Provider>
    );
}

export const useUserContext = () => useContext(UserContext);