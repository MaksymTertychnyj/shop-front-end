import React, { useEffect, useState } from "react";
import { LoginModalProps } from "./LoginModalProps";
import Modal from "react-modal";
import LoginModalStyles from "./LoginModalStyles";

const LoginModal = ({ visible, closeFunc }: LoginModalProps) => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    toggleModal();
  }, [visible]);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <Modal isOpen={visible} style={container}>
      <div>
        <div className={LoginModalStyles.header}>
          <text className={LoginModalStyles.textHeader}>Sign In</text>
        </div>
        <text className={LoginModalStyles.text}> Login</text>
        <input type="text" className={LoginModalStyles.inputText}></input>
        <div style={{ height: 10 }}></div>
        <text className={LoginModalStyles.text}> Password</text>
        <input type="password" className={LoginModalStyles.inputText}></input>
        <button className={LoginModalStyles.button} onClick={closeFunc}>
          <text style={{ color: "white" }}>Login</text>
        </button>
        <div style={{ marginTop: 20, marginLeft: 20 }}>
          <label>
            <input type="checkbox" />
            <text style={{ fontSize: 13, marginLeft: 5, color: "#B5A642" }}>As administrator</text>
          </label>
        </div>
      </div>
    </Modal>
  );
};

export default LoginModal;

const container = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    width: 200,
    height: 250,
    border: "1px solid #ccc",
    background: "#FFF8DC",
    borderRadius: "10px",
  },
};
