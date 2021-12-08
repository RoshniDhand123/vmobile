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

export const profileStyle = StyleSheet.create({
    root: {
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        flexDirection: "row",
        marginTop: normalize(30),
        paddingHorizontal: normalize(20),
    },
    container: {
        flex: 5,
        display: "flex",
        alignContent: "center",
        flexDirection: "row",
    },
    profileRoot: {
        width: normalize(70),
        height: normalize(70),
        borderRadius: 50,
        marginHorizontal: normalize(10),
        overflow: "hidden",
        borderWidth: 1,
        borderColor: "#3b7097",
    },
    detailsRoot: {
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
        paddingHorizontal: normalize(10),
    },
    details: {},
    greeting: {
        paddingBottom: normalize(5),
        color: "grey",
        fontSize: normalize(16),
        textTransform: "capitalize",
    },
    name: {
        color: "white",
        fontSize: normalize(16),
        textTransform: "capitalize",
    },
    iconContainer: {
        flex: 1,
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
    },
    iconBox: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        textAlign: "center",
        borderRadius: 50,
        height: normalize(40),
        width: normalize(40),
        borderWidth: 1,
        borderColor: "#3b7097",
        position: "relative",
    },
    icon: {
        width: normalize(15),
        height: normalize(15),
    },
    profile: {
        width: normalize(70),
        height: normalize(70),
        borderRadius: 50,
    },
    badgeRoot: {
        position: "absolute",
        top: 0,
        right: 0,
    },
    badge: {
        backgroundColor: "#177fc8",
        width: normalize(12),
        height: normalize(12),
        borderRadius: 50,
        color: "white",
        textAlignVertical: "center",
        textAlign: "center",
        fontSize: normalize(8),
    },
});
