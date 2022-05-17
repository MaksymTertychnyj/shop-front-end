import React, { useContext, useEffect, useState } from "react";
import User from "../../models/user/User";
import AuthManager from "../auth/AuthManager";
import EmployeeItem from "../employee-item/EmployeeItem";
import LoginProviderContext from "../login-provider/LoginProviderContext";
import AddEmployeeContentStyles from "./AddEmployeeContentStyles";

const AddEmployeeContent = () => {
  const [user, setUser] = useState<User>(null);
  const { isLoged } = useContext(LoginProviderContext);

  useEffect(() => {
    AuthManager.getUser().then((res) => setUser(JSON.parse(res!)));
  }, [isLoged]);

  return (
    <div className={AddEmployeeContentStyles.container}>
      <div className={AddEmployeeContentStyles.header}>
        <div className={AddEmployeeContentStyles.column}>Login</div>
        <div className={AddEmployeeContentStyles.column}>Firstname</div>
        <div className={AddEmployeeContentStyles.column}>Lastname</div>
        <div className={AddEmployeeContentStyles.column}>Email</div>
        <div className={AddEmployeeContentStyles.column}>Role</div>
      </div>
      <div className={AddEmployeeContentStyles.blocBody}>
        <div className={AddEmployeeContentStyles.body}>
          <EmployeeItem user={user} />
          <EmployeeItem user={user} />
          <EmployeeItem user={user} />
          <EmployeeItem user={user} />
          <EmployeeItem user={user} />
          <EmployeeItem user={user} />
        </div>
      </div>
    </div>
  );
};

export default AddEmployeeContent;
