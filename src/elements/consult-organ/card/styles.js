import { StyleSheet, Dimensions } from "react-native";
import { normalize } from "app/services/utils";

export default StyleSheet.create({
    root: {
        marginVertical: normalize(10),
        // marginHorizontal: normalize(15),
    },
    container: {
        borderRadius: 20,
        // paddingVertical: normalize(15),
        height: normalize(80),
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: normalize(3),
    },
    titleRoot: {
        // flex: 1,
        // backgroundColor: "red",
        color: "#fff",
    },
    title: {
        color: "white",
        fontSize: normalize(10),
        textTransform: "capitalize",
        textAlign: "center",
        paddingTop: normalize(5),
    },
    iconRoot: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    icon: {
        width: normalize(30),
        height: normalize(30),
    },
});
