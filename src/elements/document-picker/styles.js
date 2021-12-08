import { StyleSheet } from "react-native";
import { normalize } from "app/services/utils.js";

export default StyleSheet.create({
    root: {
        marginTop: normalize(60),
    },
    uploadContainer: {
        borderWidth: 2,
        borderColor: "#0052A2",
        borderStyle: "dashed",
        borderRadius: 10,
        alignItems: "center",
        paddingVertical: normalize(15),
        marginVertical: normalize(15),
    },
    label: {
        color: "#fff",
        fontSize: normalize(15),
    },
    imageContainer: { marginBottom: normalize(10) },
    image: {},
    txt: {
        color: "gray",
        fontSize: normalize(10),
        textAlign: "center",
        paddingVertical: normalize(3),
    },
});
