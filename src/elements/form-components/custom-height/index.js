import React, { useEffect, useState } from "react";
import { View, TextInput, Text } from "react-native";

import styles from "./styles";

const CustomHeight = ({ icon, placeholder, form, field, label, ...rest }) => {
    const [values, setValues] = useState({});
    console.log("field", field);

    useEffect(() => {
        if (field && field.value) {
            setValues(field.value);
        }
    });
    // useEffect(() => {
    //     if (field.value && typeof field.value === "string") {
    //         const vls = field.value.split(" ");
    //         const data = {};
    //         placeholder.split(" | ").forEach((item, index) => {
    //             data[item] = vls[index] || "";
    //         });
    //         form.setFieldValue(field.name, data);
    //         setValues(data);
    //     } else if (!field.value) {
    //         // setValues({
    //         //     "First name": "",
    //         //     "Last name": "",
    //         //     "Middle name": "",
    //         // });
    //     }
    // }, [field.value]);
    const handleChange = (value, name) => {
        let heightObj = {
            ...values,
        };
        heightObj[name] = value;
        setValues(heightObj);

        form.setFieldValue(field.name, heightObj);
    };
    console.log("values", values);

    return (
        <>
            <View style={{ marginBottom: -5 }}>
                <Text style={styles.label}>{label}</Text>
            </View>
            <View style={styles.textinputContainer}>
                {placeholder.split(" | ").map((item, index) => (
                    <TextInput
                        key={index}
                        value={values[item]}
                        placeholder={item}
                        // value={field.value ? field.value[item] : ""}
                        placeholderTextColor="gray"
                        onChangeText={(value) => handleChange(value, item)}
                        style={
                            index === 0
                                ? { ...styles.input, ...styles.borderRight }
                                : { ...styles.input, ...styles.borderLeft }
                        }
                    />
                ))}
            </View>
        </>
    );
};

export default CustomHeight;
