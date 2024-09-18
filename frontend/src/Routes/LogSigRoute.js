import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import UserContext from "../Auth/UserContext";

function LogSigRoute({ exact, path, children }) {
    const { currentUser } = useContext(UserContext);
    console.debug(
        "LogSigRoute",
        "exact=", exact,
        "path=", path,
        "currentUser=", currentUser,
    );

    if (currentUser) {
        return <Navigate to="/profile"/>;
    }

    return (
        <> 
            {children}
        </>
    );
}

export default LogSigRoute;