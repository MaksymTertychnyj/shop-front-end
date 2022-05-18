import React from "react";
import User from "../../models/user/User";
import APIRoutes from "../APIRoutes";
import ApiService from "../ApiService";

const route = APIRoutes.getEmployeeUrl();

const EmployeeService = {
  getAllEmployees: async () => ApiService.get<Array<User>>(route + "getAllEmployees"),
  deleteEmployee: async (login: string) => ApiService.delete(route + "deleteEmployee/" + login),
};

export default EmployeeService;
