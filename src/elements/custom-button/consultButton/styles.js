import { StyleSheet } from "react-native";
import { normalize } from "app/services/utils";

export default StyleSheet.create({
    buttonContainer: {
        width: normalize(100),
        height: normalize(40),
        backgroundColor: "#062E55",
        borderWidth: 2,
        borderColor: "#0052A2",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        marginVertical: 50,
    },
    txt: {
        color: "#fff",
        fontSize: normalize(16),
        textTransform: "uppercase",
    },
});
