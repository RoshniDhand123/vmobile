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
    editContainer: {
        alignItems: "flex-end",
    },
    imageEdit: {
        marginLeft: normalize(-12),
        marginTop: normalize(-30),
    },
    imageContainer: {
        alignItems: "center",
        marginVertical: normalize(25),
        // backgroundColor: "red",
        flexDirection: "row",
        justifyContent: "center",
    },
    image: {
        width: normalize(80),
        height: normalize(80),
        borderRadius: normalize(40),
        borderWidth: 1,
        borderColor: "#188DDB",
    },
    btnContainer: {
        marginVertical: normalize(20),
    },
});
