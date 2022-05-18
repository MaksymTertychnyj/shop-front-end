import React, { MutableRefObject, useRef } from "react";
import AddEmployeeStyles from "./AddEmployeeStyles";

const AddEmployee = () => {
  const inputLogin = useRef<HTMLInputElement>() as MutableRefObject<HTMLInputElement>;
  const inputPassword = useRef<HTMLInputElement>() as MutableRefObject<HTMLInputElement>;
  const inputFirstname = useRef<HTMLInputElement>() as MutableRefObject<HTMLInputElement>;
  const inpitLastname = useRef<HTMLInputElement>() as MutableRefObject<HTMLInputElement>;
  const inputEmail = useRef<HTMLInputElement>() as MutableRefObject<HTMLInputElement>;
  const inputRole = useRef<HTMLInputElement>() as MutableRefObject<HTMLInputElement>;

  const SaveFunc = () => {
    if (
      inputLogin.current.value !== "" &&
      inputFirstname.current.value !== "" &&
      inpitLastname.current.value !== "" &&
      inputEmail.current.value !== "" &&
      inputRole.current.value !== "" &&
      inputPassword.current.value !== ""
    ) {
      console.log(inputLogin.current.value);
    } else {
      alert("you need to enter all of data");
    }
  };

  const editFunc = () => {};

  const removeFunc = () => {};

  return (
    <div className={AddEmployeeStyles.container}>
      <div className={AddEmployeeStyles.containerInput}>
        <div className={AddEmployeeStyles.inputText} style={{ marginLeft: 15 }}>
          <div className={AddEmployeeStyles.inputHeader}>Login</div>
          <input ref={inputLogin} type="text" className={AddEmployeeStyles.inputText} />
        </div>
        <div className={AddEmployeeStyles.inputText}>
          <div className={AddEmployeeStyles.inputHeader}>Firstname</div>
          <input ref={inputFirstname} type="text" className={AddEmployeeStyles.inputText} />
        </div>
        <div className={AddEmployeeStyles.inputText}>
          <div className={AddEmployeeStyles.inputHeader}>Lastname</div>
          <input ref={inpitLastname} type="text" className={AddEmployeeStyles.inputText} />
        </div>
        <div className={AddEmployeeStyles.inputText}>
          <div className={AddEmployeeStyles.inputHeader} style={{ width: 100 }}>
            Email
          </div>
          <input
            ref={inputEmail}
            type="text"
            className={AddEmployeeStyles.inputText}
            style={{ width: 150 }}
          />
        </div>
        <div className={AddEmployeeStyles.inputText}>
          <div className={AddEmployeeStyles.inputHeader}>Role</div>
          <input
            ref={inputRole}
            type="text"
            style={{ width: 60, marginLeft: 55 }}
            className={AddEmployeeStyles.inputText}
          />
        </div>
      </div>
      <div
        className={AddEmployeeStyles.inputText}
        style={{ marginLeft: 40, marginTop: -10, fontWeight: "bold" }}
      >
        Password
      </div>
      <div
        className={AddEmployeeStyles.containerComplite}
        style={{ marginTop: 0, paddingLeft: 15 }}
      >
        <input ref={inputPassword} type="text" className={AddEmployeeStyles.inputText} />
        <button
          className={AddEmployeeStyles.button}
          style={{ marginLeft: 140 }}
          onClick={() => SaveFunc()}
        >
          Save
        </button>
        <button className={AddEmployeeStyles.button} onClick={() => editFunc()}>
          Edit
        </button>
        <button className={AddEmployeeStyles.button} onClick={() => removeFunc()}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default AddEmployee;
