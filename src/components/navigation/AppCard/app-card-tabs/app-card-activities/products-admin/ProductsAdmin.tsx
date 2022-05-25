import { useEffect, useState } from "react";
import ContentProductsAdmin from "../../../../../../activity/content-products-admin/ContentProductsAdmin";
import ListProductsAdmin from "../../../../../../activity/list-products-admin/ListProductsAdmin";
import DepartmentService from "../../../../../../api-service/department-service/DepartmentService";
import CategoryModel from "../../../../../../models/CategoryModel";
import DepartmentModel from "../../../../../../models/DepartmentModel";
import ImageModel from "../../../../../../models/image/ImageModel";
import AppTabList from "../../../../../app-tab-list/AppTabList";
import ProductsAdminContext from "./ProductsAdminContext";
import ProductsAdminStyles from "./ProductsAdminStyles";

const ProductsAdmin = () => {
  const [toggleState, setToggleState] = useState(1);
  const [currentDepartment, setDepartment] = useState<DepartmentModel>(null);
  const [currentCategory, setCategory] = useState<CategoryModel>(null);
  const [inputName, setInputName] = useState<string>("");
  const [currentImageSource, setCurrentImageSource] = useState<string>("");

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
    </ProductsAdminContext.Provider>
  );
};

export default ProductsAdmin;
