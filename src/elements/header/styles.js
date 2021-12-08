import { Dimensions, StyleSheet } from "react-native";

import { normalize } from "app/services/utils";

export default StyleSheet.create({
    root: {
        display: "flex",
        position: "relative",
    },
    backButtonContainer: {
        position: "absolute",
        top: normalize(20),
        left: normalize(90),
        zIndex: 200,
    },
    titleRoot: {
        position: "absolute",
        bottom: normalize(15),
        width: "100%",
        zIndex: 200,
    },
    title: {
        color: "#fff",
        fontSize: normalize(25),
        textAlign: "center",
    },
    img: {
        width: Dimensions.get("window").width,
        height: normalize(225),
        // marginTop: normalize(-10),
        borderBottomLeftRadius: normalize(35),
        borderBottomRightRadius: normalize(35),
    },
    linearGradient: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        opacity: 0.4,
        zIndex: 10,
    },
});
