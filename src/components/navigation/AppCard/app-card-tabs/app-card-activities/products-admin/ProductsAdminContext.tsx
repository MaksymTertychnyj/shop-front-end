import { createContext } from "react";
import CategoryModel from "../../../../../../models/CategoryModel";
import DepartmentModel from "../../../../../../models/DepartmentModel";
import ImageModel from "../../../../../../models/image/ImageModel";
import TargetTypes from "../../../../../../models/TargetTypes";

const returnType: any = {};
const department: DepartmentModel = Object.create(null);
const category: CategoryModel = Object.create(null);
const imageSource: string = Object.create(null);

const ProductsAdminContext = createContext({
  toggleState: TargetTypes.department,
  setToggleState: (state: number) => returnType,
  currentDepartment: department,
  currentCategory: category,
  setDepartment: (depar: DepartmentModel) => returnType,
  setCategory: (cat: CategoryModel) => returnType,
  inputName: "",
  setInputName: (input: string) => returnType,
  currentImageSource: imageSource,
  setCurrentImageSource: (imgSource: string) => returnType,
  showModalNewModel: false,
  setShowModalNewModel: (state: boolean) => returnType,
});

export default ProductsAdminContext;
