import { isContentEditable } from "@testing-library/user-event/dist/utils";
import React, { useContext, useEffect, useState } from "react";
import User from "../../../../models/user/User";
import AppTab from "../../../app-tab/AppTab";
import AuthManager from "../../../auth/AuthManager";
import LoginProviderContext from "../../../login-provider/LoginProviderContext";
import Customers from "./app-card-activities/customers/Customers";
import Employees from "./app-card-activities/employees/Employees";
import HomeAdmin from "./app-card-activities/home-admin/HomeAdmin";
import HomeUser from "./app-card-activities/home-user/HomeUser";
import ProductsAdmin from "./app-card-activities/products-admin/ProductsAdmin";
import ProductsUser from "./app-card-activities/products-user/ProductsUser";
import StartPage from "./app-card-activities/start-page/StartPage";
import AppCardTabsStyles from "./AppCardTabsStyles";

const AppCardTabs = () => {
  const [toggleState, setToogleState] = useState(1);
  const [user, setUser] = useState<User>(null);
  const { isLoged, setIsLoged } = useContext(LoginProviderContext);

  const CheckRole = () => {
    if (user?.role === "admin") {
      return (
        <>
          <div
            className={toggleState === 11 ? AppCardTabsStyles.activeTabs : AppCardTabsStyles.tabs}
          >
            <AppTab
              name={"Home"}
              index={11}
              toggleFunc={setToogleState}
              image={require("../../../../public/images/icons/home.png")}
            />
          </div>
          <div
            className={toggleState === 21 ? AppCardTabsStyles.activeTabs : AppCardTabsStyles.tabs}
          >
            <AppTab
              name={"Products"}
              index={21}
              toggleFunc={setToogleState}
              image={require("../../../../public/images/icons/products.png")}
            />
          </div>
          <div
            className={toggleState === 3 ? AppCardTabsStyles.activeTabs : AppCardTabsStyles.tabs}
          >
            <AppTab
              name={"Employees"}
              index={3}
              toggleFunc={setToogleState}
              image={require("../../../../public/images/icons/employees.png")}
            />
          </div>
          <div
            className={toggleState === 4 ? AppCardTabsStyles.activeTabs : AppCardTabsStyles.tabs}
          >
            <AppTab
              name={"Customers"}
              index={4}
              toggleFunc={setToogleState}
              image={require("../../../../public/images/icons/customers.png")}
            />
          </div>
        </>
      );
    } else {
      return (
        <>
          <div
            className={toggleState === 10 ? AppCardTabsStyles.activeTabs : AppCardTabsStyles.tabs}
          >
            <AppTab
              name={"Home"}
              index={10}
              toggleFunc={setToogleState}
              image={require("../../../../public/images/icons/home.png")}
            />
          </div>
          <div
            className={toggleState === 20 ? AppCardTabsStyles.activeTabs : AppCardTabsStyles.tabs}
          >
            <AppTab
              name={"Products"}
              index={20}
              toggleFunc={setToogleState}
              image={require("../../../../public/images/icons/products.png")}
            />
          </div>
        </>
      );
    }
  };

  const ContentResult = () => {
    switch (toggleState) {
      case 1:
        return <StartPage />;
      case 10:
        return <HomeUser />;
      case 11:
        return <HomeAdmin />;
      case 20:
        return <ProductsUser />;
      case 21:
        return <ProductsAdmin />;
      case 3:
        return <Employees />;
      case 4:
        return <Customers />;
      case 5:
        setIsLoged(false);
        break;
    }
  };

  useEffect(() => {
    AuthManager.getUser().then((res) => setUser(JSON.parse(res!)));
  }, [isLoged]);

  useEffect(() => {}, [toggleState]);

  return (
    <div style={{ display: "flex", width: 960 }}>
      <div className={AppCardTabsStyles.container}>
        <div className={AppCardTabsStyles.image}></div>
        <div className={AppCardTabsStyles.textLogin}>{user?.firstName}</div>
        <div className={AppCardTabsStyles.textLogin} style={{ marginTop: 0 }}>
          {user?.lastName}
        </div>
        <hr style={{ width: 85, marginLeft: 25 }} />
        <div style={{ marginBottom: 15 }}>{}</div>

        {CheckRole()}
        <div className={toggleState === 5 ? AppCardTabsStyles.activeTabs : AppCardTabsStyles.tabs}>
          <AppTab
            name={"LogOut"}
            index={5}
            toggleFunc={setToogleState}
            image={require("../../../../public/images/icons/logOut.png")}
          />
        </div>
      </div>
      <div className={AppCardTabsStyles.content}>{ContentResult()}</div>
    </div>
  );
};

export default AppCardTabs;
