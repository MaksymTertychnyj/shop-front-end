import { MutableRefObject, useContext, useEffect, useRef, useState } from "react";
import CategoryService from "../../api-service/category-service/CategoryService";
import DepartmentService from "../../api-service/department-service/DepartmentService";
import ProductsAdminContext from "../../components/navigation/AppCard/app-card-tabs/app-card-activities/products-admin/ProductsAdminContext";
import CategoryModel from "../../models/CategoryModel";
import DepartmentModel from "../../models/DepartmentModel";
import ContentStyles from "./ContentStyles";

const ContentProductsAdmin = () => {
  const {
    toggleState,
    currentDepartment,
    currentCategory,
    setDepartment,
    setCategory,
    setInputName,
  } = useContext(ProductsAdminContext);
  const [image, setImage] = useState();
  const inputName = useRef<HTMLInputElement>() as MutableRefObject<HTMLInputElement>;

  const onChangeInputHandler = () => {
    setInputName(inputName.current.value);
  };

  useEffect(() => {
    toggleState === 1
      ? (inputName.current.value = currentDepartment ? currentDepartment.name : "")
      : (inputName.current.value = currentCategory ? currentCategory.name : "");
  }, [currentDepartment, currentCategory, toggleState]);

  const addHandler = () => {
    if (toggleState === 1) {
      DepartmentService.addDepartment(inputName.current.value)
        .then((resp) => setDepartment(resp.data))
        .catch((ex) => alert(ex));
      setInputName("");
    } else {
      if (currentDepartment) {
        CategoryService.addCategory(inputName.current.value, currentDepartment.id)
          .then((resp) => setCategory(resp.data))
          .catch((ex) => alert(ex));
        setInputName("");
      }
    }
  };

  const editHandler = () => {
    if (toggleState === 1 && currentDepartment) {
      let dep: DepartmentModel = {
        id: currentDepartment?.id,
        name: inputName.current.value,
        targetType: currentDepartment?.targetType,
      };
      DepartmentService.updateDepartment(dep)
        .then((resp) => {
          setDepartment(resp.data);
          setInputName("");
        })
        .catch((ex) => alert(ex));
    } else {
      if (currentCategory) {
        let categ: CategoryModel = {
          id: currentCategory?.id,
          name: inputName.current.value,
          targetType: currentCategory?.targetType,
          departmentId: currentCategory.departmentId,
        };
        CategoryService.updateCategory(categ)
          .then((resp) => {
            setCategory(resp.data);
            setInputName("");
          })
          .catch((ex) => alert(ex));
      }
    }
  };

  const deleteHandler = () => {
    if (toggleState === 1 && currentDepartment) {
      DepartmentService.deleteDepartment(currentDepartment?.id).then(() => {
        setInputName("");
        setDepartment(null);
      });
    } else {
      if (currentCategory) {
        CategoryService.deleteCategory(currentCategory.id).then(() => {
          setInputName("");
          setCategory(null);
        });
      }
    }
  };

  const upLoadImage = (e: any) => {
    e.preventDefault();
    const bodyFormData = new FormData(e.target);
    if (toggleState === 1) {
    } else {
    }
  };

  return (
    <div className={ContentStyles.container}>
      <div>
        <div className={ContentStyles.inputHeader}>Name</div>
        <input
          ref={inputName}
          type="text"
          className={ContentStyles.inputText}
          onChange={() => onChangeInputHandler()}
        />
      </div>
      <div style={{ display: "flex" }}>
        <button className={ContentStyles.button} onClick={addHandler}>
          <div style={{ marginLeft: 7 }}>Add</div>
        </button>
        <button className={ContentStyles.button} onClick={editHandler}>
          <div style={{ marginLeft: 7 }}>Edit</div>
        </button>
        <button className={ContentStyles.button} onClick={deleteHandler}>
          <div>Delete</div>
        </button>
      </div>
      <div className={ContentStyles.imageContent}>
        <img className={ContentStyles.image} alt="not found" src={image} />
      </div>
      <form>
        <div style={{ marginTop: 10 }} onSubmit={upLoadImage}>
          <input type="file" name="imageData" />
          <input type="hidden" name="targetId" value={1} />
          <input type="hidden" name="targetType" value={6} />
        </div>
        <button type="submit" style={{ display: "flex", marginLeft: 25, marginTop: 15 }}>
          Add image
        </button>
      </form>
    </div>
  );
};

export default ContentProductsAdmin;
