import { useRef } from "react";
import { createContext, MutableRefObject } from "react";
import CategoryModel from "../../../../../../models/CategoryModel";
import DepartmentModel from "../../../../../../models/DepartmentModel";
import ProductModel from "../../../../../../models/ProductModel";

const returnType: any = {};
const product: ProductModel = Object.create(null);
const products: ProductModel[] = Object.create([]);
const imageSource: string = Object.create(null);

const ProductsUserContext = createContext({
  currentProduct: product,
  setProduct: (prod: ProductModel) => returnType,
  products: products,
  setProducts: (prods: ProductModel[]) => returnType,
  inputName: "",
  setInputName: (name: string) => returnType,
  currentImageSource: imageSource,
  setCurrentImageSource: (imgSource: string) => returnType,
});

export default ProductsUserContext;
