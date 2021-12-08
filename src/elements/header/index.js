import React from "react";
import {
    View,
    Image,
    Text,
    TouchableHighlight,
    TouchableOpacity,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import LinearGradient from "react-native-linear-gradient";

import * as Assets from "../../assets";
import styles from "./styles";
const Header = ({
    step,
    onBackHandler,
    colors = ["#00234740", "#002347BA", "#002347"],
}) => {
    const route = useRoute();
    return (
        <View style={styles.root}>
            <Image
                source={Assets.HeaderImage}
                // blurRadius={1.5}
                resizeMode="cover"
                style={styles.img}
            />

            {route.name === "Signup" && step !== Number(1) && (
                <TouchableOpacity
                    onPress={onBackHandler}
                    style={styles.backButtonContainer}
                >
                    <Image source={Assets.Back} />
                </TouchableOpacity>
            )}

            <LinearGradient colors={colors} style={styles.linearGradient} />

            <View style={styles.titleRoot}>
                <Text style={styles.title}>VolunteerDocs</Text>
            </View>
        </View>
    );
};

export default Header;
