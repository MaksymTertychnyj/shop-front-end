import { useContext, useEffect, useState } from "react";
import ProductsUserContext from "../../components/navigation/AppCard/app-card-tabs/app-card-activities/products-user/ProductsUserContext";
import ListStyles from "./ListStyles";

const ProductItem = ({ product }: any) => {
  const { currentProduct, setProduct } = useContext(ProductsUserContext);
  const [color, setColor] = useState<string>("");

  useEffect(() => {
    setColor(currentProduct?.name === product?.name ? "#FFFFC2" : "black");
  }, [currentProduct]);

  const checkTextWidth = (text: string, countChars: number) => {
    if (text.length > countChars) {
      return text.slice(0, countChars - 1) + " ...";
    } else {
      return text;
    }
  };

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
          {checkTextWidth(product?.id.toString(), 4)}
        </text>
        <text className={ListStyles.column} style={{ color: color, width: 140 }}>
          {checkTextWidth(product.name, 20)}
        </text>
        <text className={ListStyles.column} style={{ color: color }}>
          {checkTextWidth(product?.quantity.toString(), 8)}
        </text>
        <text className={ListStyles.column} style={{ color: color, width: 63 }}>
          {checkTextWidth(product?.price.toString(), 8)}
        </text>
      </div>
    </div>
  );
};

export default ProductItem;
