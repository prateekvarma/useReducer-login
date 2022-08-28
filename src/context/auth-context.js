import React from "react";

const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: () => {} //adding the function is here is not necessary, but it's good practice. Same applies for the 'isLoggedIn'. These values are kind of the init values.
});

export default AuthContext;