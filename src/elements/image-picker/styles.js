import { StyleSheet } from "react-native";
import { normalize } from "app/services/utils";

export default StyleSheet.create({
    root: {
        backgroundColor: "#062e55",
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 2,
        marginVertical: normalize(10),
        borderColor: "#033b70",
        borderRadius: 5,
        position: "relative",
        height: normalize(65),
        paddingHorizontal: normalize(15),
    },
    imageContainer: {
        width: normalize(50),
        height: normalize(50),
        borderRadius: normalize(25),
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        width: normalize(20),
        height: normalize(20),
    },
    text: {
        color: "gray",
        fontSize: normalize(12),
        marginLeft: normalize(15),
    },
});
