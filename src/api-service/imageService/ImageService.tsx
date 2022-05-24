import APIRoutes from "../APIRoutes";
import ApiService from "../ApiService";

const route = APIRoutes.getImageUrl();

const ImageService = {
  getImage: async (targetId: string, targetType: string) =>
    ApiService.get<string>(route + "getByParams/" + targetId + "/" + targetType),

  addImage: async (formData: FormData, config?: string) =>
    ApiService.post(route + "add", formData, config),
};

export default ImageService;
