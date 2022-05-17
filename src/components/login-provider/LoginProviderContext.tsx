import React from "react";
import User from "../../models/user/User";

const returnType: any = {};

const LoginProviderContext = React.createContext({
  isLoged: false,
  setIsLoged: (state: boolean) => returnType,
});

export default LoginProviderContext;
