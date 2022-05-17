import { style } from "typestyle";

const AppCardTabsStyles = {
  container: style({
    width: 110,
    height: 350,
    paddingTop: 30,
  }),

  content: style({
    width: 800,
    height: 400,
    marginTop: 25,
    marginLeft: 50,
    background: "#FFDFDD",
    borderRadius: 10,
  }),

  tabs: style({
    width: 115,
    height: 50,
    marginLeft: 20,
    marginTop: 10,
    color: "black",
    background: "#DEB887",
    borderRadius: 3,
  }),
  activeTabs: style({
    width: 120,
    height: 55,
    marginLeft: 17,
    marginTop: 5,
    color: "red",
    background: "#FFA500",
    borderRadius: 5,
  }),

  image: style({
    flex: 1,
    backgroundImage: `url(${require("../../../../public/images/icons/login.png")})`,
    width: 30,
    height: 30,
    backgroundPosition: "center",
    backgroundSize: "cover",
    marginLeft: 55,
  }),

  textLogin: style({
    marginTop: 5,
    fontSize: 13,
    textAlign: "center",
    marginLeft: 25,
  }),
};

export default AppCardTabsStyles;
