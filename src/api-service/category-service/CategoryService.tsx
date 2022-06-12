import CategoryModel from "../../models/CategoryModel";
import APIRoutes from "../APIRoutes";
import ApiService from "../ApiService";

const route = APIRoutes.getCategoryUrl();

const CategoryService = {
  getAllCategories: async () => ApiService.get<CategoryModel[]>(route + "getAll"),
  getCategoriesByDepartment: async (departmentId: number) =>
    ApiService.get<CategoryModel[]>(route + "getByDepartment/" + departmentId),
  getCategory: async (id: number) => ApiService.get<CategoryModel>(route + "getById/" + id),
  addCategory: async (name: string, departmentId: number) =>
    ApiService.post<CategoryModel>(route + "add/" + name + "/" + departmentId),
  deleteCategory: async (id: number) => ApiService.delete(route + "delete/" + id),
  updateCategory: async (category: CategoryModel) =>
    ApiService.put<CategoryModel>(route + "update", category),
};

export default CategoryService;
