import React, { useContext } from "react";
import UserContext from "../Auth/UserContext";
import "./Profile.css";
import Partner from "./Partner";

/* User profile page. Welcomes user if logged in
*  Shows login/register if not 
*/

function Profile() {
    const { currentUser } = useContext(UserContext);
    console.debug("Profile", "currentUser=", currentUser);

    return (
        <div className="Profile">
            <div className="container text-center">
                {currentUser
                    ? <div>
                        <h2 className="head2">Welcome Back {currentUser.username}!</h2>
                    <Partner currentUser={currentUser}/>
                    </div>
                    : (
                      <h1>Must be logged in</h1>
                    )}
            </div>
        </div>
    )
}

export default Profile;