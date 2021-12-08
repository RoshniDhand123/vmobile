import React from "react";
import {
    View,
    Text,
    ScrollView,
    Image,
    TouchableWithoutFeedback,
} from "react-native";
import { Header } from "app/elements";
import styles from "./styles";
import { Checked } from "app/assets";
import { StackActions, NavigationActions } from "react-navigation";

const Success = ({ navigation, route }) => {
    const checkOut = (screen) => {
        console.log("screen", screen);
        if (navigation && navigation.navigate) navigation.replace(screen);
    };
    const { msg, img, heading, back } = route?.params || {};

    return (
        <ScrollView>
            <TouchableWithoutFeedback
                onPress={checkOut.bind({}, back || "Signin")}
            >
                <View style={styles.root}>
                    <Header />
                    <View style={styles.imgRoot}>
                        <Image
                            source={img || Checked}
                            style={styles.img}
                            resizeMode="contain"
                        />
                        <View>
                            <Text style={styles.congo}>
                                {heading || "Congratulations!"}
                            </Text>
                            <Text style={styles.txt}>
                                {msg || "You have successfully signed up"}
                            </Text>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </ScrollView>
    );
};

export default Success;
