import { useContext, useState } from "react";
import TargetTypes from "../../models/TargetTypes";
import { AppTabProps } from "../app-tab/AppTabProps";
import ProductsAdminContext from "../navigation/AppCard/app-card-tabs/app-card-activities/products-admin/ProductsAdminContext";
import AppTabListProps from "./AppTabListProps";
import AppTabListStyle from "./AppTabListStyles";

const AppTabList = () => {
  const { toggleState, setToggleState } = useContext(ProductsAdminContext);

  return (
    <div className={AppTabListStyle.header}>
      <div
        className={
          toggleState === TargetTypes.department ? AppTabListStyle.active : AppTabListStyle.unactive
        }
        onClick={() => setToggleState(TargetTypes.department)}
      >
        <div className={AppTabListStyle.text}>Department</div>
      </div>
      <div
        className={
          toggleState === TargetTypes.categories ? AppTabListStyle.active : AppTabListStyle.unactive
        }
        onClick={() => setToggleState(TargetTypes.categories)}
      >
        <div className={AppTabListStyle.text}>Category</div>
      </div>
    </div>
  );
};

export default AppTabList;
