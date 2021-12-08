import { StyleSheet, Dimensions } from "react-native";
import { normalize } from "app/services/utils";

export default StyleSheet.create({
    root: {
        backgroundColor: "#002347",
        minHeight: Dimensions.get("window").height,
        paddingHorizontal: normalize(25),
        paddingVertical: normalize(15),
    },

    buttonContainer: {
        flexDirection: "row",
        // position: "relative",
        // top: Dimensions.get("window").height,
        // top: 100, // change
    },
});
