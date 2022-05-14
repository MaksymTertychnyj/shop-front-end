import React, { useEffect, useState } from "react";
import LoginModal from "../login/LoginModal";
import LoginProviderContext from "./LoginProviderContext";

const LoginProvider = ({ children }: any) => {
  const [isLoged, setIsLoged] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (isLoged === false) {
      setShowModal(true);
    }
  }, [isLoged]);

  const CloseModal = () => {
    setShowModal(false);
  };
  //<LoginModal visible={showModal} closeFunc={() => CloseModal()} />
  return (
    <div style={{ flex: 1 }}>
      <LoginProviderContext.Provider value={{ isLoged, setIsLoged }}>
        {children}
        <LoginModal visible={showModal} closeFunc={() => CloseModal()} />
      </LoginProviderContext.Provider>
    </div>
  );
};

export default LoginProvider;
