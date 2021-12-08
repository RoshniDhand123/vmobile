import React, { useEffect, useState } from "react";
import { View, ScrollView, BackHandler } from "react-native";

import styles from "./styles";

import TouchID from "react-native-touch-id";
import { Header, CustomButton } from "app/elements";
import { getToken } from "app/services/local-store/token.js";
import { Loader } from "app/elements";

const FingerPrintLock = ({ navigation }) => {
    const [biometryType, setBiometryType] = useState(null);
    const [showLoader, setShowLoader] = useState(false);

    useEffect(() => {
        checkLogin();
    }, []);

    const checkLogin = async () => {
        setShowLoader(true);
        const token = await getToken();
        console.log("token from backend", token);
        if (token) {
            touchIDSupportHandler();
            setShowLoader(false);
        } else {
            setShowLoader(false);
            checkOut("Role");
        }
    };

    const touchIDSupportHandler = () => {
        TouchID.isSupported()
            .then((biometryType) => {
                setBiometryType(biometryType);
                authenticate();
            })
            .catch((error) => {
                // alert("TouchID not supported");//out from app
                console.log("not support");
                checkOut("Home");
            });
    };

    console.log("bio", biometryType);

    function authenticate() {
        return TouchID.authenticate()
            .then((success) => {
                // console.log("success", success);
                checkOut("Home");
            })
            .catch((error) => {
                console.log("error", error);
                // checkOut("Signin"); //out from app
                // alert(error.message);
                BackHandler.exitApp();
            });
    }

    const checkOut = (screen) => {
        if (navigation && navigation.navigate) navigation.replace(screen);
    };

    return (
        <ScrollView>
            {showLoader && <Loader />}
            {/* <View style={styles.root}>
                <Header />
                <View style={styles.container}>
                    <View style={{}}>
                        <CustomButton
                            label="Authenticate with Touch ID"
                            onPress={clickHandler}
                        />
                    </View>
                </View>
            </View> */}
        </ScrollView>
    );
};

export default FingerPrintLock;
