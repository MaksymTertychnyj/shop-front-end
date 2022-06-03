import JsonModel from "../../models/JsonModel";
import APIRoutes from "../APIRoutes";
import ApiService from "../ApiService";

const route = APIRoutes.getJsonModelUrl();

const JsonModelService = {
  getModel: async (categoryId: number) =>
    ApiService.get<JsonModel>(route + "getByCategory/" + categoryId),

  addModel: async (pattern: string, categoryId: number) =>
    ApiService.post<JsonModel>(route + "add/" + pattern + "/" + categoryId),

  updateModel: async (pattern: string, categoryId: number) =>
    ApiService.put<JsonModel>(route + "update/" + pattern + "/" + categoryId),

  deleteModel: async (categoryId: number) => ApiService.delete(route + "delete/" + categoryId),
};

export default JsonModelService;
