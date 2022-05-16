import React, { ChangeEvent, useContext, useEffect, useRef, useState } from "react";
import { LoginModalProps } from "./LoginModalProps";
import Modal from "react-modal";
import LoginModalStyles from "./LoginModalStyles";
import LoginService from "../../api-service/login-service/LoginService";
import { StatusCodes } from "../../constants/StatusCodes";
import AuthManager from "../auth/AuthManager";
import LoginProviderContext from "../login-provider/LoginProviderContext";

Modal.setAppElement("#root");

const LoginModal = ({ visible }: LoginModalProps) => {
  const { setIsLoged } = useContext(LoginProviderContext);
  const [attemptLogin, setAttemptLogin] = useState(false);
  const [message, setMessage] = useState<string>("");
  const [showModal, setShowModal] = useState(false);
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const inputLogin = useRef<HTMLInputElement>() as React.MutableRefObject<HTMLInputElement>;
  const inputPassword = useRef<HTMLInputElement>() as React.MutableRefObject<HTMLInputElement>;

  const handleChangeCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
    setIsAdmin(e.target.checked);
  };

  useEffect(() => {
    setShowModal(!showModal);
  }, [visible]);

  useEffect(() => {
    if (login && password) {
      LoginService.loginUser({ Login: login, Password: password })
        .then((resp) => {
          if (resp.status === StatusCodes.OK) {
            AuthManager.signInAsync(resp.data);
            setIsLoged(true);
            setLogin("");
            setMessage("");
          }
        })
        .catch((reason) => {
          if (reason.code === "ERR_BAD_REQUEST") {
            setMessage(reason.response.data["message"]);
          }
          if (reason.code === "ERR_NETWORK") {
            setMessage(reason.message);
          }
        });
    } else {
      setMessage("you have not enter login or password");
    }
  }, [attemptLogin]);

  return (
    <div>
      <Modal isOpen={visible} style={container}>
        <div>
          <div className={LoginModalStyles.header}>
            <text className={LoginModalStyles.textHeader}>Sign In</text>
          </div>
          <text className={LoginModalStyles.text}> Login</text>
          <input ref={inputLogin} type="text" className={LoginModalStyles.inputText} />
          <div style={{ height: 10 }}></div>
          <text className={LoginModalStyles.text}> Password</text>
          <input ref={inputPassword} type="password" className={LoginModalStyles.inputText}></input>
          <div style={{ marginTop: 10 }}>
            <text className={LoginModalStyles.textMessage}>{message}</text>
          </div>
          <button
            className={LoginModalStyles.button}
            onClick={() => {
              setLogin(inputLogin.current.value);
              setPassword(inputPassword.current.value);
              setAttemptLogin(!attemptLogin);
            }}
          >
            <text style={{ color: "white" }}>Login</text>
          </button>
          <div style={{ marginTop: 20, marginLeft: 20 }}>
            <label>
              <input onChange={handleChangeCheckbox} type="checkbox" />
              <text style={{ fontSize: 13, marginLeft: 5, color: "#B5A642" }}>
                As administrator
              </text>
            </label>
          </div>
        </div>
      </Modal>
    </div>
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
    height: 280,
    border: "1px solid #ccc",
    background: "#FFF8DC",
    borderRadius: "10px",
  },
};
