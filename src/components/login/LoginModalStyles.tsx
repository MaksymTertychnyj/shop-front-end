import { style } from "typestyle";

const LoginModalStyles = {
  header: style({
    width: "100%",
    height: 50,
    backgroundColor: "#FFF8DC",
    alignItems: "center",
  }),

  button: style({
    width: 80,
    height: 25,
    marginLeft: 60,
    marginTop: 15,
    backgroundColor: "#F75D59",
    border: 0,
    borderRadius: 4,
    cursor: "pointer",
  }),

  inputText: style({
    textAlign: "center",
    width: 150,
    height: 25,
    marginLeft: 20,
    marginTop: 3,
    borderRadius: 5,
  }),

  text: style({
    marginLeft: 20,
    fontSize: 13,
    color: "#B5A642",
    cursor: "default",
  }),

  textMessage: style({
    fontSize: 12,
    color: "#FF6700",
  }),

  textHeader: style({
    marginLeft: 70,
    color: "#EE9A4D",
    fontWeight: "bold",
    cursor: "default",
  }),
};

export default LoginModalStyles;
