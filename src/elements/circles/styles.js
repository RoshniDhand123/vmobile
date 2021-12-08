import { StyleSheet } from "react-native";

export default StyleSheet.create({
    circlesContainer: {
        alignItems: "center",
        marginTop: 70,
    },
    lgCircle: {
        width: 160,
        height: 160,
        borderRadius: 80,
        backgroundColor: "#046582",
        position: "relative",
        elevation: 6,
    },
    mdCircle: {
        width: 120,
        height: 120,
        borderRadius: 60,
        backgroundColor: "#1597BB",
        position: "absolute",
        top: 20,
        left: 20,
        right: 20,
        bottom: 20,
        elevation: 6,
    },
    smCircle: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: "#2978B5",
        position: "absolute",
        top: 20,
        left: 20,
        right: 20,
        bottom: 20,
        elevation: 6,
    },
    imageContainer: {
        position: "absolute",
        top: 20,
        left: 20,
        right: 20,
        bottom: 20,
    },
    image: {
        width: 40,
        height: 40,
    },
});
