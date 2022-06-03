import { stringify } from "querystring";
import { useContext, useEffect, useState } from "react";
import { Button, ModalBody, ModalFooter, ModalHeader } from "react-bootstrap";
import Modal from "react-modal";
import JsonModelService from "../../api-service/json-model-service/JsonModelService";
import DataModel from "../../models/DataModel";
import ProductsUserContext from "../navigation/AppCard/app-card-tabs/app-card-activities/products-user/ProductsUserContext";
import { ModalParametersProps } from "./ModalParametersProps";
import ParameterItem from "./ParameterItem";
import Styles from "./Styles";

const ModalParameters = (props: ModalParametersProps) => {
  const { currentProduct } = useContext(ProductsUserContext);
  const [parameters] = useState<DataModel[]>([]);

  let jsonString: any = {};

  const assignProperty = (key: string, value: any) => {
    jsonString[key] = value;
  };

  const constructParameters = () => {
    for (let key in jsonString) {
      parameters.push({ name: key, value: jsonString[key] });
    }
  };

  useEffect(() => {
    parameters.length = 0;
    jsonString = "";
    JsonModelService.getModel(props.categoryId).then((resp) => {
      if (resp.data) {
        jsonString = JSON.parse(resp.data.pattern);
        constructParameters();
      }
    });
  }, [props.categoryId]);

  useEffect(() => {
    parameters.length = 0;
    jsonString = "";
    if (currentProduct?.jsonParameters) {
      jsonString = JSON.parse(currentProduct.jsonParameters);
      constructParameters();
    }
  }, [currentProduct]);

  return (
    <Modal isOpen={props.visible} style={container}>
      <ModalHeader className={Styles.header}>
        Parameters of product
        <Button variant="secondary" size="sm" onClick={() => props.closeModal(false)}>
          x
        </Button>
      </ModalHeader>
      <ModalBody className={Styles.body}>
        {parameters.map((p, i) => {
          return <ParameterItem key={i} property={p} assignFunc={assignProperty} />;
        })}
      </ModalBody>
      <ModalFooter className={Styles.foorer}>
        <Button
          style={{ marginLeft: 10 }}
          variant={!currentProduct ? "success" : "secondary"}
          size="sm"
          disabled={currentProduct ? true : false}
          onClick={() => {
            props.setParameters(JSON.stringify(jsonString));
            props.closeModal(false);
          }}
        >
          Apply
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default ModalParameters;

const container = {
  content: {
    top: "43%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    width: 400,
    height: 400,
    border: "1px solid #ccc",
    background: "#E5E4E2",
    borderRadius: "8px",
  },
};
