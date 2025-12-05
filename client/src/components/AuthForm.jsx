import { useState } from "react";
import { useUserContext } from "../contexts/UserContext";

function AuthForm() {
    const [isRegister, setIsRegister] = useState(false);
    const [formData, setFormData] = useState({ email: "", password: "", username: "" });
    const { loginHandler, registerHandler } = useUserContext();

    const changeHandler = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const submitLogin = async (e) => {
        e.preventDefault();
        await loginHandler({ email: formData.email, password: formData.password });
    };

    const submitRegister = async (e) => {
        e.preventDefault();
        await registerHandler({ email: formData.email, password: formData.password, username: formData.username });
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 auth-page">
            <div className="card shadow-sm p-4" style={{ width: "380px" }}>
                <h3 className="text-center mb-4">
                    {isRegister ? "Create Account" : "Welcome Back"}
                </h3>

                {!isRegister && (
                    <form onSubmit={submitLogin}>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                name="email"
                                value={formData.email}
                                onChange={changeHandler}
                                placeholder="Enter email"
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input
                                type="password"
                                name="password"
                                className="form-control"
                                value={formData.password}
                                onChange={changeHandler}
                                placeholder="Enter password"
                            />
                        </div>

                        <button type="submit" className="btn btn-primary w-100">
                            Log In
                        </button>
                    </form>
                )}

                {isRegister && (
                    <form onSubmit={submitRegister}>
                        <div className="mb-3">
                            <label className="form-label">Username</label>
                            <input
                                type="text"
                                name="username"
                                className="form-control mb-3"
                                placeholder="Username"
                                value={formData.username}
                                onChange={changeHandler}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input
                                type="email"
                                name="email"
                                className="form-control"
                                placeholder="Enter email"
                                value={formData.email}
                                onChange={changeHandler}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input
                                type="password"
                                name="password"
                                className="form-control"
                                placeholder="Enter password"
                                value={formData.password}
                                onChange={changeHandler}
                            />
                        </div>

                        <button type="submit" className="btn btn-success w-100">
                            Register
                        </button>
                    </form>
                )}

                <hr />
                <p className="text-center m-0">
                    {isRegister ? "Already have an account?" : "Don't have an account?"}
                    <button className="btn btn-link p-0 ms-1" onClick={() => setIsRegister(prev => !prev)}>
                        {isRegister ? "Log in" : "Register"}
                    </button>
                </p>
            </div>
        </div>
    );
}

export default AuthForm;