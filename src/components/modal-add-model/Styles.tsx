import { style } from "typestyle";

const Styles = {
  container: style({}),

  header: style({
    height: 30,
    textAlign: "center",
    fontSize: 17,
    fontWeight: "bold",
  }),

  body: style({
    height: 150,
    overflow: "auto",
    fontSize: 13,
    fontWeight: "bold",
  }),

  button: style({
    height: 20,
  }),
};

export default Styles;
