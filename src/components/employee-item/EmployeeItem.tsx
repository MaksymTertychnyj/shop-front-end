import React, { useContext, useEffect, useState } from "react";
import { EmployeeItemProps } from "./EmployeeItemProps";
import EmployeeItemStyles from "./EmployeeItemStyles";
import EmployeeContext from "../navigation/AppCard/app-card-tabs/app-card-activities/employees/EmployeeContext";

const EmployeeItem = (props: EmployeeItemProps) => {
  const { currentEmployee, setCurrentEmployee } = useContext(EmployeeContext);
  const [color, setColor] = useState<string>("");

  useEffect(() => {
    setColor(currentEmployee?.login === props.user?.login ? "#FFFFC2" : "black");
  }, [currentEmployee]);

  return (
    <div
      onClick={() => setCurrentEmployee(props.user)}
      className={EmployeeItemStyles.container}
      style={{
        background: currentEmployee?.login === props.user?.login ? "#98AFC7" : "#43C6DB",
      }}
    >
      <div className={EmployeeItemStyles.column}>
        <text style={{ color: color }}>{props.user?.login}</text>
      </div>
      <div className={EmployeeItemStyles.column}>
        <text style={{ color: color }}>{props.user?.firstName}</text>
      </div>
      <div className={EmployeeItemStyles.column}>
        <text style={{ color: color }}>{props.user?.lastName}</text>
      </div>
      <div className={EmployeeItemStyles.column}>
        <text style={{ color: color }}>{props.user?.email}</text>
      </div>
      <div className={EmployeeItemStyles.column} style={{ width: 160 }}>
        <text style={{ color: color }}>{props.user?.role}</text>
      </div>
    </div>
  );
};

export default EmployeeItem;
