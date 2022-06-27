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
  setOrders: (o: OrderModel[]) => returnType,
  setCurrentOrder: (o: OrderModel) => returnType,
  setCurrentCustomer: (c: CustomerModel) => returnType,
});

export default CustomersContext;
