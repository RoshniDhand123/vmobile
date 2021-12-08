import React from "react";
import { View, Text } from "react-native";

import styles from "./styles";

import { CustomRadio } from "app/elements";

const ConsultRadio = (props) => {
    return (
        <View>
            <View style={styles.questionContainer}>
                <Text style={styles.questionTxt}>{props.question}</Text>
            </View>
            <View>
                <CustomRadio {...props} />
            </View>
        </View>
    );
};

export default ConsultRadio;
