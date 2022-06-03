import { MutableRefObject, useContext, useEffect, useRef, useState } from "react";
import CategoryService from "../../api-service/category-service/CategoryService";
import DepartmentService from "../../api-service/department-service/DepartmentService";
import ImageService from "../../api-service/imageService/ImageService";
import ModelAddModel from "../../components/modal-add-model/ModalAddModel";
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
    setShowModalNewModel,
  } = useContext(ProductsAdminContext);
  const inputName = useRef<HTMLInputElement>() as MutableRefObject<HTMLInputElement>;
  const str = `{"id":10,"name":"спининг","brand":"Carbon","quantity":10,"price":110,"categoryId":1}`;

  const someHandler = () => {
    let v = JSON.parse(str);
    for (let key in v) {
      console.log(key + ": " + v[key]);
    }
  };

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
    toggleState === TargetTypes.department
      ? DepartmentService.addDepartment(inputName.current.value)
          .then((resp) => setDepartment(resp.data))
          .catch((ex) => alert(ex))
      : CategoryService.addCategory(inputName.current.value, currentDepartment?.id!)
          .then((resp) => setCategory(resp.data))
          .catch((ex) => alert(ex));
    setInputName("");
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
    deleteImage();
    toggleState === TargetTypes.department
      ? DepartmentService.deleteDepartment(currentDepartment?.id!).then(() => setDepartment(null))
      : CategoryService.deleteCategory(currentCategory?.id!).then(() => setCategory(null));
    setInputName("");
  };

  const upLoadImage = (e: any) => {
    e.preventDefault();
    const bodyFormData = new FormData(e.target);
    ImageService.addImage(bodyFormData)
      .then(() => {
        toggleState === TargetTypes.department
          ? loadImage(currentDepartment ? currentDepartment.id : 0, toggleState)
          : loadImage(currentCategory ? currentCategory.id : 0, toggleState);
      })
      .catch((ex) => alert(ex));
  };

  const deleteImage = () => {
    ImageService.deleteImage(
      toggleState === TargetTypes.department ? currentDepartment?.id! : currentCategory?.id!,
      toggleState
    ).then(() => setCurrentImageSource(""));
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
            <div className={ContentStyles.buttonText}>Add</div>
          </button>
          <button className={ContentStyles.button} onClick={editHandler}>
            <div className={ContentStyles.buttonText}>Edit</div>
          </button>
          <button className={ContentStyles.button} onClick={deleteHandler}>
            <div className={ContentStyles.buttonText}>Delete</div>
          </button>
          <button
            style={{ width: 80 }}
            className={ContentStyles.button}
            onClick={() => setShowModalNewModel(true)}
          >
            <div className={ContentStyles.buttonText}>Add model</div>
          </button>
          <button style={{ width: 40 }} className={ContentStyles.button} onClick={someHandler}>
            <div className={ContentStyles.buttonText}>aa</div>
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
              <label htmlFor="contained-button-file" className="m-0 w-100">
                <input
                  id="contained-button-file"
                  type="file"
                  name="imageData"
                  style={{ display: "none" }}
                />
                <div className={ContentStyles.buttonChooseFile}>Choose file</div>
              </label>
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
              className={ContentStyles.button}
              style={{ display: "flex", marginLeft: 25, marginTop: 10 }}
            >
              <div className={ContentStyles.buttonText}>Add image</div>
            </button>
          </form>
        </div>
        <button
          type="button"
          className={ContentStyles.button}
          style={{ marginTop: 10, marginRight: 182 }}
          onClick={deleteImage}
        >
          <div className={ContentStyles.buttonText}>Delete Image</div>
        </button>
      </div>
    </div>
  );
};

export default ContentProductsAdmin;
