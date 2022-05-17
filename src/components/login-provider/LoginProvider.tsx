import React, { useEffect, useState } from "react";
import User from "../../models/user/User";
import AuthManager from "../auth/AuthManager";
import LoginModal from "../login/LoginModal";
import LoginProviderContext from "./LoginProviderContext";

const LoginProvider = ({ children }: any) => {
  const [isLoged, setIsLoged] = useState(false);
  const [user, setUser] = useState<User>(null);
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
