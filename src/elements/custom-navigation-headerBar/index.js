import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import { useRoute } from "@react-navigation/native";

import styles from "./styles";

import * as Assets from "app/assets";
import { deleteToken } from "app/services/local-store/token";

const CustomNavigationHeaderBar = ({ navigation, title, showBack }) => {
    const route = useRoute();

    const logoutHandler = async () => {
        await deleteToken();
        checkOut("Signin");
    };

    const checkOut = (screen) => {
        if (navigation && navigation.navigate) navigation.replace(screen);
    };

    const backHandler = () => {
        if (navigation && navigation.navigate) navigation.goBack();
    };

    return (
        <View style={styles.root}>
            {showBack && (
                <View style={styles.iconContainer}>
                    <TouchableOpacity
                        onPress={backHandler}
                        style={styles.iconBox}
                    >
                        <Image
                            style={styles.icon}
                            resizeMode="contain"
                            source={Assets.Back}
                        />
                    </TouchableOpacity>
                </View>
            )}

            <View style={styles.titleContainer}>
                <Text style={styles.title}>{title}</Text>
            </View>
            {route.name === "Home" && (
                <View style={styles.iconContainer}>
                    <TouchableOpacity
                        onPress={logoutHandler}
                        style={styles.iconBox}
                    >
                        <Image
                            style={styles.icon}
                            resizeMode="contain"
                            source={Assets.Logout}
                        />
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
};

export default CustomNavigationHeaderBar;
