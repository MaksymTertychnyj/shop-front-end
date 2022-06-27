import ProductModel from "../ProductModel";
import AddressModel from "./AddressModel";
import OrderStatus from "./OrderStatus";

type OrderModel = null | {
  dateRegister: Date;
  status: OrderStatus;
  amount: number;
  orderAddress: AddressModel;
  customerLogin: string;
  products: ProductModel[];
};

export default OrderModel;
