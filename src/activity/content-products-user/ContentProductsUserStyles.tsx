import { style } from "typestyle";

const ContentProductsUserStyles = {
  container: style({
    width: 300,
  }),

  frame: style({
    border: "1px solid #AFEEEE",
    borderRadius: 10,
    width: 327,
    height: 180,
    marginTop: 25,
    marginLeft: 10,
  }),

  image: style({
    width: 65,
    height: 80,
    marginTop: 10,
    marginRight: 200,
  }),

  imageContent: style({
    width: 500,
    height: 100,
  }),

  inputHeader: style({
    display: "flex",
    marginLeft: 15,
    fontWeight: "bold",
    cursor: "default",
  }),

  inputText: style({
    width: 120,
    height: 18,
    textAlign: "center",
    marginLeft: 15,
    marginTop: 5,
    fontSize: 13,
    textOverflow: "ellipsis",
  }),

  text: style({
    fontSize: 13,
    fontWeight: "bold",
    color: "grey",
  }),

  button: style({
    display: "flex",
    width: 55,
    marginTop: 15,
    marginLeft: 37,
    cursor: "pointer",
    textAlign: "center",
  }),

  buttonChooseFile: style({
    background: "#CFECEC",
    width: 60,
    height: 25,
    borderRadius: 5,
    fontSize: 14,
  }),
};

export default ContentProductsUserStyles;
