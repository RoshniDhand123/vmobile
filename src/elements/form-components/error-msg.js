import React from "react";
import styles from "./style";
import { Text, View } from "react-native";

const ErrorMsg = ({ error, value, name, create_err_msg }) => {
    return (
        <View>
            <Text style={[styles.error]}>
                {create_err_msg ? create_err_msg(value) : error}
            </Text>
            {create_err_msg &&
                !create_err_msg(value) &&
                name === "cpassword" && (
                    <Text style={[styles.error]}>{error}</Text>
                )}
        </View>
    );
};

export default ErrorMsg;
