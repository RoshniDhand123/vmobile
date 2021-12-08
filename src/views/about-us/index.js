import React from "react";

import {
    View,
    Text,
    SafeAreaView,
    ScrollView,
    Image,
    Linking,
    TouchableOpacity,
} from "react-native";
import { CustomNavigationHeaderBar, CustomButton } from "app/elements";

import * as Assets from "app/assets";

import styles from "./styles";

const AboutUs = ({ navigation }) => {
    const VOLUNTEER_WEB_LINK = "https://www.volunteerdocs.org";

    const DONATE_LINK =
        "https://www.paypal.com/donate/?cmd=_s-xclick&hosted_button_id=CRADT3NYZ48B4&source=url";

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.root}>
                    {/* <Header logout={logout} /> */}
                    <CustomNavigationHeaderBar
                        navigation={navigation}
                        title="About Us"
                        showBack={true}
                    />
                    <View style={styles.container}>
                        <View style={styles.textContainer}>
                            <Text style={styles.title}>
                                PHYSICIANS VOLUNTEERING SERVICES
                            </Text>
                            <Text style={styles.txt}>
                                A service that provides physicians around the
                                world to volunteer their time to consult, advise
                                and guide patients and even other physicians
                                around them or around the world about complex
                                medical conditions.
                            </Text>
                            <Text style={styles.txt}>
                                A SECOND OPINION SERVICE FOR ALL, VOLUNTEERED BY
                                PHYSICIANS.
                            </Text>
                            <Text style={styles.txt}>
                                A NON PROFIT 501(c)(3) ORGANIZATION.
                            </Text>
                            <TouchableOpacity
                                onPress={() => {
                                    Linking.openURL(VOLUNTEER_WEB_LINK);
                                }}
                            >
                                <Text style={styles.link}>
                                    www.volunteerdocs.org
                                </Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.buttonContainer}>
                            <TouchableOpacity>
                                <Image source={Assets.Ios} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image source={Assets.Android} />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <CustomButton
                                onPress={() => {
                                    Linking.openURL(DONATE_LINK);
                                }}
                                label="DONATE HERE"
                            />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default AboutUs;
