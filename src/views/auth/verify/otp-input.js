import React, { useRef } from "react";
import { View } from "react-native";
import OTPTextInput from "react-native-otp-textinput";
import styles from "./styles";
import { CustomButton } from "app/elements";

const OTPInput = ({ onVerify }) => {
    const otpInput = useRef(null);

    const validateOTP = () => {
        if (otpInput && otpInput.current) {
            const otp = otpInput.current.state.otpText.join("");
            console.log("otp", otp);
            if (otp && otp.length === 5 && !otp.includes("*")) onVerify(otp);
            if (!otp) alert("Please fill OTP.");
            if (otp && otp.length < 5) alert("Please fill OTP.");
        }
    };

    return (
        <>
            <View>
                <OTPTextInput
                    // defaultValue={"*****"}
                    ref={otpInput}
                    inputCount={5}
                    containerStyle={styles.containerStyle}
                    textInputStyle={styles.otpContainer}
                    inputCellLength={1}
                    tintColor={"#023668"}
                    offTintColor={"#023668"}
                />
            </View>
            <View style={styles.btnContainer}>
                <CustomButton onPress={validateOTP} label="SUBMIT" />
            </View>
        </>
    );
};
export default OTPInput;
