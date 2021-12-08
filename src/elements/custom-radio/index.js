import React, { useState } from "react";
import { View } from "react-native";

import RadioForm, {
    RadioButton,
    RadioButtonInput,
    RadioButtonLabel,
} from "react-native-simple-radio-button";
import styles from "./styles";

import { CustomInput } from "..";

const CustomRadio = (props) => {
    const [selectedRadio, setSelectedradio] = useState();
    const [selectedLabel, setSelectedLabel] = useState("No");

    console.log("consult radio props", props);
    console.log("consulut radio option prop", props.option);
    const { option, input } = props;
    let radio_props = option;

    const onPress = (value, label) => {
        setSelectedradio(value);
        setSelectedLabel(label);
    };

    return (
        <>
            <View style={styles.radioContainer}>
                <RadioForm formHorizontal={false} animation={true}>
                    {radio_props.map((obj, i) => (
                        <RadioButton
                            labelHorizontal={true}
                            key={i}
                            style={{ marginBottom: 15 }}
                        >
                            <RadioButtonInput
                                obj={obj}
                                index={i}
                                isSelected={selectedRadio === obj.value}
                                // isSelected={true}
                                onPress={(value) => onPress(value, obj.label)}
                                borderWidth={1}
                                buttonInnerColor={"#0052A2"}
                                buttonOuterColor={"#0052A2"}
                                buttonSize={30}
                                buttonOuterSize={45}
                                buttonStyle={{}}
                                buttonWrapStyle={{
                                    marginLeft: 10,
                                }}
                            />
                            <RadioButtonLabel
                                obj={obj}
                                index={i}
                                labelHorizontal={true}
                                onPress={onPress}
                                labelStyle={{ fontSize: 20, color: "#fff" }}
                                labelWrapStyle={{ marginLeft: 10 }}
                            />
                        </RadioButton>
                    ))}
                </RadioForm>
            </View>
            {input && selectedLabel !== "No" && (
                <CustomInput {...props} placeholder="Enter Here..." />
            )}
        </>
    );
};

export default CustomRadio;
