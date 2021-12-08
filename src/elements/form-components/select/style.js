import { StyleSheet } from "react-native";
import { normalize } from "app/services/utils";

export default StyleSheet.create({
  root: {
    backgroundColor: "#062e55",
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 2,
    marginVertical: normalize(10),
    borderColor: "#033b70",
    borderRadius: 5,
    position: "relative",
  },
  input: {
    width: "100%",
    height: normalize(40),
    paddingHorizontal: normalize(15),
    color: "#fff",
  },
  iconRoot: {
    position: "absolute",
    top: normalize(12),
    right: normalize(10),
  },
  icon: {
    width: normalize(20),
    height: normalize(20),
  },
  date: {
    color: "white",
    height: "100%",
    textAlignVertical: "center",
  },
  select: {
    marginHorizontal: normalize(-15),
    color: "#fff",
    placeholderTextColor: "grey",
  },
});
