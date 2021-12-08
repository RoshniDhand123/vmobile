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

    textContainer: { paddingVertical: normalize(15) },
    title: {
        color: "#fff",
        fontSize: normalize(13),
        // fontWeight: "bold",
        // backgroundColor: "red",
        // textAlign: "center",
    },
    txt: {
        color: "#fff",
        // backgroundColor: "#000",
        fontSize: normalize(12),
        // paddingHorizontal: normalize(8),
        // textAlign: "center",
        marginVertical: normalize(10),
        lineHeight: 20,
        opacity: 0.8,
    },
    link: {
        color: "#07FEC3",
        marginVertical: normalize(10),
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: normalize(40),
    },
});
