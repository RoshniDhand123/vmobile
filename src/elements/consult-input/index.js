import React from "react";
import { View, Text } from "react-native";

import styles from "./styles";

import { CustomInput } from "app/elements";
// import CustomInput from "../custom-input";

const ConsultInput = (props) => {
    console.log("props consult input...", props);
    return (
        <View>
            <View style={styles.questionContainer}>
                <Text style={styles.questionTxt}>{props.question}</Text>
            </View>
            <View>
                <CustomInput {...props} placeholder="Enter Here..." />
            </View>
            <View></View>
        </View>
    );
};

export default ConsultInput;
