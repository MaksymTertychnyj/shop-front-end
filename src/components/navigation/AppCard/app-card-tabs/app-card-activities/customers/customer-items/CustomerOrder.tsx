import { Col, Container, Row } from "react-bootstrap";
import CustomersStyles from "../CustomersStyles";

const CustomerOrder = () => {
  return (
    <Container className={CustomersStyles.listContainer}>
      <Col sm={12}>
        <Row>order</Row>
      </Col>
    </Container>
  );
};

export default CustomerOrder;
