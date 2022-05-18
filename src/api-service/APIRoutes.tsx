import APIConfig from "./APIConfig";

const APIRoutes = {
  getLoginUrl: () => APIConfig.URL + "login/",
  getEmployeeUrl: () => APIConfig.URL + "employee/",
};

export default APIRoutes;
