import { style } from "typestyle";

const ContentStyles = {
  container: style({
    width: 300,
  }),

  frame: style({
    border: "1px solid #AFEEEE",
    borderRadius: 10,
    width: 307,
    height: 90,
    marginTop: 15,
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
    height: 20,
    textAlign: "center",
    marginRight: 160,
    marginTop: 5,
    fontSize: 14,
    textOverflow: "ellipsis",
  }),

  button: style({
    display: "flex",
    width: 55,
    marginTop: 35,
    marginLeft: 10,
    cursor: "pointer",
  }),

  buttonChooseFile: style({
    background: "#CFECEC",
    width: 60,
    height: 25,
    borderRadius: 5,
    fontSize: 14,
  }),
};

export default ContentStyles;
