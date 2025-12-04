import { useState } from "react";
import { login, register, logout, pullUserDetails } from "../services/auth";
import { useNavigate } from "react-router";

export default function useAuth() {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ email: "", password: "", username: "" });

    const changeHandler = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const registerHandler = async () => {
        try {
            const result = await register(formData);
            setUser(result);
            setToken(result.accessToken);
        } catch (err) {
            console.error(err);
        }
    };

    const loginHandler = async () => {
        const payload = { email: formData.email, password: formData.password }
        try {
            const result = await login(payload);
            setUser(result);
            setToken(result.accessToken);
            navigate(-1);
        } catch (err) {
            console.error(err);
        }
    };

    const logoutHandler = async () => {
        if (!token) return;
        try {
            await logout(token);
            setUser(null);
            setToken(null);
        } catch (err) {
            console.error(err);
        }
    };

    const getUserDetailsHandler = async () => {
        if (!token) return;
        try {
            const data = await pullUserDetails(token);
            setUser(data);
        } catch (err) {
            console.error(err);
        }
    };

    return {
        formData,
        changeHandler,
        user,
        token,
        registerHandler,
        loginHandler,
        logoutHandler,
        getUserDetailsHandler
    };
}