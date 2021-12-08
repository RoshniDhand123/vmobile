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
    imageContainer: {
        paddingTop: normalize(50),
    },
    imageRowFirst: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    imageRowSecond: {
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
    image: {
        width: normalize(80),
        height: normalize(80),
        borderRadius: normalize(40),
        borderColor: "#198EDC",
        borderWidth: 1,
    },
    textContainer: { paddingVertical: normalize(55) },
    title: {
        color: "#fff",
        fontSize: normalize(17),
        fontWeight: "bold",
        // backgroundColor: "red",
        textAlign: "center",
    },
    txt: {
        color: "#fff",
        // backgroundColor: "#000",
        fontSize: normalize(11),
        paddingHorizontal: normalize(8),
        textAlign: "center",
        marginTop: normalize(15),
    },
});
