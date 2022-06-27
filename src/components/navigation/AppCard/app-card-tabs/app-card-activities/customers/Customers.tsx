import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import CustomerModel from "../../../../../../models/CustomerModel";
import OrderModel from "../../../../../../models/order/OrderModel";
import ListOfCustomers from "./customer-items/ListOfCustomers";
import ListOfOrders from "./customer-items/ListOfOrders";
import CustomersContext from "./CustomersContext";
import CustomersStyles from "./CustomersStyles";

const Customers = () => {
  const [currentCustomer, setCurrentCustomer] = useState<CustomerModel>(null);
  const [currentOrder, setCurrentOrder] = useState<OrderModel>(null);
  const [orders, setOrders] = useState<OrderModel[]>([]);

  return (
    <>
      <CustomersContext.Provider
        value={{
          currentCustomer,
          currentOrder,
          orders,
          setCurrentCustomer,
          setCurrentOrder,
          setOrders,
        }}
      >
        <Col lg={12} className="navbar justify-content-center">
          <Row className={CustomersStyles.container}>
            <Col lg={12}>
              <Row className={CustomersStyles.header}>
                <Col sm={4}>Customers</Col>
                <Col sm={8}>list of orders</Col>
              </Row>
              <Row>
                <Col sm={4}>
                  <ListOfCustomers />
                </Col>
                <Col sm={8}>
                  <ListOfOrders />
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </CustomersContext.Provider>
    </>
  );
};

export default Customers;
