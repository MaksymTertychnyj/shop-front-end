import React, { useEffect, useState } from "react";
import EmployeeService from "../../../../../../api-service/employeeService/EmployeeService";
import User from "../../../../../../models/user/User";
import AddEmployeeContent from "../../../../../../activity/add-employee-content/AddEmployeeContent";
import AddEmployee from "../../../../../../activity/add-employee/AddEmployee";
import EmployeeContext from "./EmployeeContext";
import EmployeesStyles from "./EmployeesStyles";

const Employee = () => {
  const [employees, setEmployees] = useState<User[]>([]);
  const [currentEmployee, setCurrentEmployee] = useState<User>(Object.create({}));

  useEffect(() => {
    EmployeeService.getAllEmployees().then((resp) => setEmployees(resp.data));
  }, [currentEmployee]);

  return (
    <EmployeeContext.Provider
      value={{ employees, setEmployees, currentEmployee, setCurrentEmployee }}
    >
      <div className={EmployeesStyles.container}>
        <div>
          <AddEmployee />
        </div>
        <div className={EmployeesStyles.text}>Employees List</div>
        <div>
          <AddEmployeeContent />
        </div>
      </div>
    </EmployeeContext.Provider>
  );
};

export default Employee;
