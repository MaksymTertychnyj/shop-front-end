import { useContext, useEffect, useState } from "react";
import { Col, OverlayTrigger, Popover, Row } from "react-bootstrap";
import Customer from "../../../../../../../models/CustomerModel";
import CustomersContext from "../CustomersContext";
import CustomersStyles from "../CustomersStyles";

export interface Props {
  customer: Customer;
}

const CustomerItem = (props: Props) => {
  const { currentCustomer, setCurrentCustomer } = useContext(CustomersContext);
  const [color, setColor] = useState<string>("");
  const [customer, setCustomer] = useState<Customer>();

  const renderPopoverParameters = (props: any) => {
    return (
      <Popover {...props}>
        <Row>
          <Col className={CustomersStyles.label}>FirstName:</Col>
          <Col className={CustomersStyles.value}>{customer?.firstName}</Col>
        </Row>
        <Row>
          <Col className={CustomersStyles.label}>LastName:</Col>
          <Col className={CustomersStyles.value}>{customer?.lastName}</Col>
        </Row>
        <Row>
          <Col className={CustomersStyles.label}>Email:</Col>
          <Col className={CustomersStyles.value}>{customer?.email}</Col>
        </Row>
        <Row>
          <Col className={CustomersStyles.label}>Number:</Col>
          <Col className={CustomersStyles.value}>{customer?.phoneNumber}</Col>
        </Row>
      </Popover>
    );
  };

  useEffect(() => {
    setColor(currentCustomer?.login === props?.customer?.login ? "#FFFFC2" : "black");
    setCustomer(props.customer);
  }, [currentCustomer]);

  return (
    <Col sm={12}>
      <OverlayTrigger
        placement="right"
        delay={{ show: 650, hide: 400 }}
        overlay={renderPopoverParameters}
      >
        <Row
          onClick={() => setCurrentCustomer(props?.customer)}
          className={CustomersStyles.row}
          style={{
            background: currentCustomer?.login === props?.customer?.login ? "#43C6DB" : "#98AFC7",
            cursor: "pointer",
          }}
        >
          <Row className={CustomersStyles.column} style={{ cursor: "pointer" }}>
            <text style={{ color: color }}>{props?.customer?.login}</text>
          </Row>
        </Row>
      </OverlayTrigger>
    </Col>
  );
};

export default CustomerItem;
