import { useState } from "react";
import useAuth from "../hooks/useAuth";

function AuthForm() {
    const [isRegister, setIsRegister] = useState(false);
    const { formData, changeHandler, registerHandler, loginHandler } = useAuth();

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 auth-page">
            <div className="card shadow-sm p-4" style={{ width: "380px" }}>
                <h3 className="text-center mb-4">
                    {isRegister ? "Create Account" : "Welcome Back"}
                </h3>

                {!isRegister && (
                    <form onSubmit={e => { e.preventDefault(); }}>
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

                        <button type="submit" className="btn btn-primary w-100" onClick={loginHandler}>
                            Log In
                        </button>
                    </form>
                )}

                {isRegister && (
                    <form>
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
                            <input type="email" className="form-control" placeholder="Enter email" />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control" placeholder="Enter password" />
                        </div>

                        <button type="submit" className="btn btn-success w-100" onClick={registerHandler}>
                            Register
                        </button>
                    </form>
                )}

                <hr />
                <p className="text-center m-0">
                    {isRegister ? "Already have an account?" : "Don't have an account?"}
                    <button className="btn btn-link p-0 ms-1"
                        onClick={() => setIsRegister(prev => !prev)}>
                        {isRegister ? "Log in" : "Register"}
                    </button>
                </p>
            </div>
        </div>
    );
}

export default AuthForm