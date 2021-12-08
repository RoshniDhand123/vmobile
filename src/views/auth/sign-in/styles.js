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
  checkBoxRoot: { flexDirection: "row", justifyContent: "space-between" },
  checkBoxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: normalize(-2),
    marginLeft: normalize(5),
  },
  checkBox: {
    marginLeft: normalize(-10),
  },
});
