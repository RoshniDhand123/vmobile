import React, { useState } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    Dimensions,
    SafeAreaView,
    StatusBar,
} from "react-native";
import {
    CustomButton,
    FooterSocialMedia,
    FormContainer,
    Header,
    Loader,
} from "app/elements";
import { fields } from "./fields";
import CheckBox from "@react-native-community/checkbox";
import styles from "./styles";
import { signinAPI } from "app/services/api-services/account";
import { saveToken } from "app/services/local-store/token";
// import { loader } from "app/services/utils";

const Signin = ({ navigation }) => {
    const [toggleCheckBox, setToggleCheckBox] = useState(false);
    const [showLoader, setShowLoader] = useState(false);

    const submitHandler = async (payload, { resetForm }) => {
        console.log("submiteed");
        setShowLoader(true);
        // loader.show();

        console.log("payload", payload);
        const resp = await signinAPI(payload);
        if (resp && resp.status) {
            await saveToken(resp.tokens);
            setShowLoader(false);
            // loader.hide();

            resetForm();
            checkOut("Home");
        } else alert(resp.error || resp.msg?.msg[0] || "something went wrong.");
        setShowLoader(false);
        // loader.hide();
    };
    const checkOut = (screen) => {
        if (navigation && navigation.navigate && screen === "Home") {
            navigation.replace(screen);
        }
        if (navigation && navigation.navigate) {
            navigation.navigate(screen);
        }
    };
    return (
        <SafeAreaView>
            <StatusBar
                animated={true}
                backgroundColor="#002347"
                // barStyle={statusBarStyle}
                // showHideTransition={statusBarTransition}
                // hidden={hidden}
            />
            <ScrollView>
                {showLoader && <Loader />}
                <View style={styles.root}>
                    <Header />
                    <View style={styles.signupRoot}>
                        <View style={styles.titleRoot}>
                            <Text style={styles.title}>LOG IN</Text>
                        </View>
                        <FormContainer
                            fields={fields}
                            initialValues={{ contact: "", password: "" }}
                            onSubmit={submitHandler}
                            customSubmit={(handleSubmit) => (
                                <View>
                                    <View style={styles.checkBoxRoot}>
                                        <View style={styles.checkBoxContainer}>
                                            {/* <CheckBox
                                                style={styles.checkBox}
                                                value={toggleCheckBox}
                                                onValueChange={(newValue) =>
                                                    setToggleCheckBox(newValue)
                                                }
                                            />
                                            <Text style={{ color: "gray" }}>
                                                Remember me
                                            </Text> */}
                                        </View>
                                        <TouchableOpacity
                                            onPress={checkOut.bind(
                                                {},
                                                "ForgotPassword"
                                            )}
                                        >
                                            <Text style={{ color: "gray" }}>
                                                Forgot Password?
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={styles.btnContainer}>
                                        <CustomButton
                                            onPress={handleSubmit}
                                            label="Sign In"
                                        />
                                    </View>
                                </View>
                            )}
                        />
                        <FooterSocialMedia />
                        <View style={styles.txtRoot}>
                            <Text style={{ color: "gray" }}>
                                You don't have an account?
                            </Text>
                            <TouchableOpacity
                                onPress={checkOut.bind({}, "Signup")}
                            >
                                <Text style={{ color: "#fff" }}> SIGN UP</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Signin;
