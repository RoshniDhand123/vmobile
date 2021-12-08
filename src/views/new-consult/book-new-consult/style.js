import { StyleSheet, Dimensions } from "react-native";
import { normalize } from "app/services/utils";

export default StyleSheet.create({
  root: {
    backgroundColor: "#002347",
    minHeight: Dimensions.get("window").height,
  },
  imgRoot: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: normalize(60),
  },
  img: {
    width: normalize(150),
    height: normalize(150),
  },
  txt: {
    color: "white",
    fontSize: normalize(14),
    textAlign: "center",
    marginVertical: normalize(5),
  },
  congo: {
    marginVertical: normalize(5),
    color: "#2BA1C7",
    fontSize: normalize(22),
    textAlign: "center",
  },
});
