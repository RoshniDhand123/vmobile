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

    txtContainer: { paddingVertical: normalize(15), alignItems: "center" },
    title: {
        color: "#fff",
        fontSize: normalize(17),
        fontWeight: "bold",
    },
    txt: {
        color: "#fff",
        fontSize: normalize(12),
        paddingHorizontal: normalize(8),
        textAlign: "center",
        marginVertical: normalize(10),
        opacity: 0.8,
    },
    ratingContainer: {},
    inputContainer: {
        marginTop: normalize(10),
        marginBottom: normalize(50),
    },
    input: {
        paddingHorizontal: normalize(15),
        paddingVertical: normalize(15),
        color: "#fff",
        borderWidth: 2,
        borderColor: "#0052A2",
        textAlignVertical: "top",
        borderRadius: 10,
    },
});
