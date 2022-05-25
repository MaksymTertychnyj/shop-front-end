import { useContext, useEffect, useState } from "react";
import CategoryService from "../../api-service/category-service/CategoryService";
import DepartmentService from "../../api-service/department-service/DepartmentService";
import EmployeeItem from "../../components/employee-item/EmployeeItem";
import ProductsAdminContext from "../../components/navigation/AppCard/app-card-tabs/app-card-activities/products-admin/ProductsAdminContext";
import CategoryModel from "../../models/CategoryModel";
import DepartmentModel from "../../models/DepartmentModel";
import CategoryItem from "./CategoryItem";
import DepartmentItem from "./DepartmentItem";
import ListStyles from "./ListStyles";

const ListProductsAdmin = () => {
  const { toggleState, currentDepartment, currentCategory, inputName } =
    useContext(ProductsAdminContext);
  const [departments, setDepartments] = useState<DepartmentModel[]>([]);
  const [categories, setCategories] = useState<CategoryModel[]>([]);

  useEffect(() => {
    DepartmentService.getAllDepartments().then((resp) => setDepartments(resp.data));

    if (currentDepartment) {
      CategoryService.getCategoriesByDepartment(currentDepartment.id).then((resp) =>
        setCategories(resp.data)
      );
    }
  }, [currentDepartment, inputName]);

  useEffect(() => {
    if (currentDepartment) {
      CategoryService.getCategoriesByDepartment(currentDepartment.id).then((resp) =>
        setCategories(resp.data)
      );
    }
  }, [currentCategory]);

  return (
    <div className={ListStyles.container}>
      <div className={ListStyles.header}>
        <div className={ListStyles.text}>
          {toggleState === 1 ? "List of Departments" : "List of Categories"}
        </div>
      </div>
      <div className={ListStyles.blocBody}>
        <div className={ListStyles.body}>
          {toggleState === 1
            ? departments.map((d, i) => {
                if (inputName === "") {
                  return <DepartmentItem key={i} department={d} />;
                } else {
                  if (d?.name.startsWith(inputName)) {
                    return <DepartmentItem key={i} department={d} />;
                  }
                }
              })
            : categories.map((c, i) => {
                if (inputName === "") {
                  return <CategoryItem key={i} category={c} />;
                } else {
                  if (c?.name.startsWith(inputName)) {
                    return <CategoryItem key={i} category={c} />;
                  }
                }
              })}
        </div>
      </div>
    </div>
  );
};

export default ListProductsAdmin;
