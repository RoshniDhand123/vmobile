import { CustomButton, Header } from "app/elements";
import { FooterSocialMedia, FormContainer, Loader } from "app/elements";
import React, { useEffect, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

import CheckBox from "@react-native-community/checkbox";
import { fields } from "./fields";
import { getInitialValues } from "app/elements/form-components";
// import { getToken } from "app/services/local-store/token";
import { loader } from "app/services/utils";
// import { signupAPI } from "app/services/api-services/patient";
import styles from "./styles";

const parseReqData = ({ name, income, zipcode, ...rest }) => ({
    ...rest,
    first_name: name,
    details: { income, zipcode },
});
const TermsCondition = ({
    sts,
    onToggleCheckBoxHandler,
    toggleCheckBox,
    onPress,
}) => {
    // const [toggleCheckBox, setToggleCheckBox] = useState(false);
    if (sts)
        return (
            <View style={styles.termsRoot}>
                <CheckBox
                    onFillColor="red"
                    style={styles.checkBox}
                    value={toggleCheckBox}
                    onValueChange={onToggleCheckBoxHandler}
                />
                <Text style={styles.termsText}>Do you agree to all</Text>
                <TouchableOpacity onPress={() => onPress("Terms")}>
                    <Text style={styles.termsLink}>TERMS & CONDITIONS</Text>
                </TouchableOpacity>
            </View>
        );
    else return null;
};
const PatientSignup = ({ navigation, route }) => {
    const [step, setStep] = useState(1);
    const [toggleCheckBox, setToggleCheckBox] = useState(false);
    const [showLoader, setShowLoader] = useState(false);
    const [values, setValues] = useState({});

    useEffect(() => {
        const val = getInitialValues(
            [...fields["step1"],...fields["step2"],...fields["step3"]],
            {}
        );
        setValues(val);
    }, []);

    const backHandler = () => {
        setStep((prevStep) => prevStep - 1);
    };

    const toggleChcekBoxHandler = (newValue) => {
        setToggleCheckBox(newValue);
    };

    const handleSignup = async (data, resetForm) => {
        if (toggleCheckBox) {
            setShowLoader(true);

            const { fcmToken } = route?.params || {};
            const dataSubmitedToBackend = { ...data, fcmToken: fcmToken };

            // const resp = await signupAPI(dataSubmitedToBackend);
            if (resp && resp.status) {
                setShowLoader(false);
                // loader.hide();

                resetForm();
                setStep(1);

                setToggleCheckBox(false);
                checkOut("SignupVerify", {
                    contact: data.contact,
                    tokens: resp.tokens,
                    role: "Patient",
                });
                // checkOut("Success");
            } else {
                setShowLoader(false);
                // loader.hide();
                setToggleCheckBox(false);

                alert(resp.error || "something went wrong.");
                setStep(1);
            }
        } else {
            console.log("else");
            alert("Please accept Terms & Conditions");
        }
    };

    const submitHandler = (payload, { resetForm }) => {
        if (step !== 3) {
            setStep(step + 1);
            setValues(...fields[step])
        } else {
            handleSignup(parseReqData(payload), resetForm);
        }
    };

    const checkOut = (screen, obj = {}) => {
        if (
            (navigation && navigation.navigate && screen === "PatientSignin") ||
            screen === "Terms"
        )
            navigation.navigate(screen, obj);
        if (navigation && navigation.navigate) navigation.replace(screen, obj);
    };
    return (
        <ScrollView>
            {showLoader && <Loader />}
            <View style={styles.root}>
                <Header step={step} onBackHandler={backHandler} />
                <View style={styles.signupRoot}>
                    <View style={styles.titleRoot}>
                        <Text style={styles.title}>SIGN UP</Text>
                    </View>
                    <FormContainer
                        fields={fields[`step${step}`] || []}
                        initialValues={values}
                        step={true}
                        onSubmit={submitHandler}
                        customSubmit={(handleSubmit) => (
                            <View style={styles.btnContainer}>
                                <TermsCondition
                                    sts={step === 3}
                                    onToggleCheckBoxHandler={
                                        toggleChcekBoxHandler
                                    }
                                    toggleCheckBox={toggleCheckBox}
                                    onPress={checkOut}
                                />
                                <CustomButton
                                    onPress={handleSubmit}
                                    label={step === 3 ? "SIGN UP" : "NEXT"}
                                />
                            </View>
                        )}
                    />

                    <FooterSocialMedia />
                    <View style={styles.txtRoot}>
                        <Text style={{ color: "gray" }}>
                            You have an account?
                        </Text>
                        <TouchableOpacity
                            onPress={checkOut.bind({}, "PatientSignin")}
                        >
                            <Text style={{ color: "#fff" }}> SIGN IN</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

export default PatientSignup;