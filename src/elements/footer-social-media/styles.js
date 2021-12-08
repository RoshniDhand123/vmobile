import { StyleSheet } from "react-native";
import { normalize } from "app/services/utils";

export default StyleSheet.create({
  root: {
    flexDirection: "row",
    justifyContent: "center",
    justifyContent: "space-evenly",
    marginHorizontal: normalize(25),
  },
  icon: {
    width: normalize(40),
    height: normalize(40),
  },
  linkRoot: {
    backgroundColor: "#3b5998",
    padding: normalize(12),
    borderRadius: 50,
  },
});
