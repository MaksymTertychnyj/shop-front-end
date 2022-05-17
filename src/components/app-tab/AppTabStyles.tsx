import { style } from "typestyle";

const AppTabStyle = {
  container: style({
    width: 120,
    height: 40,
    display: "flex",
  }),

  textName: style({
    fontSize: 13,
    fontWeight: "bold",
    marginLeft: 10,
    marginTop: 10,
  }),

  image: style({
    width: 25,
    height: 25,
    marginTop: 13,
  }),
};

export default AppTabStyle;
