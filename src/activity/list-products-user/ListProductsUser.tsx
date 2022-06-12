import { useContext, useEffect } from "react";
import ProductsUserContext from "../../components/navigation/AppCard/app-card-tabs/app-card-activities/products-user/ProductsUserContext";
import ListStyles from "./ListStyles";
import ProductItem from "./ProductItem";

const ListProductsUser = () => {
  const { inputName, products, setProduct } = useContext(ProductsUserContext);

  useEffect(() => {}, [inputName, products]);

  return (
    <div className={ListStyles.container}>
      <div className={ListStyles.header}>
        <div onClick={() => setProduct(null)} className={ListStyles.text}>
          List of products
        </div>
      </div>
      <div className={ListStyles.blocBody}>
        <div className={ListStyles.row} style={{ background: "#659EC7" }}>
          <div className={ListStyles.column} style={{ width: 39.5 }}>
            Id
          </div>
          <div className={ListStyles.column} style={{ width: 142 }}>
            Name
          </div>
          <div className={ListStyles.column}>Quantity</div>
          <div className={ListStyles.column}>Price</div>
        </div>
        <div className={ListStyles.body}>
          {products.map((p, i) => {
            if (inputName === "") {
              return <ProductItem key={i} product={p} />;
            } else {
              if (p?.name.startsWith(inputName)) {
                return <ProductItem key={i} product={p} />;
              }
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default ListProductsUser;
