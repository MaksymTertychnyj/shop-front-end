import DepartmentModel from "../../models/DepartmentModel";
import APIRoutes from "../APIRoutes";
import ApiService from "../ApiService";

const route = APIRoutes.getDepartmentUrl();

const DepartmentService = {
  getAllDepartments: async () => ApiService.get<DepartmentModel[]>(route + "getAll"),
  getDepartment: async (id: number) => ApiService.get<DepartmentModel>(route + "getById/" + id),
  addDepartment: async (departmentName: string) =>
    ApiService.post<DepartmentModel>(route + "add/" + departmentName),
  updateDepartment: async (department: DepartmentModel) =>
    ApiService.put<DepartmentModel>(route + "update", department),
  deleteDepartment: async (id: number) => ApiService.delete(route + "delete/" + id),
};

export default DepartmentService;
