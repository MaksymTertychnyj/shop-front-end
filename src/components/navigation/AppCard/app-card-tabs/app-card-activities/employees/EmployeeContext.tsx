import React from "react";
import User from "../../../../../../models/user/User";

const returnType: any = {};
const users: Array<User> = [];
const user: User = Object.create(null);

const EmployeeContext = React.createContext({
  employees: users,
  setEmployees: (emp: Array<User>) => returnType,
  currentEmployee: user,
  setCurrentEmployee: (empl: User) => returnType,
});

export default EmployeeContext;
