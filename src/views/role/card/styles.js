import { StyleSheet, Dimensions } from "react-native";
import { normalize } from "app/services/utils";

export default StyleSheet.create({
    container: {
        width: normalize(180),
        height: normalize(180),
        position: "relative",
        marginVertical: normalize(20),
    },
    image: {
        width: normalize(180),
        height: normalize(180),
        borderRadius: normalize(90),
    },
    linearGradient: {
        width: normalize(180),
        height: normalize(180),
        borderRadius: normalize(90),
        opacity: 0.75,
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    titleContainer: {
        width: normalize(180),
        height: normalize(180),
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        color: "#fff",
        fontSize: normalize(20),
    },
});
