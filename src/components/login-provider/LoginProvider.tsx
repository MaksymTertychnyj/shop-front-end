import React, { useEffect, useState } from "react";
import LoginService from "../../api-service/login-service/LoginService";
import { StatusCodes } from "../../constants/StatusCodes";
import AuthManager from "../auth/AuthManager";
import LoginModal from "../login/LoginModal";
import LoginProviderContext from "./LoginProviderContext";

const LoginProvider = ({ children }: any) => {
  const [isLoged, setIsLoged] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  useEffect(() => {
    if (isLoged === false) {
      AuthManager.signOutAsync();
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  }, [isLoged]);

  useEffect(() => {
    if (login && password) {
      LoginService.loginUser({ Login: login, Password: password }).then((resp) => {
        if (resp.status === StatusCodes.OK) {
          AuthManager.signInAsync(resp.data);
          setIsLoged(true);
          setLogin("");
          console.log(resp);
        } else {
        }
      });
    }
  }, [login]);

  return (
    <div style={{ flex: 1 }}>
      <LoginProviderContext.Provider value={{ isLoged, setIsLoged }}>
        {children}
        <LoginModal
          visible={showModal}
          setLogin={setLogin}
          setPassword={setPassword}
          setIsAdmin={setIsAdmin}
        />
      </LoginProviderContext.Provider>
    </div>
  );
};

export default LoginProvider;
