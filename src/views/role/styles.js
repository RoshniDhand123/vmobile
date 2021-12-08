import { StyleSheet, Dimensions } from "react-native";
import { normalize } from "react-native-elements";

export default StyleSheet.create({
    root: {
        backgroundColor: "#002347",
        minHeight: Dimensions.get("window").height,
    },
    container: {
        alignItems: "center",
        paddingVertical: normalize(25),
    },
});
