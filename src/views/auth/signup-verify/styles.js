import { StyleSheet, Dimensions } from "react-native";
import { normalize } from "app/services/utils";

export default StyleSheet.create({
  root: {
    backgroundColor: "#002347",
    minHeight: Dimensions.get("window").height,
  },
  titleRoot: {
    alignItems: "center",
    paddingVertical: normalize(20),
  },
  title: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: normalize(20),
    textTransform: "uppercase",
  },
  txtRoot: {
    flexDirection: "row",
    paddingTop: normalize(5),
    paddingBottom: normalize(15),
    justifyContent: "center",
  },
  signupRoot: {
    paddingHorizontal: normalize(40),
  },
  btnContainer: {
    marginVertical: normalize(20),
  },
  otpContainer: {
    borderWidth: 1,
    borderRadius: 2,
    width: 40,
    height: 40,
    fontSize: normalize(14),
    color: "white",
    backgroundColor: "#023668",
  },
  containerStyle: {
    margin: 0,
    padding: 0,
  },
});
