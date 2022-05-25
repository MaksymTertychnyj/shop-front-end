import { useContext, useEffect, useState } from "react";
import ProductsAdminContext from "../../components/navigation/AppCard/app-card-tabs/app-card-activities/products-admin/ProductsAdminContext";
import CategoryItemProps from "./CategoryItemProps";
import ListStyles from "./ListStyles";

const CategoryItem = (props: CategoryItemProps) => {
  const { currentCategory, setCategory } = useContext(ProductsAdminContext);
  const [color, setColor] = useState<string>("");

  useEffect(() => {
    setColor(currentCategory?.name === props?.category?.name ? "#FFFFC2" : "black");
  }, [currentCategory]);

  return (
    <div
      onClick={() => setCategory(props?.category)}
      className={ListStyles.row}
      style={{
        background: currentCategory?.name === props?.category?.name ? "#43C6DB" : "#98AFC7",
        cursor: "pointer",
      }}
    >
      <div className={ListStyles.column} style={{ cursor: "pointer" }}>
        <text style={{ color: color }}>{props?.category?.name}</text>
      </div>
    </div>
  );
};

export default CategoryItem;
