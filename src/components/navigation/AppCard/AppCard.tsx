import React, { useContext, useEffect } from "react";
import LoginProviderContext from "../../login-provider/LoginProviderContext";
import AppCardTabs from "./app-card-tabs/AppCardTabs";
import AppCardStyles from "./AppCardStyles";

const AppCard = () => {
  const { isLoged } = useContext(LoginProviderContext);

  return isLoged ? (
    <div className={AppCardStyles.container}>
      <AppCardTabs />
    </div>
  ) : (
    <div></div>
  );
};

export default AppCard;
