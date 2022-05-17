import React from "react";
import AddEmployeeContent from "../../../../../add-employee-content/AddEmployeeContent";
import AddEmployee from "../../../../../add-employee/AddEmployee";
import EmployeesStyles from "./EmployeesStyles";

const Employee = () => {
  return (
    <div className={EmployeesStyles.container}>
      <div>
        <AddEmployee />
      </div>
      <div className={EmployeesStyles.text}>Employees List</div>
      <div>
        <AddEmployeeContent />
      </div>
    </div>
  );
};

export default Employee;
