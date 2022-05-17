import { style } from "typestyle";

const AppCardTabsStyles = {
  container: style({
    width: 100,
    height: 300,
    paddingTop: 30,
  }),

  content: style({
    width: 960,
    height: 360,
    marginTop: 20,
    marginLeft: 30,
    background: "#FFDFDD",
    borderRadius: 10,
  }),

  tabs: style({
    width: 90,
    height: 40,
    marginLeft: 20,
    marginTop: 10,
    color: "black",
    background: "#DEB887",
    borderRadius: 3,
  }),
  activeTabs: style({
    width: 95,
    height: 45,
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
    marginLeft: 50,
  }),

  textLogin: style({
    marginTop: 5,
    fontSize: 13,
    textAlign: "center",
    marginLeft: 20,
  }),
};

export default AppCardTabsStyles;
