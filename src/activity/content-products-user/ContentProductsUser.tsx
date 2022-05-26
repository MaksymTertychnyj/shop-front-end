import { getAllByLabelText } from "@testing-library/react";
import { Console } from "console";
import { MutableRefObject, useContext, useEffect, useRef, useState } from "react";
import Select from "react-select";
import CategoryService from "../../api-service/category-service/CategoryService";
import DepartmentService from "../../api-service/department-service/DepartmentService";
import ProductService from "../../api-service/product-service/ProductService";
import CategoryMapper from "../../components/data-mapper/CategoryMapper";
import DepartmentMapper from "../../components/data-mapper/DepartmentMapper";
import ProductsUserContext from "../../components/navigation/AppCard/app-card-tabs/app-card-activities/products-user/ProductsUserContext";
import CategoryModel from "../../models/CategoryModel";
import DataOfDropdown from "../../models/DataOfDropdown";
import DepartmentModel from "../../models/DepartmentModel";
import ProductModel from "../../models/ProductModel";
import ContentProductsUserStyles from "./ContentProductsUserStyles";
import DropDownStyles from "./DropDownStyles";

const ContentProductsUser = () => {
  const { setProducts, setProduct, currentProduct, setInputName, products } =
    useContext(ProductsUserContext);
  const [departments, setDepartments] = useState<DataOfDropdown[]>([]);
  const [categories, setCategories] = useState<DataOfDropdown[]>([]);
  const [idDepartment, setIdDepartment] = useState(0);
  const [idCategory, setIdCategories] = useState(0);
  const [inputCategoryValue, setInputCategoryValue] = useState<any>();

  const inputName = useRef<HTMLInputElement>() as MutableRefObject<HTMLInputElement>;
  const inputQuantity = useRef<HTMLInputElement>() as MutableRefObject<HTMLInputElement>;
  const inputPrice = useRef<HTMLInputElement>() as MutableRefObject<HTMLInputElement>;

  const addHandler = () => {};

  const editHandler = () => {};

  const deleteHandler = () => {};

  useEffect(() => {
    DepartmentService.getAllDepartments()
      .then((resp) => setDepartments(DepartmentMapper(resp.data)))
      .catch((ex) => alert(ex));
  }, []);

  useEffect(() => {
    try {
      if (currentProduct) {
        inputName.current.value = currentProduct.name;
        inputQuantity.current.value = currentProduct.quantity.toString();
        inputPrice.current.value = currentProduct.price.toString();
      } else {
        inputName.current.value = "";
        inputQuantity.current.value = "";
        inputPrice.current.value = "";
      }
    } catch {}
  }, [currentProduct]);

  useEffect(() => {
    CategoryService.getCategoriesByDepartment(idDepartment).then((resp) =>
      setCategories(CategoryMapper(resp.data))
    );
    setInputCategoryValue(null);
    setProducts([]);
    setProduct(null);
  }, [idDepartment]);

  useEffect(() => {
    ProductService.getProductsByCategory(idCategory)
      .then((resp) => {
        setProducts(resp.data);
        setProduct(null);
      })
      .catch(() => setProducts([]));
  }, [idCategory]);

  return (
    <div className={ContentProductsUserStyles.container}>
      <div className={ContentProductsUserStyles.frame}>
        <div style={{ display: "flex" }}>
          <div style={{ width: 140, marginLeft: 15 }}>
            <text className={ContentProductsUserStyles.text}>departments</text>
            <Select
              styles={DropDownStyles}
              options={departments}
              onChange={(val) => setIdDepartment(val?.value!)}
            />
          </div>
          <div style={{ width: 140, marginLeft: 15 }}>
            <text className={ContentProductsUserStyles.text}>categories</text>
            <Select
              styles={DropDownStyles}
              options={categories}
              value={inputCategoryValue}
              onChange={(val) => {
                setIdCategories(val?.value!);
                setInputCategoryValue(val);
              }}
            />
          </div>
        </div>
        <div style={{ display: "flex", marginTop: 20 }}>
          <div className={ContentProductsUserStyles.text} style={{ marginLeft: 60 }}>
            Name
          </div>
          <div className={ContentProductsUserStyles.text} style={{ marginLeft: 68 }}>
            Quantity
          </div>
          <div className={ContentProductsUserStyles.text} style={{ marginLeft: 40 }}>
            Price
          </div>
        </div>
        <div style={{ display: "flex", marginTop: 0 }}>
          <input ref={inputName} type="text" className={ContentProductsUserStyles.inputText} />
          <input
            ref={inputQuantity}
            type="number"
            className={ContentProductsUserStyles.inputText}
            style={{ width: 60 }}
          />
          <input
            ref={inputPrice}
            type="number"
            className={ContentProductsUserStyles.inputText}
            style={{ width: 60 }}
          />
        </div>
        <div style={{ display: "flex", marginTop: 6 }}>
          <button className={ContentProductsUserStyles.button} onClick={addHandler}>
            <div style={{ marginLeft: 7 }}>Add</div>
          </button>
          <button className={ContentProductsUserStyles.button} onClick={editHandler}>
            <div style={{ marginLeft: 7 }}>Edit</div>
          </button>
          <button
            className={ContentProductsUserStyles.button}
            style={{ width: 65 }}
            onClick={deleteHandler}
          >
            <div style={{ marginLeft: 5 }}>Delete</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContentProductsUser;
