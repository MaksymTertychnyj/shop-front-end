import React, { useContext, useEffect, useState } from "react";
import User from "../../../../models/user/User";
import UserAuthenticateResponse from "../../../../models/user/UserAuthenticateResponse";
import AppTab from "../../../app-tab/AppTab";
import AuthManager from "../../../auth/AuthManager";
import LoginProviderContext from "../../../login-provider/LoginProviderContext";
import AppCardTabsStyles from "./AppCardTabsStyles";

const AppCardTabs = () => {
  const [toggleState, setToogleState] = useState(1);
  const [user, setUser] = useState<UserAuthenticateResponse>(null);
  const { isLoged, setIsLoged } = useContext(LoginProviderContext);

  useEffect(() => {
    AuthManager.getUser().then((res) => setUser(JSON.parse(res!)));
  }, [isLoged]);

  useEffect(() => {
    switch (toggleState) {
      case 5:
        setIsLoged(false);
        break;
    }
  }, [toggleState]);

  return (
    <div style={{ display: "flex", width: 960 }}>
      <div className={AppCardTabsStyles.container}>
        <div className={AppCardTabsStyles.image}></div>
        <div className={AppCardTabsStyles.textLogin}>{user?.firstName}</div>
        <div className={AppCardTabsStyles.textLogin} style={{ marginTop: 0 }}>
          {user?.lastName}
        </div>
        <hr style={{ width: 85, marginLeft: 20 }} />
        <div style={{ marginBottom: 15 }}>{}</div>
        <div className={toggleState === 1 ? AppCardTabsStyles.activeTabs : AppCardTabsStyles.tabs}>
          <AppTab name={"Tab1"} index={1} toggleFunc={setToogleState} />
        </div>
        <div className={toggleState === 2 ? AppCardTabsStyles.activeTabs : AppCardTabsStyles.tabs}>
          <AppTab name={"Tab2"} index={2} toggleFunc={setToogleState} />
        </div>
        <div className={toggleState === 3 ? AppCardTabsStyles.activeTabs : AppCardTabsStyles.tabs}>
          <AppTab name={"Tab3"} index={3} toggleFunc={setToogleState} />
        </div>
        <div className={toggleState === 4 ? AppCardTabsStyles.activeTabs : AppCardTabsStyles.tabs}>
          <AppTab name={"Tab4"} index={4} toggleFunc={setToogleState} />
        </div>
        <div className={toggleState === 5 ? AppCardTabsStyles.activeTabs : AppCardTabsStyles.tabs}>
          <AppTab name={"LogOut"} index={5} toggleFunc={setToogleState} />
        </div>
      </div>
      <div className={AppCardTabsStyles.content}>
        <div className={toggleState === 1 ? "content active-content" : "content"}>
          {toggleState}
        </div>
      </div>
    </div>
  );
};

export default AppCardTabs;
