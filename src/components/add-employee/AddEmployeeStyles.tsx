import { style } from "typestyle";

const AddEmployeeStyles = {
  container: style({
    width: 760,
    height: 160,
    backgroundColor: "#F0FFFF",
    borderRadius: 8,
    marginTop: 20,
    marginLeft: 20,
  }),

  containerInput: style({
    display: "flex",
    borderRadius: 8,
    width: 760,
    height: 80,
    backgroundColor: "#F0FFFF",
    paddingTop: 10,
  }),

  containerComplite: style({
    width: 500,
    marginTop: 10,
    paddingLeft: 40,
  }),

  inputText: style({
    width: 120,
    textAlign: "center",
    marginLeft: 25,
    marginTop: 10,
    fontSize: 14,
  }),

  inputHeader: style({
    marginLeft: 50,
    fontWeight: "bold",
  }),

  button: style({
    marginLeft: 30,
  }),
};

export default AddEmployeeStyles;
