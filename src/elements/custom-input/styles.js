import { StyleSheet } from "react-native";
import { normalize } from "app/services/utils";

export default StyleSheet.create({
    inputContainer: {
        marginVertical: normalize(15),
    },
    input: {
        // width: "92%",
        // height: normalize(100),
        paddingHorizontal: normalize(15),
        paddingVertical: normalize(15),
        color: "#fff",
        borderWidth: 2,
        borderColor: "#0052A2",
        textAlignVertical: "top",
        borderRadius: 10,
    },
});
