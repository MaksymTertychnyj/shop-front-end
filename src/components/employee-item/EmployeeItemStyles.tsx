import { style } from "typestyle";

const EmployeeItemStyles = {
  container: style({
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
  }),

  column: style({
    display: "flex",
    justifyContent: "center",
    width: 150,
    height: 30,
    fontSize: 13,
    textAlign: "center",
  }),
};

export default EmployeeItemStyles;
