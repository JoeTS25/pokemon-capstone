import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./Login-Signup.css";
import UserContext from "./UserContext";


/* Login form routed as /login 
* Redirects to /profile route */

function LoginForm({ login }) {
    const { setCurrentUser } = useContext(UserContext);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });
    const [formErrors, setFormErrors] = useState([]);
    console.debug(
        "LoginForm",
        "login=", typeof login,
        "formData=", formData,
        "formErrors", formErrors,
    );

    /* Handle form submit.  Redirect to /profile if successful */
    async function handleSubmit(evt) {
        evt.preventDefault();
        let result = await login(formData);
        setCurrentUser(result);
        navigate("/profile");
        if (result.success) {
            navigate("/profile");
            alert(`Login Successful`);
            console.log("Hey this works");
        } else {
            setFormErrors(result.errors);
            console.log(result.success);
            alert (`Wrong username or password`);
            navigate("/login")
        }

    }

    /* Update form data field */
    function handleChange(evt) {
        const { name, value } = evt.target;
        setFormData(l => ({ ...l, [name]: value }));
    }

   

    return (
        <div className="LoginForm">
            <div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
                <h1 className="mb-3">Log In</h1>
                <div className="card">
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label className="form-label">Username</label>
                                <input 
                                    name="username"
                                    className="form-control"
                                    value={formData.username}
                                    onChange={handleChange}
                                    autoComplete="username"
                                    required/>
                            </div>
                            <div className="form-group">
                                <label className="form-label">Password</label>
                                <input 
                                    type="password"
                                    name="password"
                                    className="form-control"
                                    value={formData.password}
                                    onChange={handleChange}
                                    autoComplete="current-password"
                                    required/>
                            </div>

                            <button className="btn btn-primary float-right"
                                    onSubmit={handleSubmit}>
                                        Submit
                                    </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginForm;