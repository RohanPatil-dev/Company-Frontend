import React from "react"

export default function Signin() {
    return (
        <>
            <div className="header container-fluid">
                <div className="header-logo">
                    <div className="logo"></div>
                    <p className="project-title">Online Project Management</p>

                    <div className="signin-form">
                        <p>Login to get started</p>
                        <form>
                            <div class="form-group">
                                <label for="exampleInputEmail1" style={{color : "gray"}}>Email</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>

                            <div class="form-group">
                                <label for="exampleInputPassword1" style={{color : "gray"}}>Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" />
                            </div>

                            <button type="submit" class="btn signin-submit">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

// https://www.youtube.com/watch?v=yDZCXAmVXmM