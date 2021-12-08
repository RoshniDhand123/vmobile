import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./styles";
import { Logout } from "app/assets";
import LinearGradient from "react-native-linear-gradient";

import * as Assets from "app/assets";

const Card = ({
    colors = ["#023748", "#0A779A", "#4FCFF8"],
    title = "Physician",
    imageUrl = Assets.Physician,
    onPress,
}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <Image source={imageUrl} style={styles.image} />
                <LinearGradient colors={colors} style={styles.linearGradient} />

                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default Card;

// <TouchableOpacity style={styles.root}>
// <LinearGradient colors={colors} style={styles.container}>
//     <View style={styles.iconRoot}>
//         <Image
//             style={styles.icon}
//             // resizeMode="contain"
//             source={icon}
//         />
//         <View style={styles.titleRoot}>
//             <Text numberOfLines={1} style={styles.title}>
//                 {name}
//             </Text>
//         </View>
//     </View>
// </LinearGradient>
// </TouchableOpacity>
