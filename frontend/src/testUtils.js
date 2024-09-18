import React from "react";
import UserContext from "./Auth/UserContext";

const demoUser = {
  username: "testuser",
  email: "test@test.net",
};

const UserProvider =
    ({ children, currentUser = demoUser }) => (
    <UserContext.Provider value={{ currentUser }}>
      {children}
    </UserContext.Provider>
);

export { UserProvider };