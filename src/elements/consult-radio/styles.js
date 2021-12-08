import { StyleSheet } from "react-native";
import { normalize } from "app/services/utils.js";

export default StyleSheet.create({
    questionContainer: {
        marginVertical: normalize(10),
    },
    questionTxt: {
        fontSize: normalize(15),
        color: "#fff",
        lineHeight: 25,
    },
});
