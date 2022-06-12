import { useState } from "react";
import ContentProductsAdmin from "../../../../../../activity/content-products-admin/ContentProductsAdmin";
import ListProductsAdmin from "../../../../../../activity/list-products-admin/ListProductsAdmin";
import CategoryModel from "../../../../../../models/CategoryModel";
import DepartmentModel from "../../../../../../models/DepartmentModel";
import TargetTypes from "../../../../../../models/TargetTypes";
import AppTabList from "../../../../../app-tab-list/AppTabList";
import ModelAddModel from "../../../../../modal-add-model/ModalAddModel";
import ProductsAdminContext from "./ProductsAdminContext";
import ProductsAdminStyles from "./ProductsAdminStyles";

const ProductsAdmin = () => {
  const [toggleState, setToggleState] = useState(TargetTypes.department);
  const [currentDepartment, setDepartment] = useState<DepartmentModel>(null);
  const [currentCategory, setCategory] = useState<CategoryModel>(null);
  const [inputName, setInputName] = useState<string>("");
  const [currentImageSource, setCurrentImageSource] = useState<string>("");
  const [showModalNewModel, setShowModalNewModel] = useState(false);

  return (
    <ProductsAdminContext.Provider
      value={{
        toggleState,
        setToggleState,
        currentDepartment,
        currentCategory,
        setDepartment,
        setCategory,
        inputName,
        setInputName,
        currentImageSource,
        setCurrentImageSource,
        showModalNewModel,
        setShowModalNewModel,
      }}
    >
      <div className={ProductsAdminStyles.container}>
        <div className={ProductsAdminStyles.actContainer} style={{ width: 330 }}>
          <div className={ProductsAdminStyles.header}>
            <div>
              <AppTabList />
            </div>
            <ContentProductsAdmin />
          </div>
        </div>
        <ListProductsAdmin />
      </div>
      <ModelAddModel visible={showModalNewModel} closeModal={setShowModalNewModel} />
    </ProductsAdminContext.Provider>
  );
};

export default ProductsAdmin;
