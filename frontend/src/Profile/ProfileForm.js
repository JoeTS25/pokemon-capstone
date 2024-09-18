import React, { useState, useContext } from "react";
import PokeApi from "../Api/Api";
import UserContext from "../Auth/UserContext";
import "./ProfileForm.css";

/* Profile editing form
 * Routed as /profile-form */

 function ProfileForm() {
    const { currentUser, setCurrentUser } = useContext(UserContext);
    const [formData, setFormData] = useState({
        username: currentUser.username,
        email: currentUser.email,
        password: "",
    });
    const [formErrors, setFormErrors] = useState([]);

    console.debug(
        "ProfileForm",
        "currentUser=", formData,
        "formErrors=", formErrors,
    );

    /* save changes on submit if successful */
    async function handleSubmit(evt) {
        evt.preventDefault();

        let profileData = {
            email: formData.email,
            password: formData.password,
        };

        let username = formData.username;
        let updatedUser;

        try {
            updatedUser = await PokeApi.saveProfile(username, profileData);
        } catch (errors) {
            setFormErrors(errors);
            return;
        }

        setFormData(f => ({ ...f, password: "" }));
        setFormErrors([]);

        setCurrentUser(updatedUser);
    }

    /* Handle form data changing */
    function handleChange(evt) {
        const { name, value } = evt.target;
        setFormData(f => ({ ...f, [name]: value,}));
        setFormErrors([]);
    }

    return (
        <div className="col-md-6 col-lg-4 offset-md-3 offset-lg-4">
            <h3 className="head-3">Change Email</h3>
            <div className="card">
                <div className="card-body">
                    <form>
                        <div className="form-group">
                            <label className="user-label">Username: {formData.username}</label>
                        </div>
                        <div className="form-group">
                            <label className="email-label">Email</label>
                            <input 
                                name="email"
                                className="form-control"
                                value={formData.email}
                                onChange={handleChange}/>
                        </div>
                        <div className="form-group">
                            <label className="password-label">Confirm password:</label>
                            <input 
                                type="password"
                                name="password"
                                className="form-control"
                                value={formData.password}
                                onChange={handleChange}/>
                        </div>

                        <button className="btn btn-primary btn-block mt-4"
                                onClick={handleSubmit}>
                                    Save Changes 
                                </button>
                    </form>
                </div>
            </div>
        </div>
    )
 }

 export default ProfileForm;