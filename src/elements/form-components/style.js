import { StyleSheet } from "react-native";
import { normalize } from "app/services/utils";

export default StyleSheet.create({
  error: {
    fontSize: normalize(11),
    color: "red",
    marginTop: normalize(-5),
    marginBottom: normalize(7),
  },
});
