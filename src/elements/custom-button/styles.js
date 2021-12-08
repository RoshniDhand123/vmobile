import { StyleSheet } from "react-native";
import { normalize } from "app/services/utils";

export default StyleSheet.create({
  root: {
    padding: normalize(10),
  },
  linearGradient: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    paddingVertical: normalize(12),
  },
  txt: {
    color: "#fff",
    fontSize: normalize(15),
  },
});
