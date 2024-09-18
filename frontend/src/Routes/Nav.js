import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import UserContext from "../Auth/UserContext";
import "./Nav.css";

function Nav({ logout }) {
    const { currentUser } = useContext(UserContext);
    console.debug("Navigation", "currentUser=", currentUser);

    function loggedinNav() {
        return (
            <ul className="navbar-nav ml-auto">
                <li className="nav-item mr-4">
                    <NavLink className="nav-link" to="/">Pokedex</NavLink>
                </li>
                <li className="nav-item mr-4">
                    <NavLink className="nav-link" to="/profile">Profile</NavLink>
                </li>
                <li className="nav-item mr-4">
                    <NavLink className="nav-link" to="/profile-form">Edit Profile</NavLink>
                </li>
                <li className="nav-item mr-4">
                    <Link className="nav-link" to="/" onClick={logout}>
                        Logout 
                    </Link>
                </li>
            </ul>
        );
    }

    function loggedOutNav() {
        
        return (
            <ul className="navbar-nav ml-auto">
                <li className="nav-item mr-4">
                    <NavLink className="nav-link" to="/">Pokedex</NavLink>
                </li>
                <li className="nav-item mr-4">
                    <NavLink className="nav-link" to="/login">Login</NavLink>
                </li>
                <li className="nav-item mr-4">
                    <NavLink className="nav-link" to="/signup">Signup</NavLink>
                </li>
            </ul>
        )
    }

    return (
        <nav className="Navigation navbar navbar-expand-md">
            {currentUser ? loggedinNav() : loggedOutNav()}
        </nav>
    );
}

export default Nav;