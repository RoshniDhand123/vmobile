import React, { useState } from "react";
import { ScrollView, View, Text } from "react-native";
import { FormContainer } from "app/elements";
import { fields } from "./fields";
import { Header, CustomButton, Loader } from "app/elements";
import styles from "./styles";
import { forgotPasswordAPI } from "app/services/api-services/account";
// import { loader } from "app/services/utils";

const ForgotPassword = ({ navigation }) => {
    const [showLoader, setShowLoader] = useState(false);

    const submitHandler = async (payload, { resetForm }) => {
        setShowLoader(true);

        // loader.show();
        console.log("payload", payload);
        const resp = await forgotPasswordAPI(payload);
        console.log("resp", resp);
        if (resp && resp.status) {
            setShowLoader(false);

            // loader.hide();
            checkOut("Verify", payload);
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
                        <Text style={styles.title}>FORGOT PASSWORD</Text>
                    </View>
                    <FormContainer
                        fields={fields}
                        initialValues={{ contact: "" }}
                        onSubmit={submitHandler}
                        customSubmit={(handleSubmit) => (
                            <View style={styles.btnContainer}>
                                <CustomButton
                                    onPress={handleSubmit}
                                    label={"NEXT"}
                                />
                            </View>
                        )}
                    />
                    <View style={styles.txtRoot}>
                        <Text style={{ color: "grey" }}>Need more help?</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

export default ForgotPassword;
