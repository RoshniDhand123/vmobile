import { StyleSheet, Dimensions } from "react-native";
import { normalize } from "app/services/utils";

export default StyleSheet.create({
    root: {
        backgroundColor: "#002347",
        minHeight: Dimensions.get("window").height,
    },
    container: {
        paddingHorizontal: normalize(25),
        paddingVertical: normalize(20),
    },
    btnContainer: {
        marginVertical: normalize(55),
    },
});
