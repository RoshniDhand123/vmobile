import { Email, Eye } from "app/assets";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";

import ErrorMsg from "../error-msg";
import styles from "./style";

export default ({
    placeholder,
    form: { errors, handleBlur, handleChange, touched },
    field,
    type,
    iconImg,
    iconName,
    label,
    editable = true,
    ...rest
}) => {
    const [showPassword, setShowPassword] = useState(type === "password");
    const togglePassword = () => {
        setShowPassword(!showPassword);
    };
    console.log("touch", touched);
    // console.log("rest", rest);
    // console.log("errors", errors);
    return (
        <>
            {label && (
                <View style={{ marginBottom: -5 }}>
                    <Text style={styles.label}>{label}</Text>
                </View>
            )}
            <View style={styles.root}>
                <TextInput
                    secureTextEntry={showPassword}
                    placeholder={placeholder}
                    placeholderTextColor="grey"
                    value={field.value}
                    onChangeText={handleChange(field.name)}
                    onBlur={handleBlur(field.name)}
                    style={
                        !editable
                            ? { ...styles.input, color: "gray" }
                            : { ...styles.input }
                    }
                    editable={editable}
                />
                {!(type === "password") && iconImg ? (
                    <View style={styles.iconRoot}>
                        <Image
                            source={iconImg}
                            resizeMode="contain"
                            style={styles.icon}
                        />
                    </View>
                ) : null}
                {type === "password" ? (
                    <TouchableOpacity
                        onPress={togglePassword}
                        style={styles.iconRoot}
                    >
                        <Image
                            source={Eye}
                            resizeMode="contain"
                            style={styles.icon}
                        />
                    </TouchableOpacity>
                ) : null}
            </View>
            {errors && errors[field.name] && touched && touched[field.name] && (
                <ErrorMsg
                    error={errors[field.name]}
                    value={field.value}
                    name={field.name}
                    create_err_msg={rest.create_err_msg}
                />
            )}
        </>
    );
};
