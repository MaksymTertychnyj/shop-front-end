import { style } from "typestyle";

const CustomersStyles = {
  container: style({
    width: 760,
    height: 355,
    backgroundColor: "#F0FFFF",
    borderRadius: 8,
    marginTop: 15,
  }),

  header: style({
    display: "flex",
    height: 25,
    background: "red",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    textAlign: "center",
    fontSize: 13,
    fontWeight: "bold",
    color: "#E5E4E2",
  }),

  listContainer: style({
    backgroundColor: "#E5E4E2",
    height: 315,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    overflow: "auto",
  }),

  row: style({
    marginLeft: 2,
    marginRight: 2,
    cursor: "pointer",
  }),

  column: style({
    height: 25,
    marginTop: 5,
    textAlign: "center",
    fontSize: 13,
    cursor: "default",
  }),

  button: style({
    width: 60,
  }),
};

export default CustomersStyles;
