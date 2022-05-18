import APIConfig from "./APIConfig";

const APIRoutes = {
  getLoginAuthenticateUrl: () => APIConfig.URL + "login/",
  getGetAllEmployeesUrl: () => APIConfig.URL + "employee/",
};

export default APIRoutes;
