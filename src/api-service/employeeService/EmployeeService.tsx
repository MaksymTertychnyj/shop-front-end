import React from "react";
import User from "../../models/user/User";
import APIRoutes from "../APIRoutes";
import ApiService from "../ApiService";

const route = APIRoutes.getGetAllEmployeesUrl();

const EmployeeService = {
  getAllEmployees: async () => ApiService.get<Array<User>>(route + "getAllEmployees"),
};

export default EmployeeService;
