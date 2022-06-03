import { style } from "typestyle";

const Styles = {
  header: style({
    height: 30,
    textAlign: "center",
    fontSize: 17,
    fontWeight: "bold",
  }),

  body: style({
    height: 250,
    overflow: "auto",
    fontSize: 13,
    fontWeight: "bold",
  }),

  foorer: style({
    justifyContent: "center",
    marginTop: 10,
  }),
};

export default Styles;
