import React from "react";
import LoginProvider from "../login-provider/LoginProvider";
import Login from "../login/Login";

const Providers = () => {
  return (
    <LoginProvider>
      <Login />
    </LoginProvider>
  );
};

export default Providers;
