import React, { useState, useEffect } from "react";
import PokeApi from "./Api/Api";
import RouteList from "./Routes/RouteList";
import jwt from "jsonwebtoken";
import useLocalStorage from "./Hooks/UseLocalStorage";
import UserContext from "./Auth/UserContext";
import Nav from "./Routes/Nav";

// Key name for storing token in localStorage for "remember me" re-login
export const TOKEN_STORAGE_ID = "poke-token";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useLocalStorage(TOKEN_STORAGE_ID);
  const [isLoading, setIsLoading] = useState(false);
  console.log(
    "App",
    "currentUser=", currentUser,
    "token=", token,
  );

  // Load user info from API. Until user is logged in with token,
  // this should not run

  useEffect(function loadUserInfo() {
    console.debug("App useEffect loadUserInfo", "token=", token);

    async function getUser() {
      if (token) {
        try {
          const res = jwt.decode(token) ?? {};
          let {username} = res;
          PokeApi.token = token;
          let currentUser = await PokeApi.getCurrentUser(username);
          setCurrentUser(currentUser);
        } catch (err) {
          console.error("App loadUserInfo: problem loading", err);
          setCurrentUser(null);
        }
      }
      setIsLoading(true);
    }
    setIsLoading(false);
    getUser();
  }, [token]);

  /* User Auth */
  /* handles signup */

  async function signup(signupData) {
    try {
      let token = await PokeApi.signup(signupData);
      setToken(token);
      return { success: true };
    } catch (err) {
      console.error("signup failed", err);
      return { sucess: false, err };
    }
  }

  /* handles login */
  async function login(loginData) {
    try {
      let token = await PokeApi.login(loginData);
      setToken(token);
      return { success: true };
    } catch (err) {
      console.error("login failed", err);
      return { success: false, err };
    }
  }

  /* handles logout */

  async function logout() {
    setCurrentUser(null);
    setToken(null);
  }

  return (
    <div className="App">
      <UserContext.Provider
      value={{ currentUser, setCurrentUser }}>
      <div>
        <Nav logout={logout}/>
        <RouteList login={login} signup={signup} />
      </div>
    </UserContext.Provider>
    </div>
  );
  
}

export default App;