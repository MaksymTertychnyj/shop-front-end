import APIConfig from "./APIConfig";

const APIRoutes = {
  getLoginUrl: () => APIConfig.URL + "loginEmployee/",
  getEmployeeUrl: () => APIConfig.URL + "employee/",
  getImageUrl: () => APIConfig.URL + "image/",
  getDepartmentUrl: () => APIConfig.URL + "department/",
  getCategoryUrl: () => APIConfig.URL + "category/",
  getProductUrl: () => APIConfig.URL + "product/",
  getJsonModelUrl: () => APIConfig.URL + "jsonModel/",
  getCustomerUrl: () => APIConfig.URL + "customers/",
  getOrderUrl: () => APIConfig.URL + "order/",
};

export default APIRoutes;
