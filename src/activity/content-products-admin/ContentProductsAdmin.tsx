import { MutableRefObject, useContext, useEffect, useRef, useState } from "react";
import CategoryService from "../../api-service/category-service/CategoryService";
import DepartmentService from "../../api-service/department-service/DepartmentService";
import ImageService from "../../api-service/imageService/ImageService";
import ProductsAdminContext from "../../components/navigation/AppCard/app-card-tabs/app-card-activities/products-admin/ProductsAdminContext";
import CategoryModel from "../../models/CategoryModel";
import DepartmentModel from "../../models/DepartmentModel";
import TargetTypes from "../../models/TargetTypes";
import ContentStyles from "./ContentStyles";

const ContentProductsAdmin = () => {
  const {
    toggleState,
    currentDepartment,
    currentCategory,
    setDepartment,
    setCategory,
    setInputName,
    currentImageSource,
    setCurrentImageSource,
  } = useContext(ProductsAdminContext);
  const inputName = useRef<HTMLInputElement>() as MutableRefObject<HTMLInputElement>;

  const loadImage = (targetId: number, targetType: number) => {
    ImageService.getImage(targetId, targetType)
      .then((resp) => setCurrentImageSource(resp.data))
      .catch(() => setCurrentImageSource(""));
  };

  const onChangeInputHandler = () => {
    setInputName(inputName.current.value);
  };

  useEffect(() => {
    if (toggleState === TargetTypes.department) {
      inputName.current.value = currentDepartment ? currentDepartment.name : "";
      setCategory(null);
      if (currentDepartment) {
        loadImage(currentDepartment.id, currentDepartment.targetType);
      }
    } else {
      inputName.current.value = currentCategory ? currentCategory.name : "";
      if (currentCategory) {
        loadImage(currentCategory.id, currentCategory.targetType);
      }
    }
  }, [currentDepartment, currentCategory, toggleState]);

  const addHandler = () => {
    if (toggleState === TargetTypes.department) {
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
    if (toggleState === TargetTypes.department && currentDepartment) {
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
    if (toggleState === TargetTypes.department && currentDepartment) {
      ImageService.deleteImage(currentDepartment.id, toggleState).then(() =>
        setCurrentImageSource("")
      );
      DepartmentService.deleteDepartment(currentDepartment?.id).then(() => {
        setInputName("");
        setDepartment(null);
      });
    } else {
      if (currentCategory) {
        ImageService.deleteImage(currentCategory.id, toggleState).then(() =>
          setCurrentImageSource("")
        );
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
    ImageService.addImage(bodyFormData)
      .then(() => {
        if (toggleState === TargetTypes.department) {
          loadImage(currentDepartment ? currentDepartment.id : 0, TargetTypes.department);
        } else {
          loadImage(currentCategory ? currentCategory.id : 0, TargetTypes.categories);
        }
      })
      .catch((ex) => alert(ex));
  };

  const deleteImage = () => {
    if (toggleState === TargetTypes.department) {
      if (currentDepartment) {
        ImageService.deleteImage(currentDepartment.id, currentDepartment.targetType).then(() =>
          setCurrentImageSource("")
        );
      }
    } else {
      if (currentCategory) {
        ImageService.deleteImage(currentCategory.id, currentCategory.targetType).then(() =>
          setCurrentImageSource("")
        );
      }
    }
  };

  return (
    <div className={ContentStyles.container}>
      <div className={ContentStyles.frame}>
        <div className={ContentStyles.inputHeader}>Name</div>
        <input
          ref={inputName}
          type="input"
          className={ContentStyles.inputText}
          onChange={() => onChangeInputHandler()}
        />
        <div style={{ display: "flex", marginTop: -25 }}>
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
      </div>
      <div className={ContentStyles.frame} style={{ height: 200, marginTop: 10 }}>
        <div className={ContentStyles.imageContent}>
          <img className={ContentStyles.image} alt="not found" src={currentImageSource} />
        </div>
        <div style={{ display: "flex" }}>
          <form onSubmit={upLoadImage}>
            <div style={{ marginTop: 0, marginLeft: 25 }}>
              <input type="file" name="imageData" />
              <input
                type="hidden"
                name="targetId"
                value={
                  toggleState === TargetTypes.department
                    ? currentDepartment?.id
                    : currentCategory?.id
                }
              />
              <input type="hidden" name="targetType" value={toggleState} />
            </div>
            <button
              type="submit"
              style={{ display: "flex", marginLeft: 25, marginTop: 10, cursor: "pointer" }}
            >
              Add image
            </button>
          </form>
        </div>
        <button
          type="button"
          style={{ marginTop: 10, marginRight: 160, cursor: "pointer" }}
          onClick={deleteImage}
        >
          Delete Image
        </button>
      </div>
    </div>
  );
};

export default ContentProductsAdmin;
