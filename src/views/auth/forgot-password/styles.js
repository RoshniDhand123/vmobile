import { StyleSheet, Dimensions } from "react-native";
import { normalize } from "app/services/utils";

export default StyleSheet.create({
  root: {
    backgroundColor: "#002347",
    minHeight: Dimensions.get("window").height,
  },
  titleRoot: {
    alignItems: "center",
    paddingTop: normalize(20),
    paddingBottom: normalize(25),
  },
  title: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: normalize(20),
  },
  txtRoot: {
    flexDirection: "row",
    paddingTop: normalize(10),
    paddingBottom: normalize(15),
    justifyContent: "center",
  },
  signupRoot: {
    paddingHorizontal: normalize(40),
  },
  btnContainer: {
    marginTop: normalize(20),
    marginBottom: normalize(5),
  },
});
