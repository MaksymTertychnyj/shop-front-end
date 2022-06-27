import Customer from "../../models/CustomerModel";
import APIRoutes from "../APIRoutes";
import ApiService from "../ApiService";

const route = APIRoutes.getCustomerUrl();

const CustomerService = {
  getAllCustomers: async () => ApiService.get<Customer[]>(route + "getCustomers"),
};

export default CustomerService;
