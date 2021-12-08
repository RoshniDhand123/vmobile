import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./styles";
import LinearGradient from "react-native-linear-gradient";

const Card = ({ colors = ["#299ec4", "#0f5d79", "#073f52"], icon, label }) => {
    return (
        <TouchableOpacity style={styles.root} onPress={() => {}}>
            <LinearGradient colors={colors} style={styles.container}>
                <View style={styles.iconRoot}>
                    <Image
                        style={styles.icon}
                        resizeMode="contain"
                        source={icon}
                    />
                </View>
                <View style={styles.titleRoot}>
                    <Text style={styles.title}>{label}</Text>
                </View>
            </LinearGradient>
        </TouchableOpacity>
    );
};

export default Card;
