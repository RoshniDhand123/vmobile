import { StyleSheet } from "react-native";
import { normalize } from "app/services/utils";

export default StyleSheet.create({
    borderLeft: {
        borderLeftWidth: 0,
    },
    borderRight: {
        borderRightWidth: 1,
        borderColor: "#0052A2",
    },
    textinputContainer: {
        flexDirection: "row",
        marginVertical: normalize(10),
        borderWidth: 2,
        borderColor: "#0052A2",
        height: normalize(40),
    },
    input: {
        paddingHorizontal: normalize(15),
        color: "#fff",
        width: "50%",
    },

    label: {
        color: "#fff",
    },
});
