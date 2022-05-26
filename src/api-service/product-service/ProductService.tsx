import ProductModel from "../../models/ProductModel";
import APIRoutes from "../APIRoutes";
import ApiService from "../ApiService";

const route = APIRoutes.getProductUrl();

const ProductService = {
  getAllProducts: async () => ApiService.get<ProductModel[]>(route + "getAll"),
  getProduct: async (id: number) => ApiService.get<ProductModel>(route + "getById/" + id),
  getProductsByCategory: async (categoryId: number) =>
    ApiService.get<ProductModel[]>(route + "getByCategory/" + categoryId),
  addProduct: async (product: ProductModel) =>
    ApiService.post<ProductModel>(route + "add", product),
  updateProduct: async (product: ProductModel) =>
    ApiService.put<ProductModel>(route + "update", product),
  deleteProduct: async (id: number) => ApiService.delete(route + "delete/" + id),
};

export default ProductService;
