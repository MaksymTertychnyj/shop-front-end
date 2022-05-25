import { style } from "typestyle";

const AddEmployeeContentStyles = {
  container: style({
    width: 760,
    height: 160,
    backgroundColor: "#F0FFFF",
    borderRadius: 8,
    marginTop: 10,
    marginLeft: 20,
  }),

  blocBody: style({
    overflowY: "auto",
    whiteSpace: "nowrap",
    height: 140,
  }),

  header: style({
    display: "flex",
    height: 25,
    background: "red",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  }),

  body: style({
    height: 30,
  }),

  column: style({
    width: 150,
    height: 20,
    textAlign: "center",
    fontSize: 13,
    fontWeight: "bold",
    color: "white",
    cursor: "default",
  }),
};

export default AddEmployeeContentStyles;
