import { style } from "typestyle";

const AppTabListStyle = {
  header: style({
    height: 30,
    display: "flex",
    marginLeft: 20,
    borderRadius: 5,
  }),

  active: style({
    width: 150,
    cursor: "pointer",
    height: 30,
    background: "#CFECEC",
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    textAlign: "center",
  }),

  unactive: style({
    width: 140,
    cursor: "pointer",
    height: 25,
    background: "#CFECEC",
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
  }),

  text: style({
    fontSize: 14,
    fontWeight: "bold",
    color: "#008080",
  }),
};

export default AppTabListStyle;
