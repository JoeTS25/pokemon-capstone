import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import UserContext from "../Auth/UserContext";

/* Special route to check to see if there's a valid current user */

function PrivateRoute({ exact, path, children }) {
    const { currentUser } = useContext(UserContext);
    console.debug(
        "PrivateRoute",
        "exact=", exact,
        "path=", path,
        "currentUser=", currentUser,
    );

    if (!currentUser) {
        return <Navigate to="/login"/>;
    }
    

    return (
        <> 
            {children}
        </>
    );
}

export default PrivateRoute;