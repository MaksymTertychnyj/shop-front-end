import { createContext } from "react";
import CustomerModel from "../../../../../../models/CustomerModel";
import OrderModel from "../../../../../../models/order/OrderModel";

const returnType: any = {};
const customer: CustomerModel = Object.create(null);
const order: OrderModel = Object.create(null);
const orders: OrderModel[] = Object.create([]);

const CustomersContext = createContext({
  currentCustomer: customer,
  currentOrder: order,
  orders: orders,
  setOrders: (_o: OrderModel[]) => returnType,
  setCurrentOrder: (_o: OrderModel) => returnType,
  setCurrentCustomer: (_c: CustomerModel) => returnType,
});

export default CustomersContext;
