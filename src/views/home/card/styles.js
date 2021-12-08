import { StyleSheet, Dimensions } from "react-native";
import { normalize } from "app/services/utils";

export default StyleSheet.create({
  root: {
    marginVertical: normalize(20),
    marginHorizontal: normalize(15),
  },
  container: {
    borderRadius: 20,
    paddingVertical: normalize(25),
  },
  titleRoot: {},
  title: {
    color: "white",
    fontSize: normalize(15),
    textTransform: "capitalize",
    textAlign: "center",
    paddingTop: normalize(10),
  },
  iconRoot: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    width: normalize(40),
    height: normalize(40),
  },
});
