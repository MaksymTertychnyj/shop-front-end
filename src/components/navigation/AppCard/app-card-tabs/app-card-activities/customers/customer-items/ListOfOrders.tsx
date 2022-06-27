import { useContext, useEffect, useState } from "react";
import { Accordion, Col } from "react-bootstrap";
import OrderService from "../../../../../../../api-service/order-service/OrderService";
import CustomersContext from "../CustomersContext";
import CustomersStyles from "../CustomersStyles";
import OrderItem from "./OrderItem";

const ListOfOrders = () => {
  const { currentCustomer, orders, setOrders } = useContext(CustomersContext);
  const [onChangedStatus, setOnChangedStatus] = useState(false);

  useEffect(() => {
    if (currentCustomer) {
      OrderService.getOrdersByCustomer(currentCustomer.login).then((res) => {
        if (res.data) {
          setOrders(res.data);
        }
      });
    }
  }, [currentCustomer, onChangedStatus]);

  return (
    <Col className={CustomersStyles.listContainer}>
      <Accordion>
        {orders.map((o, i) => {
          return (
            <OrderItem
              key={i}
              order={o}
              evKey={i}
              onChangedStatus={onChangedStatus}
              setOnChangedStatus={setOnChangedStatus}
            />
          );
        })}
      </Accordion>
    </Col>
  );
};

export default ListOfOrders;
