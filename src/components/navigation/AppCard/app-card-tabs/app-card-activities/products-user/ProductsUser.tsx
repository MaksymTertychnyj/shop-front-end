import { useState } from "react";
import ContentProductsUser from "../../../../../../activity/content-products-user/ContentProductsUser";
import ListProductsUser from "../../../../../../activity/list-products-user/ListProductsUser";
import ProductModel from "../../../../../../models/ProductModel";
import ProductsUserContext from "./ProductsUserContext";
import ProductsUserStyles from "./ProductsUserStyles";

const ProductsUser = () => {
  const [currentProduct, setProduct] = useState<ProductModel>(null);
  const [products, setProducts] = useState<ProductModel[]>([]);
  const [inputName, setInputName] = useState<string>("");
  const [currentImageSource, setCurrentImageSource] = useState<string>("");

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
        setInputName,
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
