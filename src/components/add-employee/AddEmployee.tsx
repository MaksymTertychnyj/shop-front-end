import React, { MutableRefObject, useContext, useEffect, useRef, useState } from "react";
import EmployeeService from "../../api-service/employeeService/EmployeeService";
import LoginService from "../../api-service/login-service/LoginService";
import User from "../../models/user/User";
import EmployeeContext from "../navigation/AppCard/app-card-tabs/app-card-activities/employees/EmployeeContext";
import AddEmployeeStyles from "./AddEmployeeStyles";

const AddEmployee = () => {
  const { setEmployees, currentEmployee, setCurrentEmployee } = useContext(EmployeeContext);
  const inputLogin = useRef<HTMLInputElement>() as MutableRefObject<HTMLInputElement>;
  const inputPassword = useRef<HTMLInputElement>() as MutableRefObject<HTMLInputElement>;
  const inputFirstname = useRef<HTMLInputElement>() as MutableRefObject<HTMLInputElement>;
  const inputLastname = useRef<HTMLInputElement>() as MutableRefObject<HTMLInputElement>;
  const inputEmail = useRef<HTMLInputElement>() as MutableRefObject<HTMLInputElement>;
  const inputRole = useRef<HTMLInputElement>() as MutableRefObject<HTMLInputElement>;

  useEffect(() => {
    inputLogin.current.value = currentEmployee?.login ? currentEmployee.login : " ";
    inputPassword.current.value = "";
    inputFirstname.current.value = currentEmployee?.firstName ? currentEmployee.firstName : "";
    inputLastname.current.value = currentEmployee?.lastName ? currentEmployee.lastName : "";
    inputEmail.current.value = currentEmployee?.email ? currentEmployee.email : "";
    inputRole.current.value = currentEmployee?.role ? currentEmployee.role : "";
  }, [currentEmployee]);

  const getEmployees = () => {
    EmployeeService.getAllEmployees().then((resp) => setEmployees(resp.data));
  };

  const SaveFunc = () => {
    if (
      inputLogin.current.value !== "" &&
      inputFirstname.current.value !== "" &&
      inputLastname.current.value !== "" &&
      inputEmail.current.value !== "" &&
      inputRole.current.value !== "" &&
      inputPassword.current.value !== ""
    ) {
      let employee: User = {
        firstName: inputFirstname.current.value,
        lastName: inputLastname.current.value,
        email: inputEmail.current.value,
        login: inputLogin.current.value,
        password: inputPassword.current.value,
        role: inputRole.current.value,
      };
      LoginService.registerUser(employee).then(() => getEmployees());
      setCurrentEmployee(employee);
    } else {
      alert("you need to enter all of data");
    }
  };

  const editFunc = () => {
    let employee: User = {
      firstName: inputFirstname.current.value,
      lastName: inputLastname.current.value,
      email: inputEmail.current.value,
      login: inputLogin.current.value,
      password: inputPassword.current.value,
      role: inputRole.current.value,
    };
    if (currentEmployee?.login !== undefined) {
      EmployeeService.updateEmployee(employee).then(() => getEmployees());
    } else {
      alert("you didn't choose any employee");
    }
  };

  const removeFunc = () => {
    if (currentEmployee?.login !== undefined) {
      EmployeeService.deleteEmployee(inputLogin.current.value).then(() => getEmployees());
    } else {
      alert("you didn't choose any employee");
    }
  };

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
          <input ref={inputLastname} type="text" className={AddEmployeeStyles.inputText} />
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
