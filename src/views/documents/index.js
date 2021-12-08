import React, { useState, useEffect } from "react";
import { ScrollView, View, Text, TouchableOpacity, Image } from "react-native";
import styles, { headerStyle, profileStyle } from "./styles";
import {
    Logout,
    Doctors,
    Notification,
    MyConsults,
    NewConsult,
    AboutMe,
    AboutUs,
    Invite,
    Feedback,
} from "app/assets";
import { Loader } from "app/elements";
import Card from "./card";
import { deleteToken } from "app/services/local-store/token";
import { getGreeting } from "./utils";
import { profileAPI } from "../../services/api-services/account";
import { loader } from "app/services/utils";

const Documents = ({ navigation }) => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        loadProfile();
    }, []);
    const checkOut = (screen) => {
        if (navigation && navigation.navigate) navigation.navigate(screen);
    };
    const logout = async () => {
        await deleteToken();
        checkOut("Signin");
    };

    return (
        <ScrollView>
            <View style={styles.root}>
                <Header logout={logout} />
            </View>
            <View></View>
        </ScrollView>
    );
};

export default Documents;

const Header = ({ logout }) => {
    const styles = headerStyle;
    return (
        <View style={styles.root}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Documents</Text>
            </View>
            <View style={styles.iconContainer}>
                <TouchableOpacity onPress={logout} style={styles.iconBox}>
                    <Image
                        style={styles.icon}
                        resizeMode="contain"
                        source={Logout}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
};
