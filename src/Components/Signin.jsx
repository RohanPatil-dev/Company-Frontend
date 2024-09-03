import axios from "axios";
import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Signin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const [forms, setForms] = useState("")
    const [errorMessage, setErrorMessage] = useState("");
    const [EmailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")


    const navigate = useNavigate()

    const data = {
        email,
        password,
    };

    const emails = useRef()
    const passwords = useRef()



    async function signin(event) {
        event.preventDefault();

        try {
            const result = await axios.post("http://localhost:8081/signin", data);

            await localStorage.setItem("uid", result.data.token)

            navigate("/dashboard")
            setErrorMessage("");
        } catch (error) {

            if (error.response && error.response.data && error.response.date === "Invalid Credentials !") {
                setErrorMessage(error.response.data.err);
            }
            else if (error.response.data === "Email is not defined !") {
                setEmailError(error.response.data.err);
                emails.current.style.border = "2px solid red"
                emails.current.style.outline = "1px solid red"
            }
            else if (error.response.data === "Password is not defined !" || "password is over the 8 characters !" || "password is under the 8 characters !") {
                setPasswordError(error.response.data.err);
                passwords.current.style.border = "2px solid red"
                passwords.current.style.outline = "1px solid red"
            }else{
                    setForms(error.response.data.err);
                    emails.current.style.border = "2px solid red"
                    emails.current.style.outline = "1px solid red"
                    passwords.current.style.border = "2px solid red"
                    passwords.current.style.outline = "1px solid red"
            }
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
                                    ref={emails}
                                />

                                {EmailError ?
                                    <div className="alert alert-danger" role="alert">
                                        {EmailError}
                                    </div> : <></>}
                            </div>

                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1" style={{ color: "gray" }}>Password</label>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(event) => setPassword(event.target.value)}
                                    className="form-control"
                                    id="exampleInputPassword1"
                                    ref={passwords}
                                />

                                {passwordError ?
                                    <div className="alert alert-danger" role="alert">
                                        {passwordError}
                                    </div> : <></>}
                            </div>
                            <button type="submit" className="btn signin-submit">Login</button>
                        </form>
                    </div>
                </div>
                
            </div>

            {errorMessage || forms && (
                        <div className="alert alert-danger mt-5" role="alert">
                            {errorMessage}
                        </div>
                    )}

                    {/* {forms && (
                        <div className="alert alert-danger" role="alert">
                            {forms}
                        </div>
                    )} */}
        </>
    );
}
