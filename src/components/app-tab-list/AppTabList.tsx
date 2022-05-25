import { useContext, useState } from "react";
import { AppTabProps } from "../app-tab/AppTabProps";
import ProductsAdminContext from "../navigation/AppCard/app-card-tabs/app-card-activities/products-admin/ProductsAdminContext";
import AppTabListProps from "./AppTabListProps";
import AppTabListStyle from "./AppTabListStyles";

const AppTabList = () => {
  const { toggleState, setToggleState } = useContext(ProductsAdminContext);

  return (
    <div className={AppTabListStyle.header}>
      <div
        className={toggleState === 1 ? AppTabListStyle.active : AppTabListStyle.unactive}
        onClick={() => setToggleState(1)}
      >
        <div className={AppTabListStyle.text}>Department</div>
      </div>
      <div
        className={toggleState === 2 ? AppTabListStyle.active : AppTabListStyle.unactive}
        onClick={() => setToggleState(2)}
      >
        <div className={AppTabListStyle.text}>Category</div>
      </div>
    </div>
  );
};

export default AppTabList;
