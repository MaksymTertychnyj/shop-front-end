import { createContext } from "react";
import CategoryModel from "../../../../../../models/CategoryModel";
import DepartmentModel from "../../../../../../models/DepartmentModel";

const returnType: any = {};
const department: DepartmentModel = Object.create(null);
const category: CategoryModel = Object.create(null);

const ProductsAdminContext = createContext({
  toggleState: 1,
  setToggleState: (state: number) => returnType,
  currentDepartment: department,
  currentCategory: category,
  setDepartment: (depar: DepartmentModel) => returnType,
  setCategory: (cat: CategoryModel) => returnType,
  inputName: "",
  setInputName: (input: string) => returnType,
});

export default ProductsAdminContext;
