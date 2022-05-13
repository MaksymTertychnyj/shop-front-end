import APIConfig from "./APIConfig";

const APIRoutes = {
  getLoginAuthenticateUrl: () => APIConfig.URL + "login/",
};

export default APIRoutes;
