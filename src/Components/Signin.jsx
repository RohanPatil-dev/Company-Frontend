import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const navigate = useNavigate()

    const data = {
        email,
        password,
    };

    async function signin(event) {
        event.preventDefault();

        try {
            const result = await axios.post("http://localhost:8081/signin", data);
          
            await localStorage.setItem("uid",result.data.token)

            navigate("/dashboard")
            setErrorMessage(""); 
        } catch (error) {
          
            if (error.response && error.response.data) {
                setErrorMessage(error.response.data.err || "An error occurred during login.");
            }
            //  else {
            //     setErrorMessage("An error occurred during login. Please try again.");
            // }
        }
    }

    return (
        <>
            <div className="header container-fluid">
                <div className="header-logo">
                    <div className="logo"></div>
                    <p className="project-title">Online Project Management</p>

                    <div className="signin-form">
                        <p>Login to get started</p>
                        <form onSubmit={signin}>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1" style={{ color: "gray" }}>Email</label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(event) => setEmail(event.target.value)}
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1" style={{ color: "gray" }}>Password</label>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(event) => setPassword(event.target.value)}
                                    className="form-control"
                                    id="exampleInputPassword1"
                                />
                            </div>

                            {errorMessage && (
                                <div className="alert alert-danger" role="alert">
                                    {errorMessage}
                                </div>
                            )}

                            <button type="submit" className="btn signin-submit">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
