import User from "../../models/user/User";
import APIRoutes from "../APIRoutes";
import ApiService from "../ApiService";

const route = APIRoutes.getEmployeeUrl();

const EmployeeService = {
  getAllEmployees: async () => ApiService.get<Array<User>>(route + "getAllEmployees"),
  deleteEmployee: async (login: string) => ApiService.delete(route + "deleteEmployee/" + login),
  updateEmployee: async (employee: User) => ApiService.put(route + "editEmployee", employee),
};

export default EmployeeService;
