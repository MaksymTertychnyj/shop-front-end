import APIConfig from "./APIConfig";

const APIRoutes = {
  getLoginUrl: () => APIConfig.URL + "login/",
  getEmployeeUrl: () => APIConfig.URL + "employee/",
  getImageUrl: () => APIConfig.URL + "image/",
};

export default APIRoutes;
