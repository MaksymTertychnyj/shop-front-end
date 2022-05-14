import React, { useEffect, useState } from "react";
import { LoginModalProps } from "./LoginModalProps";
import Modal from "react-modal";
import { LoginModalStyles } from "./LoginModalStyles";
import styles from "./loginStyles.module.css";

const LoginModal = ({ visible, closeFunc }: LoginModalProps) => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    toggleModal();
  }, [visible]);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <Modal isOpen={visible} style={LoginModalStyles.container}>
      <button className={styles.button} onClick={closeFunc}>
        Ok
      </button>
    </Modal>
  );
};

export default LoginModal;
