import React, { useState } from "react";
import ContentProductsUser from "../../../../../../activity/content-products-user/ContentProductsUser";
import ListProductsUser from "../../../../../../activity/list-products-user/ListProductsUser";
import CategoryModel from "../../../../../../models/CategoryModel";
import DepartmentModel from "../../../../../../models/DepartmentModel";
import ProductModel from "../../../../../../models/ProductModel";
import ProductsUserContext from "./ProductsUserContext";
import ProductsUserStyles from "./ProductsUserStyles";

const ProductsUser = () => {
  const [currentDepartment, setDepartment] = useState<DepartmentModel>(null);
  const [currentCategory, setCategory] = useState<CategoryModel>(null);
  const [currentProduct, setProduct] = useState<ProductModel>(null);
  const [products, setProducts] = useState<ProductModel[]>([]);
  const [inputName, setInputName] = useState<string>("");
  const [inputQuantity, setInputQuantity] = useState<string>("");
  const [inputPrice, setInputPrice] = useState<string>("");
  const [currentImageSource, setCurrentImageSource] = useState<string>(
    require("../../../../../../public/images/icons/home.png")
  );

  return (
    <ProductsUserContext.Provider
      value={{
        currentProduct,
        currentImageSource,
        setProduct,
        setCurrentImageSource,
        products,
        setProducts,
        inputName,
        inputQuantity,
        inputPrice,
        setInputName,
        setInputQuantity,
        setInputPrice,
      }}
    >
      <div className={ProductsUserStyles.container}>
        <div className={ProductsUserStyles.actContainer}>
          <div className={ProductsUserStyles.header}>
            <div className={ProductsUserStyles.text}>header component</div>
            <ContentProductsUser />
          </div>
        </div>
        <ListProductsUser />
      </div>
    </ProductsUserContext.Provider>
  );
};

export default ProductsUser;
