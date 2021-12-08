import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { Fb, Google, Twitter } from "app/assets";
import styles from "./styles";

import { signIn } from "./google-auth";

const FooterSocialMedia = () => {
    return (
        <View style={styles.root}>
            <TouchableOpacity>
                <Image source={Fb} resizeMode="contain" style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={signIn}>
                <Image
                    source={Google}
                    resizeMode="contain"
                    style={styles.icon}
                />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image
                    source={Twitter}
                    resizeMode="contain"
                    style={styles.icon}
                />
            </TouchableOpacity>
        </View>
    );
};

export default FooterSocialMedia;
