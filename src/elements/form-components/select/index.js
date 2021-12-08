import React, { useState } from "react";
import { TextInput, View, Text, Image } from "react-native";
import styles from "./style";
import { Picker } from "@react-native-picker/picker";
import ErrorMsg from "../error-msg";

export default ({
    icon,
    placeholder,
    form: { touched, errors, handleChange, values, setFieldValue, handleBlur },
    field,
    type = "text",
    iconName,
    options = [],
    iconImg,
    style = { width: "100%" },
    ...rest
}) => {
    return (
        <>
            <View style={styles.root}>
                <View style={styles.input}>
                    <Picker
                        dropdownIconColor="white"
                        style={styles.select}
                        selectedValue={field.value || 0}
                        onValueChange={handleChange(field.name)}
                        numberOfLines={1}
                    >
                        {options.map((item) => (
                            <Picker.Item
                                color="black"
                                label={item.label}
                                value={item.value}
                                key={item.label}
                            />
                        ))}
                    </Picker>
                </View>
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
