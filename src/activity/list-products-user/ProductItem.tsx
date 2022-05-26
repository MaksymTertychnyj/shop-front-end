import { useContext, useEffect, useState } from "react";
import ProductsUserContext from "../../components/navigation/AppCard/app-card-tabs/app-card-activities/products-user/ProductsUserContext";
import ListStyles from "./ListStyles";

const ProductItem = ({ product }: any) => {
  const { currentProduct, setProduct } = useContext(ProductsUserContext);
  const [color, setColor] = useState<string>("");

  useEffect(() => {
    setColor(currentProduct?.name === product?.name ? "#FFFFC2" : "black");
  }, [currentProduct]);

  return (
    <div
      onClick={() => setProduct(product)}
      className={ListStyles.row}
      style={{
        background: currentProduct?.name === product?.name ? "#43C6DB" : "#98AFC7",
        cursor: "pointer",
      }}
    >
      <div className={ListStyles.row} style={{ cursor: "pointer" }}>
        <text className={ListStyles.column} style={{ color: color, width: 39 }}>
          {product?.id}
        </text>
        <text className={ListStyles.column} style={{ color: color, width: 140 }}>
          {product?.name}
        </text>
        <text className={ListStyles.column} style={{ color: color }}>
          {product?.quantity}
        </text>
        <text className={ListStyles.column} style={{ color: color, width: 63 }}>
          {product?.price}
        </text>
      </div>
    </div>
  );
};

export default ProductItem;
