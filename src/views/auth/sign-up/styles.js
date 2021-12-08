import { StyleSheet, Dimensions } from "react-native";
import { normalize } from "app/services/utils";

export default StyleSheet.create({
  root: {
    backgroundColor: "#002347",
    minHeight: Dimensions.get("window").height,
  },
  titleRoot: {
    alignItems: "center",
    paddingVertical: normalize(15),
  },
  title: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: normalize(20),
  },
  txtRoot: {
    flexDirection: "row",
    paddingTop: normalize(15),
    paddingBottom: normalize(15),
    justifyContent: "center",
  },
  signupRoot: {
    paddingHorizontal: normalize(40),
  },
  btnContainer: {
    marginVertical: normalize(15),
  },
  termsRoot: {
    justifyContent: "center",
    alignContent: "center",
    display: "flex",
    flexDirection: "row",
    marginBottom: normalize(10),
  },
  termsText: {
    color: "#ccc9c9",
  },
  checkBox: {
    color: "#ccc9c9",
    marginRight: 5,
    marginTop: normalize(-3),
  },
  termsLink: {
    color: "#109bad",
    textTransform: "uppercase",
    paddingLeft: normalize(5),
  },
});
