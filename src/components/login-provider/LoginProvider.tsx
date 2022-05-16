import React, { useEffect, useState } from "react";
import LoginService from "../../api-service/login-service/LoginService";
import { StatusCodes } from "../../constants/StatusCodes";
import AuthManager from "../auth/AuthManager";
import LoginModal from "../login/LoginModal";
import LoginProviderContext from "./LoginProviderContext";

const LoginProvider = ({ children }: any) => {
  const [isLoged, setIsLoged] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (isLoged === false) {
      AuthManager.signOutAsync();
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  }, [isLoged]);

  return (
    <div style={{ flex: 1 }}>
      <LoginProviderContext.Provider value={{ isLoged, setIsLoged }}>
        {children}
        <LoginModal visible={showModal} />
      </LoginProviderContext.Provider>
    </div>
  );
};

export default LoginProvider;
