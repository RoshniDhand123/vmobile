import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import styles from "./styles";

const CustomButton = ({ onPress, label }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        colors={["#299ec4", "#0f5d79", "#073f52"]}
        style={styles.linearGradient}
      >
        <Text style={styles.txt}>{label}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default CustomButton;
