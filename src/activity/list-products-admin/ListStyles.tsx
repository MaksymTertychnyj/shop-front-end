import { style } from "typestyle";

const ListProductsAdminStyles = {
  container: style({
    width: 210,
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

  body: style({
    height: 30,
  }),

  column: style({
    width: 210,
    height: 25,
    marginTop: 5,
    textAlign: "center",
    fontSize: 13,
    fontWeight: "bold",
    color: "white",
    cursor: "default",
  }),

  row: style({
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
  }),

  blocBody: style({
    overflowY: "auto",
    whiteSpace: "nowrap",
    height: 360,
  }),
};

export default ListProductsAdminStyles;
