import { useContext, useEffect, useRef, useState } from "react";
import {
  Button,
  Container,
  Form,
  ListGroupItem,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalTitle,
} from "react-bootstrap";
import styled from "styled-components";
import DataModel from "../../models/DataModel";
import { ModalAddModelProps } from "./ModalAddModelProps";
import Modal from "react-modal";
import Styles from "./Styles";
import Input from "react-select/dist/declarations/src/components/Input";
import ProductsAdminContext from "../navigation/AppCard/app-card-tabs/app-card-activities/products-admin/ProductsAdminContext";

Modal.setAppElement("#root");

const ModelAddModel = (props: ModalAddModelProps) => {
  const { currentCategory } = useContext(ProductsAdminContext);
  const [isAdded, setIsAdded] = useState(false);
  const inputName = useRef<HTMLInputElement>() as React.MutableRefObject<HTMLInputElement>;
  const inputValue = useRef<HTMLInputElement>() as React.MutableRefObject<HTMLInputElement>;
  const inputNameObject = useRef<HTMLInputElement>() as React.MutableRefObject<HTMLInputElement>;
  const [jsonString, setJsonString] = useState<string>("");

  const addJsonProperty = (propertyName: string, propertyValue: string) => {
    let str =
      jsonString.slice(0, jsonString.length - 1) +
      (jsonString[jsonString.length - 2] !== `{` ? `,` : ``) +
      `"${propertyName}":${propertyValue}}`;
    setJsonString(str);
  };

  const startAddObject = (name: string) => {
    let str =
      jsonString.slice(0, jsonString.length - 1) +
      (jsonString[jsonString.length - 2] === "{" ? "" : `,`) +
      `"${name}":{}`;
    setJsonString(str);
  };

  const endAddObject = () => {
    let str = jsonString + `}`;
    setJsonString(str);
  };

  useEffect(() => {
    setJsonString(`{}`);
  }, [currentCategory]);

  useEffect(() => {}, [jsonString]);

  return (
    <div>
      <Modal isOpen={props.visible} style={container}>
        <ModalHeader className={Styles.header}>
          Add new model
          <Button variant="secondary" size="sm" onClick={() => props.closeModal(false)}>
            x
          </Button>
        </ModalHeader>
        <ModalBody className={Styles.body}>
          <>
            {jsonString.split(",").map((o, i) => {
              return (
                <p style={{ height: 10 }} key={i}>
                  {o},
                </p>
              );
            })}
          </>
        </ModalBody>
        <ModalFooter>
          <input ref={inputName} style={{ width: 150 }} type="text" placeholder="enter name " />
          <input ref={inputValue} style={{ width: 100 }} type="text" placeholder="enter value " />
          <Button
            variant="info"
            size="sm"
            onClick={() => {
              addJsonProperty(inputName.current.value, inputValue.current.value);
            }}
          >
            Add property
          </Button>
        </ModalFooter>
        <ModalFooter>
          <input
            ref={inputNameObject}
            style={{ width: 150 }}
            type="text"
            placeholder="enter name object"
          />
          <Button
            variant="info"
            size="sm"
            onClick={() => {
              startAddObject(inputNameObject.current.value);
            }}
          >
            Start add object
          </Button>
          <Button
            variant="info"
            size="sm"
            onClick={() => {
              endAddObject();
            }}
          >
            End add object
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModelAddModel;

const container = {
  content: {
    top: "42%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    width: 500,
    border: "1px solid #ccc",
    background: "#E5E4E2",
    borderRadius: "8px",
  },
};
