import React, { useState } from "react";
import { AppTabProps } from "./AppTabProps";
import AppTabStyles from "./AppTabStyles";

const AppTab = (props: AppTabProps) => {
  return (
    <div
      className={AppTabStyles.container}
      onClick={() => {
        props.toggleFunc(props.index);
      }}
    >
      <text className={AppTabStyles.textName}>{props.name}</text>
    </div>
  );
};

export default AppTab;
