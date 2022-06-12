import React, { useContext } from "react";
import EmployeeItem from "../../components/employee-item/EmployeeItem";
import EmployeeContext from "../../components/navigation/AppCard/app-card-tabs/app-card-activities/employees/EmployeeContext";
import AddEmployeeContentStyles from "./AddEmployeeContentStyles";

const AddEmployeeContent = () => {
  const { employees } = useContext(EmployeeContext);

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
          {employees.map((e, i) => {
            return <EmployeeItem key={i} user={e} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default AddEmployeeContent;
