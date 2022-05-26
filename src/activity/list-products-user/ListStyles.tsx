import { style } from "typestyle";

const ListProductsUserStyles = {
  container: style({
    width: 310,
    height: 360,
    backgroundColor: "#F0FFFF",
    borderRadius: 8,
    marginTop: 20,
    marginLeft: 20,
  }),

  header: style({
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
    height: 35,
    textAlign: "center",
    background: "#C0C0C0",
  }),

  text: style({
    fontSize: 14,
    fontWeight: "bold",
    color: "#008080",
    cursor: "default",
  }),

  column: style({
    width: 64,
    height: 25,
    marginTop: 5,
    textAlign: "center",
    fontSize: 12,
    fontWeight: "bold",
    color: "white",
    borderRight: "1px solid #AFEEEE",
    cursor: "default",
    textOverflow: "ellipsis",
  }),

  row: style({
    display: "flex",
    height: 20,
    alignItems: "center",
    cursor: "pointer",
    background: "#87AFC7",
  }),

  blocBody: style({
    overflowY: "auto",
    whiteSpace: "nowrap",
    height: 315,
  }),

  body: style({
    height: 30,
  }),
};

export default ListProductsUserStyles;
