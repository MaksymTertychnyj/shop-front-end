import { getAllByLabelText } from "@testing-library/react";
import { Console } from "console";
import { MutableRefObject, useContext, useEffect, useRef, useState } from "react";
import Select from "react-select";
import CategoryService from "../../api-service/category-service/CategoryService";
import DepartmentService from "../../api-service/department-service/DepartmentService";
import ImageService from "../../api-service/imageService/ImageService";
import ProductService from "../../api-service/product-service/ProductService";
import CategoryMapper from "../../components/data-mapper/CategoryMapper";
import DepartmentMapper from "../../components/data-mapper/DepartmentMapper";
import ModalParameters from "../../components/modal-product-parameters/ModalParameters";
import ProductsUserContext from "../../components/navigation/AppCard/app-card-tabs/app-card-activities/products-user/ProductsUserContext";
import CategoryModel from "../../models/CategoryModel";
import DataOfDropdown from "../../models/DataOfDropdown";
import DepartmentModel from "../../models/DepartmentModel";
import ProductModel from "../../models/ProductModel";
import TargetTypes from "../../models/TargetTypes";
import ContentProductsUserStyles from "./ContentProductsUserStyles";
import DropDownStyles from "./DropDownStyles";

const ContentProductsUser = () => {
  const {
    setProducts,
    setProduct,
    currentProduct,
    setInputName,
    products,
    currentImageSource,
    setCurrentImageSource,
  } = useContext(ProductsUserContext);
  const [departments, setDepartments] = useState<DataOfDropdown[]>([]);
  const [categories, setCategories] = useState<DataOfDropdown[]>([]);
  const [idDepartment, setIdDepartment] = useState(0);
  const [idCategory, setIdCategories] = useState(0);
  const [inputCategoryValue, setInputCategoryValue] = useState<any>();
  const [showModal, setShowModal] = useState(false);
  const [colorButtonParameters, setColorButtonParameters] = useState("");
  const [productParameters, setParam] = useState("");

  const inputName = useRef<HTMLInputElement>() as MutableRefObject<HTMLInputElement>;
  const inputQuantity = useRef<HTMLInputElement>() as MutableRefObject<HTMLInputElement>;
  const inputPrice = useRef<HTMLInputElement>() as MutableRefObject<HTMLInputElement>;

  const upLoadImage = (e: any) => {
    e.preventDefault();
    const bodyFormData = new FormData(e.target);
    ImageService.addImage(bodyFormData)
      .then(() => {
        loadImage(currentProduct?.id!, TargetTypes.products);
      })
      .catch((ex) => alert(ex));
  };

  const loadImage = (targetId: number, targetType: number) => {
    ImageService.getImage(targetId, targetType)
      .then((resp) => setCurrentImageSource(resp.data))
      .catch(() => setCurrentImageSource(""));
  };

  const deleteImage = () => {
    if (currentProduct) {
      ImageService.deleteImage(currentProduct.id, TargetTypes.products)
        .then(() => setCurrentImageSource(""))
        .catch((ex) => alert(ex));
    }
  };

  const onChangeInputNameHandler = () => {
    setInputName(inputName.current.value);
  };

  const addHandler = () => {
    let prod: ProductModel = Object.create(null);

    try {
      prod!.name = inputName.current.value;
      prod!.quantity = Number.parseInt(inputQuantity.current.value);
      prod!.price = Number.parseFloat(inputPrice.current.value);
      prod!.categoryId = idCategory;
      prod!.jsonParameters = productParameters;

      ProductService.addProduct(prod)
        .then((resp) => {
          //setProduct(resp.data);
          ProductService.getProductsByCategory(idCategory).then((resp) => setProducts(resp.data));
        })
        .catch((ex) => alert(ex));
    } catch {
      alert("incorrect data of product");
    }
  };

  const editHandler = () => {
    if (currentProduct) {
      let prod: ProductModel = Object.create(null);

      try {
        prod!.id = currentProduct.id;
        prod!.name = inputName.current.value;
        prod!.quantity = Number.parseInt(inputQuantity.current.value);
        prod!.price = Number.parseFloat(inputPrice.current.value);
        prod!.categoryId = currentProduct.categoryId;
        prod!.jsonParameters = productParameters;
        ProductService.updateProduct(prod)
          .then((resp) => {
            setProduct(resp.data);
            ProductService.getProductsByCategory(idCategory).then((resp) => setProducts(resp.data));
          })
          .catch((ex) => alert(ex));
      } catch {
        alert("incorrect data of product");
      }
    } else {
      alert("you haven't choosed any product");
    }
  };

  const deleteHandler = () => {
    if (currentProduct) {
      ImageService.deleteImage(currentProduct.id, TargetTypes.products);
      ProductService.deleteProduct(currentProduct.id).then(() => {
        setProduct(null);
        ProductService.getProductsByCategory(idCategory)
          .then((resp) => {
            setProducts(resp.data);
            setCurrentImageSource("");
          })
          .catch((ex) => alert(ex));
      });
    } else {
      alert("you haven't choosed any product");
    }
  };

  const editParameters = () => {
    if (inputCategoryValue) {
      setShowModal(true);
    }
  };

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

        loadImage(currentProduct.id, TargetTypes.products);
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
    setColorButtonParameters("#D1D0CE");
    setInputCategoryValue(null);
    setProducts([]);
    setProduct(null);
    setCurrentImageSource("");
    ImageService.getImage(idDepartment, TargetTypes.department).then((resp) =>
      setCurrentImageSource(resp.data)
    );
  }, [idDepartment]);

  useEffect(() => {
    setColorButtonParameters(inputCategoryValue ? "#92C7C7" : "#D1D0CE");
    ProductService.getProductsByCategory(idCategory)
      .then((resp) => {
        setProducts(resp.data);
        setProduct(null);
        setCurrentImageSource("");
        ImageService.getImage(idCategory, TargetTypes.categories).then((resp) =>
          setCurrentImageSource(resp.data)
        );
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
        <div style={{ display: "flex", marginTop: 10 }}>
          <div className={ContentProductsUserStyles.text} style={{ marginLeft: 70 }}>
            Name
          </div>
          <div className={ContentProductsUserStyles.text} style={{ marginLeft: 56 }}>
            Quantity
          </div>
          <div className={ContentProductsUserStyles.text} style={{ marginLeft: 33 }}>
            Price
          </div>
        </div>
        <div style={{ display: "flex", marginTop: 0, marginLeft: 10 }}>
          <input
            ref={inputName}
            type="text"
            className={ContentProductsUserStyles.inputText}
            onChange={() => onChangeInputNameHandler()}
          />
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
        <div style={{ display: "flex", marginTop: 0, marginLeft: 10 }}>
          <button className={ContentProductsUserStyles.button} onClick={addHandler}>
            <div className={ContentProductsUserStyles.buttonText}>Add</div>
          </button>
          <button className={ContentProductsUserStyles.button} onClick={editHandler}>
            <div className={ContentProductsUserStyles.buttonText}>Edit</div>
          </button>
          <button
            className={ContentProductsUserStyles.button}
            style={{ width: 65 }}
            onClick={deleteHandler}
          >
            <div className={ContentProductsUserStyles.buttonText}>Delete</div>
          </button>
          <button
            className={ContentProductsUserStyles.button}
            style={{ width: 70, backgroundColor: colorButtonParameters }}
            onClick={editParameters}
          >
            <div className={ContentProductsUserStyles.buttonText}>Parameters</div>
          </button>
        </div>
      </div>
      <div className={ContentProductsUserStyles.frame} style={{ marginTop: 10, height: 135 }}>
        <div className={ContentProductsUserStyles.imageContent}>
          <img
            className={ContentProductsUserStyles.image}
            alt="not found"
            src={currentImageSource}
          />
          <div style={{ marginLeft: 5 }}>
            <form onSubmit={upLoadImage} style={{ height: 50 }}>
              <div style={{ marginTop: 20 }}>
                <label htmlFor="contained-button-file" className="m-0 w-100">
                  <input
                    id="contained-button-file"
                    type="file"
                    name="imageData"
                    style={{ display: "none" }}
                  />
                  <div className={ContentProductsUserStyles.buttonImage}>Choose file</div>
                </label>
                <input
                  type="hidden"
                  name="targetId"
                  value={currentProduct ? currentProduct.id : 0}
                />
                <input type="hidden" name="targetType" value={TargetTypes.products} />
              </div>
              <button
                className={ContentProductsUserStyles.buttonImage}
                type="submit"
                style={{ marginTop: 15 }}
              >
                <div style={{ fontSize: 12 }}>Add image</div>
              </button>
            </form>
            <button
              className={ContentProductsUserStyles.buttonImage}
              type="button"
              style={{ marginTop: 26 }}
              onClick={deleteImage}
            >
              <div style={{ fontSize: 12 }}>Delete</div>
            </button>
          </div>
        </div>
      </div>
      <ModalParameters
        visible={showModal}
        closeModal={setShowModal}
        categoryId={idCategory}
        setParameters={setParam}
      />
    </div>
  );
};

export default ContentProductsUser;
