import { useContext, useEffect, useState } from "react";
import ProductsAdminContext from "../../components/navigation/AppCard/app-card-tabs/app-card-activities/products-admin/ProductsAdminContext";
import DepartmentModel from "../../models/DepartmentModel";
import DepartmentItemProps from "./DepartmentItemProps";
import ListStyles from "./ListStyles";

const DepartmentItem = (props: DepartmentItemProps) => {
  const { currentDepartment, setDepartment } = useContext(ProductsAdminContext);
  const [color, setColor] = useState<string>("");

  useEffect(() => {
    setColor(currentDepartment?.name === props?.department?.name ? "#FFFFC2" : "black");
  }, [currentDepartment]);

  return (
    <div
      onClick={() => setDepartment(props?.department)}
      className={ListStyles.row}
      style={{
        background: currentDepartment?.name === props?.department?.name ? "#43C6DB" : "#98AFC7",
      }}
    >
      <div className={ListStyles.column} style={{ cursor: "pointer" }}>
        <text style={{ color: color }}>{props.department?.name}</text>
      </div>
    </div>
  );
};

export default DepartmentItem;
