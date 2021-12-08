import { StyleSheet, Dimensions } from "react-native";
import { normalize } from "app/services/utils";

export default StyleSheet.create({
    root: {
        backgroundColor: "#002347",
        minHeight: Dimensions.get("window").height,
    },
    flexBox: {
        flexDirection: "row",
        flexWrap: "wrap",
        margin: normalize(10),
    },
});

export const headerStyle = StyleSheet.create({
    root: {
        backgroundColor: "#0052a1",
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        flexDirection: "row",
        paddingTop: normalize(40),
        paddingBottom: normalize(20),
        paddingHorizontal: normalize(10),
    },
    titleContainer: {
        flex: 5,
    },
    title: {
        textAlign: "center",
        paddingLeft: normalize(45),
        fontSize: normalize(22),
        color: "white",
        fontWeight: "600",
    },
    iconContainer: {
        flex: 1,
    },
    iconBox: {
        paddingTop: normalize(7),
    },
    icon: {
        width: normalize(20),
        height: normalize(20),
    },
});
