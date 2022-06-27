import { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import CustomerService from "../../../../../../../api-service/customer-service/CustomerService";
import Customer from "../../../../../../../models/CustomerModel";
import CustomersStyles from "../CustomersStyles";
import CustomerItem from "./CustomerItem";

const ListOfCustomers = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);

  useEffect(() => {
    CustomerService.getAllCustomers().then((res) => {
      if (res) {
        setCustomers(res.data);
      }
    });
  }, []);

  return (
    <Col className={CustomersStyles.listContainer}>
      {customers.map((c, i) => {
        return <CustomerItem key={i} customer={c} />;
      })}
    </Col>
  );
};

export default ListOfCustomers;
