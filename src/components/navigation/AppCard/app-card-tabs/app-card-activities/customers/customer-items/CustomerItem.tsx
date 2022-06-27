import { useContext, useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Customer from "../../../../../../../models/CustomerModel";
import CustomersContext from "../CustomersContext";
import CustomersStyles from "../CustomersStyles";

export interface Props {
  customer: Customer;
}

const CustomerItem = (props: Props) => {
  const { currentCustomer, setCurrentCustomer } = useContext(CustomersContext);
  const [color, setColor] = useState<string>("");

  useEffect(() => {
    setColor(currentCustomer?.login === props?.customer?.login ? "#FFFFC2" : "black");
  }, [currentCustomer]);

  return (
    <Col sm={12}>
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
    </Col>
  );
};

export default CustomerItem;
