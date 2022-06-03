import { style } from "typestyle";

const ContentProductsUserStyles = {
  container: style({
    width: 300,
  }),

  frame: style({
    border: "1px solid #AFEEEE",
    borderRadius: 10,
    width: 327,
    height: 155,
    marginTop: 25,
    marginLeft: 10,
  }),

  image: style({
    width: 75,
    height: 80,
    marginTop: 30,
    marginLeft: 10,
  }),

  imageContent: style({
    width: 400,
    height: 200,
    display: "flex",
    marginLeft: 15,
  }),

  inputHeader: style({
    display: "flex",
    marginLeft: 15,
    fontWeight: "bold",
    cursor: "default",
  }),

  inputText: style({
    width: 120,
    height: 20,
    textAlign: "center",
    marginLeft: 15,
    marginTop: 5,
    fontSize: 13,
    textOverflow: "ellipsis",
  }),

  text: style({
    fontSize: 12,
    fontWeight: "bold",
    color: "grey",
  }),

  button: style({
    marginTop: 15,
    marginLeft: 20,
    cursor: "pointer",
    border: 0,
    borderRadius: 4,
    backgroundColor: "#92C7C7",
    textAlign: "center",
  }),

  buttonText: style({
    fontSize: 12,
  }),

  buttonImage: style({
    background: "#C2DFFF",
    width: 70,
    height: 20,
    border: 0,
    borderRadius: 4,
    fontSize: 12,
    cursor: "pointer",
    marginLeft: 26,
  }),
};

export default ContentProductsUserStyles;
