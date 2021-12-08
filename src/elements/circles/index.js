import React from "react";
import { View, TouchableOpacity, Image } from "react-native";

import styles from "./styles";

const Circles = ({ onPress, imageUrl }) => {
    return (
        <View style={styles.circlesContainer}>
            <TouchableOpacity onPress={onPress}>
                <View style={styles.lgCircle}>
                    <View style={styles.mdCircle}>
                        <View style={styles.smCircle}>
                            <View style={styles.imageContainer}>
                                <Image source={imageUrl} style={styles.image} />
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default Circles;
