import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./styles";
import { Logout } from "app/assets";
import LinearGradient from "react-native-linear-gradient";

const Card = ({
    colors = ["#299ec4", "#0f5d79", "#073f52"],
    name = "about me",
    icon = Logout,
    navigation,
    route = "Home",
}) => {
    const checkOut = (screen) => {
        // console.log("navigate");
        if (navigation && navigation.navigate) navigation.navigate(screen);
    };

    return (
        <TouchableOpacity style={styles.root} onPress={() => checkOut(route)}>
            <LinearGradient colors={colors} style={styles.container}>
                <View style={styles.iconRoot}>
                    <Image
                        style={styles.icon}
                        resizeMode="contain"
                        source={icon}
                    />
                </View>
                <View style={styles.titleRoot}>
                    <Text numberOfLines={1} style={styles.title}>
                        {name}
                    </Text>
                </View>
            </LinearGradient>
        </TouchableOpacity>
    );
};

export default Card;
