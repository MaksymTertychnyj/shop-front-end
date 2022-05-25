import { style } from "typestyle";

const ProductsAdminStyles = {
  container: style({
    display: "flex",
    width: 800,
    height: 400,
  }),

  actContainer: style({
    width: 410,
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
};

export default ProductsAdminStyles;
