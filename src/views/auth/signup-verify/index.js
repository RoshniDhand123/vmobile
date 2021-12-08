import React, { useState } from "react";
import { ScrollView, View, Text, TouchableOpacity } from "react-native";
import { Header, Loader } from "app/elements";
import styles from "./styles";
import OTPInput from "./otp-input";
import {
    verifySignupContactOTPAPI,
    forgotPasswordAPI,
    sendOtpAPI,
} from "app/services/api-services/account";
import { loader } from "app/services/utils";

const SignupVerify = ({ navigation, route }) => {
    const [showLoader, setShowLoader] = useState(false);

    const checkOut = (screen, obj = {}) => {
        if (navigation && navigation.navigate) navigation.navigate(screen, obj);
    };
    const reSendOTP = async () => {
        setShowLoader(true);
        // loader.show();
        const { contact } = route?.params || {};
        if (!contact) checkOut("Signup");
        else {
            const resp = await sendOtpAPI({ contact });
            console.log("resp", resp);
            if (resp && resp.status) {
                alert(resp.msg || "sent");
            } else {
                alert(
                    resp.error || resp.msg?.msg[0] || "something went wrong."
                );
            }
        }
        setShowLoader(false);
        // loader.hide();
    };
    console.log("para", route.params);

    const onVerify = async (otp) => {
        console.log("param", route?.params);
        const { contact } = route?.params || {};
        // console.log("DATA", { otp, email });

        if (!contact) checkOut("Signup");
        else {
            setShowLoader(true);
            const resp = await verifySignupContactOTPAPI({
                otp,
                contact,
            });
            console.log("resp", resp);
            if (resp && resp.status) {
                setShowLoader(false);
                checkOut("Success");
            } else {
                setShowLoader(false);
                alert(
                    resp.error || resp.msg?.msg[0] || "something went wrong."
                );
                // checkOut("ResetPassword", { otp, email });
            }
        }
    };

    return (
        <ScrollView>
            {showLoader && <Loader />}
            <View style={styles.root}>
                <Header />
                <View style={styles.signupRoot}>
                    <View style={styles.titleRoot}>
                        <Text style={styles.title}>Verify</Text>
                    </View>
                    <OTPInput onVerify={onVerify} />
                    <View style={styles.txtRoot}>
                        <Text style={{ color: "grey" }}>
                            Did not received the code?
                        </Text>
                        <TouchableOpacity onPress={reSendOTP}>
                            <Text style={{ color: "#fff" }}> Resend</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

export default SignupVerify;
