import React, { useState } from "react";
import { ScrollView, View, Text } from "react-native";
import { FormContainer } from "app/elements";
import { fields } from "./fields";
import { Header, CustomButton, Loader } from "app/elements";
import styles from "./styles";
import { resetPasswordAPI } from "app/services/api-services/account";
import { loader } from "app/services/utils";

const ResetPassword = ({ navigation, route }) => {
    const [showLoader, setShowLoader] = useState(false);

    const submitHandler = async (payload) => {
        const { otp, contact } = route?.params || {};
        console.log(otp, contact);
        console.log(payload);
        if (!contact) checkOut("ForgotPassword");
        if (!otp) checkOut("Verify");
        setShowLoader(true);
        // loader.show();
        const resp = await resetPasswordAPI({ contact, ...payload });
        console.log("resp", resp);
        if (resp && resp.status) {
            setShowLoader(false);

            // loader.hide();
            alert(resp.msg || "Changed.");
            checkOut("Signin");
        } else {
            alert(resp.error || resp.msg?.msg[0] || "something went wrong.");
        }
        setShowLoader(false);

        // loader.hide();
    };
    const checkOut = (screen, obj = {}) => {
        if (navigation && navigation.navigate) navigation.navigate(screen, obj);
    };
    return (
        <ScrollView>
            {showLoader && <Loader />}
            <View style={styles.root}>
                <Header />
                <View style={styles.signupRoot}>
                    <View style={styles.titleRoot}>
                        <Text style={styles.title}>reset password</Text>
                    </View>
                    <FormContainer
                        fields={fields}
                        initialValues={{}}
                        onSubmit={submitHandler}
                        customSubmit={(handleSubmit) => (
                            <View style={styles.btnContainer}>
                                <CustomButton
                                    onPress={handleSubmit}
                                    label={"RESET"}
                                />
                            </View>
                        )}
                    />
                </View>
            </View>
        </ScrollView>
    );
};

export default ResetPassword;
