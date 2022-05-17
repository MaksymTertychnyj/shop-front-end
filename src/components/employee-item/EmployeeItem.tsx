import React from "react";
import User from "../../models/user/User";
import { EmployeeItemProps } from "./EmployeeItemProps";
import EmployeeItemStyles from "./EmployeeItemStyles";
import { Element } from "react-scroll";

const EmployeeItem = (props: EmployeeItemProps) => {
  return (
    <div className={EmployeeItemStyles.container}>
      <div className={EmployeeItemStyles.column}>{props.user?.login}</div>
      <div className={EmployeeItemStyles.column}>{props.user?.firstName}</div>
      <div className={EmployeeItemStyles.column}>{props.user?.lastName}</div>
      <div className={EmployeeItemStyles.column}>{props.user?.email}</div>
      <div className={EmployeeItemStyles.column} style={{ width: 160 }}>
        {props.user?.role}
      </div>
    </div>
  );
};

export default EmployeeItem;
