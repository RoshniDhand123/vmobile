import React from "react";
import {
    Platform,
    DatePickerAndroid,
    DatePickerIOS,
    View,
    Text,
    TouchableOpacity,
    Image,
} from "react-native";
import styles from "./style";
import moment from "moment";
import ErrorMsg from "../error-msg";

const convertIOSExtra = ({ minDate, maxDate }) => {
    let obj = {};
    if (minDate) obj["minimumDate"] = minDate;
    if (maxDate) obj["maximumDate"] = maxDate;
    return obj;
};
const IOS = Platform.OS === "ios";
export default ({
    icon,
    placeholder,
    form: { touched, errors, values, setFieldValue, handleBlur },
    field,
    type = "text",
    iconName,
    iconImg,
    extra = {},
    ...rest
}) => {
    const handleOpen = async () => {
        try {
            if (IOS) {
                console.log("IOS");
            } else {
                const { action, year, month, day } =
                    await DatePickerAndroid.open({
                        date: field.value ? new Date(field.value) : new Date(),
                        ...extra,
                    });

                if (action !== DatePickerAndroid.dismissedAction) {
                    const m = `${month + 1}`;
                    setFieldValue(
                        field.name,
                        `${year}-${m.length === 1 ? `0${m}` : m}-${
                            day.toString().length === 1 ? `0${day}` : day
                        }`
                    );
                }
            }
        } catch ({ code, message }) {
            console.warn("Cannot open date picker", message);
        }
    };
    const setChosenDate = (date) => {
        setFieldValue(field.name, moment(date).format("YYYY-MM-DD"));
    };

    return (
        <>
            <View key={field.name} style={styles.root}>
                {IOS ? (
                    <View style={styles.input}>
                        <DatePickerIOS
                            date={
                                field.value ? new Date(field.value) : new Date()
                            }
                            onDateChange={setChosenDate}
                            {...convertIOSExtra(extra)}
                        />
                    </View>
                ) : (
                    <TouchableOpacity
                        style={{ width: "100%" }}
                        onPress={handleOpen}
                    >
                        <View style={styles.input}>
                            <Text
                                numberOfLines={1}
                                style={[
                                    styles.date,
                                    { color: field.value ? "white" : "grey" },
                                ]}
                            >
                                {field.value || placeholder}
                            </Text>
                        </View>
                    </TouchableOpacity>
                )}
                {iconImg ? (
                    <View style={styles.iconRoot}>
                        <Image
                            source={iconImg}
                            resizeMode="contain"
                            style={styles.icon}
                        />
                    </View>
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
