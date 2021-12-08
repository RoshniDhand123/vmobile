import { Dimensions, StyleSheet } from "react-native";
import { normalize } from "app/services/utils";

export default StyleSheet.create({
    root: {
        backgroundColor: "#002347",
        minHeight: Dimensions.get("window").height,
    },
    container: {
        paddingHorizontal: normalize(40),
        paddingVertical: normalize(30),
    },
});
