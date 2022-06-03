import { MutableRefObject, useEffect, useRef } from "react";
import { ParameterItemProps } from "./ParameterItemProps";

const ParameterItem = (props: ParameterItemProps) => {
  const inputParameter = useRef<HTMLInputElement>() as MutableRefObject<HTMLInputElement>;

  return (
    <div style={{ marginTop: 10 }}>
      <input
        ref={inputParameter}
        onChange={() => props.assignFunc(props.property?.name!, inputParameter.current.value)}
        style={{ width: 150, marginLeft: 10 }}
        type={typeof props.property?.value === "string" ? "text" : "number"}
        placeholder={props.property?.value}
      />
      <label style={{ marginLeft: 20, width: 120 }}>{props.property?.name}</label>
    </div>
  );
};

export default ParameterItem;
