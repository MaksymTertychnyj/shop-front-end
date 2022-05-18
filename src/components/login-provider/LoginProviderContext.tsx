import React from "react";

const returnType: any = {};

const LoginProviderContext = React.createContext({
  isLoged: false,
  setIsLoged: (state: boolean) => returnType,
});

export default LoginProviderContext;
