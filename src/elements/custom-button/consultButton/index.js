import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import styles from "./styles";

const ConsultButton = ({ onPress, label }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.buttonContainer}>
                <Text style={styles.txt}>{label}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default ConsultButton;
