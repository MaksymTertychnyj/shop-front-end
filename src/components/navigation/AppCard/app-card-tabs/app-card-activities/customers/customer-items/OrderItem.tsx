import { useEffect, useState } from "react";
import { Accordion, Button, Col, Container, FormGroup, Row } from "react-bootstrap";
import OrderModel from "../../../../../../../models/order/OrderModel";
import OrderStatus from "../../../../../../../models/order/OrderStatus";
import { style } from "typestyle";
import OrderProductItem from "./RenderProductItem";
import CustomersStyles from "../CustomersStyles";
import Select from "react-select";
import DropDownStyles from "./DropDownStyles";
import OrderService from "../../../../../../../api-service/order-service/OrderService";

export interface Props {
  order: OrderModel;
  evKey: number;
  onChangedStatus: boolean;
  setOnChangedStatus: (state: boolean) => void;
}

export type DataDropDown = {
  label: string;
  value: string;
};

const OrderItem = (props: Props) => {
  const [statusColor, setColor] = useState("");
  const [statusList, setStatusList] = useState<DataDropDown[]>([]);
  const [status, setStatus] = useState<DataDropDown>({
    value: props.order?.status.toString()!,
    label: props.order?.status ? OrderStatus[props.order.status] : "0",
  });

  const onUpdateStatus = () => {
    OrderService.updateOrderStatus(props.order, Number.parseInt(status.value))
      .then(() => {
        props.setOnChangedStatus(!props.onChangedStatus);
      })
      .catch((ex) => console.log(ex));
  };

  useEffect(() => {
    switch (props.order?.status) {
      case 1:
        setColor("red");
        break;
      case 2:
        setColor("#FFA500");
        break;
      case 3:
        setColor("#2E8B57");
        break;
      case 4:
        setColor("#357EC7");
        break;
      case 5:
        setColor("#FFCBA4");
        break;
      case 6:
        setColor("#C4AEAD");
        break;
      default:
        break;
    }

    setStatusList([
      { label: "registered", value: "1" },
      { label: "negotiation", value: "2" },
      { label: "invoiced", value: "3" },
      { label: "paid", value: "4" },
      { label: "shipped", value: "5" },
      { label: "obtained", value: "6" },
    ]);
  }, []);

  return (
    <Accordion.Item eventKey={props.evKey.toString()}>
      <Accordion.Header className={Styles.container}>
        <Col>
          <Row>
            <Col sm={{ span: 2, offset: 1 }}>
              <Row>
                <Col sm={1} className={Styles.label}>
                  №
                </Col>
                <Col sm={3} className={Styles.value}>
                  {props.evKey + 1}
                </Col>
              </Row>
            </Col>
            <Col sm={3} className={Styles.value}>
              {props.order?.dateRegister.toString().slice(0, 10)}
            </Col>

            <Col sm={4}>
              <Row>
                <Col sm={4} className={Styles.label}>
                  status:{" "}
                </Col>
                <Col sm={3} className={Styles.value} style={{ color: statusColor }}>
                  {props.order?.status ? OrderStatus[props.order.status] : 0}
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Accordion.Header>
      <Accordion.Body style={{ marginBottom: 10 }}>
        <Row>
          <Row>
            <Container>
              <Row style={{ paddingTop: 10 }}>
                <Col
                  className="border"
                  style={{ textAlign: "center", fontSize: 12, fontWeight: "bold" }}
                  sm={2}
                >
                  №
                </Col>
                <Col
                  className="border"
                  sm={3}
                  style={{ textAlign: "center", fontSize: 12, fontWeight: "bold" }}
                >
                  Name
                </Col>
                <Col
                  className="border"
                  sm={2}
                  style={{ textAlign: "center", fontSize: 12, fontWeight: "bold" }}
                >
                  Price, UAH
                </Col>
                <Col
                  className="border"
                  sm={2}
                  style={{ textAlign: "center", fontSize: 12, fontWeight: "bold" }}
                >
                  Quantity
                </Col>
                <Col
                  className="border"
                  sm={3}
                  style={{ textAlign: "center", fontSize: 12, fontWeight: "bold" }}
                >
                  Amount, UAH
                </Col>
              </Row>
            </Container>
          </Row>
          <Row>
            {props.order?.products.map((p, i) => {
              return <OrderProductItem key={i} product={p} index={i + 1} />;
            })}
          </Row>
          <Row style={{ marginTop: 10 }}>
            <Col sm={{ span: 2, offset: 8 }} className={Styles.value}>
              {props.order?.amount} UAH
            </Col>
          </Row>
        </Row>

        <Container>
          <Row style={{ marginTop: 25, fontSize: 13 }}>
            {`
            region: ${props.order?.orderAddress?.region}, 
            city: ${props.order?.orderAddress?.city}, 
            place: ${props.order?.orderAddress?.place}
          `}
          </Row>
          <br />
          <FormGroup>
            <Row style={{ marginBottom: 100, fontSize: 13 }}>
              <Col sm={2} style={{ marginTop: 5 }}>
                Status
              </Col>
              <Col sm={5}>
                <Select
                  styles={DropDownStyles}
                  options={statusList}
                  onChange={(val) => setStatus(val as DataDropDown)}
                  value={status}
                />
              </Col>
              <Col sm={4}>
                <Button
                  variant="warning"
                  size="sm"
                  className={CustomersStyles.button}
                  onClick={onUpdateStatus}
                >
                  <text style={{ fontSize: 12, color: "red" }}>Update</text>
                </Button>
              </Col>
            </Row>
          </FormGroup>
        </Container>
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default OrderItem;

const Styles = {
  container: style({
    height: 55,
  }),

  label: style({
    fontSize: 13,
    fontWeight: "bold",
  }),

  value: style({
    fontSize: 13,
  }),
};
