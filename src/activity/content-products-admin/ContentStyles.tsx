import { style } from "typestyle";

const ContentStyles = {
  container: style({
    width: 300,
  }),

  image: style({
    width: 80,
    height: 80,
    marginTop: 20,
    marginLeft: 120,
  }),

  imageContent: style({
    display: "flex",
    width: 500,
    height: 100,
  }),

  inputHeader: style({
    display: "flex",
    marginLeft: 30,
    marginTop: 20,
    fontWeight: "bold",
    cursor: "default",
  }),

  inputText: style({
    display: "flex",
    width: 120,
    height: 20,
    textAlign: "center",
    marginLeft: 25,
    marginTop: 5,
    fontSize: 14,
  }),

  button: style({
    display: "flex",
    width: 55,
    marginTop: 35,
    marginLeft: 30,
    cursor: "pointer",
  }),
};

export default ContentStyles;
