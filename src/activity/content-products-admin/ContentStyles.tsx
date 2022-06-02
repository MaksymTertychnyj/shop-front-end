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
    border: 0,
    borderRadius: 4,
    backgroundColor: "#92C7C7",
    textAlign: "center",
    marginTop: 35,
    marginLeft: 10,
    cursor: "pointer",
  }),

  buttonImage: style({
    border: 0,
    borderRadius: 4,
    backgroundColor: "#B0E0E6",
    textAlign: "center",
    cursor: "pointer",
  }),

  buttonText: style({
    fontSize: 12,
  }),

  buttonChooseFile: style({
    background: "#C2DFFF",
    width: 70,
    height: 20,
    borderRadius: 4,
    fontSize: 12,
  }),
};

export default ContentStyles;
