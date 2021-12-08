import React from "react";
import { View, ScrollView, Image, SafeAreaView, StatusBar } from "react-native";
import { Header } from "app/elements";

import * as Assets from "app/assets";
import Card from "./card";
import styles from "./styles";

const ChooseRole = ({ navigation }) => {
    const checkOut = (screen) => {
        if (navigation && navigation.navigate) navigation.navigate(screen);
    };
    return (
        <SafeAreaView>
            <ScrollView>
                <StatusBar
                    animated={true}
                    backgroundColor="#002347"
                    // barStyle={statusBarStyle}
                    // showHideTransition={statusBarTransition}
                    // hidden={hidden}
                />
                <View style={styles.root}>
                    <Header />
                    <View style={styles.container}>
                        <Card
                            title="Physician"
                            imageUrl={Assets.Physician}
                            onPress={() => checkOut("Signin")}
                        />
                        <Card
                            title="Patient"
                            imageUrl={Assets.Patient}
                            onPress={() => checkOut("Signin")}
                        />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default ChooseRole;
