import APIRoutes from "../APIRoutes";
import ApiService from "../ApiService";

const route = APIRoutes.getImageUrl();

const ImageService = {
  getImage: async (targetId: number, targetType: number) =>
    ApiService.get<string>(route + "getByParams/" + targetId + "/" + targetType),

  addImage: async (formData: FormData, config?: string) =>
    ApiService.post(route + "add", formData, config),

  deleteImage: async (targetId: number, targetType: number) =>
    ApiService.delete(route + "delete/" + targetId + "/" + targetType),
};

export default ImageService;
