import OrderModel from "../../models/order/OrderModel";
import OrderStatus from "../../models/order/OrderStatus";
import APIRoutes from "../APIRoutes";
import ApiService from "../ApiService";

const route = APIRoutes.getOrderUrl();

const OrderService = {
  getOrdersByCustomer: async (customerLogin: string) =>
    ApiService.get<OrderModel[]>(route + "getByCustomer/" + customerLogin),
  deleteOrder: async (orderId: number) => ApiService.delete(route + "delete/" + orderId),
  updateOrderStatus: async (order: OrderModel, status: OrderStatus) =>
    ApiService.put<OrderModel>(route + "updateStatus/" + status, order),
};

export default OrderService;
